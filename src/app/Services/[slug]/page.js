import { notFound } from "next/navigation";
import Hero from "@/component/services/hero/Hero";
import servicePgData from "@/component/tempData/servicePgData";
import Panelty from "@/component/services/panelty/Panelty";
import WhyUs from "@/component/services/whyUs/WhyUs";
import Introduction from "@/component/services/introSection/Introduction";
import WhyUsTwo from "@/component/services/whyUstwo/WhyUsTwo";
import Quiz from "@/component/services/quiz/Quiz";
import Contacts from "@/component/services/contactUs/Contacts";
import StepByStep from "@/component/services/stepByStep/StepByStep";

export async function generateStaticParams() {
  return servicePgData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ServicesPage({ params }) {
  const { slug } = await params;
  const data = servicePgData.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Hero data={data} />
      <StepByStep data={data.stepbystep} />
      <Introduction data={data.introSection} />
      <Panelty data={data.Panelty} />
      <WhyUs data={data.whyUsSection} />
      <WhyUsTwo data={data.whyUsSectionTwo} />
      <Contacts data={data.ContactUsSection} />
      <Quiz data={data.QuizSection} />
    </>
  );
}
