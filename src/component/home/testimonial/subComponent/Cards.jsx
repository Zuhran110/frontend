"use client";

import { useState } from "react";
import Card from "./Card";
import one from "@/assets/home/testimonial/one.svg";
import two from "@/assets/home/testimonial/two.svg";
import three from "@/assets/home/testimonial/three.svg";
import four from "@/assets/home/testimonial/four.svg";

const data = [
  {
    key: 1,
    img: one,
    name: "_ Aria Zinanrio",
    description:
      "Very professional and expert team. I am very satisfied with the exceptional service provided by onlineAccountant. Would definitely purchase your services in the future. 😍",
  },
  {
    key: 2,
    img: two,
    name: "Danial Plainview",
    description:
      "online accountant was the best experience. Their expertise speaks loudly throughout the entire process. They understood my requirements and provided me the exactly what i wanted.",
  },
  {
    key: 3,
    img: three,
    name: "Hans Landa",
    description:
      "Very Professional and quick team. They worked till i was satisfied and informed me at every stage of the process. They involved and I felt confident in the decision being made. 100% recommended!",
  },
  {
    key: 4,
    img: four,
    name: "Scout Finch",
    description:
      "working with online accountant for the past 3 years, and i am continuously by their expertise and attention to details. I am Confident in the recommending their service  to fellow entrepreneurs.",
  },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="text-center md:text-start max-w-2xl mb-8">
        <p className="text-gray-400 text-lg leading-relaxed mb-4">
          {data[activeIndex].description}
        </p>
        <h4 className="text-gray-400 font-semibold">
          {data[activeIndex].name}
        </h4>
      </div>

      <div className="flex items-center gap-4">
        {data.map((item, index) => (
          <Card
            key={item.key}
            item={item}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
