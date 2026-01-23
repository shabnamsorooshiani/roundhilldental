import Layout from "@/components/common/Layout";
import { adminPath } from "@/utils/constants";
import { imageResolver } from "@/utils/image-resolver";
import Head from "next/head";

export default function ReferralForm({ layoutData, pageData }) {
  return (
    <>
      <Layout layoutData={layoutData}>
        <Head>
          <title>REFERRAL FORM | ROUND HILL</title>
          <meta name="description" content="ROUND HILL by Vigorant" />
        </Head>
        <section className="referral-bg">
          <div className="center flex-col text-center pt-[200px] pb-[150px]">
            <h1 className="font-bold text-[40px] sm:text-[60px] max-w-[800px] px-5">
              {pageData?.title}
            </h1>
            <p className="max-w-[600px] my-6 text-[16px] sm:text-[18px] lg:text-[20px] px-5">
              {pageData?.desc}
            </p>
            <a
              href={pageData?.ctaBtn?.url}
              target="_blank"
              className="center text-white rounded-[50px] py-2 px-6 text-[18px] gap-2 bg-dark-bl"
            >
              <img
                src={imageResolver(pageData?.ctaBtn?.icon).path}
                alt="icon"
              />
              {pageData?.ctaBtn?.name}
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let pageData = null;
  let layoutData = null;

  try {
    pageData = await (
      await fetch(`${adminPath}/referral-form?populate=deep`)
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
