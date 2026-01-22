import Image from "next/image";

const Card = ({ img, name, description }) => {
  return (
    <div className="bg-white border rounded-2xl border-gray-300 shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
      <div className="w-14 h-14 mb-4 relative">
        <Image src={img} alt={name} fill className="object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Card;
