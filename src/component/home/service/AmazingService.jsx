import Cards from "./Cards/Cards";

const AmazingService = () => {
  return (
    <div className="w-full px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-evenly text-center">
      {" "}
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        Our Amazing Services
      </h1>{" "}
      <p>
        Welcome to our all-inclusive professional Accountancy service portfolio,
        designed to satisfy the various financial requirements of individuals,
        partnerships, limited liability programs, sole traders, and limited
        corporations across the United Kingdom
      </p>
      <Cards />
    </div>
  );
};

export default AmazingService;
