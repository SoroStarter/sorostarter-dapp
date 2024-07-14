import React, { useState } from "react";

import StellarjarIcon from "../../assets/StellarJarIcon.svg";
import InterstellarWar from "../../assets/iInterstellarWar.png";
import SoybeanSwapIcon from "../../assets/SoybeanSwapIcon.png";

export default function ApplySection() {
  return (
    <div className="flex flex-col mt-8">
      <div className="flex-1">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto mt-8 max-w-7xl">
              <div className="flex flex-col  md:flex-row justify-between gap-8">
                <div className="overflow-hidden  border border-slate-500 rounded-xl w-full ">
                  <div className="px-4 py-5 sm:p-6  ">
                    <div className="sm:flex text-start sm:items-center sm:justify-between">
                      <div className="mb-5">
                        <p className="text-xl font-bold text-gray-100">
                          Ongoing IDO Proposals Voting
                        </p>
                        <p className="mt-1 text-sm font-medium text-gray-300">
                          Improve the quality of projects listed for IDO by
                          participating in the selection process. Vote and earn
                          participation points and voting rewards.
                        </p>
                      </div>
                    </div>

                    <div className="flow-root mt-8">
                      <div className="-my-5 divide-y divide-slate-500">
                        <div className="py-5">
                          <div className="flex items-center">
                            <div className="relative flex-shrink-0">
                              <svg
                                width="37"
                                height="37"
                                className=""
                                viewBox="0 0 37 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_967_9959)">
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M30.7792 7.5L33.8975 10.1611C34.1632 10.4563 34.3792 11.0179 34.3792 11.4161V31.5761C34.3792 31.9735 34.1632 32.5351 33.8968 32.8303L31.9809 34.9565C31.7152 35.2517 31.1767 35.4914 30.7792 35.4914H6.29922C5.90178 35.4914 5.36322 35.2524 5.09682 34.9572L3.1809 32.831C2.91522 32.5358 2.69922 31.9735 2.69922 31.5761V11.4161C2.69922 11.0179 2.91522 10.4563 3.1809 10.1611L6.29922 7.5H30.7792ZM22.1383 18.5679H22.8583C23.6503 18.5679 24.2983 19.2159 24.2983 20.0079V27.2079C24.2983 27.9999 23.6503 28.6479 22.8583 28.6479H14.2183C13.4263 28.6479 12.7783 27.9999 12.7783 27.2079V20.0079C12.7783 19.2159 13.4263 18.5679 14.2183 18.5679H14.9383V17.1279C14.9383 15.1119 16.5223 13.5279 18.5383 13.5279C20.5543 13.5279 22.1383 15.1119 22.1383 17.1279V18.5679ZM17.0983 23.6079C17.0983 24.3999 17.7463 25.0479 18.5383 25.0479C19.3303 25.0479 19.9783 24.3999 19.9783 23.6079C19.9783 22.8159 19.3303 22.1679 18.5383 22.1679C17.7463 22.1679 17.0983 22.8159 17.0983 23.6079ZM16.3063 17.1279V18.5679H20.7703V17.1279C20.7703 15.9039 19.7623 14.8959 18.5383 14.8959C17.3143 14.8959 16.3063 15.9039 16.3063 17.1279Z"
                                    fill="#89C5DF"
                                  />
                                  <path
                                    d="M30.7163 1.65164C30.7163 1.2542 30.3938 0.931641 29.9963 0.931641H6.95633C6.55889 0.931641 6.23633 1.2542 6.23633 1.65164V5.77508H30.7163V1.65164Z"
                                    fill="#89C5DF"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_967_9959">
                                    <rect
                                      width="36"
                                      height="36"
                                      fill="white"
                                      transform="translate(0.537109 0.210938)"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>

                            <div className="ml-4 text-start">
                              <p className="text-sm font-bold text-gray-100">
                                StellarJar
                              </p>
                              <p className="mt-1 text-sm font-medium text-gray-300">
                                $SJAR
                              </p>
                            </div>

                            <div className="flex items-center justify-end ml-auto space-x-8">
                              <a
                                href="#"
                                title=""
                                className="text-sm font-medium text-indigo-500 transition-all duration-200 "
                              >
                                {" "}
                                Vote now
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="py-5">
                          <div className="flex items-center">
                            <div className="relative flex-shrink-0">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={InterstellarWar}
                                alt=""
                              />
                            </div>

                            <div className="ml-4 text-start">
                              <p className="text-sm font-bold text-gray-100">
                                InterStellar War
                              </p>
                              <p className="mt-1 text-sm font-medium text-gray-300">
                                $ISW
                              </p>
                            </div>

                            <div className="flex items-center justify-end ml-auto space-x-8">
                              <a
                                href="#"
                                title=""
                                className="text-sm font-medium text-green-700 transition-all duration-200 "
                              >
                                {" "}
                                Join IDO
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="py-5">
                          <div className="flex items-center">
                            <div className="relative flex-shrink-0">
                              <img
                                className="object-cover w-10 h-10 rounded-full"
                                src={SoybeanSwapIcon}
                                alt=""
                              />
                            </div>

                            <div className="ml-4">
                              <p className="text-sm font-bold text-gray-100">
                                Soybean Swap
                              </p>
                              <p className="mt-1 text-sm text-start font-medium text-gray-300">
                                $SOYBEAN
                              </p>
                            </div>

                            <div className="flex items-center justify-end ml-auto space-x-8">
                              <a
                                href="#"
                                title=""
                                className="text-sm font-medium text-gray-500 transition-all duration-200 "
                              >
                                {" "}
                                Whitelist soon
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
