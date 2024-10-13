import { Link } from "react-router-dom";

export const AuthLeft = ({ label, link, buttonText }) => {
  return (
    <section className="relative w-fit text-white">
      <img
        src="/img/auth-left.png"
        alt="Auth Left Image"
        className="w-full max-w-[500px] lg:max-w-fit lg:w-[500px] xl:w-auto"
      />
      {/* top */}
      <div className="absolute w-[90%] max-w-[497px] top-[30px] left-[30px] lg:top-[80px] xl:top-[120px] lg:left-[40px] xl:left-[60px] z-10">
        <h1 className="font-bold text-xl md:text-5xl xl:text-[62px]">
          A new way to buy and sell cars
        </h1>
      </div>

      {/* footer */}
      <div className="absolute w-full bottom-0 left-0 z-10 h-20 sm:h-[65px] xl:h-[86px] flex justify-between items-center px-2.5 sm:px-10 lg:px-[60px]">
        <h6 className="font-semibold text-xs md:text-base">{label}</h6>
        <Link to={link}>
          <button className="bg-primary font-bold text-sm text-white text-center py-3 px-8 rounded-[10px]">
            {buttonText}
          </button>
        </Link>
      </div>
    </section>
  );
};
