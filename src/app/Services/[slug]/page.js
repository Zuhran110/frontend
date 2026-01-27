import { notFound } from "next/navigation";
import Hero from "@/component/services/hero/Hero";
import servicePgData from "@/component/tempData/servicePgData";
import Quiz from "@/component/services/quiz/Quiz";
import Contacts from "@/component/services/contactUs/Contacts";

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

      <Contacts data={data.ContactUsSection} />
      <Quiz data={data.QuizSection} />
    </>
  );
}
