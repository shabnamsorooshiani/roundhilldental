"use client";
import { imageResolver } from "@/utils/image-resolver";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const insuranceList = [
  {
    link: "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads/NEW_PATIENT_FORM_SPANSIH_9287071e7e.pdf",
    name: "Spanish NP Form",
    icon: "/icon/form.png",
  },
  {
    link: "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads/New_Patient_Form_English_3c3a9daeed.pdf",
    name: "English NP Form",
    icon: "/icon/form1.png",
  },
  {
    link: "/patient-info#insurance",
    name: "Insurance",
    icon: "/icon/form.png",
  },
];
const aboutList = [
  {
    link: "/about#meet-doctor",
    name: "Meet our Doctors",
    icon: "/icon/man.png",
  },
  {
    link: "/about#our-team",
    name: "Meet Team",
    icon: "/icon/team.png",
  },
  {
    link: "/about#choose-us",
    name: "Why Choose Us?",
    icon: "/icon/calendar.png",
  },
];

function Header({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const currentRoute = usePathname();
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const [isSubMenu3, setIsSubmenu3] = useState(false);
  const [isSelected, setIsSelected] = useState(null);

  return (
    <header className="bg-white header-shadow relative">
      <div className="center container justify-between py-3 lg:py-0">
        <Link href={"/"}>
          <Image
            src={imageResolver(data?.logo).path}
            alt={imageResolver(data?.alt).path}
            width={224}
            height={50}
            className="w-[260px]"
            priority={true}
          />
        </Link>

        <nav>
          <ul className="center gap-5 2xl:gap-[37px] hidden lg:flex relative">
            {data?.navlist?.map((el, index) => {
              return (
                <li
                  onMouseEnter={() => {
                    el?.name === "Services" && setIsSubmenu(true);
                    setIsSelected(index);
                    el?.name === "About Us" && setIsSubmenu2(true);
                    setIsSelected(index);
                    el?.name === "Patient Info" && setIsSubmenu3(true);
                    setIsSelected(index);
                  }}
                  onMouseLeave={() => {
                    el?.name === "Services" && setIsSubmenu(false);
                    setIsSelected(null);
                    el?.name === "About Us" && setIsSubmenu2(false);
                    setIsSelected(null);
                    el?.name === "Patient Info" && setIsSubmenu3(false);
                    setIsSelected(null);
                  }}
                  key={index}
                  className="nav-item relative"
                >
                  <a href={`${el?.url}`}>
                    <p
                      className={`${
                        currentRoute === el.url ? "text-main" : "text-black"
                      } flex gap-1.5`}
                    >
                      {el?.name}
                      {el?.sublinkURL && (
                        <Image
                          src={imageResolver(el?.icon).path}
                          alt={imageResolver(el.icon).alt}
                          width={15}
                          height={10}
                        />
                      )}
                    </p>
                  </a>
                  {isSubMenu && index === isSelected && (
                    <div
                      onMouseEnter={() => setIsSubmenu(true)}
                      onMouseLeave={() => setIsSubmenu(false)}
                      onClick={() => setIsSubmenu(false)}
                      className="absolute top-[103px] pt-[50px] -left-6 xl:-right-14 transition-all duration-3000 delay-1000 ease z-50 box-shadow"
                    >
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-3 p-7 bg-[#fff] rounded-[16px] text-[18px] min-w-[640px] relative">
                        <li className="absolute -top-[18px] left-8 xl:right-20">
                          <img src="/icon/subtract.png" alt="subtract" />
                        </li>
                        {data?.servicesList?.map((item, index) => (
                          <li key={index}>
                            <a className="center gap-2" href={item.url}>
                              <img
                                src={imageResolver(item?.icon).path}
                                alt={item?.name}
                                width={50}
                                height={50}
                                loading="lazy"
                              />
                              <p
                                className={`transition-all ease duration-500 text-nowrap`}
                              >
                                {item?.name}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isSubMenu2 && index === isSelected && (
                    <div
                      onMouseEnter={() => setIsSubmenu2(true)}
                      onMouseLeave={() => setIsSubmenu2(false)}
                      onClick={() => setIsSubmenu2(false)}
                      className="absolute top-[103px] pt-[50px] -right-7 transition-all duration-3000 delay-1000 ease z-50 box-shadow"
                    >
                      <ul className="flex flex-col gap-3 py-8 px-6 bg-[#fff] rounded-[16px] min-w-[275px] text-[18px] relative">
                        <li className="absolute -top-[18px] right-12">
                          <img src="/icon/subtract.png" alt="subtract" />
                        </li>
                        {aboutList?.map((item, index) => (
                          <li key={index}>
                            <a className="center gap-3" href={item?.link}>
                              <img src={item?.icon} alt="icon" loading="lazy" />
                              <p
                                className={`transition-all ease duration-500 text-nowrap`}
                              >
                                {item?.name}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {isSubMenu3 && index === isSelected && (
                    <div
                      onMouseEnter={() => setIsSubmenu3(true)}
                      onMouseLeave={() => setIsSubmenu3(false)}
                      onClick={() => setIsSubmenu3(false)}
                      className="absolute top-[103px] pt-[50px] -right-7 transition-all duration-3000 delay-1000 ease z-50 box-shadow"
                    >
                      <ul className="flex flex-col gap-3 py-8 px-6 bg-[#fff] rounded-[16px] min-w-[275px] text-[18px] relative">
                        <li className="absolute -top-[18px] right-12">
                          <img src="/icon/subtract.png" alt="subtract" />
                        </li>
                        {insuranceList?.map((item, index) => (
                          <li key={index}>
                            <a
                              className="center gap-3"
                              href={item?.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img src={item?.icon} alt="icon" loading="lazy" />
                              <p
                                className={`transition-all ease duration-500 text-nowrap`}
                              >
                                {item?.name}
                              </p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <a href={data?.contactLink.url} className="nav-btn">
          {data?.contactLink.name}
        </a>

        <button
          className="text-[24px] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="open menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g id="close">
                <path
                  id="x"
                  d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 50 50"
            >
              <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <MobileMenu
          setIsOpen={setIsOpen}
          currentRoute={currentRoute}
          navList={data?.navlist}
          servicesList={data?.servicesList}
          aboutList={aboutList}
        />
      )}
    </header>
  );
}

export default Header;
