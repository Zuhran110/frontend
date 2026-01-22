import React from "react";

const Card = ({ specifications, description }) => {
  return (
    <div className="bg-custom-bg border border-transparent rounded-lg h-full  text-center gap-0 lg:gap-8 p-6 pt-4 text-white shadow-md overflow-hidden w-full max-w-sm">
      <h2 className=" text-3xl md:text-5xl font-bold">{specifications}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default Card;
