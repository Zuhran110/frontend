import Cards from "./Cards/Cards";

const AmazingService = () => {
  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-center content-center text-center">
      {" "}
      <div className="w-full md:w-2/3 text-center mx-auto">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-3">
          Our Amazing Services
        </h1>{" "}
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to our all-inclusive professional Accountancy service
          portfolio, designed to satisfy the various financial requirements of
          individuals, partnerships, limited liability programs, sole traders,
          and limited corporations across the United Kingdom
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default AmazingService;
