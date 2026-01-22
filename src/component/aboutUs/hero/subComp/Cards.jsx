import React from "react";
import Card from "./Card";

const data = [
  {
    key: 1,
    specifications: "15+",
    description: "Year of Experience",
  },
  {
    key: 2,
    specifications: "1000+",
    description: "Happy Clients",
  },
  {
    key: 3,
    specifications: "ACCA",
    description: "Qualified Accountants",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-3 md:my-9 xl:my-10 2xl:my-12">
      {data.map((item) => (
        <Card
          key={item.key}
          specifications={item.specifications}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Cards;
