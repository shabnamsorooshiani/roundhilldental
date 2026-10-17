import Head from "next/head";
import { imageResolver } from "@/utils/image-resolver";

const SITE_URL = "https://roundhilldental.com";
const DEFAULT_DESC =
  "Family and cosmetic dentistry in Tracy, CA with Dr. Shabnam Sorooshiani at Round Hill Dental.";
const DEFAULT_IMAGE = `${SITE_URL}/hero-main.png`;

export default function Seo({ seo, title, description = DEFAULT_DESC, path }) {
  const pageTitle = seo?.title || title;
  const pageDesc = seo?.desc || description;
  const url = seo?.canonical || `${SITE_URL}${path}`;
  const ogTitle = seo?.ogTitle || pageTitle;
  const ogDesc = seo?.ogDesc || pageDesc;
  const ogImage = imageResolver(seo?.ogImage).path || DEFAULT_IMAGE;
  // Only an explicit "false" in Strapi keeps a page out of search results
  const robots = [
    seo?.indexThisPage === false ? "noindex" : "index",
    seo?.followThisPage === false ? "nofollow" : "follow",
  ].join(",");

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      {seo?.keywords && <meta name="keywords" content={seo.keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Round Hill Dental" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      <meta property="og:url" content={seo?.ogUrl || url} />
      <meta property="og:image" content={ogImage} />
      <meta
        name="twitter:card"
        content={seo?.twitterCard || "summary_large_image"}
      />
      <meta name="twitter:title" content={seo?.twitterTitle || ogTitle} />
      <meta name="twitter:description" content={seo?.twitterDesc || ogDesc} />
      <meta
        name="twitter:image"
        content={imageResolver(seo?.twitterImage).path || ogImage}
      />
    </Head>
  );
}
