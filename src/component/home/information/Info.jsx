import React from "react";
import Cards from "./Card/Cards";

const Info = () => {
  return (
    <section className="w-full px-16 xl:px-44 py-4 md:py-12 z-50 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-evenly">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            For More Information
          </h2>
          <p className="text-gray-600">Speak To Our Friendly Team</p>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Info;
