import dynamic from "next/dynamic";
import Head from "next/head";
import { adminPath } from "@/utils/constants";
import Layout from "@/components/common/Layout";
const ServicePage = dynamic(() => import("@/components/Services/ServicePage"), {
  ssr: false,
});

export default function Service({ singleService, layoutData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Head>
          <title>SERVICE | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
        <ServicePage data={singleService} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const ourServices = await (
    await fetch(`${adminPath}/services?fields[0]=slug`)
  ).json();

  const paths = await ourServices?.data?.map((post) => {
    return {
      params: { slug: `${post?.attributes?.slug}` },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let singleService = null;
  let layoutData = null;

  const slug = context?.params?.slug;

  try {
    singleService = await (
      await fetch(`${adminPath}/services/${slug}?populate=deep`)
    ).json();

    layoutData = await (
      await fetch(`${adminPath}/layout?populate=deep`)
    ).json();
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      singleService: singleService?.data?.attributes || null,
      layoutData: layoutData?.data?.attributes,
    },
  };
}
