import dynamic from "next/dynamic";
import Head from "next/head";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
const OurServices = dynamic(() => import("@/components/common/OurServices"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Services/Hero"), {
  ssr: false,
});

export default function ServicesPage({ pageData, servicesData, layoutData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Head>
          <title>SERVICES | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
        <Hero data={pageData?.hero} />
        <OurServices data={servicesData} qnt={10} />
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  let pageData = null;
  let servicesData = null;
  let layoutData = null;

  try {
    pageData = await (
      await fetch(`${adminPath}/services-page?populate=deep`)
    ).json();
    servicesData = await (
      await fetch(`${adminPath}/services?populate=deep`)
    ).json();
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
      servicesData: servicesData?.data.sort((a, b) => a.id - b.id) || "null",
    },
  };
}
