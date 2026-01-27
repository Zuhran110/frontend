import Card from "./Card";
import React from "react";

const Cards = ({ cardsData }) => {
  if (!cardsData || cardsData.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
