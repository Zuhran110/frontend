import Cards from "./Cards/Cards";

const AmazingService = () => {
  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-12 md:py-20 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white flex flex-col justify-center items-center">
      <div className="w-full md:w-2/3 text-center ">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Our Amazing Services
        </h1>{" "}
        <p className="text-gray-600 text-lg leading-relaxed ">
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
