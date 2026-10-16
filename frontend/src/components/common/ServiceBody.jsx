import React, { useEffect, useState } from "react";
import { imageResolver } from "@/utils/image-resolver";

const BlogBody = ({ data, cusClass }) => {
  let content = data?.body || data?.attributes?.body || data;
  const [finaldata, setFinalData] = useState(content);
  var finalContent;

  useEffect(() => {
    var el = document.createElement("html");
    el.innerHTML = content;
    let images = el.getElementsByTagName("img");
    for (let image of images) {
      const resolvedPath = imageResolver(image.getAttribute("src") || "").path;
      if (resolvedPath) image.src = resolvedPath;
    }
    finalContent = el.innerHTML;
    setFinalData(finalContent);
  }, [content]);
  return (
    <>
      <div className="">
        <div
          className={`max-w-[1200px] mx-auto md:py-[80px] py-[20px] ${cusClass}`}
        >
          <div dangerouslySetInnerHTML={{ __html: finaldata }}></div>
        </div>
      </div>
    </>
  );
};

export default BlogBody;
