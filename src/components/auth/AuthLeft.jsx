export const AuthLeft = () => {
  return (
    <section className="relative w-fit text-white">
      <img src="/img/auth-left.png" alt="Auth Left Image" />
      {/* top */}
      <div className="absolute w-[90%] max-w-[497px] top-[30px] left-[30px] lg:top-[120px] lg:left-[60px] z-10">
        <h1 className="font-bold text-xl md:text-5xl lg:text-[62px]">
          A new way to buy and sell cars
        </h1>
      </div>

      {/* footer */}
      <div className="absolute w-full bottom-0 left-0 z-10 h-20 sm:h-[86px] flex justify-between items-center px-2.5 sm:px-10 lg:px-[60px]">
        <h6 className="font-semibold text-xs md:text-base">
          Do you already have an account?
        </h6>
        <button className="bg-primary font-bold text-sm text-white text-center py-3 px-8 rounded-[10px]">
          Sign&nbsp;In
        </button>
      </div>
    </section>
  );
};
