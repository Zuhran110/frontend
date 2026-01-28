import React from "react";

import Points from "../point/Points";

const Card = ({ card }) => {
  // Destructure from 'card' prop
  const { img, heading, description, points } = card;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-xl">
        <img
          src={img?.src || img} // Handle both static imports and string paths
          alt={heading}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-custom-bg mb-2">{heading}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Pass the 'points' array from your data */}
        <Points points={points} />
      </div>
    </div>
  );
};

export default Card;
