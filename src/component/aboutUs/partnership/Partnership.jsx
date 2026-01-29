import Image from "next/image";
import PartnershipImg from "@/assets/aboutUs/partnership.svg";

const Partnership = () => {
  return (
    <div className="bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-3 md:px-16 xl:px-44 py-4 md:py-12 ">
      {/* Header Section */}
      <div className="bg-custom-bg rounded-2xl shadow-lg">
        <div className="text-center text-white pt-12 pb-8 px-6 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Our Partnerships
          </h1>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
            Great books need great teammates. We team up with the banks, apps
            and advisors you already like—plus a few we've road-tested
            ourselves—so your Xero stays slick, your cash-flow forecasts feel
            psychic, and you always have the right expert on speed-dial.
          </p>
        </div>

        {/* Middle Section with Card and Image */}
        <div className="flex flex-col lg:flex-row items-center justify-evenly gap-4 md:gap-8 px-2 md:px-6 py-3 md:py-8">
          {/* Left Card */}
          <div className="  p-8 text-white max-w-xl w-full">
            <h2 className="text-lg md:text-xl font-bold text-white mb-4">
              Our partnerships enable us to:
            </h2>
            <p className="text-sm md:text-base text-white leading-relaxed w-full">
              We hook your books to the newest cloud apps before your
              competitors even know they exist, swap daily tips with bank
              managers, tax geeks and growth coaches so the advice you hear is
              fresh, not recycled, stay in your corner for the long haul—rainy
              days, big leaps and every late-night worry in between—and partner
              with the sharpest minds in finance so your books, funding and
              game-plan move in perfect sync.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <Image
              src={PartnershipImg}
              alt="Partnership illustration"
              className="w-64 md:w-80 lg:w-96 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center  py-10 px-6 md:px-16 lg:px-32">
        <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto opacity-90">
          By sticking to our clear vision, friendly mission and hand-picked
          partners, Online Taxation Ltd keeps your books sharp, your evenings
          free and your business ready for whatever the digital world throws at
          it next.
        </p>
      </div>
    </div>
  );
};

export default Partnership;
