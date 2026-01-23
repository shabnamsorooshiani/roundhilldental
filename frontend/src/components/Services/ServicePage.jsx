import HeroService from "./Hero-Service";
import ServiceDetails from "./ServiceDetails";

export default function ServicePage({ data }) {
  return (
    <>
      <HeroService data={data} />
      <ServiceDetails data={data} />
    </>
  );
}
