import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function Insurance({ data }) {
  return (
    <section className="container xl:center pt-[100px] pb-[30px] gap-5 justify-between">
      <div>
        <h2 className="text-white text-[28px] 2xl:text-[32px] font-medium bg-dark-bl px-5 rounded-[44px] leading-[120%] uppercase tracking-wider inline-block">
          {data?.tag}
        </h2>
        <h3 className="font-semibold text-[36px] md:text-[48px] 2xl:text-[54px] leading-[146%] text-main max-w-[750px] mt-8">
          {data?.title}
        </h3>
        <p className="leading-[147%] text-[20px] md:text-[22px] 2xl:text-[26px] text-red my-4 font-semibold">
          {data?.subTitle}
        </p>
        <p className="desc max-w-[750px] mb-7">{data?.desc}</p>
        <ul className="grid grid-cols-3 border-b-2 border-b-[#D8D8D8] pb-6 gap-6">
          {data?.logos?.map((logo, index) => {
            return index === 0 ? (
              <li
                className="h-[150px] p-2 bg-beige bank-shadow rounded-[24px] flex items-center justify-center cursor-pointer"
                key={index}
              >
                <a href="https://www.carecredit.com" target="_blank">
                  <Image
                    src={imageResolver(logo?.logo).path}
                    alt="bank logo"
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px"
                    width="150"
                    height="100"
                  />
                </a>
              </li>
            ) : (
              <li
                className="h-[150px] p-2 bg-beige bank-shadow rounded-[24px] flex items-center justify-center"
                key={index}
              >
                <Image
                  src={imageResolver(logo?.logo).path}
                  alt="bank logo"
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px"
                  width="150"
                  height="100"
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full xl:w-[38%] md:ml-5 mt-5">
        <Image
          src={imageResolver(data?.image).path}
          alt={imageResolver(data?.image).alt}
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
