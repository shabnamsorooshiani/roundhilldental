import React from "react";
import { imageResolver } from "@/utils/image-resolver";

export default function Insurance({ data }) {
  return (
    <section
      className="bg-white2 pb-[70px] lg:pb-[100px] pt-[170px] lg:pt-[250px] px-4 lg:px-10"
      id="insurance"
    >
      <div className="container p-0 bg-[#fff] rounded-[15px]">
        <div className="bg-red-beige text-white px-6 lg:px-[50px] rounded-[15px] lg:flex-row justify-end flex flex-col-reverse">
          <div className="relative lg:w-1/2 mx-auto">
            <img
              src={imageResolver(data?.image).path}
              alt={imageResolver(data?.image).alt}
              className="lg:absolute bottom-0 left-0"
            />
          </div>
          <div className="py-12 lg:py-[120px] lg:w-[60%]">
            <div className="sm:flex gap-8 items-start">
              <img
                src="/icon/insurance-icon.png"
                alt="icon"
                className="mt-3 mb-3"
              />
              <div className="text-[24px]">
                <h2 className="text-[30px] sm:text-[40px]">
                  {data?.mainTitle}
                </h2>
                <p className="mb-6">{data?.title}</p>
                <p className="desc">{data?.desc}</p>
              </div>
            </div>
          </div>
        </div>
        <ul className="grid xs:grid-cols-2 xl:grid-cols-3 gap-y-3 place-content-between py-[100px] px-10 text-[18px]">
          {data?.descList?.map((item, index) => {
            return (
              <li className="center gap-3 max-w-[250px]" key={index}>
                <img
                  src={imageResolver(item?.icon).path}
                  alt="icon"
                  className="w-[30px] h-[30px] mt-1"
                />
                <p>{item?.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
