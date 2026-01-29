import React from "react";
import Image from "next/image";

const Point = ({ pointer }) => {
  return (
    <li className="flex  gap-3 text-left justify-center items-center ">
      <Image src={pointer.img} alt="" className="" />
      <div>
        <h3 className="font-semibold">{pointer.heading}</h3>
        <p>{pointer.point}</p>
      </div>
    </li>
  );
};

export default Point;
