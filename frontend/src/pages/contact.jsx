import dynamic from "next/dynamic";
import Head from "next/head";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
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
        <Head>
          <title>CONTACT US | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
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
