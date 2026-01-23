"use client";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { imageResolver } from "@/utils/image-resolver";

export default function ServiceDetails({ data }) {
  return (
    <section className="container">
      <div className="my-[50px] md:my-[100px] bg-beige relative">
        <div className="md:grid grid-cols-10 gap-10 min-h-[500px]">
          <div className="relative col-span-4 2xl:col-span-5 mt-8">
            <img
              src="/icon/serv-icon.png"
              alt="icon"
              width={50}
              height={50}
              className="absolute top-[80px] -left-8 hidden lg:block lg:w-[75px] lg:h-[75px]"
            />
            <img
              src="/icon/serv-icon1.png"
              alt="icon"
              width={50}
              height={50}
              className="absolute -bottom-5 right-[100px] lg:w-[75px] lg:h-[75px]"
            />
            <img
              src={imageResolver(data?.backgroundImage).path}
              alt={data?.title}
              className="object-cover h-full w-auto"
            />
          </div>
          <div className="col-span-6 2xl:col-span-5 mt-10 text-[18px] lg:text-[20px] xl:text-[22px] pr-8 md:pr-10 pl-8 md:pl-0">
            <Markdown className="markup" remarkPlugins={[remarkGfm]}>
              {data?.about}
            </Markdown>
          </div>
        </div>
        <div className="grid pb-[60px] md:pt-[20px] lg:pt-[60px] px-6 lg:px-14 text-[18px] lg:text-[20px] xl:text-[22px]">
          <Markdown className="markup" remarkPlugins={[remarkGfm]}>
            {data?.body}
          </Markdown>
        </div>
      </div>
    </section>
  );
}
