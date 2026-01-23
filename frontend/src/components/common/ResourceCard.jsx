import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ResourceCard({ item }) {
  return (
    <li className="p-4 xs:p-8 rounded-xl rev-shadow text-[18px] sm:text-[20px]">
      <Link href={item.link}>
        <div className="h-[350px] rounded-xl relative overflow-hidden mb-8">
          <Image
            src={item.img}
            alt="resource image"
            fill
            className="object-cover"
          />
        </div>
        <h3 className="font-semibold text-[22px] my-2.5">{item.title}</h3>
        <p>{item.desc}</p>
        <div className="center justify-between flex-wrap gap-3 bg-[#EEEEEE] p-4 border border-[#DBDBDB] mt-9 rounded-[12px]">
          <div className="center gap-2">
            <div className="w-[60px] h-[60px]">
              <img
                src="https://blob.roundhilldental.com/media/uploads/Image_9_8a1f10bb19.png"
                alt="author"
                className="object-fit"
              />
            </div>
            <div>
              <p className="font-semibold">Emily Johnson</p>
              <span className="block">23 May 2023</span>
            </div>
          </div>
          <div className="bg-red py-2 px-5 text-white font-semibold rounded-[7px] xs:ml-2 text-center">
            {item?.tag}
          </div>
        </div>
      </Link>
    </li>
  );
}
