import Hero from "@/component/home/hero/Hero";
import Pricing from "@/component/home/pricing/Pricing";
import AmazingService from "@/component/home/service/AmazingService";
import Help from "@/component/home/help/Help";
import Info from "@/component/home/information/Info";
import Testimonial from "@/component/home/testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <AmazingService />
      <Help />
      <Info />
      <Testimonial />
    </>
  );
}
