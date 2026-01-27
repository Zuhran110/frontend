import React from "react";

const Card = ({ card }) => {
  const { img, heading, description } = card;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-xl">
        <img
          src={img?.src}
          alt={heading}
          className="w-full h-1/2 object-cover"
        />
      </div>

      {/* Heading */}
      <h3 className="text-lg font-bold text-custom-bg mb-2">{heading}</h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
