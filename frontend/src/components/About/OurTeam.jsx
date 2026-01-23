"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function OurDoctors({ data }) {
  const [target, setTarget] = useState(null);

  return (
    <section className="our-team-bg">
      <div
        className="container text-center pt-[70px] md:pt-[150px] pb-[170px] md:pb-[250px]"
        id="meet-doctor"
      >
        <div>
          <h3 className="font-semibold text-[19px] lg:text-[22px] 2xl:text-[25px] tracking-[5%]">
            {data?.doctorsSection?.subTitle}
          </h3>
          <h2 className="title">{data?.doctorsSection?.title}</h2>
          <p className="max-w-[1000px] mt-2 desc mx-auto">
            {data?.doctorsSection?.desc}
          </p>
          <div className="grid col-span-1 lg:grid-cols-3 gap-14 text-left py-[60px] md:py-[100px] items-start">
            <div className="mb-5 sm:mb-8 lg:mb-0 rounded-lg overflow-hidden col-span-1">
              <Image
                src={imageResolver(data?.aboutDoctor?.photo).path}
                alt={imageResolver(data?.aboutDoctor?.photo).alt}
                height={500}
                width={400}
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <p className="text-[28px] lg:text-[34px]">
                {data?.aboutDoctor?.name}
                <span className="sm:ml-4 text-[19px] lg:text-[22px] block sm:inline">
                  {data?.aboutDoctor?.profession}
                </span>
              </p>
              {data?.aboutDoctor?.bio && (
                <p
                  className="my-8 tracking-[1.5%] desc lg:text-[19px]"
                  dangerouslySetInnerHTML={{ __html: data.aboutDoctor.bio }}
                />
              )}
              <a
                href={data?.aboutDoctor?.button?.url}
                className="inline-block bg-dark-bl px-8 rounded-lg text-white justify-center py-3 font-semibold text-[16px] lg:text-[20px]"
              >
                {data?.aboutDoctor?.button?.name}
              </a>
            </div>
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
              {data?.aboutDoctor?.bio && (
                <p className="my-8 tracking-[1.5%] desc lg:text-[19px]">
                  Dr. Shirin Sorooshian, a native of the East Bay Area, earned
                  her Bachelor of Science degree from California Polytechnic
                  State University, San Luis Obispo, and graduated with honors
                  from the University of the Pacific, Arthur A. Dugoni School of
                  Dentistry, where she received her Doctor of Dental Surgery
                  degree. Dr. Sorooshian is dedicated to maintaining a
                  cutting-edge knowledge of dental advancements through
                  continuous education and training. <br />
                  Dr. Sorooshian combines professional expertise with
                  compassionate care, offering each patient personalized,
                  high-quality dental treatment that is aligned with their
                  individual needs and goals. Renowned for her gentle touch and
                  commitment to patient comfort, she works collaboratively with
                  patients to create comprehensive treatment plans that enhance
                  both oral health and overall well-being. <br />
                  Outside of her practice, Dr. Sorooshian enjoys spending time
                  with her family, swimming, playing a variety of sports, and
                  traveling. She looks forward to meeting you and providing
                  exceptional care that exceeds your expectations.
                </p>
              )}
              <a
                href={data?.aboutDoctor?.button?.url}
                className="inline-block bg-dark-bl px-8 rounded-lg text-white justify-center py-3 font-semibold text-[16px] lg:text-[20px]"
              >
                {data?.aboutDoctor?.button?.name}
              </a>
            </div>
          </div>
        </div>
        <div className="pt-[60px] md:pt-[100px] pb-[60px] md:pb-[120px]">
          <div className="grid col-span-1 lg:grid-cols-3 gap-14 text-left items-start">
            <div className="mb-5 sm:mb-8 lg:mb-0 rounded-lg overflow-hidden col-span-1">
              <Image
                src="/image/Pouya-Namiranian-6x8-1.jpg"
                alt="Dr. Pouya Namiranian"
                height={500}
                width={400}
                className="w-full h-auto"
              />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <p className="text-[28px] lg:text-[34px]">
                Dr. Pouya Namiranian
                <span className="sm:ml-4 text-[19px] lg:text-[22px] block sm:inline">
                  (Oral Surgeon)
                </span>
              </p>
              <p className="my-8 tracking-[1.5%] desc lg:text-[19px]">
                Dr. Pouya is a first-generation college student who was born in
                Tehran, Iran and grew up there until age of 16. He then
                immigrated to the United States in 2009. He finished high school
                in Los Angeles, CA with a Suma Cum Laude honors. He then moved
                to Irvine, CA to continue his education at University of
                California, Irvine (UCI) and graduated with a Magna Cum Laude
                honors. Next in his journey was moving from the sunny state of
                California to Boston, MA to attend Tuft University School of
                Dental Medicine and obtain his dental degree with a Cum Laude
                honors. While in dental school, he earned numerous scholarships
                to showcase his excellence in education and patient care. Dr.
                Pouya then completed his Oral & Maxillofacial Surgery residency
                training at the University of California, San Francisco –
                Fresno, the only Level I trauma in the California Central
                Valley. There he received specialized training and vast
                experience in all aspects of oral and maxillofacial surgery. His
                interests include dentoalveolar surgery, complex oral
                rehabilitation and dental implants, orthognathic surgery and
                benign pathology.
                <br /> <br />
                Dr. Pouya prides himself in providing the utmost care to his
                patients with full transparency. His goal is to provide his
                patients with comprehensive and individualized care that focuses
                on their overall oral health and comfort.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8 xl:gap-20 mt-8 tracking-[1.5%] desc lg:text-[19px]">
            <div className="text-start">
              <h3 className="font-semibold">Education:</h3>
              <ul className="list-disc ml-5 my-3">
                <li>
                  B.S. – Biological Science and minor in Business Management –
                  University of California, Irvine
                </li>
                <li>
                  D.M.D. – Tufts University School of Dental Medicine, Boston,
                  MA
                </li>
                <li>
                  Certificate, Oral & Maxillofacial Surgery – University of
                  California, San Francisco – Fresno
                </li>
              </ul>
            </div>

            <div className="text-start">
              <h3 className="font-semibold">Certifications:</h3>
              <ul className="list-disc ml-5 my-3">
                <li>ACLS – Advance Cardiac Life Support</li>
                <li>ATLS – Advance Trauma Life Support</li>
                <li>BLS – Basic Life Support</li>
                <li>PALS – Pediatric Advance Life Support</li>
              </ul>
            </div>
          </div>
          <div className="text-start tracking-[1.5%] desc lg:text-[19px]">
            <h3 className="font-semibold my-3">Interests/hobbies:</h3>
            <p>
              On his free time, Dr. Pouya enjoys spending time with family (his
              wife Teriti, and his newborn daughter Aiyla) and friends, taking
              his dogs (Lily and Alice) on hikes, playing ping-pong and learning
              about new cutting-edge technologies that can improve our daily
              lives.
            </p>
            <div className="flex items-center pt-8">
              <a
                href={data?.aboutDoctor?.button?.url}
                className="inline-block mx-auto bg-dark-bl px-8 rounded-lg text-white justify-center py-3 font-semibold text-[16px] lg:text-[20px]"
              >
                {data?.aboutDoctor?.button?.name}
              </a>
            </div>
          </div>
        </div>
        <div id="our-team">
          <h2 className="title">Our Team</h2>
          <p className="max-w-[900px] mt-2 mb-7 desc mx-auto">
            You can trust that you are in the capable hands of a highly skilled
            and advanced dental team.
          </p>
          <div className="max-w-[950px] mx-auto relative">
            <ul className="mt-[80px] grid gap-40 md:grid-cols-2 md:gap-8">
              {data?.OurTeam?.map((item, index) => {
                const imageData = item?.photo?.data[0]?.attributes;
                return (
                  <li
                    key={index}
                    className="relative max-w-[700px] cursor-pointer"
                    onClick={() => setTarget(index)}
                  >
                    <div className="rounded-[14px] overflow-hidden">
                      <Image
                        src={imageData.url}
                        alt={item?.name}
                        width={460}
                        height={650}
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-[120px] left-1/2 transform -translate-x-1/2 bg-white py-5 px-4 xs:py-9 xs:px-[22px] border border-red border-b-4 rounded-[14px] w-[90%]">
                      <h3 className="text-[26px] xs:text-[36px] lg:text-[26px] xl:text-[34px] font-semibold">
                        {item?.name}
                      </h3>
                      <p className="text-text1 my-3 desc lg:text-[19px]">
                        {item?.profession}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {target !== null ? (
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white1 p-10 bg-opacity-80 cursor-pointer rounded-xl w-[90%] md:w-[90%]"
                onClick={(e) => {
                  e.stopPropagation();
                  setTarget(null);
                }}
              >
                <img
                  src="/icon/cross.png"
                  alt="icon"
                  className="absolute top-3 right-3"
                />
                <div className="">
                  <p className="text-[18px] lg:text-[20px]">
                    {data.OurTeam[target]?.bio}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
