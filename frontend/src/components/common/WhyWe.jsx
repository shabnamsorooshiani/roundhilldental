import React from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function WhyWe({ data }) {
  return (
    <section className="bg-beige py-[130px]" id="choose-us">
      <div className="container text-center">
        <h2 className="title leading-[110%] tracking-[-2.4%]">{data?.title}</h2>
        <p className="max-w-[810px] mt-4 mb-[70px] desc leading-[135.4%] mx-auto">
          {data?.desc}
        </p>
        <ul className="grid gri md:grid-cols-2 xl:grid-cols-4 gap-20">
          {data?.advs.map((item, index) => {
            return (
              <li key={index} className="flex flex-col">
                <Image
                  src={imageResolver(item?.icon).path}
                  width={100}
                  height={100}
                  alt={item?.desc}
                  className="block mx-auto"
                />
                <h3 className="font-bold text-[26px] leading-[136%] tracking-[0.25px] mb-5 mt-3">
                  {item?.desc}
                </h3>
                <p className="mx-auto max-w-[350px]">{item?.subDesc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
