import React from "react";

export default function Hero({ data }) {
  return (
    <section className="gallery-bg text-white py-[70px] sm:py-[100px] xl:py-[170px]">
      <div className="container">
        <h1 className="max-w-[750px] text-[40px] sm:text-[50px] xl:text-[70px] font-bold leading-[70px] md:leading-[90px] mb-5">
          {data?.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] max-w-[600px]">{data?.desc}</p>
      </div>
    </section>
  );
}
