import Subtract from "@/assets/pricing/Subtract.svg";
import Card from "./Card";

const data = [
  {
    key: 1,
    img: Subtract,
    description: "Free Consultation with a Trusted Online Taxation",
  },
  {
    key: 2,
    img: Subtract,
    description: "Maximise Your Tax Savings",
  },
  {
    key: 3,
    img: Subtract,
    description: "Deadline Reminders Never Miss a Filing Date!",
  },
  {
    key: 4,
    img: Subtract,
    description: "Dedicated Support from UK Based Accountants",
  },
];

const Cards = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 list-none mb-3 lg:mb-0">
      {data.map((item) => (
        <Card key={item.key} img={item.img} description={item.description} />
      ))}
    </ul>
  );
};

export default Cards;
