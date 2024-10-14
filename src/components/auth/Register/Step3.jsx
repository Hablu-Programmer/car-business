import React from "react";
import { Button } from "../button";
import { Header } from "./header";

export const Step3 = ({ email }) => {
  return (
    <div className="space-y-[30px]">
      <Header
        customImg="/img/thank-you.png"
        title="Thank you!"
        subTitle={`We sent an email to ${email} Click confirmation link in the email to
          verify your account`}
      />
      <Button className="mt-2.5">Open Email App & Confirm</Button>
    </div>
  );
};
