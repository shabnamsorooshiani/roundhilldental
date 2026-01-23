"use client";
import React, { useState } from "react";
import { imageResolver } from "@/utils/image-resolver";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Review({ data, testimonials }) {
  const [imageIsFull, setImageIsFull] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const config = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    autoplay: false,
    speed: 500,
    breakpoints: {
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
    pagination: {
      clickable: true,
      el: ".custom-swiper-pagination",
    },

    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
    },

    modules: [Navigation, Pagination],
  };
  return (
    <section className="container text-center pt-[70px] lg:pt-[150px] pb-[70px] lg:pb-[100px]">
      <h3 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[25px] tracking-[5%] mb-3 text-red">
        {data?.subTitle}
      </h3>
      <h2 className="title">{data?.title}</h2>
      <p className="max-w-[700px] xl:max-w-[1000px] mt-2 desc mx-auto mb-[120px]">
        {data?.desc}
      </p>
      <div className="review-bg justify-center md:mb-[100px] relative">
        <div className="custom-swiper-button-prev z-[999]">
          <LeftArrow />
        </div>
        <div className="custom-swiper-button-next z-[999]">
          <RightArrow />
        </div>
        <Swiper {...config}>
          {testimonials?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="p-2 relative"
                onClick={() => {
                  setImageIsFull(true);
                  setSelectedReview(index);
                }}
              >
                <img
                  src={imageResolver(item?.attributes?.authorPhoto).path}
                  alt="review"
                  className={
                    index % 2 === 0
                      ? "h-full xs:w-auto object-cover xs:mt-[65px] md:mt-[115px] rounded-xl cursor-pointer w-full"
                      : "h-full xs:w-auto object-cover xs:mb-[80px] md:mb-[180px] rounded-xl cursor-pointer w-full"
                  }
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {imageIsFull ? (
          <div
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white1 p-10 bg-opacity-70 cursor-pointer rounded-xl w-[90%] md:w-[70%] lg:w-1/2"
            onClick={() => setImageIsFull(false)}
          >
            <img
              src="/icon/cross.png"
              alt="icon"
              className="absolute top-3 right-3"
            />
            <div className="md:flex gap-6 items-start justify-center max-w-[800px]">
              <img
                src="/quote-symb.png"
                alt="icon"
                loading="lazy"
                className="my-3"
              />
              <div className="flex flex-col items-end gap-5">
                <p className="max-w-[600px] text-[22px] lg:text-[30px]">
                  {testimonials[selectedReview]?.attributes?.comment}
                </p>
                <span className="text-[20px] sm:text-[23px] font-semibold">
                  {testimonials[selectedReview]?.attributes?.author}
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
const RightArrow = () => (
  <div
    style={{
      position: "absolute",
      top: "-70px",
      right: "30px",
      width: "96px",
      height: "44px",
      cursor: "pointer",
    }}
  >
    <img
      src="/arrow-next.png"
      alt="icon"
      style={{ width: "96px", height: "44px" }}
    />
  </div>
);

const LeftArrow = () => (
  <div
    style={{
      position: "absolute",
      right: "150px",
      top: "-70px",
      width: "96px",
      height: "44px",
      borderRadius: "30px",
      cursor: "pointer",
    }}
  >
    <img
      src="/arrow-back.png"
      alt="icon"
      style={{ width: "96px", height: "44px" }}
    />
  </div>
);
