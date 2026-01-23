import Image from "next/image";
import { imageResolver } from "@/utils/image-resolver";

export default function HeroService({ data }) {
  return (
    <div className="w-full relative bg-[#223F5A] overflow-hidden">
      <Image
        priority
        src={imageResolver(data?.backgroundImage).path}
        alt={data?.title}
        className="absolute object-cover right-0 z-10 min-h-full w-auto md:w-[70%] lg:w-[70%] 2xl:w-auto"
        // layout="fill"
        sizes="100vh"
        width={0}
        height={0}
      />
      <section className="service-bg text-white py-[100px] sm:py-[130px] xl:py-[160px] relative z-20">
        <div className="container">
          <h1 className="max-w-[680px] text-[50px] lg:text-[70px] font-bold leading-[70px] md:leading-[90px] mb-5">
            {data?.title}
          </h1>
          <p className="text-[18px] max-w-[500px]">{data?.cardDesc}</p>
          <a
            href="/contact#book-appointment"
            className="text-[18px] lg:text-[24px] bg-red-beige leading-4 py-5 px-8 inline-block mt-11 rounded-[50px] font-bold"
          >
            Book an appointment
          </a>
        </div>
      </section>
    </div>
  );
}
