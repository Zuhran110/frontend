import Card from "./Card";
import React from "react";

const Cards = ({ cardsData }) => {
  if (!cardsData?.length) return null;

  const gridCols =
    cardsData.length === 4
      ? "lg:grid-cols-4 w-full"
      : cardsData.length === 3
        ? "lg:grid-cols-3 w-2/3"
        : cardsData.length === 2
          ? "lg:grid-cols-2 w-2/3"
          : "lg:grid-cols-1";

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridCols} gap-6 `}>
      {cardsData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
