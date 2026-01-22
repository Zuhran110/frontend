import Cards from "./Card/Cards";
const Help = () => {
  return (
    <div className="w-full px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center text-center align-middle">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl">
        Who we <span className="text-custom-text">Help</span>
      </h1>
      <p className="w-full md:w-5/6 text-center">
        We provide Comprehensive bookkeeping services for every business type,
        whether you're an Individual, Sole Trader, Limited Company, Small
        Business, Freelancer, Contractor, Partnership, Landlord or Start Up we
        have the online perfect package for you.
      </p>
      <Cards />
    </div>
  );
};

export default Help;
