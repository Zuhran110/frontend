import React from "react";
import Image from "next/image";
import curve from "@/assets/home/hero/curveLine.svg";
import Cards from "./subcompo/Cards";

const OurTeam = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Meet Our Team
        </h1>
        <Image src={curve} alt="curve" className="mx-auto mt-2" />
      </div>
      <Cards />
    </div>
  );
};

export default OurTeam;
