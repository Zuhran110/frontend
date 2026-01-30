import React from "react";
import circleSolid from "@/assets/home/pricing/circleSolid.svg";

function HighlightsList({ highlights }) {
  return (
    <ul className="flex flex-col md:flex-row justify-evenly w-3/4 my-6 gap-4">
      {highlights.map((highlight, index) => (
        <li key={index} className="flex flex-row gap-2">
          <img src={circleSolid.src} alt="" />
          {highlight}
        </li>
      ))}
    </ul>
  );
}

export default HighlightsList;
