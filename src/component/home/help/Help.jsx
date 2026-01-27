import Cards from "./Card/Cards";
const Help = () => {
  return (
    <div className="w-full px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center text-center align-middle">
      <div className="w-full md:w-2/3 text-center mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl text-center mb-3">
          Who we <span className="text-custom-text">Help</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide Comprehensive bookkeeping services for every business type,
          whether you're an Individual, Sole Trader, Limited Company, Small
          Business, Freelancer, Contractor, Partnership, Landlord or Start Up we
          have the online perfect package for you.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default Help;
