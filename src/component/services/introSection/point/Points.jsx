import React from "react";
import Point from "./Point";

const Points = ({ points }) => {
  if (!points || points.length === 0) return null;

  return (
    <ul className="mt-4 space-y-3">
      {points.map((point, index) => {
        // Check if point is an object or just a string
        const desc = typeof point === "string" ? point : point.description;
        const icon = typeof point === "string" ? null : point.img;

        return <Point key={index} img={icon} description={desc} />;
      })}
    </ul>
  );
};

export default Points;
