import dynamic from "next/dynamic";
import Head from "next/head";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
import Hero from "@/components/Home/Hero";
const AboutUs = dynamic(() => import("@/components/Home/AboutUs"), {
  ssr: false,
});
const BookAppointment = dynamic(
  () => import("@/components/common/BookAppointment"),
  { ssr: false },
);
const CtaSection = dynamic(() => import("@/components/common/CtaSection"), {
  ssr: false,
});
const Features = dynamic(() => import("@/components/Home/Features"), {
  ssr: false,
});
const Insurance = dynamic(() => import("@/components/Home/Insurance"), {
  ssr: false,
});
const OurDoctors = dynamic(() => import("@/components/Home/OurDoctors"), {
  ssr: false,
});
const OurMission = dynamic(() => import("@/components/Home/OurMission"), {
  ssr: false,
});
const OurServices = dynamic(() => import("@/components/common/OurServices"), {
  ssr: false,
});
const Partners = dynamic(() => import("@/components/Home/Partners"), {
  ssr: false,
});
const Review = dynamic(() => import("@/components/common/Review"), {
  ssr: false,
});
const WhyWe = dynamic(() => import("@/components/common/WhyWe"), {
  ssr: false,
});
const HighTechMachinery = dynamic(
  () => import("@/components/Home/HighTechMachinery"),
  { ssr: false },
);

export default function Home({
  pageData,
  testimonials,
  servicesData,
  layoutData,
}) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Head>
          <title>HOME | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
        <Hero data={pageData?.hero} />
        <Features data={pageData?.ourFeatures} />
        <Insurance data={pageData?.insuranceSection} />
        <OurServices qnt={6} data={servicesData} />
        <HighTechMachinery data={pageData?.highTechmachin} />
        <WhyWe data={pageData?.advantages} />
        <CtaSection data={pageData?.ctaSection} />
        <AboutUs data={pageData?.aboutUs} />
        <OurMission data={pageData?.ourMission} />
        <OurDoctors
          data={pageData?.ourDoctors}
          doctor={pageData?.dortorSection}
          list={pageData?.doctorList}
        />
        <Partners data={pageData?.partners} />
        <BookAppointment data={pageData?.appointmentSection} home={true} />
        <Review
          testimonials={testimonials?.data}
          data={pageData?.testimonials}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let servicesData = null;
  let testimonials = null;
  let layoutData = null;

  try {
    pageData = await (
      await fetch(`${adminPath}/homepage?populate=deep`)
    ).json();
    servicesData = await (
      await fetch(`${adminPath}/services?populate=deep`)
    ).json();
    layoutData = await (
      await fetch(`${adminPath}/layout?populate=deep`)
    ).json();
    testimonials = await (
      await fetch(`${adminPath}/reviews?populate=deep`)
    ).json();
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      layoutData: layoutData?.data?.attributes || "null",
      testimonials: testimonials || "null",
      servicesData: servicesData?.data || "null",
    },
  };
}
