import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { imageResolver } from "@/utils/image-resolver";

export default function BookAppointment({ data, home }) {
  return (
    <section className="book-bg" id="book-appointment">
      <div className="container text-center py-[130px]">
        <h2 className="title">{data?.title}</h2>
        <p className="max-w-[700px] xl:max-w-[1000px] mt-2 mb-[100px] desc mx-auto">
          {data?.desc}
        </p>
        <ul className="grid justify-items-center lg:grid-cols-3 gap-10">
          <li className="max-w-[400px]">
            <Image
              src={imageResolver(data?.cards[0]?.icon).path}
              width={80}
              height={80}
              className="block mx-auto"
              alt={data?.cards[0]?.title}
            />
            <h3 className="font-semibold text-[26px] md:text-[30px] 2xl:text-[40px] my-5">
              {data?.cards[0]?.title}
            </h3>
            <p className="text-[16px] md:text-[18px] 2xl:text-[22px] mb-5">
              {data?.cards[0]?.desc}
            </p>
            <a
              className="text-[16px] md:text-[18px] 2xl:text-[22px] text-red"
              href={`tel:${data?.cards[0]?.url}`}
            >
              {data?.cards[0]?.linkName}
            </a>
          </li>
          <li className="max-w-[400px]">
            <Image
              src={imageResolver(data?.cards[1]?.icon).path}
              width={80}
              height={80}
              className="block mx-auto"
              alt={data?.cards[1]?.title}
            />
            <h3 className="font-semibold text-[26px] md:text-[30px] 2xl:text-[40px] my-5">
              {data?.cards[1]?.title}
            </h3>
            <p className="text-[16px] md:text-[18px] 2xl:text-[22px] mb-5">
              {data?.cards[1]?.desc}
            </p>
            <a
              className="text-[16px] md:text-[18px] 2xl:text-[22px] text-red"
              href={`mailto:${data?.cards[1]?.url}`}
            >
              {data?.cards[1]?.linkName}
            </a>
          </li>
          <li className="max-w-[400px]">
            <Image
              src={imageResolver(data?.cards[2]?.icon).path}
              width={80}
              height={80}
              className="block mx-auto"
              alt={data?.cards[2]?.title}
            />
            <h3 className="font-semibold text-[26px] md:text-[30px] 2xl:text-[40px] my-5">
              {data?.cards[2]?.title}
            </h3>
            <p className="text-[16px] md:text-[18px] 2xl:text-[22px] mb-5">
              {data?.cards[2]?.desc}
            </p>
            <a
              className="text-[16px] md:text-[18px] 2xl:text-[22px] text-red"
              href={data?.cards[2]?.url}
              target="_blank"
              dangerouslySetInnerHTML={{ __html: data?.cards[2]?.linkName }}
            ></a>
          </li>
        </ul>
        <ContactForm home={home} />
      </div>
    </section>
  );
}
