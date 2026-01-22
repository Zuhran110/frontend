import Image from "next/image";

const Card = ({ img, heading, description }) => {
  return (
    <div className="bg-white border rounded-2xl border-gray-300 shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="w-16 h-16 mb-4 relative">
        <Image src={img} alt={heading} fill className="object-contain" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{heading}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
