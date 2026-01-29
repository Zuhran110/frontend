import Cards from "./subComponent/Cards";
import GetStarted from "@/component/shared/form/GetStarted";

const Testimonial = () => {
  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-4 md:py-12 2xl:pb-24 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-evenly">
      <div className="flex flex-row items-center w-full gap-4 text-gray-300 pb-3 md:pb-9 2xl:pb-12">
        <p className="whitespace-nowrap">Testimonial:</p>
        <hr className="grow border-t border-gray-300" />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full sm:w-2/3 md:w-1/2">
          <h1 className="text-custom-bg text-2xl mb-4 md:mb-12 2xl:mb-18 md:text-3xl lg:text-4xl 2xl:text-6xl font-bold text-center md:text-start">
            What People are Saying About us
          </h1>
          <Cards />
        </div>

        <div className="w-full md:w-1/2 xl:w-1/3 py-3 md:py-0">
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
