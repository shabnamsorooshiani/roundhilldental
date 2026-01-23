import React from "react";

export default function Hero({ data }) {
  return (
    <section className="contact-bg text-white py-[80px] xl:pt-[200px] xl:pb-[170px]">
      <div className="container">
        <h1 className="max-w-[680px] text-[50px] lg:text-[70px] font-bold leading-[70px] md:leading-[90px] mb-5">
          {data?.title}
        </h1>
        <p className="text-[16px] sm:text-[18px] max-w-[500px]">{data?.desc}</p>
      </div>
    </section>
  );
}
