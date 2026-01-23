import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export default function PatientDetails({ data }) {
  return (
    <section className="bg-white2 pb-[70px] lg:pb-[150px] pt-[70px] lg:pt-[100px]">
      <div className="container grid lg:grid-cols-10">
        <div className="lg:pr-14 col-span-6">
          <h2 className="text-[32px] lg:text-[48px] pb-7 border-main border-b font-bold">
            {data?.mainTitle}
          </h2>
          <p className="my-7 desc">{data?.desc}</p>
          <h3 className="mb-7 text-[22px] font-medium">{data?.title}</h3>
          <ul className="grid xs:grid-cols-2 gap-y-3 xs:gap-y-1 gap-x-10 font-medium">
            {data?.descList?.map((item, index) => {
              return (
                <li className="center gap-4" key={index}>
                  <img src={imageResolver(item?.icon).path} alt="icon" />
                  <p className="desc">{item?.desc}</p>
                </li>
              );
            })}
          </ul>
          <a
            href={data?.button?.url}
            target="_blank"
            className="inline-block mx-auto md:ml-0 text-[18px] font-bold bg-red-beige leading-5 py-3 px-7 mt-8 rounded-[50px] text-white"
          >
            {data?.button?.name}
          </a>
        </div>
        <div className="w-full mt-9 lg:mt-0 relative col-span-4 mx-auto">
          <img
            src={imageResolver(data?.image).path}
            alt={imageResolver(data?.image).alt}
            className="mx-auto w-full"
          />
          <img
            src="/icon/serv-icon.png"
            alt="icon"
            className="absolute top-1/3 -left-[30px] hidden sm:block"
          />
          <img
            src="/icon/serv-icon1.png"
            alt="icon"
            className="absolute -top-[30px] left-1/3 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
