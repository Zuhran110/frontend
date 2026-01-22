import Image from "next/image";

const Card = ({ item, isActive, onClick }) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
          isActive
            ? "border-blue-500 scale-110"
            : "border-transparent opacity-70 hover:opacity-100"
        }`}
      >
        <Image
          src={item.img}
          alt={item.name}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>

      {isActive && <div className="w-8 h-1 bg-blue-500 rounded-full mt-2" />}
    </div>
  );
};

export default Card;
