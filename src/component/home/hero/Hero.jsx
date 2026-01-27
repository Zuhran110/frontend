import GetStartedNow from "@/component/shared/button/GetStartedNow";
import QuoteForm from "@/component/shared/form/QuoteForm";
import curveLine from "@/assets/home/hero/curveLine.svg";
import Card from "./subComponent/Card";

const Hero = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-16 xl:px-44 py-4 md:py-12 overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* left text */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            <span className="text-custom-bg block">We Provide</span>
            <span className="text-custom-text block">Accounting</span>
            <span className="text-custom-bg block">Services to UK</span>
            <span className="text-custom-bg block">Businesses</span>
          </h1>

          {/* Curved line SVG */}
          <img
            src={curveLine.src}
            alt="curveLine"
            className="my-2 md:my-4 lg:my-6 xl:my-8 2xl:my-10"
          />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            We offer expert Online Taxation services tailored for Individuals,
            Sole Traders, Limited Companies, Freelancers, Contractors,
            Partnerships, Landlords, Startups, and Small Businesses. No matter
            your business size or structure, we have the perfect package for
            you.
          </p>
          <div className="w-full md:w-1/2 2xl:w-50">
            <GetStartedNow />
          </div>
        </div>

        {/* form */}
        <div className="flex-1 w-full max-w-md lg:max-w-lg">
          <QuoteForm />
        </div>
      </div>

      <Card />
    </div>
  );
};

export default Hero;
