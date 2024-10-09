export const AuthLeft = () => {
  return (
    <section className="relative w-fit text-white">
      <img src="/img/auth-left.png" alt="Auth Left Image" />
      {/* top */}
      <div className="absolute w-full max-w-[497px] top-[120px] left-[60px] z-10">
        <h1 className="font-bold text-[62px]">
          A new way to buy and sell cars
        </h1>
      </div>

      {/* footer */}
      <div className="absolute w-full bottom-0 left-0 z-10 h-[86px] flex justify-between items-center px-[60px]">
        <h6 className="font-semibold text-base">
          Do you already have an account?
        </h6>
        <button className="bg-primary font-bold text-sm text-white text-center py-3 px-8 rounded-[10px]">
          Sign In
        </button>
      </div>
    </section>
  );
};
