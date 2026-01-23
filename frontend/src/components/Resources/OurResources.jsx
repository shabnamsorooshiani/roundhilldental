"use client";
import React from "react";
import ResourceCard from "../common/ResourceCard";
const list = [
  {
    tag: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting text is industry.",
    img: "/image/res-3.png",
    link: "/resources",
  },
  {
    tag: "Benefits of teeth",
    title: "The Benefits for teeth Cleaning",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting text is industry.",
    img: "/image/res4.png",
    link: "/resources",
  },
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
  {
    tag: "Weight Loss",
    title: "The Benefits of Hydration for Weight Loss",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting text is industry.",
    img: "/image/res5.png",
    link: "/resources",
  },
];

export default function OurResources({ data }) {
  return (
    <section className="container my-[100px] text-center">
      <h2 className="title leading-[110%] tracking-[-2.4%]">{data?.title}</h2>
      <p className="max-w-[500px] mt-4 mb-[80px] text-[22px] leading-[135.4%] mx-auto">
        {data?.desc}
      </p>
      <ul className="grid md:grid-cols-2 gap-6 text-left">
        {list.map((item, index) => {
          return <ResourceCard item={item} key={index} />;
        })}
      </ul>
    </section>
  );
}
