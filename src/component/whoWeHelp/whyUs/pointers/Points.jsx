import Point from "./Point";

import React from "react";

const Points = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="flex flex-col gap-4 my-3">
      {data.map((point, index) => (
        <Point key={index} img={point.img} point={point.point} />
      ))}
    </div>
  );
};

export default Points;
