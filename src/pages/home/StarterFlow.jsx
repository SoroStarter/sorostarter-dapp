import React, { useState } from "react";

export default function StarterFlow() {
  return (
    <section className="py-12  sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-start  flex flex-col ">
          <h2 className="text-3xl font-bold text-gray-200 sm:text-4xl xl:text-4xl font-pj">
            Projects Selection Process
          </h2>
          <p className="max-w-md text-start mt-5 text-base font-normal text-gray-300 font-pj">
            The selection and onboarding of web3 projects take several steps,
            which include:
          </p>
        </div>

        <div className="flex flex-col items-center max-w-md mx-auto mt-8 lg:mt-20 lg:flex-row lg:max-w-none">
          <div className="relative flex-1 w-full overflow-hidden bg-slate-300 border border-gray-200 rounded-2xl">
            <div className="py-8 px-9">
              <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                1
              </div>
              <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                Initial vetting and screening of project by council
              </p>
            </div>
          </div>

          <div className="block -my-1 lg:hidden">
            <svg
              className="w-4 h-auto text-gray-300"
              viewBox="0 0 16 32"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)"
              />
            </svg>
          </div>

          <div className="hidden lg:block lg:-mx-2">
            <svg
              className="w-auto h-4 text-gray-300"
              viewBox="0 0 81 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
              />
            </svg>
          </div>

          <div className="relative flex-1 w-full">
            <div className="absolute -inset-4">
              <div
                className="w-full h-full mx-auto rotate-180 opacity-20 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative overflow-hidden bg-slate-300 border border-gray-200 rounded-2xl">
              <div className="py-8 px-9">
                <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                  2
                </div>
                <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                  Onchain (Soroban) voting by governance members
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:-mx-2">
            <svg
              className="w-auto h-4 text-gray-300"
              viewBox="0 0 81 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
              />
            </svg>
          </div>

          <div className="block -my-1 lg:hidden">
            <svg
              className="w-4 h-auto text-gray-300"
              viewBox="0 0 16 32"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 21)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 14)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 7)"
              />
              <line
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform="matrix(0.83205 0.5547 0.5547 -0.83205 1 0)"
              />
            </svg>
          </div>

          <div className="relative flex-1 w-full overflow-hidden bg-slate-300 border border-gray-200 rounded-2xl">
            <div className="py-8 px-9">
              <div className="inline-flex items-center justify-center w-10 h-10 text-base font-bold text-white bg-gray-900 rounded-xl font-pj">
                3
              </div>
              <p className="mt-5 text-xl font-medium text-gray-900 font-pj">
                Onboard on SoroStarter fundraise and IDO protocol
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
