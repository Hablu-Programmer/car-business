import React from "react";
import { Button } from "../button";

export const Step3 = ({ email }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] ">
      <img src="/img/thank-you.png" alt="" />
      <div className="space-y-1.5 text-center">
        <h1 className="font-bold text-[36px] leading-[48px]">Thank you!</h1>
        <p className="text-sm text-[#9A9EA7]">
          We sent an email to {email} Click confirmation link in the email to
          verify your account
        </p>
      </div>
      <Button className="mt-2.5">Open Email App & Confirm</Button>
    </div>
  );
};
