import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function HighTechMachinery({ data }) {
  const config = {
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 25,

    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },

    modules: [Navigation, Autoplay],
  };
  return (
    <section className="max-w-[1550px] py-8 md:py-[100px] rounded-2xl px-8 md:px-[103px] gap-5 md:gap-[93px] bg-beige mx-5 md:mx-auto mt-[60px] mb-[150px] flex md:flex-row flex-col">
      <div className="flex flex-col justify-center gap-3 sm:gap-6 lg:gap-8 md:max-w-[404px]">
        <h2 className="text-2xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-6xl leading-[40px] sm:leading-[50px] lg:leading-[60px] xl:leading-[80px] font-[600]">
          {data?.title}
        </h2>
        <p className="serv-desc">{data?.desc}</p>
      </div>
      <div className="relative md:pr-[80px]">
        <Swiper {...config}>
          {data?.imagees?.map((item, index) => {
            const imageData = item?.imagee?.data[0]?.attributes;
            if (!imageData) return null;

            return (
              <SwiperSlide
                className="max-w-[280px] lg:max-w-[370px] overflow-hidden"
                key={index}
              >
                <Image
                  src={imageData.url}
                  alt={imageData.alternativeText || "machine"}
                  width={imageData.width}
                  height={imageData.height}
                  className="object-cover rounded-3xl"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="custom-swiper-button-prev md:hidden z-[999] bg-white rounded-full absolute left-2 md:-left-[50px] top-1/2 transform -translate-y-1/2 rotate-[180deg]">
          <RightArrow />
        </div>
        <div className="custom-swiper-button-next z-[999] bg-white rounded-full absolute right-2 md:-right-[50px] top-1/2 transform -translate-y-1/2">
          <RightArrow />
        </div>
      </div>
    </section>
  );
}

export default HighTechMachinery;

const RightArrow = () => (
  <svg
    className="w-[51px] md:w-[76px] h-auto"
    viewBox="0 0 76 76"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="75.6774" height="75.6774" rx="37.8387" fill="white" />
    <path
      d="M45.405 37.8391C45.405 38.191 45.2817 38.5432 45.0355 38.8119L32.4226 52.5714C31.9298 53.109 31.1317 53.109 30.6392 52.5714C30.1466 52.0337 30.1463 51.1631 30.6392 50.6258L42.3603 37.8391L30.6392 25.0523C30.1463 24.5147 30.1463 23.6441 30.6392 23.1068C31.132 22.5694 31.9301 22.5691 32.4226 23.1068L45.0355 36.8663C45.2817 37.1349 45.405 37.4872 45.405 37.8391Z"
      fill="#103040"
    />
  </svg>
);
