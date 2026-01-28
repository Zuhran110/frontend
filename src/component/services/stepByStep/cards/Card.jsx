import React from "react";
import Image from "next/image";

const Card = ({ card }) => {
  // Destructure from 'card' prop
  const { img, heading, description } = card;

  return (
    <div className="bg-custom-bg border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center h-full">
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-xl w-1/3 h-auto flex ">
        <Image
          src={img} // Handle both static imports and string paths
          alt={heading}
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-white mb-2">{heading}</h3>
        <p className="text-white text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
