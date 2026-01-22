import gmail from "@/assets/home/info/gmail.svg";
import phone from "@/assets/home/info/phone.svg";
import whatsapp from "@/assets/home/info/whatsapp.svg";
import Card from "./Card";

const data = [
  {
    img: gmail.src,
    name: "Gmail",
    description: "info@onlinetaxation.com",
  },
  {
    img: whatsapp.src,
    name: "WhatsApp",
    description: "+44 3215 658",
  },
  {
    img: phone.src,
    name: "Phone",
    description: "+44 3215 658",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Cards;
