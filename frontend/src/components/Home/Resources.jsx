import React from "react";
import Link from "next/link";
import ResourceCard from "../common/ResourceCard";

const list = [
  {
    tag: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting text is industry.",
    img: "/image/res1.png",
    link: "/resources",
  },
  {
    tag: "Benefits of teeth",
    title: "The Benefits for teeth Cleaning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting text is industry.",
    img: "/image/res2.png",
    link: "/resources",
  },
];
export default function Resources({ data }) {
  return (
    <section className="container text-center py-[100px]">
      <h2 className="title">{data?.title}</h2>
      <p className="max-w-[1000px] mt-2 mb-7 text-[20px] sm:text-[32px] mx-auto">
        {data?.desc}
      </p>
      <ul className="grid md:grid-cols-2 gap-6 text-left">
        {list.map((item, index) => {
          return <ResourceCard item={item} key={index} />;
        })}
      </ul>
      <Link
        href={data?.button?.url}
        className="inline-block font-semibold mx-auto border border-main text-main py-3 px-6 rounded-lg text-[22px] leading-[136%] mt-[75px]"
      >
        {data?.button?.name}
      </Link>
    </section>
  );
}
