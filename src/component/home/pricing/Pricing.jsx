import PricingToggle from "./subComponent/PricingToggle";

const Pricing = () => {
  return (
    <div className="bg-custom-bg flex flex-col text-gray-100 px-16 xl:px-40 py-4 md:py-12 items-center">
      <h1 className="text-2xl md:text-3xl 2xl:text-4xl">Our Pricing</h1>
      <p>Choose a Plan that Suits Your Business</p>

      <PricingToggle />
    </div>
  );
};

export default Pricing;
