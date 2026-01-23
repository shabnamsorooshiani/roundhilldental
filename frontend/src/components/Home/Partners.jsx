import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export default function Partners({ data }) {
  return (
    <section className="bg-[#fff] py-8 px-7">
      <ul className="center justify-center flex-wrap gap-8 lg:gap-[40px] xl:gap-[110px]">
        {data?.map((item, index) => {
          return (
            <li key={index}>
              <img
                src={imageResolver(item?.logo).path}
                className="w-full h-auto"
                alt={imageResolver(item?.logo).alt}
                loading="lazy"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
