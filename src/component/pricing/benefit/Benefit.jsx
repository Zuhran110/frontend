import benefit from "@/assets/pricing/benefit.svg";
import Image from "next/image";
import Cards from "./subComp/Cards";

const Benefit = () => {
  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-4 md:py-18 xl:pb-36 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-evenly flex flex-col lg:flex-row">
      <div className="w-full md:w-2/3 lg:w-1/3 text-center md:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mb-3 md:mb-6">
          What <span className="text-custom-text font-bold">Benefits</span> Will
          You Get
        </h1>
        <Cards />
      </div>
      <Image src={benefit} alt="benefit" />
    </div>
  );
};

export default Benefit;
