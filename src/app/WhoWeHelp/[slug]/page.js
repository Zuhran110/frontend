import { notFound } from "next/navigation";
import Hero from "@/component/whoWeHelp/hero/Hero";
import Data from "@/component/tempData/data";
import Introduction from "@/component/whoWeHelp/introSection/Introduction";
import Quiz from "@/component/whoWeHelp/quiz/Quiz";
import WhyUs from "@/component/whoWeHelp/whyUs/WhyUs";
import WhyUsTwo from "@/component/whoWeHelp/whyUstwo/WhyUsTwo";
import WhyUsAgain from "@/component/whoWeHelp/whyUsAgain/WhyUsAgain";
import AdvanDisvantages from "@/component/whoWeHelp/advanDisvantages/AdvanDisvantages";
import HowItWork from "@/component/whoWeHelp/howItWork/HowItWork";
import WhatWeDo from "@/component/whoWeHelp/whatWeDo/WhatWeDo";

export async function generateStaticParams() {
  return Data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function WhoWeHelpPage({ params }) {
  const { slug } = await params;
  const data = Data.find((item) => item.slug === slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Hero data={data} />
      <Introduction data={data} />
      <WhyUsAgain data={data.whyUsAgain} />
      <HowItWork data={data.howItWorksSection} />
      <WhatWeDo data={data.whatWeDoSection} />
      <WhyUs data={data.whyUsSection} />
      <WhyUsTwo data={data.whyUsSectionTwo} />
      <AdvanDisvantages data={data.advanDisvantages} />
      <Quiz data={data.QuizSection} />
    </>
  );
}
