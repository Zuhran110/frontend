import Image from "next/image";

const Card = ({ Img, icon, heading, description, detail }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
      <div className="w-full h-48 relative">
        <Image src={Img} alt={heading} fill className="object-cover" />
      </div>

      <div className="p-6 pt-4 relative">
        <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mb-4 -mt-10 relative z-10">
          <Image src={icon} alt={`${heading} icon`} width={24} height={24} />
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2">{heading}</h3>

        <p className="text-gray-500 text-sm mb-1">{description}</p>

        <p className="text-gray-700 font-medium text-sm">{detail}</p>
      </div>
    </div>
  );
};

export default Card;
