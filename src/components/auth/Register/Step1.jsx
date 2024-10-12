import React, { useState } from "react";
import { Email } from "../../../lib/icon";
import { Button } from "../button";
import { Input } from "../input";

export const Step1 = ({ nextStep, changeData, email }) => {
  const [agree, setAgree] = useState(false);

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <form>
      <Input
        name="email"
        type="email"
        label="Email"
        value={email}
        icon={<Email />}
        changeData={changeData}
        placeholder="Enter your email!"
        isNotValid={email.length !== 0 && !isValidEmail()}
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
