import Cards from "./cards/Cards";
import React from "react";

const StepByStep = ({ data }) => {
  if (!data) return null;

  // Fix: Match the keys exactly as they appear in your data object
  const { heading, highlightedHeading, headingAgain, description, cards } =
    data;

  return (
    <section className="px-8 md:px-16 xl:px-44 py-12 md:py-20 bg-custom-bg">
      <div className="container mx-auto flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-white">
          {heading}{" "}
          <span className="text-custom-text">{highlightedHeading}</span>{" "}
          {headingAgain}
        </h2>

        {/* Description (Added this since it was in your data) */}
        {description && (
          <p className="text-white text-center max-w-2xl mb-12">
            {description}
          </p>
        )}

        {/* Cards Grid */}
        <Cards cardsData={cards} />
      </div>
    </section>
  );
};

export default StepByStep;
