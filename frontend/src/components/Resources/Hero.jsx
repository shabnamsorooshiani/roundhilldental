import React from "react";

export default function Hero({ data }) {
  return (
    <section className="res-bg text-white py-[80px] xl:pt-[140px] xl:pb-[120px]">
      <div className="container">
        <h1 className="max-w-[680px] text-[36px] md:text-[50px] lg:text-[60px] font-bold leading-[60px] md:leading-[90px] mb-5">
          {data?.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] 2xl:text-[23px] max-w-[680px] tracking-[1.5%]">
          {data?.desc}
        </p>
        <a
          href={data?.button?.url}
          className="text-[18px] lg:text-[24px] bg-red-beige leading-4 py-5 px-8 inline-block mt-11 rounded-[50px] font-bold"
        >
          {data?.button?.name}
        </a>
      </div>
    </section>
  );
}
