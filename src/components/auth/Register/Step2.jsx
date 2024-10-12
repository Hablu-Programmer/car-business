import React, { useState } from "react";
import { Button } from "../button";
import { Input } from "../input";

export const Step2 = ({ nextStep, changeData, data }) => {
  const [agree, setAgree] = useState(false);

  return (
    <form>
      <div className="space-y-2">
        <Input
          disabled
          icon="/icons/email.png"
          name="email"
          type="email"
          label="Email"
          value={data.email}
          isNotValid={false}
          changeData={changeData}
        />
        <div className="flex justify-between items-center gap-2">
          <Input
            disabled
            icon="/icons/email.png"
            name="firstName"
            type="test"
            label="First name"
            value={data.firstName}
            isNotValid={false}
            changeData={changeData}
          />
          <Input
            disabled
            icon="/icons/email.png"
            name="lastName"
            type="text"
            label="Last name"
            value={data.lastName}
            isNotValid={false}
            changeData={changeData}
          />
        </div>
        <Input
          disabled
          icon="/icons/email.png"
          name="password"
          type="password"
          label="Password"
          value={data.password}
          isNotValid={false}
          changeData={changeData}
        />
        <Input
          disabled
          icon="/icons/email.png"
          name="confirmPassword"
          type="text"
          label="Confirm password"
          value={data.confirmPassword}
          isNotValid={false}
          changeData={changeData}
        />
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

      <Button disabled={!agree || !isValidEmail()} onClick={nextStep}>
        Continue
      </Button>
    </form>
  );
};
