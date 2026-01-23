import React from "react";

export default function Hero({ data }) {
  return (
    <section className="services-bg text-white py-[90px] xl:pt-[140px] xl:pb-[120px]">
      <div className="container">
        <h1 className="max-w-[680px] text-[50px] lg:text-[70px] font-bold leading-[70px] md:leading-[90px] mb-5">
          {data?.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] max-w-[500px]">{data?.desc}</p>
        <a
          href={data?.button?.url}
          className="text-[18px] lg:text-[24px] bg-red-beige leading-4 py-5 px-8 inline-block mt-11 rounded-[50px] mb-14 lg:mb-[10px] font-bold"
        >
          {data?.button?.name}
        </a>
      </div>
    </section>
  );
}
