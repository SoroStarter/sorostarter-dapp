import React, { useState, useEffect } from "react";
import ApplySection from "./ApplySection";
import {
  accountToScVal,
  getTxBuilder,
  xlmToStroop,
  FUTURENET_DETAILS,
  getAnyCall,
  stroopToXlm,
  server,
  anyInvoke,
  submitTx,
  governanceId,
} from "../../config/soroban";
import { Soroban, ScInt } from "@stellar/stellar-sdk";
import { signTransaction } from "@stellar/freighter-api";

export default function StakeDashboard({ userKey }) {
  const xlmId = "CB64D3G7SM2RTH6JSGG34DDTFTQ5CFDKVDZJZSODMCX4NJ2HV2KN7OHT";

  const [stakeSelected, setStakeSelected] = useState(true);
  const [xlmBalance, setXlmBalance] = useState(0);
  const [amountStaked, setAmountStaked] = useState(0);
  const [stakeAmount, setStakeAmount] = useState("");
  const [connecting, setConnecting] = useState(false);

  console.log("user is", userKey);

  const selectedNetwork = FUTURENET_DETAILS;

  useEffect(() => {
    async function fetchBal() {
      if (!userKey) return;
      const args = ["balance", accountToScVal(userKey)];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(xlmId, txBuiderAnyCall, server, args);

      const balance = stroopToXlm(res).c[0];

      setXlmBalance(() => balance);

      // console.log("wallet balance is", balance);
    }

    async function fetchStake() {
      if (!userKey) return;
      const args = ["get_user_stake", accountToScVal(userKey)];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(governanceId, txBuiderAnyCall, server, args);

      const stake = stroopToXlm(res).c[0];

      setAmountStaked(() => stake);

      // console.log("wallet balance is", balance);
    }

    fetchBal();
    fetchStake();
  }, [userKey, connecting]);

  async function stakeUnstakeHandler(action) {
    try {
      if (stakeAmount === "") {
        return;
      }
      setConnecting(() => true);
      const amount = Soroban.parseTokenAmount(stakeAmount, 7);
      const scAmount = new ScInt(amount).toI128();
      const args = [action, accountToScVal(userKey), scAmount];

      const txBuiderAnyInvoke = await getTxBuilder(
        userKey,
        xlmToStroop(10).toString(),
        server,
        selectedNetwork.networkPassphrase
      );

      console.log("transaction created", txBuiderAnyInvoke);
      const xdr = await anyInvoke(
        governanceId,
        args,
        action + " tokens",
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

  return (
    <>
      <div className=" mt-12 px-4  mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <section className="relative ">
          <div className="mt-8 overflow-hidden  border border-slate-500 rounded-xl">
            <div className="px-4 py-5 sm:p-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="items-start flex flex-col">
                  <p className="text-xl font-bold text-gray-100">
                    Stake, Vote and Earn
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-200">
                    Stake XLM, vote on IDO projects and earn rewards. XLM held
                    in your wallet, not staked, will convert into XLM Power
                    after 7 days.
                  </p>
                </div>

                <div className="mt-4 sm:mt-0">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-gray-100 transition-all duration-200  border border-yellow-500  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <div className=" inset-x-0 top-0">
              <div className=" flex flex-col space-y-8 md:flex-row md:space-y-0 justify-between ">
                <div className="space-y-8 p-4 flex flex-col text-gray-100">
                  <div className="items-start flex flex-col ">
                    <p>Required Stake Amount</p>
                    <p className="text-2xl font-bold">1000</p>
                  </div>
                  <div className="items-start flex flex-col">
                    <p>Total XLM Power</p>
                    <p className="text-2xl font-bold">{amountStaked}</p>
                  </div>
                  <div className="items-start flex flex-col">
                    <p>Total XLM Staked</p>
                    <p className="text-2xl font-bold">{amountStaked}</p>
                  </div>
                  {/* <div className="items-center flex   gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-black transition-all duration-200  border border-cyan-800   rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                    >
                    
                      Learn more
                    </button>
                  </div> */}
                </div>
                <div className="w-full md:max-w-sm overflow-hidden bg-[#191A1F]  shadow-md rounded-b-lg">
                  <div className="flex justify-center items-center">
                    <button
                      className={`w-1/2  font-bold py-2 px-4  ${
                        stakeSelected
                          ? "bg-[#191A1F] text-yellow-500"
                          : "bg-[#0a0a0a] text-gray-300"
                      }`}
                      onClick={() => setStakeSelected(true)}
                    >
                      Deposit & Lock
                    </button>
                    <button
                      className={`w-1/2  font-bold py-2 px-4  ${
                        !stakeSelected
                          ? "bg-[#191A1F] text-yellow-500"
                          : "bg-[#0a0a0a] text-gray-300"
                      }`}
                      onClick={() => setStakeSelected(false)}
                    >
                      Withdraw
                    </button>
                  </div>

                  <div className="px-4 py-6 sm:p-6">
                    {" "}
                    {stakeSelected ? (
                      <div className="text-start mb-4 text-gray-100">
                        Stake XLM to participate in project voting and
                        allowlists for upcoming IDOs. Learn more.
                      </div>
                    ) : (
                      <div className="text-start mb-4 text-gray-100">
                        When you withdraw your XLM, you lose voting right and
                        access to all future allowlists.
                      </div>
                    )}
                    <div className="gap-2">
                      <div className="flex justify-between text-gray-200">
                        <p>Stake Amount</p>
                        <p>
                          <span className="font-thin text-gray-300">
                            Balance:
                          </span>{" "}
                          {xlmBalance} XLM
                        </p>
                      </div>
                      <div className="bg-[#191A1F] p-2 space-y-2  ">
                        <div className="flex justify-between">
                          <div className="flex items-center gap-2">
                            <div className="flex-shrink-0">
                              <svg
                                className="h-7 w-auto"
                                width="140"
                                height="140"
                                viewBox="0 0 140 140"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_952_8989)">
                                  <path
                                    opacity="0.2"
                                    d="M140 69.9996C140 108.66 108.66 140 70.0004 140C31.3401 140 0 108.66 0 69.9996C0 31.3399 31.3401 0 70.0004 0C108.66 0 140 31.3399 140 69.9996"
                                    fill="#F3F3F3"
                                  />
                                  <rect
                                    x="20"
                                    y="20"
                                    width="100"
                                    height="100"
                                    rx="50"
                                    fill="white"
                                    fill-opacity="0.9"
                                  />
                                  <path
                                    d="M107.5 45.9171L36.6662 74.1671C36.5003 72.7844 36.4169 71.393 36.4162 70.0005C36.3991 64.7549 37.6423 59.582 40.0412 54.9171C42.8258 49.4292 47.0754 44.8193 52.319 41.5982C57.5626 38.377 63.5955 36.6702 69.7495 36.6671C73.5407 36.6589 77.3046 37.3074 80.8745 38.5838"
                                    stroke="black"
                                    stroke-width="7.49998"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M59.0833 101.417C66.7178 104.125 75.0776 103.962 82.6002 100.956C90.1229 97.9504 96.2934 92.3075 99.9581 85.083C102.357 80.4181 103.601 75.2452 103.583 69.9996C103.585 68.607 103.501 67.2155 103.333 65.833L32.5 94.0827"
                                    stroke="black"
                                    stroke-width="7.49998"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_952_8989">
                                    <rect
                                      width="140"
                                      height="140"
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>{" "}
                            <div className="flex flex-col">
                              <input
                                onChange={(e) => setStakeAmount(e.target.value)}
                                className="w-full px-2  text-yellow-500"
                                style={{
                                  // outline: "none",
                                  background: "#191A1F",
                                  paddingTop: "2px",
                                  paddingBottom: "2px",
                                  borderBottomWidth: "1px",
                                  borderColor: "#64748b",
                                  outlineColor: "#155e75",
                                }}
                                type="text"
                                placeholder={
                                  stakeSelected
                                    ? "Enter amount to stake"
                                    : "Enter amount to unstake"
                                }
                              />
                            </div>
                          </div>
                          <button className="text-yellow-500">MAX</button>
                        </div>
                        <div className="flex justify-between text-gray-100">
                          <div className="">XLM</div>
                          <button>= $0</button>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <hr className="mt-5 border-slate-500" />

                      <div className="mt-5 text-center">
                        <button
                          onClick={() =>
                            stakeUnstakeHandler(
                              stakeSelected ? "stake" : "unstake"
                            )
                          }
                          type="button"
                          className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-black transition-all duration-200 bg-yellow-500 border border-transparent rounded-md  hover:-translate-y-1 hover:bg-opacity-80"
                        >
                          {connecting
                            ? "Processing..."
                            : stakeSelected
                            ? "Deposit & Lock"
                            : "Withdraw"}
                        </button>

                        <p className="mt-4 text-sm font-normal text-gray-200">
                          <a
                            href="#"
                            title=""
                            className="rounded hover:underline  focus:outline-none focus:ring-2 "
                          >
                            Your XLM tokens will be locked for 7 days. You are
                            free to withdraw them at any time after that.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ApplySection />
    </>
  );
}
