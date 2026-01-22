import Image from "next/image";

const Card = ({ img, description }) => {
  return (
    <li className="flex items-center gap-3">
      <Image
        src={img}
        alt=""
        width={20}
        height={20}
        className="flex-shrink-0"
      />
      <span className="text-gray-700">{description}</span>
    </li>
  );
};

export default Card;
