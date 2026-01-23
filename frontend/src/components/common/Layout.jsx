import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, layoutData }) {
  return (
    <>
      <Header data={layoutData?.header} />
      <main>{children}</main>
      <Footer data={layoutData?.footer} />
    </>
  );
}
