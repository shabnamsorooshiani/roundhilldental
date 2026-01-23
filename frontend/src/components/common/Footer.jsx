import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageResolver } from "@/utils/image-resolver";

function Footer({ data }) {
  return (
    <footer className="footer-bg text-white">
      <div className="container flex flex-col items-center sm:flex-row flex-wrap sm:items-start sm:justify-between xl:flex-nowrap pt-[100px] pb-[120px] relative">
        <div className="md:max-w-[30%] mb-6">
          <Link href={"/"}>
            <Image
              src={imageResolver(data?.logo).path}
              alt={imageResolver(data?.logo).alt}
              width={300}
              height={74}
              className="mx-auto md:mx-0"
            />
          </Link>
          <p className="text-[15px] max-w-[516px] mt-8 lg:text-[20px] xl:text-[22px] leading-[33px]">
            {data?.desc}
          </p>
        </div>
        <div className="flex justify-between gap-5 lg:gap-10">
          <div className="pl-5 mb-6">
            <h3 className="footer-title">{data?.menuTitle}</h3>
            <nav>
              <ul className="">
                {data?.pageMenu?.map((el, index) => {
                  return (
                    <li key={index} className="footer-link">
                      <a href={`${el?.url}`}>
                        <p className="inline hover:border-b-2 hover:border-b-white pb-[2px]">
                          {el?.name}
                        </p>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="pl-5 mb-6">
            <h3 className="footer-title">{data?.legalTitle}</h3>
            <ul className="">
              {data?.legalMenu?.map((el, index) => {
                return (
                  <li key={index} className="footer-link">
                    <a href={`${el?.url}`} target="_blank">
                      <p className="inline border-b-[transparent] hover:border-b-2 hover:border-b-white pb-[2px] transition-all">
                        {el?.name}
                      </p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pl-5 md:w-[25%] mb-7 text-[16px] lg:text-[20px]">
          <div className="center gap-4 mb-5">
            <img src="/schedule.png" alt="schedule" />
            <h3 className="footer-title mb-0">{data?.scheduleTitle}</h3>
          </div>
          <div className="leading-4 mb-4">
            <span className="font-semibold pb-2 pr-2 inline-block">
              {data?.monday}
            </span>
            <span>{data?.mondaySchedule}</span>
          </div>
          <div className="leading-4 mb-4">
            <span className="font-semibold pb-2 pr-2 inline-block">
              {data?.tuesdayFriday}
            </span>
            <span>{data?.tuesdayFridaySchedule}</span>
          </div>
          <div className="leading-4 mb-4">
            <span className="font-semibold pb-2 pr-2 inline-block">
              {data?.saturday}
            </span>
            <span>{data?.saturdaySchedule}</span>
          </div>
          <a
            href={data?.ctaButton[0]?.url}
            className="inline-block mx-auto md:ml-0 text-[14px] font-bold bg-red-beige leading-5 py-3 px-7 text-center mt-5 rounded-[50px]"
          >
            {data?.ctaButton[0]?.name}
          </a>
        </div>
        <div className="copy-box">
          <p className="copy-line">
            {data?.policyText}
            <a href={data?.policyLink} target="_blank">
              {data?.policyCompany}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
