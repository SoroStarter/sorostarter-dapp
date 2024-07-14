import BigNumber from "bignumber.js";
import {
  signTransaction,
  setAllowed,
  requestAccess,
  getNetwork,
} from "@stellar/freighter-api";

import {
  TransactionBuilder,
  SorobanRpc,
  Contract,
  TimeoutInfinite,
  Address,
  Operation,
  scValToNative,
  Memo,
  nativeToScVal,
  ScInt,
} from "@stellar/stellar-sdk";

export const governanceId =
  "CCZUIFOCD3KUG7TWHTFREY4JRSDEVD2Y744YTG5PS7CLRYTC3VSADCMV";

export const BASE_FEE = "100";
export const FUTURENET_DETAILS = {
  network: "FUTURENET",
  networkUrl: "https://horizon-futurenet.stellar.org",
  networkPassphrase: "Test SDF Future Network ; October 2022",
};

export const RPC_URLS = {
  FUTURENET: "https://rpc-futurenet.stellar.org/",
};

export const accountToScVal = (account) => new Address(account).toScVal();

export const numberToI128 = (value) => nativeToScVal(value);

export const xlmToStroop = (lumens) => {
  // round to nearest stroop
  return new BigNumber(Math.round(Number(lumens) * 1e7));
};

export const stroopToXlm = (stroops) => {
  return new BigNumber(Number(stroops) / 1e7);
};

const getServer = (networkDetails) =>
  new SorobanRpc.Server(RPC_URLS[networkDetails.network], {
    allowHttp: networkDetails.networkUrl.startsWith("http://"),
  });

export const server = getServer(FUTURENET_DETAILS);

export const getTxBuilder = async (pubKey, fee, server, networkPassphrase) => {
  const source = await server.getAccount(pubKey);
  return new TransactionBuilder(source, {
    fee,
    networkPassphrase,
  });
};

export const simulateTx = async (tx, server) => {
  const response = await server.simulateTransaction(tx);

  if (
    SorobanRpc.Api.isSimulationSuccess(response) &&
    response.result !== undefined
  ) {
    return scValToNative(response.result.retval);
  }

  throw new Error("cannot simulate transaction");
};

export const getTokenInfo = async (tokenId, arg, txBuilder, server) => {
  const contract = new Contract(tokenId);
  const contract3 = new Contract(tokenId);
  const tx = txBuilder
    .addOperation(contract.call(arg))
    .setTimeout(TimeoutInfinite)
    .build();

  const result = await simulateTx(tx, server);
  return result;
};

export const getAnyCall = async (tokenId, txBuilder, server, argsArr) => {
  const contract = new Contract(tokenId);

  const tx = txBuilder
    .addOperation(contract.call(...argsArr))
    .setTimeout(TimeoutInfinite);

  const builtRes = tx.build();
  const callRes = await simulateTx(builtRes, server);

  // console.log("call respomse is", callRes);

  return callRes;
};

export const anyInvoke = async (
  contractId,
  args,
  memo,
  txBuilderAny,
  server
) => {
  // try {
  const contract = new Contract(contractId);

  console.log("the contract is", contract);

  const tx = txBuilderAny
    .addOperation(contract.call(...args))
    .setTimeout(TimeoutInfinite);
  console.log("this ran fine");
  if (memo?.length > 0) {
    tx.addMemo(Memo.text(memo));
  }

  const built = tx.build();
  const sim = await server.simulateTransaction(built);
  console.log("transaction built");
  const preparedTransaction = await server.prepareTransaction(built);
  console.log("built transaction", tx);

  return preparedTransaction.toXDR();
  // } catch (e) {
  //   alert(e.message);
  // }
};

export async function loadContract(wasm, txBuilderUpload) {
  try {
    const wasmFile = wasm;

    const uploadTx = txBuilderUpload
      .setTimeout(TimeoutInfinite)
      .addOperation(
        Operation.uploadContractWasm({
          wasm: wasmFile,
        })
      )
      .build();

    const preparedTransaction = await server.prepareTransaction(uploadTx);

    const xdr = preparedTransaction.toXDR();
    return await signTransaction(xdr, { network: "FUTURENET" });
  } catch (e) {
    alert(e.message);
  }
}

export async function createContract(
  senderAddr,
  loadedWasmHash,
  txBuilderCreate
) {
  const createTx = txBuilderCreate
    .setTimeout(TimeoutInfinite)
    .addOperation(
      Operation.createCustomContract({
        address: senderAddr,
        wasmHash: loadedWasmHash,
      })
    )
    .build();
  const preparedTransactionCreate = await server.prepareTransaction(createTx);

  const xdrCreate = preparedTransactionCreate.toXDR();
  const signedTx2 = await signTransaction(xdrCreate, {
    network: "FUTURENET",
  });
  return signedTx2;
}

export const mintTokens = async ({
  tokenId,
  quantity,
  destinationPubKey,
  memo,
  txBuilderAdmin,
  server,
}) => {
  const contract = new Contract(tokenId);

  const tx = txBuilderAdmin
    .addOperation(
      contract.call(
        "mint",
        ...[
          accountToScVal(destinationPubKey), // to
          new ScInt(quantity).toI128(), // quantity
        ]
      )
    )
    .setTimeout(TimeoutInfinite);

  if (memo?.length > 0) {
    tx.addMemo(Memo.text(memo));
  }

  const built = tx.build();
  const sim = await server.simulateTransaction(built);

  const preparedTransaction = await server.prepareTransaction(built);
  // console.log("built transaction", sim);

  return preparedTransaction.toXDR();
};

export const getEstimatedFee = async (
  tokenId,
  quantity,
  destinationPubKey,
  memo,
  txBuilder,
  server
) => {
  const contract = new Contract(tokenId);

  const tx = txBuilder
    .addOperation(
      contract.call(
        "mint",
        ...[
          accountToScVal(destinationPubKey), // to
          numberToI128(quantity), // quantity
        ]
      )
    )
    .setTimeout(TimeoutInfinite);

  if (memo.length > 0) {
    tx.addMemo(Memo.text(memo));
  }

  const raw = tx.build();

  const simResponse = await server.simulateTransaction(raw);

  // console.log("sim response", simResponse);

  if (SorobanRpc.Api.isSimulationError(simResponse)) {
    throw simResponse.error;
  }
};

export const submitTx = async (signedXDR, networkPassphrase, server) => {
  const tx = TransactionBuilder.fromXDR(signedXDR, networkPassphrase);

  const sendResponse = await server.sendTransaction(tx);

  // console.log("transaction result", sendResponse);

  if (sendResponse.status === "PENDING") {
    let txResponse = await server.getTransaction(sendResponse.hash);

    // Poll this until the status is not "NOT_FOUND"
    while (
      txResponse.status === SorobanRpc.Api.GetTransactionStatus.NOT_FOUND
    ) {
      // See if the transaction is complete
      // eslint-disable-next-line no-await-in-loop
      txResponse = await server.getTransaction(sendResponse.hash);
      // Wait a second
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (txResponse.status === SorobanRpc.Api.GetTransactionStatus.SUCCESS) {
      // return txResponse.resultXdr.toXDR("base64");
      // return txResponse.resultMetaXdr._value._attributes.sorobanMeta._attributes
      // return txResponse.resultMetaXdr._value._attributes.sorobanMeta._attributes
      // const contractByte = txResponse;
      // const contractAddress = StrKey.encodeContract(contractByte);
      const restx = await server.getTransaction(sendResponse.hash);

      // const resttt = xdr.TransactionMeta.fromXDR(restx.returnValue._value);
      // const result = StrKey.encodeContract(restx.returnValue._value);

      // return StrKey.encodeContract(restx.returnValue._value);
      return restx;
    }
  }
  throw new Error(
    `Unabled to submit transaction, status: ${sendResponse.status}`
  );
};

export const ConnectWallet = async (setUserKey, setNetwork) => {
  let publicKey = "";
  let error = "";

  try {
    const isAllowed = await setAllowed();
    publicKey = await requestAccess();

    const nt = await getNetwork();

    setUserKey(() => publicKey);
    setNetwork(() => nt);
  } catch (e) {
    error = e;
  }

  if (error) {
    return error;
  }

  return publicKey;
};
