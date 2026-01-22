import address from "@/assets/contactUs/contactUsHero/address.svg";
import addressRec from "@/assets/contactUs/contactUsHero/addressRec.svg";
import gmail from "@/assets/contactUs/contactUsHero/gmail.svg";
import gmailRec from "@/assets/contactUs/contactUsHero/gmailRec.svg";
import phone from "@/assets/contactUs/contactUsHero/phone.svg";
import phoneRec from "@/assets/contactUs/contactUsHero/phoneRec.svg";
import Card from "./Card";

const data = [
  {
    key: 1,
    Img: phoneRec,
    icon: phone,
    heading: "Call Us:",
    description: "Speak to our friendly team",
    detail: "07377 447481",
  },
  {
    key: 2,
    Img: gmailRec,
    icon: gmail,
    heading: "Email:",
    description: "We are here to help you",
    detail: "admin@onlineukaccountant.co.uk",
  },
  {
    key: 3,
    Img: addressRec,
    icon: address,
    heading: "Address:",
    description: "Mon- Fri 7:00-18:00",
    detail: "33 Flanders Road, London, United Kingdom, E6 6DX",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {data.map((item) => (
        <Card
          key={item.key}
          Img={item.Img}
          icon={item.icon}
          heading={item.heading}
          description={item.description}
          detail={item.detail}
        />
      ))}
    </div>
  );
};

export default Cards;
