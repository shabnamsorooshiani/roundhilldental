"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { imageResolver } from "@/utils/image-resolver";

export default function OurDoctors({ data, doctor }) {
  return (
    <section className="our-doctors-bg">
      <div className="container text-center py-[100px]">
        <h3 className="font-semibold text-[20px] lg:text-[22px] 2xl:text-[25px] tracking-[5%]">
          THE PROFESSIONAL BEHIND YOUR SMILE
        </h3>
        <h2 className="title">{data?.title}</h2>
        <p className="max-w-[880px] mt-2 mb-6 desc mx-auto">{data?.desc}</p>
        <Link
          href={"/about#meet-doctor"}
          className="rounded-[8px] border-2 border-main py-2 px-6 mb-7 text-[20px] sm:text-[22px] font-semibold"
        >
          Meet The Doctor
        </Link>
        <div className="grid lg:grid-cols-3 gap-14 text-left py-[60px] md:pt-[80px] md:pb-[100px] items-start">
          <div className="mb-5 sm:mb-8 lg:mb-0 rounded-lg overflow-hidden col-span-1">
            <Image
              src={imageResolver(doctor?.photo).path}
              alt={imageResolver(doctor?.photo).alt}
              height={500}
              width={400}
              className="w-full h-auto"
            />
          </div>
          <div className="col-span-2">
            <p className="text-[28px] lg:text-[34px]">
              {doctor?.name}
              <span className="sm:ml-4 text-[19px] lg:text-[22px] block sm:inline">
                {doctor?.profession}
              </span>
            </p>
            {doctor?.bio && (
              <p
                className="my-8 tracking-[1.5%] desc lg:text-[19px]"
                dangerouslySetInnerHTML={{ __html: doctor.bio }}
              />
            )}
          </div>
        </div>
        <div>
          <div className="grid col-span-1 lg:grid-cols-3 gap-14 text-left items-start">
            <div className="mb-5 sm:mb-8 lg:mb-0 rounded-lg overflow-hidden col-span-1">
              <Image
                src="/image/Sorooshian.webp"
                alt="Dr. Shirin Sorooshian"
                height={500}
                width={400}
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <p className="text-[28px] lg:text-[34px]">
                Dr. Shirin Sorooshian
              </p>

              <p className="my-8 tracking-[1.5%] desc lg:text-[19px]">
                Dr. Shirin Sorooshian, a native of the East Bay Area, earned her
                Bachelor of Science degree from California Polytechnic State
                University, San Luis Obispo, and graduated with honors from the
                University of the Pacific, Arthur A. Dugoni School of Dentistry,
                where she received her Doctor of Dental Surgery degree. Dr.
                Sorooshian is dedicated to maintaining a cutting-edge knowledge
                of dental advancements through continuous education and
                training. <br /> <br />
                Dr. Sorooshian combines professional expertise with
                compassionate care, offering each patient personalized,
                high-quality dental treatment that is aligned with their
                individual needs and goals. Renowned for her gentle touch and
                commitment to patient comfort, she works collaboratively with
                patients to create comprehensive treatment plans that enhance
                both oral health and overall well-being. <br /> <br />
                Outside of her practice, Dr. Sorooshian enjoys spending time
                with her family, swimming, playing a variety of sports, and
                traveling. She looks forward to meeting you and providing
                exceptional care that exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
