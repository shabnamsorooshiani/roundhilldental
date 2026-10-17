"use client";
import dynamic from "next/dynamic";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
import Seo from "@/components/common/Seo";
const Hero = dynamic(() => import("@/components/About/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About/About"), { ssr: false });
const WhyWe = dynamic(() => import("@/components/common/WhyWe"), {
  ssr: false,
});
const CtaSection = dynamic(() => import("@/components/common/CtaSection"), {
  ssr: false,
});
const Review = dynamic(() => import("@/components/common/Review"), {
  ssr: false,
});
const OurTeam = dynamic(() => import("@/components/About/OurTeam"), {
  ssr: false,
});

export default function AboutUs({ pageData, testimonials, layoutData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Seo
          seo={pageData?.seo}
          title="About Us | Round Hill Dental"
          path="/about"
        />
        <Hero data={pageData?.hero} />
        <About data={pageData?.aboutUs} />
        <WhyWe data={pageData?.advantages} />
        <CtaSection data={pageData?.ctaSection} />
        <OurTeam data={pageData} />
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
  let testimonials = null;
  let layoutData = null;

  try {
    pageData = await (await fetch(`${adminPath}/about?populate=deep`)).json();
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
    },
  };
}
