export const imageResolver = (source) => {
  const basePath =
    "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads";
  const sourceUrl = typeof source === "string" ? source : "";
  const attributes =
    source?.data?.attributes || source?.data?.[0]?.attributes || source || {};
  const url = sourceUrl || attributes.url || "";

  // Extract just the filename/path by getting everything after the last slash
  const relativePath = url.split("/").pop()?.split(/[?#]/)[0] || "";

  const path = relativePath ? `${basePath}/${relativePath}` : "";
  const width = attributes.width;
  const height = attributes.height;
  const alt = attributes.alternativeText;
  return { path, width, height, alt };
};
