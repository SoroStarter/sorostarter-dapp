import { useEffect, useState } from "react";
import PaymentTokenSelector from "../../components/PaymentTokenSelector";
import {
  anyInvoke,
  server,
  xlmToStroop,
  FUTURENET_DETAILS,
  getTxBuilder,
  submitTx,
  getAnyCall,
  accountToScVal,
  stroopToXlm,
} from "../../config/soroban";
import { signTransaction } from "@stellar/freighter-api";
import {
  getCurrentUnixTimestamp,
  getTimeDifferenceBetweenTimestamps,
} from "../../utils/helper_methods";

import { ScInt, Soroban, StrKey, nativeToScVal } from "@stellar/stellar-sdk";

export default function SalesCard({ userKey }) {
  const selectedNetwork = FUTURENET_DETAILS;

  const [connecting, setConnecting] = useState(false);
  const [salesParameters, setSalesParameters] = useState({});
  const [paymentInfo, setPaymentInfo] = useState([
    {
      id: "CB64D3G7SM2RTH6JSGG34DDTFTQ5CFDKVDZJZSODMCX4NJ2HV2KN7OHT",
      symbol: "XLM",
      rate: null,
    },
    {
      id: "CCMJ4KRNRUUO3SA36RPVXLSP364CSTTFUHLM5U767UCXTAQIE4SBYAA5",
      symbol: "USDT",
      rate: null,
    },
  ]);

  const [paymentBal, setPaymentBal] = useState(0);
  // const [percentSold, setPercentSold] = useState(null);
  const [spendAmount, setSpendAmount] = useState("");

  const [selectedPayment, setSelectedPayment] = useState(paymentInfo[0]);
  const [totalSold, setTotalSold] = useState();

  const contractId = "CA3ZAXBHZ3VSPVO57OK3FN2TV7LPN3GCNW675GSMA622OFITX3NDKVVC";

  useEffect(() => {
    async function getSalesRates(paymentId) {
      if (!userKey || !contractId) return;
      const args = ["get_sale_rate", accountToScVal(paymentId)];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(contractId, txBuiderAnyCall, server, args);

      const newRate = Number(res);

      setPaymentInfo((prevPaymentInfo) =>
        prevPaymentInfo.map((paymentToken) =>
          paymentToken.id === paymentId
            ? { ...paymentToken, rate: Number(newRate) }
            : paymentToken
        )
      );

      if (paymentId === selectedPayment.id) {
        setSelectedPayment((cur) => ({ ...cur, rate: Number(newRate) }));
      }
    }

    for (let token of paymentInfo) {
      getSalesRates(token.id);
    }
  }, [userKey, connecting]);

  function handleSelectPayment(sym) {
    const paymentSelected = paymentInfo.find(
      (payment) => payment.symbol === sym
    );

    setSelectedPayment(paymentSelected);
  }

  console.log("the selected payment is", selectedPayment);
  console.log("all payment info", paymentInfo);

  useEffect(() => {
    async function fetchBal() {
      if (!userKey || !contractId || !selectedPayment) return;
      const args = ["balance", accountToScVal(userKey)];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(
        selectedPayment.id,
        txBuiderAnyCall,
        server,
        args
      );

      const balance = stroopToXlm(res).c[0];

      setPaymentBal(() => balance);

      // console.log("wallet balance is", balance);
    }

    fetchBal();
  }, [selectedPayment, userKey]);

  useEffect(() => {
    try {
      async function getSalesParameters() {
        if (!userKey || !contractId) return;
        const args = ["get_sales_parameters"];

        const txBuiderAnyCall = await getTxBuilder(
          userKey,
          xlmToStroop(10).toString(),
          server,
          selectedNetwork.networkPassphrase
        );
        const res = await getAnyCall(
          contractId,

          txBuiderAnyCall,
          server,
          args
        );

        let status;
        const currentTime = getCurrentUnixTimestamp();

        if (currentTime < res.start_time) {
          status = "upcoming";
        } else if (currentTime > res.start_time && currentTime < res.end_time) {
          status = "ongoing";
        } else if (currentTime > res.end_time) {
          status = "ended";
        }

        // console.log("type of current time", res.end_time);

        const startsIn =
          status === "upcoming"
            ? getTimeDifferenceBetweenTimestamps(currentTime, res.start_time)
            : null;

        const endsIn =
          status === "ongoing"
            ? getTimeDifferenceBetweenTimestamps(currentTime, res.end_time)
            : null;

        const tgeActive = currentTime > res.tge_time;

        const salesInfo = {
          status: status,
          startsIn: startsIn,
          endsIn: endsIn,
          softCap: stroopToXlm(res.soft_cap).c[0],
          hardCap: stroopToXlm(res.hard_cap).c[0],
          minBuy: stroopToXlm(res.min_buy).c[0],
          maxBuy: stroopToXlm(res.max_buy).c[0],
          tgeActive: tgeActive,
          salesTokenId: "",
          salesTokenSymbol: "",
        };
        setSalesParameters(() => ({ ...salesInfo }));
        // console.log(salesInfo);
      }

      async function getSalesToken() {
        if (!userKey || !contractId) return;
        const args = ["get_sale_token"];
        const txBuiderAnyCall = await getTxBuilder(
          userKey,
          xlmToStroop(10).toString(),
          server,
          selectedNetwork.networkPassphrase
        );
        const res = await getAnyCall(
          contractId,

          txBuiderAnyCall,
          server,
          args
        );

        const argsSym = ["symbol"];
        const txBuiderAnyCallSym = await getTxBuilder(
          userKey,
          xlmToStroop(10).toString(),
          server,
          selectedNetwork.networkPassphrase
        );
        const resSym = await getAnyCall(
          res,

          txBuiderAnyCallSym,
          server,
          argsSym
        );

        setSalesParameters((cur) => ({
          ...cur,
          salesTokenId: res,
          salesTokenSymbol: resSym,
        }));
      }

      async function getTotalSold() {
        if (!userKey || !contractId) return;
        const args = ["get_total_sold"];
        const txBuiderAnyCall = await getTxBuilder(
          userKey,
          xlmToStroop(10).toString(),
          server,
          selectedNetwork.networkPassphrase
        );
        const res = await getAnyCall(
          contractId,

          txBuiderAnyCall,
          server,
          args
        );

        setTotalSold(() => stroopToXlm(res).c[0]);
      }

      getSalesParameters();
      getSalesToken();
      getTotalSold();
    } catch (e) {
      console.log(e.message);
    }
  }, [userKey, connecting, selectedPayment]);

  const percentSoldCal = (totalSold * 100) / salesParameters?.hardCap;

  async function buyTokenHandler() {
    try {
      if (spendAmount === "") {
        return;
      }
      setConnecting(() => true);
      const amount = Soroban.parseTokenAmount(spendAmount, 7);
      const scAmount = new ScInt(amount).toI128();
      const args = [
        "contribute",
        accountToScVal(userKey),
        accountToScVal(selectedPayment.id),
        scAmount,
      ];
      console.log("args", args);
      const txBuiderAnyInvoke = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );

      console.log("transaction created", txBuiderAnyInvoke);
      const xdr = await anyInvoke(
        contractId,
        args,
        "buy tokens",
        txBuiderAnyInvoke,
        server
      );

      console.log("the xxdr is", xdr);

      const signedXdr = await signTransaction(xdr, { network: "FUTURENET" });

      const result = await submitTx(
        signedXdr,
        selectedNetwork.networkPassphrase,
        server
      );
      // console.log("invoke result", result);
    } catch (e) {
      alert(e.message);
    } finally {
      setConnecting(() => false);
    }
  }

  // border-[#EB6B24]
  //  bg-[#1e293b]

  return (
    <div className="w-full px-6 min-w-[350px] md:max-w-sm overflow-hidden bg-slate-200  shadow-md rounded-lg">
      <div className="flex  items-center">
        <div className="pt-2  pr-8 sm:pr-12  ">
          <h3 className="text-start mt-3 text-base font-semibold text-gray-900 pb-2">
            Fundraise Goal
          </h3>
          <p className="text-5xl font-semibold tracking-tight text-cyan-800">
            ${salesParameters?.hardCap}
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm font-medium text-gray-900">Sales Progress</p>
          <p className="text-lg text-cyan-800 font-bold ">${totalSold}</p>
        </div>
        <div className="mt-1 bg-gray-200 h-1.5 rounded-full relative">
          <div
            className={`absolute inset-y-0 left-0 bg-cyan-800 rounded-full z-20 `}
            style={{ width: `${percentSoldCal}%` }}
          ></div>
          <div className="absolute inset-y-0 left-0 bg-indigo-300 rounded-full w-[100%]"></div>
        </div>
        {/* <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-600">
            Min: {salesParameters?.minBuy}
          </p>
          <p className="text-sm font-medium text-gray-600">
            Max:{salesParameters?.maxBuy}
          </p>
        </div> */}
      </div>

      <ul className="mt-6">
        {" "}
        <li className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-wide text-gray-700 uppercase">
            Allocation:
          </p>
          <div className="flex items-end justify-end">
            <div className="relative inline-flex items-center justify-center shrink-0 w-7 h-7"></div>
            <p className="text-base font-bold text-gray-900">
              {salesParameters?.minBuy} - {salesParameters?.maxBuy}{" "}
              {salesParameters?.salesTokenSymbol}
            </p>
          </div>
        </li>
      </ul>
      <div className=" py-6 ">
        {" "}
        <div className="gap-2  ">
          <div className="flex justify-between">
            <p>Select</p>
            <p>
              Bal:{" "}
              <span className="text-cyan-800 font-bold">
                {paymentBal} {selectedPayment?.symbol}
              </span>
            </p>
          </div>

          <div className=" py-2 space-y-2 border ">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <PaymentTokenSelector
                  handleSelectPayment={handleSelectPayment}
                />
                <div className="flex flex-col">
                  <input
                    onChange={(e) => setSpendAmount(e.target.value)}
                    className="bg-gray-200 w-full px-2  "
                    style={{
                      // outline: "none",
                      background: "#e2e8f0",
                      paddingTop: "2px",
                      paddingBottom: "2px",
                      outlineColor: "#155e75",
                    }}
                    type="text"
                    placeholder="Enter amount"
                  />
                </div>
                <button className="">MAX</button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">You get:</div>
              <div className="text-cyan-800 font-bold">
                {" "}
                {spendAmount === ""
                  ? selectedPayment?.rate
                  : spendAmount * selectedPayment?.rate}{" "}
                {salesParameters?.salesTokenSymbol}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* <hr className="mt-5 border-gray-800" /> */}

          <div className="mt-3 text-center">
            <button
              onClick={buyTokenHandler}
              type="button"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-cyan-800 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
            >
              {connecting ? "Processing..." : "Buy Tokens"}
            </button>

            <p className="mt-4 text-sm font-normal text-gray-500">
              <a
                href="#"
                title=""
                className="rounded hover:underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Go to portfolio to see all your purchases
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
