import React from "react";
import Image from "next/image";

const Point = ({ img, description }) => {
  return (
    <li className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
      {img && (
        <span className="shrink-0 w-5 h-5 mt-0.5">
          <Image src={img} alt="" width={20} height={20} className="object-contain" />
        </span>
      )}
      <span>{description}</span>
    </li>
  );
};

export default Point;
