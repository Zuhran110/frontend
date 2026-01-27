import React from "react";
import Card from "./Card";

const Cards = ({ data, openIndex, setOpenIndex }) => {
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <Card
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Cards;
