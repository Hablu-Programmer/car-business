import React, { useState } from "react";
import { ConfirmPassword, Email, Parson, Password } from "../../../lib/icon";
import { Button } from "../button";
import { Input } from "../input";

export const Step2 = ({ nextStep, changeData, data }) => {
  const [agree, setAgree] = useState(false);

  const handleRegister = () => {
    console.log(data);
    nextStep();
  };

  return (
    <form>
      <div className="space-y-2">
        <Input
          disabled
          icon={<Email />}
          name="email"
          type="email"
          label="Email"
          value={data.email}
          isNotValid={false}
          changeData={changeData}
        />
        <div className="flex justify-between items-center gap-2">
          <Input
            icon={<Parson />}
            name="firstName"
            type="test"
            label="First name"
            placeholder="First name"
            value={data.firstName}
            isNotValid={false}
            changeData={changeData}
          />
          <Input
            icon={<Parson />}
            name="lastName"
            type="text"
            label="Last name"
            placeholder="Last name"
            value={data.lastName}
            isNotValid={false}
            changeData={changeData}
          />
        </div>
        <Input
          icon={<Password />}
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          value={data.password}
          isNotValid={false}
          changeData={changeData}
        />
        <Input
          icon={<ConfirmPassword />}
          name="confirmPassword"
          type="password"
          label="Confirm password"
          placeholder="Confirm password"
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

      <Button disabled={!agree} onClick={handleRegister}>
        Continue
      </Button>
    </form>
  );
};
