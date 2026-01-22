"use client";
import Accounts from "@/assets/service/Accounts.svg";
import Bookkeeping from "@/assets/service/Bookkeeping.svg";
import CompanyFormation from "@/assets/service/CompanyFormation.svg";
import CompanySecretarial from "@/assets/service/CompanySecretarial.svg";
import CorporationTax from "@/assets/service/CorporationTax.svg";
import Payroll from "@/assets/service/Payroll.svg";
import SelfAssessment from "@/assets/service/SelfAssessment.svg";
import Vat from "@/assets/service/Vat.svg";
import Card from "./Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const data = [
  {
    img: Accounts.src,
    heading: "Accounts",
    description:
      "Start your business journey with confidence. We handle the paperwork while you focus on your vision.",
  },
  {
    img: CorporationTax.src,
    heading: "Corporation Tax",
    description:
      "Managing corporation tax is a crucial yet complex aspect of running a UK-based business. We provide expert Corporation Tax",
  },
  {
    img: SelfAssessment.src,
    heading: "Self Assessment",
    description:
      "Filing your self-assessment tax return can be complex and overwhelming, but with Online Taxation",
  },
  {
    img: CompanySecretarial.src,
    heading: "Company Secretarial",
    description:
      "This service is invaluable in providing peace of mind that the company secretarial aspects of your business ",
  },
  {
    img: Payroll.src,
    heading: "Payroll",
    description:
      "When your business hires its first employee, you must register for PAYE online with HMRC.",
  },
  {
    img: Vat.src,
    heading: "Vat Services",
    description:
      "Simplify your VAT registration process with Online Taxation expert-driven VAT registration service.",
  },
  {
    img: Bookkeeping.src,
    heading: "Bookkeeping",
    description:
      "Managing your finances shouldn't be stressful.  we specialize in offering bookkeeping UK services",
  },
  {
    img: CompanyFormation.src,
    heading: "Company Formation",
    description:
      "Welcome to online Taxation, your ultimate solution for limited company formation and seamless UK company registration",
  },
];

const Cards = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage: 4,
            gap: "1.5rem",
          }}
          aria-label="Services"
        >
          {data.map((item, index) => (
            <SplideSlide key={index}>
              <Card
                img={item.img}
                heading={item.heading}
                description={item.description}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Cards;
