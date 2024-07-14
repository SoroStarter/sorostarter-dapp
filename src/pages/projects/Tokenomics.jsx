export default function Tokenomics() {
  return (
    <div className="overflow-hidden  border border-gray-500 rounded-lg w-full ">
      <div className="px-4 py-5 sm:p-6  ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold text-gray-200">
              Tokenomics and distribution
            </p>
            <p className="mt-1 text-sm font-medium text-gray-300">
              The project's tokenomics is as follows:
            </p>
          </div>

          <div className="mt-4 sm:mt-0">
            <button
              type="button"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold leading-4 text-white transition-all duration-200 border-[#EB6B24] border border-transparent rounded-md "
            >
              View full tokenomics
            </button>
          </div>
        </div>

        <div className="flow-root mt-8 text-gray-200">
          <div className="-my-5 divide-y divide-slate-500">
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Public Sale</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gray-900"
                  >
                    {" "}
                    10,000,000
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Development</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gray-900"
                  >
                    10,000,000
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Team</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gray-900"
                  >
                    15,000,000
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Listing</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gray-900"
                  >
                    25,000,000
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Ecosystem</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-300 transition-all duration-200 hover:text-gray-900"
                  >
                    40,000,000
                  </a>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-sm font-bold ">Token Distribution</p>
                </div>

                <div className="flex items-center justify-end ml-auto space-x-8">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-900"
                  >
                    {" "}
                    20% @ TGE, 4month linear distributions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
