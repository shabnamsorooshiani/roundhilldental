import Image from "next/image";
import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export default function Features({ data }) {
  return (
    <section>
      <ul className="w-full text-white bg-red-beige sm:grid grid-cols-2 p-5">
        {data?.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex gap-4 min-w-[170px] justify-center mb-0 ${index === 0 ? "sm:border-r border-[#ffffff65] pb-5 mb-5 border-b sm:border-b-0 sm:pb-0 sm:mb-0" : null}`}
            >
              <div className="flex flex-col justify-between">
                <span className="text-[40px] leading-[52px] font-bold">
                  {item?.desc}
                </span>
                <span className="text-[20px] leading-7 font-medium">
                  {item?.subDesc}
                </span>
              </div>
              <Image
                src={imageResolver(item?.icon).path}
                alt="icon"
                width={80}
                height={80}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
