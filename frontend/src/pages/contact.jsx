import dynamic from "next/dynamic";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
import Seo from "@/components/common/Seo";
const AskQuestion = dynamic(
  () => import("@/components/ContactUs/AskQuestion"),
  { ssr: false },
);
const Hero = dynamic(() => import("@/components/ContactUs/Hero"), {
  ssr: false,
});
const BookAppointment = dynamic(
  () => import("@/components/common/BookAppointment"),
  { ssr: false },
);
const Map = dynamic(() => import("@/components/ContactUs/Map"), { ssr: false });
const FAQ = dynamic(() => import("@/components/ContactUs/FAQ"), { ssr: false });

export default function Contact({ layoutData, pageData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Seo
          seo={pageData?.seo}
          title="Contact Us | Round Hill Dental"
          path="/contact"
        />
        <Hero data={pageData?.hero} />
        <BookAppointment data={pageData?.appointment} />
        <AskQuestion />
        <FAQ data={pageData?.FAQ} />
        <Map data={pageData?.address} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let layoutData = null;

  try {
    pageData = await (await fetch(`${adminPath}/contact?populate=deep`)).json();
    layoutData = await (
      await fetch(`${adminPath}/layout?populate=deep`)
    ).json();
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      pageData: pageData?.data?.attributes || "null",
      layoutData: layoutData?.data?.attributes || "null",
    },
  };
}
