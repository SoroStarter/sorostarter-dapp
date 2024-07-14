import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { useParams } from "react-router-dom";

export default function Project({ userKey }) {
  const { projectId } = useParams();
  return (
    <div className="flex flex-1 ">
      <div className="hidden md:flex md:w-30 md:flex-col">
        <div className="flex flex-col  pt-0 mt-[250px] overflow-y-auto  lg:sticky lg:top-8">
          <div className="flex flex-col flex-1 px-3 mt-6  ">
            <hr className="border-slate-300" />
            <div className="space-y-2">
              <nav className="flex-1 space-y-1">
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-200 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Introduction
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-200 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-200 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Problem
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-200 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Solution
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-200 hover:text-white rounded-lg hover:bg-indigo-600 group"
                >
                  Token Utility
                </a>
              </nav>

              <hr className="border-gray-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <main>
          <div className="py-6">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
              <ProjectDetails projectId={projectId} userKey={userKey} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
