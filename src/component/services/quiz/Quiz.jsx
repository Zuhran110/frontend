"use client";

import React, { useState } from "react";
import Cards from "./card/Cards";

const Quiz = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!data || data.length === 0) return null;

  return (
    <section className="flex flex-col items-center px-3 md:px-16 xl:px-44 py-12 md:py-20 bg-linear-to-r from-blue-50 via-blue-50 to-white">
      {/* Header */}
      <div className="flex justify-center items-center py-3 gap-3 mb-10 border border-gray-400 shadow rounded-2xl  w-full md:w-1/2 xl:w-1/3">
        <span className="bg-custom-bg text-white px-5 py-2 rounded-lg text-2xl md:text-3xl font-semibold">
          Frequently
        </span>
        <span className="text-2xl md:text-3xl font-semibold text-gray-800">
          Ask Questions
        </span>
      </div>

      {/* Accordion Items */}
      <Cards data={data} openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </section>
  );
};

export default Quiz;
