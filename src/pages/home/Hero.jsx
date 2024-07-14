import React, { useState } from "react";
import vetted from "../../assets/vetting.svg";
import decentralized from "../../assets/decentralized.svg";
import community from "../../assets/community.svg";

export default function Hero() {
  return (
    <div className="relative mt-8">
      <section className="relative ">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 "></div>
        </div>

        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2">
          <div className="flex items-center px-4 pb-16  pt-28 sm:px-6 lg:px-8 lg:pb-24 xl:pr-12">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="mt-10 text-3xl font-semibold text-gray-100 sm:text-4xl lg:text-5xl">
                The Number 1 IDO Platform on Soroban
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-200">
                Empowering quality Web3 projects building on Soroban by
                providing fundraising tools through IDOs and early access for
                participation to the Stellar community.
              </p>
              <div className="relative inline-flex mt-10 group">
                {/* <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div> */}

                <a
                  href="/projects/stellarjar"
                  title="Participate in Stellarjar IDO"
                  className="inline-flex relative items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-black transition-all duration-200 bg-yellow-500 border border-transparent rounded-lg hover:bg-cyan-900 "
                  role="button"
                >
                  Participate in IDO
                </a>
              </div>
            </div>
          </div>

          <div className="relative flex items-end px-4 py-8  sm:px-6 lg:pb-8 lg:px-8 xl:pl-8 ">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none ">
              <div className="mt-6 space-y-5">
                <div className="overflow-hidden transition-all duration-200 transform bg-slate-300 border border-slate-500 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src={vetted}
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6 ">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            Highly-vetted Web3 projects
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-700 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            A comprehensive 360 screening and vetting process
                            for projects selected for IDO.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-200 transform bg-slate-300 border border-slate-500 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src={decentralized}
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6 ">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            A secure, decentralized platform.
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-800 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            A secure fundraising platform for Web3 projects on
                            Stellar Lumen and Soroban.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden transition-all duration-200 transform bg-slate-300 border border-slate-500 rounded-2xl hover:shadow-lg hover:-translate-y-1">
                  <div className="px-4 py-5 sm:p-5">
                    <div className="flex items-start lg:items-center">
                      <a href="#" title="" className="shrink-0">
                        <img
                          className="lg:h-24 w-14 h-14 lg:w-24 rounded-xl object-cvoer"
                          src={community}
                          alt=""
                        />
                      </a>

                      <div className="flex-1 ml-4 lg:ml-6 ">
                        <p className="text-xs font-medium text-gray-900 lg:text-sm">
                          <a href="#" title="" className="">
                            Community voting and participation
                          </a>
                        </p>
                        <p className="mt-2 text-sm font-bold text-gray-800 lg:text-lg group-hover:text-gray-600">
                          <a href="#" title="" className="">
                            XLM Stakers/holders participate in the selection
                            process by voting.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
