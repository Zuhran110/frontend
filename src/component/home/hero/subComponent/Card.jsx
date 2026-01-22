import imageOne from "@/assets/home/hero/OnlineTaxation/imageTwo.svg";
import imageThree from "@/assets/home/hero/OnlineTaxation/imagethree.svg";
import imageFour from "@/assets/home/hero/OnlineTaxation/imageFour.svg";
const Card = () => {
  return (
    <div className="border border-transparent rounded-2xl bg-custom-bg flex flex-col md:flex-row text-gray-100 justify-between items-center px-16  py-4 md:py-8 my-4 md:my-8 ">
      <div className="text-2xl md:text-3xl">
        {/* left text  */}
        <h1>We specialize in the following sections</h1>
      </div>
      <div className="flex flex-col md:flex-row ">
        {/* rigth section  */}
        <img src={imageOne.src} alt="" />

        <img src={imageThree.src} alt="" />

        <img src={imageFour.src} alt="" />
      </div>
    </div>
  );
};

export default Card;
