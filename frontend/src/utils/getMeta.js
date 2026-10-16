import { adminPath } from "./constants";
import { imageResolver } from "./image-resolver";

export async function generateMetadata() {
  const product = await fetch(`${adminPath}/homepage?populate=deep`)
    .then((res) => res.json())
    .then((res) => res.data.attributes.seo);
  return {
    title: product?.title,
    description: product?.desc,
    keywords: [product?.keywords],
    metadataBase: new URL("https://roundhilldental.com"),
    openGraph: {
      title: product?.ogTitle,
      description: product?.ogDesc,
      images: imageResolver(product?.ogUrl).path,
    },
    robots: {
      index: product?.indexThisPage,
      follow: product?.followThisPage,
    },
    alternates: {
      canonical: product?.canonical,
    },
  };
}
