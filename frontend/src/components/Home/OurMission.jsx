import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function OurMission({ data }) {
  return (
    <section className="container py-[100px] lg:py-[130px]">
      <div className="lg:center">
        <div>
          <h3 className="text-[32px] lg:text-[36px] 2xl:text-[42px] xxl:text-[55px] font-bold mb-6 max-w-[900px]">
            {data?.title}
          </h3>
          <p className="text-[18px] lg:text-[19px] 2xl:text-[24px] leading-[135%] max-w-[700px] mb-5">
            {data?.desc}
          </p>
          <ul>
            {data?.descList?.map((item, index) => {
              return (
                <li
                  className="center desc leading-[135%] mb-4 max-w-[700px] text-red font-medium"
                  key={index}
                >
                  <img
                    src={imageResolver(item?.icon).path}
                    alt="icon"
                    className="mr-4"
                    loading="lazy"
                  />
                  {item?.desc}
                </li>
              );
            })}
          </ul>
          {/* <Link href={data?.button.url} className="inline-block round-btn mt-4 text-[18px] py-5 px-12">{data?.button.name}</Link> */}
        </div>
        <div className="w-full md:w-[45%] lg:w-[50%] mx-auto lg:ml-[80px] mt-8 md:mt-0 md:min-w-[500px]">
          <Image
            src={imageResolver(data?.image).path}
            alt={imageResolver(data?.image).alt}
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
