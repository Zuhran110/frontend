import Card from "./Card";
import personA from "@/assets/aboutUs/ourTeam/personA.svg";
import personB from "@/assets/aboutUs/ourTeam/personB.svg";
import personC from "@/assets/aboutUs/ourTeam/personC.svg";
import personD from "@/assets/aboutUs/ourTeam/personD.svg";

const data = [
  {
    key: 1,
    img: personA,
    name: "Alaric Moore",
    position: "Director",
  },
  {
    key: 2,
    img: personB,
    name: "Lyra Bennett",
    position: "Founder & CEO",
  },
  {
    key: 3,
    img: personC,
    name: "Cassian Holt",
    position: "Marketing Head",
  },
  {
    key: 4,
    img: personD,
    name: "Imogen Clarke",
    position: "Finance Manager",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {data.map((card) => {
        const { key, img, name, position } = card;
        return <Card key={key} img={img} name={name} position={position} />;
      })}
    </div>
  );
};

export default Cards;
