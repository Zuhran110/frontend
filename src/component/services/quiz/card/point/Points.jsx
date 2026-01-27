import React from "react";
import Point from "./Point";

const Points = ({ points }) => {
  if (!points || points.length === 0) return null;

  return (
    <ul className="mt-4 space-y-3">
      {points.map((point, index) => (
        <Point key={index} img={point.img} description={point.description} />
      ))}
    </ul>
  );
};

export default Points;
