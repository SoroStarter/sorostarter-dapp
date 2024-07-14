import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { useParams } from "react-router-dom";
import { getProjectId, projectList } from "./project-list";
import IDOParticipationCard from "./IDOParticipationCard";
import Purchases from "./Purchases";

export default function Project({ userKey }) {
  const [isTokenSaleSelected, setIsTokenSaleSelected] = useState(true);
  const [updatePurchases, setUpdatePurchases] = useState(false);

  const { projectId } = useParams();
  const selectedProject = projectList.find(
    (project) => getProjectId(project?.name) === projectId
  );
  const projectStage = selectedProject?.stage;
  return (
    <div className="mt-12 px-4  mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-8 flex gap-4 text-gray-200">
        <div
          className="hover:shadow-lg hover:-translate-y-1"
          onClick={() => setIsTokenSaleSelected(true)}
        >
          {" "}
          <button className="">Token Sale</button>
          {isTokenSaleSelected && (
            <hr className="bg-yellow-500 h-[2px] border-0" />
          )}
        </div>
        <div
          className="hover:shadow-lg hover:-translate-y-1"
          onClick={() => setIsTokenSaleSelected(false)}
        >
          {" "}
          <button>Project Detail</button>
          {!isTokenSaleSelected && (
            <hr className="bg-yellow-500 h-[2px] border-0" />
          )}
        </div>
      </div>
      <div className="mt-8 overflow-hidden  border border-slate-500 rounded-xl mb-10">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="items-start flex flex-col">
              <p className="text-2xl font-bold text-gray-100">
                {selectedProject?.name}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-200">
                {selectedProject?.theme}
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-bold text-gray-100 transition-all duration-200  border border-yellow-500  rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      {isTokenSaleSelected ? (
        <>
          {" "}
          <IDOParticipationCard
            userKey={userKey}
            setUpdatePurchases={setUpdatePurchases}
            projectStage={projectStage}
          />
          {projectStage === "sale" && (
            <Purchases userKey={userKey} updatePurchases={updatePurchases} />
          )}
        </>
      ) : (
        <ProjectDetails projectId={projectId} userKey={userKey} />
      )}
    </div>
  );
}
