import { useEffect, useState } from "react";
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
  governanceId,
} from "../../config/soroban";
import { signTransaction } from "@stellar/freighter-api";
import {
  getCurrentUnixTimestamp,
  getTimeDifferenceBetweenTimestamps,
} from "../../utils/helper_methods";

import { ScInt, Soroban, StrKey, nativeToScVal } from "@stellar/stellar-sdk";

export default function VoteCard({ userKey, setUpdatePurchases }) {
  const [yesSelected, setYesSelected] = useState(true);

  const votingValue = yesSelected ? "Yes" : "No";

  const xlmId = "CB64D3G7SM2RTH6JSGG34DDTFTQ5CFDKVDZJZSODMCX4NJ2HV2KN7OHT";

  const [stakeSelected, setStakeSelected] = useState(true);
  const [xlmBalance, setXlmBalance] = useState(0);
  const [amountStaked, setAmountStaked] = useState(0);
  const [stakeAmount, setStakeAmount] = useState("");
  const [connecting, setConnecting] = useState(false);
  const [canVote, setCanVote] = useState(null);
  const [voteResult, setVoteResult] = useState(null);
  const [hasVoted, setHasVoted] = useState(null);

  const percentYes =
    voteResult?.total > 0 ? (voteResult?.yes / voteResult?.total) * 100 : null;

  const selectedNetwork = FUTURENET_DETAILS;

  useEffect(() => {
    async function fetchProposal() {
      if (!userKey) return;
      const projectId = nativeToScVal(Number(1), { type: "u32" });
      const args = ["get_proposal", projectId];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(1).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(governanceId, txBuiderAnyCall, server, args);

      //   const balance = stroopToXlm(res).c[0];

      //   setXlmBalance(() => balance)

      console.log("wallet balance is", res);
    }

    async function fetchResult() {
      if (!userKey) return;
      const projectId = nativeToScVal(Number(1), { type: "u32" });
      const requester = accountToScVal(userKey);
      const args = ["get_proposal_votes", requester, projectId];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(1).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(governanceId, txBuiderAnyCall, server, args);

      const result = {
        total: Number(res.total_votes),
        yes: Number(res.yes_votes),
      };

      setVoteResult(() => result);
    }

    async function fetchHasVoted() {
      if (!userKey) return;
      const projectId = nativeToScVal(Number(1), { type: "u32" });
      const requester = accountToScVal(userKey);
      const args = ["get_user_has_voted", requester, projectId];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(1).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(governanceId, txBuiderAnyCall, server, args);

      setHasVoted(() => res);
    }

    async function fetchCanVote() {
      if (!userKey) return;
      const voter = accountToScVal(userKey);

      const args = ["get_user_can_vote", voter];

      const txBuiderAnyCall = await getTxBuilder(
        userKey,
        xlmToStroop(1).toString(),
        server,
        selectedNetwork.networkPassphrase
      );
      const res = await getAnyCall(governanceId, txBuiderAnyCall, server, args);

      setCanVote(() => res);
    }

    fetchProposal();

    fetchResult();
    fetchHasVoted();
    fetchCanVote();
  }, [userKey, connecting]);

  async function castVoteHandler() {
    try {
      setConnecting(() => true);

      const voteSCV = nativeToScVal(yesSelected);
      const projectId = nativeToScVal(Number(1), { type: "u32" });
      const voter = accountToScVal(userKey);
      const args = ["cast_vote", voter, voteSCV, projectId];

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
        " Cast vote",
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
    <div className="w-full px-6 min-w-[350px] md:max-w-sm overflow-hidden bg-[#191A1F]  shadow-md rounded-lg">
      <div className="flex  items-center">
        <div className="pt-2  pr-8 sm:pr-12  ">
          <h3 className="text-start mt-3 text-base font-semibold text-gray-100 pb-2">
            Votes Count
          </h3>
          <p className="text-5xl font-semibold tracking-tight text-gray-200">
            {voteResult?.total}
          </p>
        </div>
      </div>

      {voteResult?.total > 0 && hasVoted && (
        <div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm font-medium text-gray-200">Yes</p>
            <p className="text-lg text-yellow-500 font-bold ">{percentYes}</p>
            <p className="text-sm font-medium text-gray-200">No</p>
          </div>
          <div className="mt-1 bg-gray-200 h-1.5 rounded-full relative">
            <div
              className={`absolute inset-y-0 left-0 bg-yellow-500 rounded-full z-20 `}
              style={{ width: `${percentYes}%` }}
            ></div>
            <div className="absolute inset-y-0 left-0 bg-indigo-300 rounded-full w-[100%]"></div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm font-medium text-gray-200">
              {voteResult?.yes}
            </p>

            <p className="text-sm font-medium text-gray-200">
              {voteResult?.total - voteResult?.yes}
            </p>
          </div>
        </div>
      )}

      {canVote ? (
        <ul className="mt-6">
          {" "}
          <li className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-wide text-gray-200 uppercase">
              You are eligible to vote
            </p>
            <div className="flex items-end justify-end">
              <div className="relative inline-flex items-center justify-center shrink-0 w-7 h-7"></div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_997_9235)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.9 12.1L8.5 13.5L13 18L23 8L21.6 6.6L13 15.2L9.9 12.1ZM22 14C22 18.4 18.4 22 14 22C9.6 22 6 18.4 6 14C6 9.6 9.6 6 14 6C14.8 6 15.5 6.1 16.2 6.3L17.8 4.7C16.6 4.3 15.3 4 14 4C8.5 4 4 8.5 4 14C4 19.5 8.5 24 14 24C19.5 24 24 19.5 24 14H22Z"
                    fill="#22C55E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_997_9235">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
      ) : (
        <ul className="mt-6">
          {" "}
          <li className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-wide text-gray-200 uppercase">
              You cannot vote, Stake at least 1000 XLM to vote
            </p>
            <div className="flex items-end justify-end">
              <div className="relative inline-flex items-center justify-center shrink-0 w-7 h-7"></div>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
                  stroke="#EF4444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 11L11 17"
                  stroke="#EF4444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11 11L17 17"
                  stroke="#EF4444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </li>
        </ul>
      )}
      <div className=" py-6 ">
        {" "}
        <div className="gap-2  ">
          <div className="flex justify-between text-gray-200">
            <p>Select vote</p>
            <p>
              <span className="text-gray-300 font-thin"> (Yes or No)</span>{" "}
            </p>
          </div>

          <div className=" py-2 space-y-2  ">
            <div className="flex justify-between">
              <div className="flex w-full ">
                <button
                  className={`w-1/2  font-bold py-2 px-4  ${
                    yesSelected
                      ? " text-yellow-500 border-b border-yellow-500  "
                      : " text-gray-300 border-b border-transparent"
                  }`}
                  onClick={() => setYesSelected(true)}
                >
                  Vote Yes
                </button>
                <button
                  className={`w-1/2  font-bold py-2 px-4  ${
                    !yesSelected
                      ? " text-yellow-500 border-b border-yellow-500 "
                      : " text-gray-300 border-b border-transparent"
                  }`}
                  onClick={() => setYesSelected(false)}
                >
                  Vote No
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-200">You are voting:</div>
              <div className="text-yellow-500 font-bold">{votingValue}</div>
            </div>
          </div>
        </div>
        <div className="">
          {/* <hr className="mt-5 border-gray-800" /> */}

          <div className="mt-3 text-center">
            {canVote ? (
              hasVoted ? (
                <button
                  onClick={castVoteHandler}
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-gray-900 transition-all duration-200  bg-yellow-500  rounded-md bg-opacity-70 "
                >
                  You have already voted
                </button>
              ) : (
                <button
                  onClick={castVoteHandler}
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-yellow-500  rounded-md "
                >
                  {connecting ? "Processing..." : "Cast Vote Now"}
                </button>
              )
            ) : (
              <button
                onClick={castVoteHandler}
                type="button"
                disabled
                className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-gray-900 transition-all duration-200 bg-yellow-500/70  rounded-md "
              >
                You cannot vote
              </button>
            )}

            <p className="mt-4 text-sm font-normal text-gray-200">
              <a
                href="#"
                title=""
                className="rounded hover:underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                The vote summary will display after you vote.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
