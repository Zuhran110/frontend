import Points from "./poins/Points";

import React from "react";

const WhyUsAgain = ({ data }) => {
  if (!data || data.length === 0) return console.log("din't found any data");

  const section = data[0];
  return (
    <div className="w-full px-4 md:px-16 xl:px-44 py-4 md:py-12 2xl:py-24 bg-custom-bg flex flex-col justify-center items-center text-white gap-3">
      <div className="w-9/10 md:w-7/8 lg:w-5/6 flex flex-col gap-6 md:gap-8 text-center">
        <div className="flex flex-col gap-2 md:gap-6 items-center text-center">
          <h1 className="text-custom-text text-2xl md:text-3xl 2xl:text-5xl">
            {section.heading}
          </h1>
          <p>{section.paragraph}</p>
        </div>
        <div>
          <h3 className="font-bold py-2">{section.headingAfter}</h3>
          <Points data={section.pointers} />
        </div>
        <p>{section.paragraphTwo}</p>
      </div>
    </div>
  );
};

export default WhyUsAgain;
