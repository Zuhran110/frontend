import React from "react";
import Image from "next/image";
import curve from "@/assets/home/hero/curveLine.svg";
import Cards from "./subcompo/Cards";

const OurTeam = () => {
  return (
    <div className="w-full px-8 md:px-16 xl:px-44 py-12 md:py-20 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white ">
      <div className="mb-12 flex flex-col justify-center items-center w-full md:w-1/3">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Meet Our Team
        </h1>
        <Image src={curve} alt="curve" className="mt-2" />
      </div>
      <Cards />
    </div>
  );
};

export default OurTeam;
