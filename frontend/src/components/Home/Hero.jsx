import React, { useEffect, useState } from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

function Hero({ data }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-main.webp"
          alt="Hero background"
          width={400}
          height={600}
          className="absolute inset-0 left-0 top-0 w-full h-full object-cover object-[80%] md:object-center"
          priority={true}
        />
        <div className="absolute md:hidden inset-0 bg-gradient-to-r from-[rgba(34,63,90,0.5)] to-[rgba(34,63,90,0.5)]" />
        <div className="hidden min-[630px]:block absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Hero overlay"
            width={1920}
            height={800}
            priority={!isMobile}
            className="absolute inset-0 left-0 top-0 w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="container relative z-10 pt-[100px] lg:pt-[250px] pb-10 text-white">
        <div className="mr-10">
          <h1 className="max-w-[640px] text-[28px] md:text-[38px] lg:text-[58px] xl:text-[64px] font-bold leading-[70px] md:leading-[90px] mb-5">
            {data?.title}
          </h1>
          <p className="text-[16px] lg:text-[17px] max-w-[620px]">
            {data?.desc}
          </p>
          <a
            href={data?.ctaButton?.url}
            className="text-[16px] lg:text-[18px] bg-red-beige leading-4 py-5 px-8 inline-block mt-11 rounded-[50px] mb-14 lg:mb-[200px] font-medium text-center"
          >
            {data?.ctaButton?.name}
          </a>
          <p className="center text-[16px] sm:text-[18px] lg:text-[20px] 2xl:text-[25px] font-semibold">
            <img src="/check.png" alt="icon" className="mr-4" />
            {data?.lowText}
          </p>
        </div>

        <ul className="flex flex-col gap-4 absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
          {data?.socialList?.map((elem, index) => {
            return (
              <li className="soc-icon" key={index}>
                {elem.url === "+12096503675" ? (
                  <a href={`tel:${elem.url}`} className="center justify-center">
                    <img
                      src={imageResolver(elem?.icon).path}
                      alt="social icon"
                    />
                  </a>
                ) : (
                  <a
                    href={elem.url}
                    target="_blank"
                    className="center justify-center"
                  >
                    <img
                      src={imageResolver(elem?.icon).path}
                      alt="social icon"
                    />
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
export default Hero;
