import React, { useState } from "react";

export const Step1 = ({ nextStep, changeData }) => {
  const [agree, setAgree] = useState(false);

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
            onChange={(e) => changeData(e.target.name, e.target.value)}
            className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
          />
          <img src="/icons/email.png" alt="email icon" />
        </div>
      </div>

      <div className="space-x-2.5 pt-[15px]">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => setAgree(e.target.checked)}
        />
        <span className="font-bold text-sm text-foreground">
          I agree with terms & conditions
        </span>
      </div>

      <button
        type="button"
        disabled={!agree}
        onClick={nextStep}
        className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px] disabled:opacity-80 disabled:cursor-not-allowed"
      >
        Sign Up
      </button>
    </form>
  );
};
