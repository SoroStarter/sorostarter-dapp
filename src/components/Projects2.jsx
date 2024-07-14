import React, { useState } from "react";
import InterStellar from "../assets/InterStellerVerse.png";
import Soybeanswap from "../assets/SoyBeanSwap.png";
import StellarJar from "../assets/StellarJar.png";
import { Link } from "react-router-dom";
import { getProjectId } from "../pages/projects/project-list";

export default function Projects2() {
  return (
    <section className="py-12  sm:py-16 lg:py-20 ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className="max-w-xl  mx-auto md:mx-0">
          <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
            Upcoming Projects on SoroStarter
          </h2>
          <p className="mt-5 text-base font-normal leading-7 text-start text-gray-300">
            Latest projects launching on Soroban, with token sales on
            SoroStarter coming soon.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 mx-auto mt-8 sm:mt-12 md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none ">
          <Link
            className="group border rounded-xl"
            to={`/projects/${getProjectId("InterStellar War")}`}
          >
            <div className="relative ">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={InterStellar}
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Whitelist soon
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-yellow-500">
              InterStellar War
            </p>
            <p className="mt-4 text-lg font-bold leading-tight text-gray-200 px-3">
              <a href="#" title="" className="">
                The battle of the intergalacticians: The beginning of the end,
                or the rise of a new era
              </a>
            </p>
            <div className="mt-6 justify-end flex p-4 gap-2">
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-cyan-500 uppercase border-b border-gray-900 group bg-cyan-500/15"
              >
                P2E
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-indigo-500 uppercase border-b border-gray-900 group bg-indigo-500/15"
              >
                GameFi
              </a>
            </div>
          </Link>

          <Link
            className="group border rounded-xl"
            to={`/projects/${getProjectId("SoybeanSwap")}`}
          >
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={Soybeanswap}
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Vote Now
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-yellow-500 ">
              SoybeanSwap
            </p>
            <p className="mt-4 text-lg  font-bold leading-tight text-center px-3  text-gray-200 ">
              Permissionless decentralized exchange on Soroban: swap and earn
              through yield farming.
            </p>
            <div className="mt-6 justify-end flex p-4 gap-2">
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-red-600 uppercase border-b border-gray-900 group bg-red-500/15"
              >
                DEX
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-purple-500 uppercase border-b border-gray-900 group bg-purple-500/15"
              >
                DeFi
              </a>
            </div>
          </Link>

          <Link
            className="group border rounded-xl"
            to={`/projects/${getProjectId("StellarJar")}`}
          >
            <div className="relative">
              <div className="block overflow-hidden aspect-w-16 aspect-h-9 rounded-xl">
                <img
                  className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src={StellarJar}
                  alt=""
                />
              </div>
              <span className="absolute px-3 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded left-3 top-3">
                Sale Live
              </span>
            </div>
            <p className="mt-6 text-sm font-medium text-yellow-500">
              StellarJar
            </p>
            <p className="mt-4 text-lg font-bold leading-tight text-gray-200 px-3">
              <a href="#" title="" className="">
                Secure, self-custody crypto wallet for Stellar Lumen and the
                Soroban ecosystem
              </a>
            </p>
            <div className="mt-6 justify-end flex p-4 gap-2">
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-green-600 uppercase border-b border-gray-900 group bg-green-500/15"
              >
                Wallet
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold tracking-widest text-purple-500 uppercase border-b border-gray-900 group bg-purple-500/15"
              >
                DeFi
              </a>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
