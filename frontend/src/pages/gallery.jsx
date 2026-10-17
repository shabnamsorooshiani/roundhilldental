import dynamic from "next/dynamic";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
import Seo from "@/components/common/Seo";
const GalleryList = dynamic(() => import("@/components/Gallery/GalleryList"), {
  ssr: false,
});
const Hero = dynamic(() => import("@/components/Gallery/Hero"), { ssr: false });

export default function Gallery({ layoutData, pageData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Seo
          seo={pageData?.seo}
          title="Smile Gallery | Round Hill Dental"
          path="/gallery"
        />
        <Hero data={pageData?.hero} />
        <GalleryList data={pageData?.titles} gallery={pageData?.gallery} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let layoutData = null;

  try {
    pageData = await (
      await fetch(`${adminPath}/gallery-page?populate=deep`)
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
