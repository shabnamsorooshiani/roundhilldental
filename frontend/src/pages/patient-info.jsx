import dynamic from "next/dynamic";
import Head from "next/head";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
const Forms = dynamic(() => import("@/components/PatientInfo/Forms"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/PatientInfo/Hero"), {
  ssr: false,
});
const Insurance = dynamic(() => import("@/components/PatientInfo/Insurance"), {
  ssr: false,
});
const PatientDetails = dynamic(
  () => import("@/components/PatientInfo/PatientDetails"),
  { ssr: false },
);
const TermsAndConditionals = dynamic(
  () => import("@/components/PatientInfo/TermsAndConditionals"),
  { ssr: false },
);

export default function PatientInfo({ layoutData, pageData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Head>
          <title>PATIENT INFO | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
        <Hero data={pageData?.hero} />
        <Forms data={pageData?.titles} cards={pageData?.cards} />
        <Insurance data={pageData?.insuranceDetails} />
        <PatientDetails data={pageData?.insuranceProvider} />
        <TermsAndConditionals data={pageData?.termsAndConditions} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let layoutData = null;

  try {
    pageData = await (
      await fetch(`${adminPath}/patient-info?populate=deep`)
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
    },
  };
}
