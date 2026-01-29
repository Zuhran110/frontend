import aboutUsHero from "@/assets/aboutUs/aboutUsHeroImg.svg";
import Image from "next/image";
import StarO from "@/assets/aboutUs/abouthero/StarO.svg";
import StarB from "@/assets/aboutUs/abouthero/StarB.svg";
import Frame from "@/assets/aboutUs/abouthero/Frame.svg";
import Cards from "./subComp/Cards";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-3 md:px-16 xl:px-44 py-4 md:py-12 overflow-hidden ">
      <div className="flex flex-col lg:flex-row  justify-between  items-center lg:items-start">
        <div className="relative container flex flex-col gap-10 lg:gap-16 w-full  xl:w-1/2 justify-center">
          <div className="flex flex-col">
            <Image src={StarO} alt="stareO" className="mx-6" />
            <Image src={StarB} alt="starB" />
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              About Us
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We plug your sales, bills and receipts into Xero or QuickBooks,
              hit save, and hand you tidy, up-to-the-minute numbers you can
              actually use. No more Sunday-night receipt hunts or HMRC
              headaches—just automated, compliant books and friendly advice when
              you need it. From start-ups to six-figure crews, we tailor every
              click so you stay in control and cash-confident. Cloud
              bookkeeping, minus the clouds.
            </p>
          </div>
          <div className="border border-gray-300 p-6 w-full  xl:w-1/2 bg-white shadow rounded-lg mb-3 lg:mb-0">
            <div className="flex flex-row gap-2 align-middle mb-2 content-center">
              <Image src={Frame} alt="frame" />
              <h2 className="text-lg leading-relaxed">HMRC Authorised</h2>
            </div>
            <p className="text-sm leading-relaxed ">
              Authorised by HMRC & Company House
            </p>
          </div>
        </div>
        <Image src={aboutUsHero} alt="aboutUsHero" />
      </div>
      <Cards />
    </div>
  );
};

export default Hero;
