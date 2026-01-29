import GetStartedNow from "@/component/shared/button/GetStartedNow";
import QuoteForm from "@/component/shared/form/QuoteForm";
import curveLine from "@/assets/home/hero/curveLine.svg";
import Card from "./subComponent/Card";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-3 md:px-16 xl:px-44 py-4 md:py-12 2xl:min-h-screen flex justify-center flex-col overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* left text */}
        <div className="w-full md:w-2/3 2xl:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight mb-4">
            <span className="text-custom-bg block">We Provide</span>
            <span className="text-custom-text block">Accounting</span>
            <span className="text-custom-bg block">Services to UK</span>
            <span className="text-custom-bg block">Businesses</span>
          </h1>

          {/* Curved line SVG */}
          <img
            src={curveLine.src}
            alt="curveLine"
            className="my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10 w-5/6"
          />

          <p className="text-gray-600 text-base  leading-relaxed mb-8 w-full">
            We offer expert Online Taxation services tailored for Individuals,
            Sole Traders, Limited Companies, Freelancers, Contractors,
            Partnerships, Landlords, Startups, and Small Businesses. No matter
            your business size or structure, we have the perfect package for
            you.
          </p>
          <div className="w-full md:w-1/2 2xl:w-50 text-center">
            <GetStartedNow />
          </div>
        </div>

        {/* form */}
        <div className="w-full md:w-2/3 2xl:w-1/3 h-full bg-white rounded-2xl shadow-xl p-6 md:p-8  flex flex-col justify-center">
          <h2 className="text-custom-bg text-xl md:text-3xl font-bold mb-6">
            Quick <span className="text-custom-text"> Quote </span>
          </h2>
          <QuoteForm />
        </div>
      </div>

      <Card />
    </div>
  );
};

export default Hero;
