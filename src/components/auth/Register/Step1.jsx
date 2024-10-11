import React from "react";

export const Step1 = ({ nextStep }) => {
  return (
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

      <button
        onClick={nextStep}
        className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px]"
      >
        Sign Up
      </button>
    </form>
  );
};
