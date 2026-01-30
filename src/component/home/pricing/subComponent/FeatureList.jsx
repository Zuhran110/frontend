import React from "react";
import check from "@/assets/home/pricing/check.svg";

function FeatureList({ features }) {
  return (
    <ul className="mb-8 leading-relaxed space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex flex-row items-center gap-2">
          <img src={check.src} alt="check" className="w-5 h-5" />
          <p className="text-start">{feature}</p>
        </li>
      ))}
    </ul>
  );
}

export default FeatureList;
