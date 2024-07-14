import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";

import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";
import { toast } from "react-toastify";

export default function PaymentTokenSelector({ handleSelectPayment }) {
  const tokensSelector = [{ name: "XLM" }, { name: "USDT" }];

  const [switchToken, setSwitchToken] = useState(tokensSelector[0]);
  async function handleSwitchToken(index) {
    setSwitchToken(() => tokensSelector[index]);
  }

  const width = "f";

  //   useEffect(() => {
  //     if (error && error.message) {
  //       toast.error(error.message);
  //     }
  //   }, [error]);

  if (true) {
    return (
      <Menu
        as="div"
        className={clsx(
          "relative inline-block text-left",
          width === "full" && "w-full"
        )}
      >
        {({ open }) => (
          <>
            <Menu.Button
              className={clsx(
                "flex gap-2 items-center p-0 pr-2 rounded-lg bg-[#0a0a0a] text-sm w-[110px] font-medium border border-gray-400 transition-colors hover:bg-dark-300",
                width === "full" && "w-full",
                open ? "bg-dark-300" : "bg-dark-400"
              )}
            >
              <>
                <div className=" p-1 rounded-full  ">
                  <img
                    className="w-[22px] h-auto"
                    src={`/cryptoIcons/${switchToken.name}.svg`}
                    // src={XLM}
                    alt=""
                  />
                </div>
                <span className="lg:hidden xl:inline text-gray-200">
                  {switchToken.name}
                </span>
                {/* <div className="">USDT</div> */}
              </>

              <ArrowDown2
                size="16"
                color="#94a3b8"
                className={clsx(
                  "transition-transform will-change-transform ml-auto",
                  open && "rotate-180"
                )}
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 bg-[#0a0a0a] text-gray-200 z-10 w-[110px] py-1 mt-2 origin-top-right border rounded-md shadow-lg border-dark-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
                {tokensSelector.map((x, index) => (
                  <Menu.Item key={x.name}>
                    <button
                      onClick={() => {
                        handleSwitchToken(index);
                        handleSelectPayment(x.name);
                      }}
                      // onClick={() => switchChain({ chainId: x.id })}
                      className={clsx(
                        "px-4 py-2 text-sm transition-colors  flex items-center gap-2  text-left hover:bg-dark-300"
                        // !switchChain || (x.id === chain?.id && "!hidden")
                      )}
                    >
                      <img
                        className="w-6 h-6"
                        src={`/cryptoIcons/${x.name}.svg`}
                        alt=""
                      />
                      {x.name}
                      {/* {isLoading && pendingChainId === x.id && " (switching)"} */}
                    </button>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  }
}
