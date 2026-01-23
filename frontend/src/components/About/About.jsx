import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function About({ data }) {
  return (
    <section className="container py-[100px]">
      <div className="center mb-20">
        <h2 className="font-semibold tracking-[2%] text-[26px] lg:text-[30px] xl:text-[38px] mr-12 text-nowrap">
          {data?.mainTitle}
        </h2>
        <span className="block w-full h-[5px] border-b-border1 border-b-2"></span>
      </div>
      <div className="md:center">
        <div className="w-full md:w-[45%] lg:w-[50%] md:mr-[30px] lg:mr-[100px] mb-8 md:mb-0">
          <Image
            src={imageResolver(data?.image).path}
            alt={imageResolver(data?.image).alt}
            width={300}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div>
          <h3 className="title font-bold mb-6">{data?.title}</h3>
          <p className="desc leading-[135%] max-w-[580px] mb-7">{data?.desc}</p>
          <ul>
            {data?.descList?.map((item, index) => {
              return (
                <li
                  className="flex items-start desc leading-[135%] mb-4 max-w-[580px]"
                  key={index}
                >
                  <img
                    src={imageResolver(item?.icon).path}
                    alt="icon"
                    className="mr-4 mt-2?"
                  />
                  {item?.subDesc}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
