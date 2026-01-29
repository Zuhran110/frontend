import React from "react";
import Image from "next/image";
import Points from "./pointers/Points";
const WhyUsTwo = ({ data }) => {
  if (!data || data.length === 0) return null;

  const section = data[0];

  return (
    <div className="w-full px-3 md:px-16 xl:px-44 py-4 md:py-12 bg-linear-to-r from-blue-50 via-blue-50 to-white flex flex-col-reverse md:flex-col lg:flex-row justify-evenly">
      <Image src={section.img} alt="img" />
      <div className="w-full md:w-1/2 2xl:w-1/3 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-semibold text-custom-bg">
          {section.heading}{" "}
          <span className="text-custom-text">{section.highlightedHeading}</span>{" "}
          {section.headingAfter}{" "}
        </h1>
        <div className="my-3">
          <p>{section.paragraph}</p>
          <p>{section.paragraphtwo}</p>
          <Points data={section.pointers} />
          <p> {section.paragraphThree} </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsTwo;
