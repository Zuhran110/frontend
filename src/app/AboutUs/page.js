import Hero from "@/component/aboutUs/hero/Hero";
import Mission from "@/component/aboutUs/mission/Mission";
import Info from "@/component/home/information/Info";
import Value from "@/component/aboutUs/value/Value";
import OurTeam from "@/component/aboutUs/ourTeam/OurTeam";

export default function ContactPage() {
  return (
    <>
      <Hero />
      <Value />
      <Mission />
      <OurTeam />
      <Info />
    </>
  );
}
