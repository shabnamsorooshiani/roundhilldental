import FaqCard from "./FaqCard";

export default function FAQ({ data }) {
  return (
    <section className="container text-center py-[80px] lg:py-[130px]">
      <h2 className="title">{data?.title}</h2>
      <p className="max-w-[1000px] mt-2 mb-[80px] text-[22px] lg:text-[28px] mx-auto">
        {data?.desc}
      </p>
      <ul className="text-left grid lg:grid-cols-2 text-[20px] lg:text-[24px] gap-9 items-start">
        {data?.questions?.map((item) => {
          return <FaqCard item={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}
