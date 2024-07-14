import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getProjectId } from "../pages/projects/project-list";
import ProjectCard from "./ProjectCard";
{
  /* <Link to="/projects/project1">Go to Project 1</Link> */
}

export default function UpcomingProjects({ projectList }) {
  return (
    <section className="py-12  sm:py-16 lg:py-20 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 font-pj">
            Upcoming Projects on SoroStarter
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="absolute -inset-2">
            {/* <div
              className="w-full h-full  mx-auto opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div> */}
          </div>

          <div className="relative grid grid-cols-1 gap-5 mx-auto sm:gap-6 lg:gap-6 sm:grid-cols-3">
            {projectList?.map((project) => (
              <Link
                key={project.name}
                to={`/projects/${getProjectId(project.name)}`}
                className=" shadow-xl rounded-xl"
              >
                {/* <div className="p-8 sm:py-10 sm:px-9">
                  <div className="flex justify-start flex-shrink-0 -space-x-4 overflow-hidden">
                    <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-14 h-14 ring-2 ring-white">
                      <svg
                        className="inline-block rounded-full w-16 h-16 ring-2 ring-white"
                        viewBox="0 0 136 136"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M119 35.2467L22.6667 73.6667C22.4411 71.7862 22.3276 69.894 22.3267 68.0001C22.3035 60.8661 23.9942 53.831 27.2567 47.4867C31.0438 40.0232 36.8232 33.7538 43.9545 29.373C51.0858 24.9922 59.2906 22.671 67.66 22.6667C72.816 22.6556 77.935 23.5375 82.79 25.2734"
                          stroke="black"
                          stroke-width="11.3333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M53.1533 110.727C63.5362 114.411 74.9056 114.189 85.1363 110.101C95.3671 106.013 103.759 98.3387 108.743 88.5134C112.006 82.1691 113.697 75.134 113.673 68C113.675 66.106 113.561 64.2136 113.333 62.3334L17 100.753"
                          stroke="black"
                          stroke-width="11.3333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <div className="inline-flex items-center justify-center bg-gray-100 rounded-full w-14 h-14 ring-2 ring-white">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 3C10.5523 3 11 3.44772 11 4V9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11H4C3.44772 11 3 10.5523 3 10C3 9.44771 3.44772 9 4 9L9 9V4C9 3.44772 9.44772 3 10 3Z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-200 font-pj mt-11">
                    Staking UI Component
                  </h3>
                  <p className="mt-3 text-base font-normal leading-7 text-gray-300">
                    Plug-and-play reusable staking and liquidity pool components
                    for Soroban dApp.
                  </p>

                  <a
                    href="mailto:info@sorobuild.io?subject=Demo%20Request%20Staking"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-bold text-gray-200 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                    role="button"
                  >
                    Request Demo
                  </a>
                </div> */}
                <ProjectCard />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
