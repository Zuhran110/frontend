import React from "react";
import Image from "next/image";

const PointDis = ({ pointer }) => {
  return (
    <li className="flex items-center gap-3 text-left">
      <Image src={pointer.img} alt="" className="" />
      <div>
        <h3 className="font-semibold">{pointer.heading}</h3>
        <p>{pointer.point}</p>
      </div>
    </li>
  );
};

export default PointDis;
