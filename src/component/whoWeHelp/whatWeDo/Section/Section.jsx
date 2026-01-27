import React from "react";
import Image from "next/image";
const Section = ({ section, index }) => {
  const { heading, description, img } = section;

  return (
    <div className=" p-6 w-full lg:w-5/6">
      <Image src={img} alt="img" />
      {/* Heading */}
      <h3 className="text-lg font-bold text-custom-bg my-3">{heading}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Section;
