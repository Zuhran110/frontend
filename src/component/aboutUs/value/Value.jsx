import ValueImage from "@/assets/aboutUs/value.svg";
import Image from "next/image";

const Value = () => {
  return (
    <div className="flex flex-col lg:flex-row relative bg-linear-to-r from-blue-50 via-blue-50 to-transparent px-3 md:px-16 xl:px-44 py-4 md:py-12 overflow-hidden justify-evenly">
      <Image src={ValueImage} alt="Value" className="my-2" />
      <div className="relative container flex flex-col gap-3 w-full xl:w-1/2 justify-center">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          We exist to take the “ugh” out of your books. Our UK-based crew pairs
          friendly humans with the smartest cloud tech—Xero, QuickBooks and a
          few secret shortcuts—to give you spot-on numbers, bank-level security
          and next-step advice in plain English. From first invoice to year-end
          close, we’re the extra teammate who keeps everything tidy, timely and
          ready for growth.
        </p>
      </div>
    </div>
  );
};

export default Value;
