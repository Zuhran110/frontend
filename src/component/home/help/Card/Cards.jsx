import contractors from "@/assets/home/help/contractors.svg";
import freelancer from "@/assets/home/help/freelancer.svg";
import Individual from "@/assets/home/help/individual.svg";
import limitedCompany from "@/assets/home/help/limitedCompany.svg";
import smallBusiness from "@/assets/home/help/smallBusiness.svg";
import soleTrader from "@/assets/home/help/soleTrader.svg";
import Card from "./Card";

const data = [
  {
    img: Individual,
    heading: "Individual",
    description:
      "Simplicity and complete bookkeeping support for an unbeatable price Our Individuals business accountancy services have been designed to help your business build the strong foundations it needs to grow.",
  },
  {
    img: soleTrader,
    heading: "Sole Trader",
    description:
      "Simplicity and complete bookkeeping support for an unbeatable price Being a Sole Trader, running your own business and juggling a number of different balls at once is tough.  This can take its toll on the amount of free time you have to spend on the important things in life.",
  },
  {
    img: limitedCompany,
    heading: "Limited Company",
    description:
      "Expert bookkeeping assistance for your growing business If you are finding Limited Company finances time consuming and a real headache, don't worry, Online Taxtation Limited Company Accounts Service can help.",
  },
  {
    img: smallBusiness,
    heading: "Small Businesses",
    description:
      "Expert bookkeeping services for small-businesses Our fully managed Small Business Accounting Service frees up valuable time for small business owners as well as removing the stress associated with doing your own accounts, tax and bookkeeping.",
  },
  {
    img: freelancer,
    heading: "Freelancer",
    description:
      "Expert bookkeeping services for self-employed freelancers. As a freelancer your time should be spent growing your business not stressing out over your accounting.  Our expert team of accountants for freelancers will crunch your numbers so you don't have to.",
  },
  {
    img: contractors,
    heading: "Contractors",
    description:
      "Experienced bookkeeping services for contractors Managing your Lifestyle Business  accounts can often get pushed to the bottom of the to-do list. Why waste time stressing about your business finances when online Taxation team of expert accountants can take care of everything for you.",
  },
];

const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Cards;
