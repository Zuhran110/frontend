import Cards from "./cards/Cards";
import React from "react";
import ContactUsBtn from "@/component/shared/button/ContactUsBtn";

const Introduction = ({ data }) => {
  if (!data) return null;

  const { heading, highlightedSection, headingagain, Cards: cardsData } = data;

  return (
    <section className="px-3 md:px-16 xl:px-44 py-12 md:py-20 bg-linear-to-r from-blue-50 via-blue-50 to-white">
      <div className="container mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-custom-bg">
          {heading}{" "}
          <span className=" text-custom-text">{highlightedSection}</span>{" "}
          {headingagain}
        </h2>

        {/* Cards Grid */}
        <Cards cardsData={cardsData} />
      </div>
    </section>
  );
};

export default Introduction;
