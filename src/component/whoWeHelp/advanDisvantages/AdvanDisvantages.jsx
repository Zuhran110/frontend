import React from "react";

import Points from "./advantages/Points";
import PointsDis from "./disadvantages/PointsDis";

const AdvanDisvantages = ({ data }) => {
  if (!data) return null;

  return (
    <div className="w-full px-4 md:px-16 xl:px-44 py-4 md:py-12 2xl:py-24 bg-custom-bg flex flex-col justify-center items-center text-white gap-3">
      <div className="w-9/10 md:w-7/8 lg:w-5/6 flex flex-col lg:flex-row gap-6 md:gap-8 justify-evenly">
        <div>
          <Points data={data.advantages} />
        </div>
        <div>
          <PointsDis data={data.disadvantages} />
        </div>
      </div>
    </div>
  );
};

export default AdvanDisvantages;
