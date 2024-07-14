import React, { useState } from "react";

export default function Footer() {
  return (
    <footer className="py-8 sm:pt-8 lg:pt-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 mt-16 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
              Company
            </h6>

            <ul className="mt-8 space-y-5 text-gray-300">
              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Apply for IDO
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Career{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Press kit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
              Help
            </h6>

            <ul className="mt-8 space-y-5 text-gray-300">
              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Support{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 text-gray-300">
            <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
              Resources
            </h6>

            <ul className="mt-8 space-y-5">
              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Dashboard
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Portfolio
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="inline-flex text-sm font-normal transition-all duration-300 transform font-pj  hover:translate-x-1"
                >
                  {" "}
                  Quests
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-3 xl:pl-20">
            <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
              Subscribe to updates
            </h6>

            <div className="relative mt-8">
              <form action="#" method="POST" className="relative">
                <div className="flex items-center">
                  <div className="flex-1">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email address"
                      className="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-10 py-4 text-base font-bold text-gray-900 transition-all duration-200 bg-yellow-500 border border-transparent sm:px-16  rounded-r-xl font-pj "
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            <div className="grid grid-cols-1 mt-8 gap-y-8  sm:gap-x-16">
              {/* <div>
                <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
                  Call us
                </h6>
                <p className="mt-2.5 text-xl font-pj text-gray-400 font-bold">
                  <a href="#" title="">
                    {" "}
                    (239) 555-0108{" "}
                  </a>
                </p>
              </div> */}

              <div className="flex justify-between items-center">
                <h6 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-pj">
                  Email us
                </h6>
                <p className=" text-xl font-pj text-gray-400 font-bold">
                  <a href="#" title="">
                    {" "}
                    info@sorostarter.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 border-gray-200" />

        <div className="mt-8 sm:flex sm:items-center sm:justify-between">
          <ul className="flex items-center justify-start space-x-3 sm:order-2 sm:justify-end">
            <li>
              <a
                href="https://x.com/SoroStarter"
                target="_blank"
                title=""
                className="inline-flex items-center justify-center w-10 h-10 text-gray-300 transition-all duration-200 rounded-full "
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                target="_blank"
                title=""
                className="inline-flex items-center justify-center w-10 h-10 text-gray-300 transition-all duration-200 rounded-full "
                rel="noopener"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0012 22.8002C17.9658 22.8002 22.8012 17.9649 22.8012 12.0002C22.8012 6.03552 17.9658 1.2002 12.0012 1.2002C6.0365 1.2002 1.20117 6.03552 1.20117 12.0002C1.20117 17.9649 6.0365 22.8002 12.0012 22.8002Z"
                    fill="#D1D5DB"
                  />
                  <path
                    d="M10.0182 16.9459C9.66894 16.9459 9.72842 16.8155 9.60988 16.4785L8.58008 13.0933L16.4982 8.40039"
                    fill="black"
                  />
                  <path
                    d="M10.0176 16.9517C10.2897 16.9517 10.4082 16.8273 10.5559 16.6796L11.9941 15.2773L10.1952 14.1943"
                    fill="black"
                  />
                  <path
                    d="M10.2027 14.2025L14.5522 17.4159C15.0492 17.688 15.4103 17.5463 15.5289 16.9544L17.2982 8.60422C17.4817 7.87648 17.0202 7.54489 16.5469 7.76384L6.14343 11.7763C5.43341 12.0602 5.43932 12.4568 6.01307 12.6344L8.68185 13.4689L14.8602 9.56905C15.15 9.39144 15.4226 9.48636 15.1977 9.68169"
                    fill="black"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/SoroStarter"
                target="_blank"
                title=""
                className="inline-flex items-center justify-center w-10 h-10 text-gray-300 transition-all duration-200 rounded-full  "
                rel="noopener"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm font-normal text-gray-400 font-pj sm:order-1 sm:mt-0">
            © Copyright 2024, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
