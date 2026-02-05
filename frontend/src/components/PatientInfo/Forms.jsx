import { imageResolver } from "@/utils/image-resolver";

export default function Forms({ data, cards }) {
  return (
    <section className="container text-center py-[150px]">
      <h3 className="font-semibold text-[20px] lg:text-[22px] 2xl:text-[25px] tracking-[5%] mb-3">
        {data?.subTitle}
      </h3>
      <h2 className="title">{data?.title}</h2>
      <p className="max-w-[1200px] mt-2 mb-20 desc mx-auto">{data?.desc}</p>
      <ul className="lg:flex gap-8 text-left">
        {cards?.map((item, index) => {
          return (
            <li
              className="sm:flex gap-8 cr-shadow items-start p-8 sm:p-[50px] rounded-[30px]"
              key={index}
            >
              <img
                src={imageResolver(item?.image).path}
                alt="icon"
                className="mb-6"
              />
              <div>
                <h3 className="text-red text-[26px] lg:text-[34px] 2xl:text-[40px] font-semibold">
                  {item?.mainTitle}
                </h3>
                <p className="desc my-5">{item?.title}</p>
                <p className="mb-6">{item?.desc}</p>
                <a
                  href={
                    item?.button?.name === "Spanish Patent Form"
                      ? "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads/NEW_PATIENT_FORM_SPANSIH_9287071e7e.pdf"
                      : "https://akku4ojhingudehn.public.blob.vercel-storage.com/media/uploads/New_Patient_Form_English_3c3a9daeed.pdf"
                  }
                  target="_blank"
                  className="center gap-2 text-white rounded-[50px] py-2 px-6 text-[16px] sm:text-[18px] bg-dark-bl max-w-[250px]"
                >
                  <img
                    src={imageResolver(item?.button?.icon).path}
                    alt="icon"
                  />
                  {item?.button?.name}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
