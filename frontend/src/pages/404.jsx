export default function NotFound() {
  return (
    <div className="error-bg pt-[100px] pb-[110px]">
      <div className="container center flex-col text-center">
        <img src="/image/404image.png" alt="page not found image" />
        <h1 className="font-bold text-[60px] -mt-10">Oops! Page not found!</h1>
        <p className="max-w-[540px] my-6 text-[18px]">
          Leveling customer service for state of the art customer service
          innovate product for reliable supply engage web services cutting-edge
          deliverables.
        </p>
        <a href="/" className="text-white bg-dark-bl py-4 px-11 font-[14px]">
          Back to Home
        </a>
      </div>
    </div>
  );
}
