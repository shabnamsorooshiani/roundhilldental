"use client";
import React, { useState } from "react";

export default function FaqCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`border border-text1 p-7 pr-[65px] relative ${isOpen ? "border-0 bg-beige" : ""} transition-bg`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {item?.question}
      {isOpen ? <p className="text-[19px] mt-4">{item?.answer}</p> : null}
      <div className="absolute right-7 top-8 cursor-pointer">
        {isOpen ? (
          <img src="/icon/cross.png" alt="cross icon" />
        ) : (
          <img src="/icon/plus.png" alt="plus icon" />
        )}
      </div>
    </li>
  );
}
