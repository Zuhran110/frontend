import contactUsLogo from "@/assets/contactUs/contactUsHero/contactUsLogo.svg";
import Image from "next/image";
import Cards from "./subCompo/Cards";

const Hero = () => {
  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-8 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white flex flex-col justify-center items-center">
      <div className="w-full md:w-2/3 text-center md:text-left mb-12 flex flex-col justify-center items-center">
        <Image src={contactUsLogo} alt="contactUsLogo" />
        <h1 className="bg-linear-to-r from-custom-text to-custom-bg bg-clip-text text-transparent text-3xl md:text-4xl font-extrabold mb-4">
          Contact our friendly Team
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Let us know how we can help you
        </p>
      </div>

      <Cards />
    </div>
  );
};

export default Hero;
