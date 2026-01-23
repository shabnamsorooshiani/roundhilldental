import React from "react";

export default function Hero({ data }) {
  return (
    <section className="patient-bg px-4">
      <div className="center flex-col text-center py-[100px] sm:pt-[220px] sm:pb-[220px]">
        <h1 className="font-bold text-[40px] sm:text-[62px]">{data?.title}</h1>
        <p className="max-w-[740px] my-6 text-[16px] sm:text-[18px] xl:text-[20px] 2xl:text-[24px]">
          {data?.desc}
        </p>
      </div>
    </section>
  );
}
