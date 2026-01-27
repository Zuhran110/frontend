import React from "react";
import PointDis from "./PointDis";

const PointsDis = ({ data }) => {
  if (!data || data.length === 0) return null;

  const section = data[0];

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_3fr]">
      <h2 className="text-2xl lg:text-4xl text-custom-text">
        {section.heading}
      </h2>
      <ul className="flex flex-col gap-4">
        {section.pointers?.map((pointer, index) => (
          <PointDis key={index} pointer={pointer} />
        ))}
      </ul>
    </div>
  );
};

export default PointsDis;
