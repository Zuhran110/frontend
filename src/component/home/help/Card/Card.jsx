import Image from "next/image";
import Link from "next/link";

const Card = ({ slug, img, heading, description }) => {
  return (
    <div
      className="relative
  bg-white
  rounded-lg
  shadow-md
  p-6
  hover:shadow-lg
  transition-shadow
  duration-300


  /* The 5/6 Border Logic */
  before:content-['']
  before:absolute
  before:left-0
  before:top-1/2
  before:-translate-y-1/2
  before:w-1
  before:h-[83.33%]
  before:bg-custom-bg
  before:rounded-r-lg"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <Image src={img} alt={heading} width={80} height={80} />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{heading}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <Link
          href={`/WhoWeHelp/${slug}`}
          className="bg-custom-bg text-white px-8 py-2 mt-3 font-semibold border-2 rounded-lg border-transparent hidden md:flex hover:opacity-90 transition-opacity"
        >
          Find Out More
        </Link>
      </div>
    </div>
  );
};

export default Card;
