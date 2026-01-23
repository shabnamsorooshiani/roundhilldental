import Image from "next/image";
import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export default function GalleryList({ data, gallery }) {
  return (
    <section className="bg-[#EFF2F4]">
      <div className="container text-center py-[70px] lg:py-[130px]">
        <h2 className="title leading-[110%] tracking-[-2.4%]">{data?.title}</h2>
        <p className="max-w-[810px] mt-4 mb-[70px] desc leading-[135.4%] mx-auto">
          {data?.desc}
        </p>
        <ul>
          {gallery?.map((item, index) => {
            return (
              <li
                key={index}
                className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <div className="w-full h-[300px] relative overflow-hidden rounded-t-xl">
                    <Image
                      src={imageResolver(item?.beforeImage).path}
                      alt={imageResolver(item?.beforeImage).alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#fff] border border-[#223E5A]">
                    <h3 className="text-[25px] lg:text-[30px] font-medium my-4">
                      {item?.beforeTitle}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="w-full h-[300px] relative overflow-hidden rounded-t-xl">
                    <Image
                      src={imageResolver(item?.afterImage).path}
                      alt={imageResolver(item?.afterImage).alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#fff] border border-[#223E5A]">
                    <h3 className="text-[25px] lg:text-[30px] font-medium my-4">
                      {item?.afterTitle}
                    </h3>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
