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

export default function Purchases({ userKey, updatePurchases }) {
  const selectedNetwork = FUTURENET_DETAILS;

  const [connecting, setConnecting] = useState(false);
  const [salesParameters, setSalesParameters] = useState({});
  const [totalPurchased, setTotalPurchased] = useState(0);
  const [XLMPurchases, setXLMPurchases] = useState(null);
  const [USDTPurchases, setUSDTPurchases] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState([
    {
      id: "CB64D3G7SM2RTH6JSGG34DDTFTQ5CFDKVDZJZSODMCX4NJ2HV2KN7OHT",
      symbol: "XLM",
      rate: null,
    },
    {
      id: "CAQF5FCKIL36QLC3A2C2SCOE6WPHI2TJW7JXQARJAO6IFTQZZCKTHIPP",
      symbol: "USDT",
      rate: null,
    },
  ]);

  const [paymentBal, setPaymentBal] = useState(0);
  // const [percentSold, setPercentSold] = useState(null);
  const [spendAmount, setSpendAmount] = useState("");

  const [selectedPayment, setSelectedPayment] = useState(paymentInfo[0]);
  const [totalSold, setTotalSold] = useState();

  const contractId = "CDUMYVRP3YHZQTCVZQGEGEKJ33JIOKKX4LZDESGUK34PPYAS2GUGGAHT";

  useEffect(() => {
    async function fetchPurchases() {
      if (!userKey || !contractId) return;
      const args = ["get_participant_total_purchase", accountToScVal(userKey)];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(contractId, txBuiderAnyCall, server, args);

      const totalPurchased = stroopToXlm(res).c[0];

      setTotalPurchased(() => totalPurchased);
    }

    async function fetchXLMPurchases() {
      if (!userKey || !contractId) return;
      const args = [
        "get_payment_purchases",
        accountToScVal(userKey),
        accountToScVal(paymentInfo[0].id),
      ];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(contractId, txBuiderAnyCall, server, args);

      const purchased = stroopToXlm(res).c[0];

      setXLMPurchases(() => purchased);
    }
    async function fetchUSDTPurchases() {
      if (!userKey || !contractId) return;
      const args = [
        "get_payment_purchases",
        accountToScVal(userKey),
        accountToScVal(paymentInfo[1].id),
      ];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(contractId, txBuiderAnyCall, server, args);

      const purchased = stroopToXlm(res).c[0];

      setUSDTPurchases(() => purchased);
    }

    fetchPurchases();
    fetchXLMPurchases();
    fetchUSDTPurchases();
  }, [updatePurchases, userKey]);

  return (
    <div className="overflow-hidden mt-8 bg-[#191A1F] rounded-lg w-full ">
      <div className="px-4 py-5 sm:p-6  ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-start">
            <p className="text-lg font-bold text-gray-200">Total Purchased</p>
            <p className="mt-1 text-sm font-medium text-gray-300">
              Your purchases are as follows:
            </p>
          </div>

          <div className="mt-4 sm:mt-0 flex items-end flex-col">
            <div
              type="button"
              className="inline-flex items-center justify-center   text-sm font-semibold leading-4 text-white transition-all duration-200   rounded-md "
            >
              {totalPurchased}
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center py-3 text-sm  leading-4 text-yellow-500 font-thin transition-all duration-200  rounded-md "
            >
              Claim in: 5 days, 2hrs, 25mins
            </button>
          </div>
        </div>

        <div className="flow-root mt-8 text-gray-200">
          <div className="-my-5 divide-y divide-slate-500">
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Purchases with: XLM</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <p>{XLMPurchases}</p>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Purchases with: USDT</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <p>{USDTPurchases}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
