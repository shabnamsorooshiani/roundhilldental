import React from "react";

export default function AskQuestion() {
  return (
    <section className="bg-red-beige p-8 flex-col center md:flex-row justify-between gap-5 text-white font-semibold">
      <div className="center mx-auto">
        <img src="/icon/ask.png" alt="question icon" />
        <p className="max-w-[600px] ml-7 text-[30px] lg:text-[54px]">
          What’s on your mind?
        </p>
      </div>
    </section>
  );
}
