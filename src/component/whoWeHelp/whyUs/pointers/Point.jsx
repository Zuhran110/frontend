import React from "react";
import Image from "next/image";

const Point = ({ img, point }) => {
  if (!point) return null;

  return (
    <div className="flex flex-row gap-2 align-center items-center">
      {img && <Image src={img} alt="img" />}
      {point}
    </div>
  );
};

export default Point;
