import Link from "next/link";
import React from "react";

export default function CtaSection({ data }) {
  return (
    <section className="bg-dark-bl text-white">
      <div className="container py-14 md:center justify-between">
        <div>
          <h2 className="text-[22px] lg:text-[36px] font-bold leading-[145%] tracking-[0.25px]">
            {data?.title}
          </h2>
          <p className="text-[18px] lg:text-[22px] mt-4 font-medium mb-6 md:mb-0">
            {data?.desc}
          </p>
        </div>
        <Link
          href="/#book-appointment"
          className="inline-block text-center font-bold text-[18px] py-5 px-14 rounded-[50px] bg-red-beige tracking-[0.25px] leading-[145%] md:ml-5 md:text-[20px] lg:text-[25px] md:px-6 lg:px-14"
        >
          Get Appointment Now
        </Link>
      </div>
    </section>
  );
}
