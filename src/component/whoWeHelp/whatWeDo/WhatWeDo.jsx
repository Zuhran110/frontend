import Sections from "./Section/Sections";
import React from "react";

const HowItWork = ({ data }) => {
  if (!data || data.length === 0) return null;

  const { heading, description, sections } = data[0];

  return (
    <section className="w-full px-4 md:px-16 xl:px-44 py-4 md:py-12 2xl:py-24 bg-linear-to-r from-blue-50 via-blue-50 to-white flex flex-col justify-center items-center gap-3">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
          {heading}
        </h2>
        <p className="text-center">{description}</p>

        {/* Sections */}
        <Sections data={sections} />
      </div>
    </section>
  );
};

export default HowItWork;
