"use client";
import React from "react";
import Link from "next/link";
import ServicesList from "./ServicesList";

export default function OurServices({ qnt, data }) {
  return (
    <section className="container my-[70px] md:my-[100px] text-center">
      <h2 className="title leading-[110%] tracking-[-2.4%]">Our Services</h2>
      <p className="max-w-[810px] mt-4 mb-[70px] desc leading-[135.4%] mx-auto">
        Unlock your best smile with tailored dental care, from routine check-ups
        to transformative treatments. Our skilled team ensures your comfort and
        satisfaction with flexible appointments for your convenience.
      </p>
      <ServicesList qnt={qnt} serviceList={data} />
      {qnt === 10 ? null : (
        <Link
          href="/services"
          className="mx-auto font-medium text-[24px] xl:text-[30px] leading-[135.4%] hover:underline hover:underline-offset-4 transition-all"
        >
          View All
        </Link>
      )}
    </section>
  );
}
