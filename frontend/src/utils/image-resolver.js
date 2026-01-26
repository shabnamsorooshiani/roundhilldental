export const imageResolver = (source) => {
  const basePath = "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads";
  const url = source?.data?.attributes?.url || "";
  
  // Extract just the filename/path by getting everything after the last slash
  const relativePath = url.split('/').pop();
  
  const path = `${basePath}/${relativePath}`;
  const width = source?.data?.attributes?.width;
  const height = source?.data?.attributes?.height;
  const alt = source?.data?.attributes?.alternativeText;
  return { path, width, height, alt };
};