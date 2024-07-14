import React from "react";
import StellajarBannar from "../../assets/StellarJarBanner.svg";
import { Link } from "react-router-dom";
import { getProjectId } from "../projects/project-list";

export default function Highlight() {
  return (
    <Link
      className="py-12  sm:py-16 lg:py-20"
      to={`/projects/${getProjectId("StellarJar")}`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 overflow-hidden bg-indigo-600 shadow-md shadow-gray-700  sm:mt-10 rounded-2xl hover:-translate-y-1">
          <div className="relative px-6 pt-12 md:py-10 md:px-8 lg:py-10">
            <div className="flex items-center justify-end md:order-2">
              <div className="relative text-center md:text-left md:pl-8 lg:pl-0 md:w-1/2">
                <p className="text-2xl font-bold text-cyan-200">
                  StellarJar IDO Live
                </p>
                <p className="text-lg font-normal leading-relaxed text-gray-200 font-pj">
                  Create custom landing pages with Rareblocks that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page.
                </p>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-gray-900 transition-all duration-200 bg-white border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-opacity-90 rounded-xl"
                  role="button"
                >
                  Join IDO Sale
                </a>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:absolute md:order-1 mdg:left-8 md:top-8">
              {/* <div className="absolute hidden inset-8 md:block">
                <div
                  className="w-full h-full mx-auto rotate-180 opacity-80 blur-lg filter "
                  style={{
                    background:
                      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                  }}
                ></div>
              </div> */}

              <img
                className="relative w-full h-full mx-auto md:max-w-xs  group-hover:scale-110"
                src={StellajarBannar}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
