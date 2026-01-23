import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { imageResolver } from "@/utils/image-resolver";

function MobileMenu({
  setIsOpen,
  currentRoute,
  navList,
  servicesList,
  aboutList,
}) {
  const [isSubMenu, setIsSubmenu] = useState(false);
  const [isSubMenu2, setIsSubmenu2] = useState(false);
  const [isSelected, setIsSelected] = useState(null);

  return (
    <div className="bg-[#fff] absolute top-[65px] left-0 z-20 text-[24px] lg:hidden w-full p-5">
      <nav>
        <ul>
          {navList.map((el, index) => {
            return (
              <li key={index} className="nav-item">
                <div className="flex gap-2">
                  <Link href={`${el?.url}`} onClick={() => setIsOpen(false)}>
                    <p
                      className={`${
                        currentRoute === el.url ? "text-main" : "text-black"
                      }`}
                    >
                      {el.name}
                    </p>
                  </Link>
                  {el.sublinkURL && (
                    <Image
                      src={imageResolver(el.icon).path}
                      alt={imageResolver(el.icon).alt}
                      width={15}
                      height={10}
                      onClick={() => {
                        el.name === "Services" && setIsSubmenu(!isSubMenu);
                        setIsSelected(index);
                        el.name === "About Us" && setIsSubmenu2(!isSubMenu2);
                        setIsSelected(index);
                      }}
                    />
                  )}
                </div>
                {isSubMenu && index === isSelected && (
                  <div onClick={() => setIsOpen(false)} className="mt-4">
                    <ul>
                      {servicesList?.map((item, index) => (
                        <li key={index}>
                          <Link className="center gap-2" href={item.url}>
                            <img
                              src={imageResolver(item?.icon).path}
                              alt={item?.name}
                              width={50}
                              height={50}
                            />
                            <p
                              className={`transition-all ease duration-500 text-nowrap`}
                            >
                              {item?.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {isSubMenu2 && index === isSelected && (
                  <div onClick={() => setIsOpen(false)} className="mt-5">
                    <ul>
                      {aboutList?.map((item, index) => (
                        <li key={index}>
                          <Link className="center gap-2" href={item.link}>
                            <img src={item.icon} alt="icon" />
                            <p
                              className={`transition-all ease duration-500 text-nowrap`}
                            >
                              {item?.name}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="font-500 text-[16px] bg-[#1c3b58] text-white py-4 px-10 rounded-[50px] my-6 inline-block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MobileMenu;
