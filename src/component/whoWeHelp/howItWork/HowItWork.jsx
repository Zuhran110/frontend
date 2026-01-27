import Sections from "./Section/Sections";
import React from "react";

const HowItWork = ({ data }) => {
  if (!data || data.length === 0) return null;

  const { heading, sections } = data[0];

  return (
    <section className="w-full px-3 md:px-16 xl:px-44 py-4 md:py-12 2xl:py-24 bg-custom-bg flex flex-col justify-center items-center text-white gap-3">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          {heading}
        </h2>

        {/* Sections */}
        <Sections data={sections} />
      </div>
    </section>
  );
};

export default HowItWork;
