import React from "react";

const Section = ({ section, index }) => {
  const { heading, description } = section;

  return (
    <div className=" p-6 text-white">
      {/* Heading */}
      <h3 className="text-lg font-bold text-[#3296FD] mb-3">{heading}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Section;
