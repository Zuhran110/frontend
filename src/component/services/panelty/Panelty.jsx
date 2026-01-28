import React from "react";

const Panelty = ({ data }) => {
  if (!data) return null;

  const {
    heading,
    paragraph,
    paraAgain,
    paraAgainAgain,
    paraLast,
    highlightedtext,
    highlightedtextAgain,
    highlightedtextLast,
  } = data;
  return (
    <div className="flex flex-col w-full px-16 xl:px-44 py-4 lg:py-8 z-50 gap-4 bg-linear-to-r from-blue-50 via-blue-50 to-white items-center justify-between">
      <h1 className="text-center text-custom-text text-2xl md:text-3xl 2xl:text-4xl ">
        {heading}
      </h1>
      <p className="text-2xl md:text-3xl text-center px-3 md:px-9 2xl:w-3/4">
        {paragraph} <span className="text-custom-text">{highlightedtext}</span>{" "}
        {paraAgain}
        <span className="text-custom-text">{highlightedtextAgain}</span>
        {paraAgainAgain}
        <span className="text-custom-text">{highlightedtextLast}</span>
        {paraLast}{" "}
      </p>
    </div>
  );
};

export default Panelty;
