import React, { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";

export const Step2 = ({ nextStep, changeData, data }) => {
  const [agree, setAgree] = useState(false);

  return (
    <form>
      <Input
        icon="/icons/email.png"
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email!"
        changeData={changeData}
        isNotValid={data.email.length !== 0 && !isValidEmail()}
      />

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

      <Button disabled={!agree || !isValidEmail()} onClick={nextStep}>
        Sign Up
      </Button>
    </form>
  );
};
