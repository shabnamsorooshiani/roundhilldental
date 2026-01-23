import React, { useEffect, useState } from "react";

const BlogBody = ({ data, cusClass }) => {
  let content = data?.body || data?.attributes?.body || data;
  const [finaldata, setFinalData] = useState(content);
  var finalContent;

  useEffect(() => {
    var el = document.createElement("html");
    el.innerHTML = content;
    let images = el.getElementsByTagName("img");
    for (let image of images) {
      image.src = `https://happykidsweb.blob.core.windows.net/media/uploads/${
        image.src.split("/")[image.src.split("/").length - 1]
      }`;
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
