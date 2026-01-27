import Section from "./Section";
import React from "react";

const Sections = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div
      className={`grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${
        data.length > 3 ? "xl:grid-cols-4" : ""
      }`}
    >
      {data.map((section, index) => (
        <Section key={index} section={section} index={index} />
      ))}
    </div>
  );
};

export default Sections;
