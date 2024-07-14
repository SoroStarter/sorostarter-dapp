import React, { useState } from "react";

import SalesCard from "./SalesCard";
import Tokenomics from "./Tokenomics";
import VoteCard from "./VoteCard";

export default function IDOParticipationCard({
  userKey,
  setUpdatePurchases,
  projectStage,
}) {
  const [stakeSelected, setStakeSelected] = useState(true);

  return (
    <>
      <div className="">
        <section className="relative ">
          <div className="relative mt-8">
            <div className=" inset-x-0 top-0 ">
              <div className=" flex flex-col  space-y-8 md:flex-row md:space-y-0 justify-between md:space-x-8 ">
                <Tokenomics />
                {projectStage === "voting" && (
                  <VoteCard
                    userKey={userKey}
                    setUpdatePurchases={setUpdatePurchases}
                  />
                )}
                {projectStage === "sale" && (
                  <SalesCard
                    userKey={userKey}
                    setUpdatePurchases={setUpdatePurchases}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
