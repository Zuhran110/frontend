import React from "react";
import Image from "next/image";

const Card = ({ img, position, name }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
        <Image
          src={img}
          alt={name}
          width={250}
          height={333}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-gray-900 text-base md:text-lg font-bold">{name}</h3>
      <p className="text-gray-500 text-sm">{position}</p>
    </div>
  );
};

export default Card;
