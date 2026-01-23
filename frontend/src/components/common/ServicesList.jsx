import Link from "next/link";
import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function ServicesList({ qnt, serviceList }) {
  return (
    <ul className="grid md:grid-cols-2 xl:grid-cols-3 mb-10 auto-rows-max">
      {serviceList?.slice(0, qnt).map(({ attributes }, index) => {
        return (
          <li className="py-2 md:p-3 lg:p-5 bg-[#fff]" key={index}>
            <Link
              href={`/services/${attributes?.slug}`}
              className="flex flex-col bg-beige p-6 xs:p-10 rounded-[20px] h-full"
            >
              <Image
                src={imageResolver(attributes?.cardIcon).path}
                width={152}
                height={155}
                alt="service icon"
                className="block mx-auto"
                loading="lazy"
              />
              <h3 className="font-medium text-[26px] mb-5 mt-2">
                {attributes?.title}
              </h3>
              <p className="serv-desc">{attributes?.cardDesc}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
