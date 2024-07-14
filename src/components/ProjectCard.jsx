import React from "react";

export default function ProjectCard() {
  return (
    <div className="grid w-full gap-4 px-8 py-12 bg-slate-200 rounded-3xl place-items-center  hover:shadow-lg hover:-translate-y-1">
      <div className="w-full flex text-white bg-blue-600">Hello</div>
      <div className="w-full flex  text-black bg-gray-100">Hello</div>
      <img
        className="w-full shadow-xl rounded-xl "
        src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/3/white-card.svg"
        alt=""
      />
    </div>
  );
}
