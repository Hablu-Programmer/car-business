import { SignUpWith } from "./SignUpWith";

export const RegisterRight = () => {
  return (
    <section className="py-[70px] w-full max-w-[455px]">
      {/* Header */}
      <div className="flex flex-col justify-center items-center">
        <img src="/logo.svg" alt="Logo" />
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center pt-[34px]">
          Sign Up to getting started
        </h1>
        <p className="text-sm text-foreground pt-[5px]">
          Enter your details to proceed further
        </p>
      </div>

      {/* Authentication section */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        {/* Auth Form */}
        <form>
          <div className="border rounded-lg border-outline pt-3 p-5">
            <label htmlFor="email" className="text-xs text-foreground">
              Email
            </label>
            <div className="flex justify-between items-center w-full gap-2.5">
              <input
                placeholder="Enter your email!"
                type="email"
                className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
              />
              <img src="/icons/email.png" alt="email icon" />
            </div>
          </div>

          <div className="space-x-2.5 pt-[15px]">
            <input type="radio" name="" id="" />
            <span className="font-bold text-sm text-foreground">
              I agree with terms & conditions
            </span>
          </div>

          <button className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px]">
            Sign Up
          </button>
        </form>

        <div>
          {/* Divider */}
          <div className="flex justify-center items-center gap-4 py-7 text-foreground">
            <div className="w-full h-[1px] bg-[#ECECF2]" />
            <span>Or</span>
            <div className="w-full h-[1px] bg-[#ECECF2]" />
          </div>

          {/* Social Login */}
          <div className="space-y-1.5">
            <SignUpWith icon="/icons/google.png" provider="Google" />
            <SignUpWith icon="/icons/fb.png" provider="Facebook" />
            <SignUpWith icon="/icons/tw.png" provider="Twitter" />
          </div>
        </div>
      </div>
    </section>
  );
};
