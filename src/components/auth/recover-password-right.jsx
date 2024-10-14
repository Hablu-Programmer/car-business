import React, { useState } from "react";
import { Header } from "./Register/header";
import { Input } from "./input";
import { Email } from "../../lib/icon";
import { Button } from "./button";

export const RecoverPasswordRight = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const changeData = (name, value) => setData({ ...data, [name]: value });
  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  return (
    <section className="py-[70px] w-full max-w-[500px]">
      {/* Header */}
      <Header
        customImg="/img/recover-password.png"
        title="Lost your password? Enter your details to recover"
        subTitle="Enter your details to proceed further"
      />

      {/* Authentication Form */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        <form>
          <Input
            name="email"
            type="email"
            label="Email"
            value={data.email}
            icon={<Email />}
            changeData={changeData}
            placeholder="Enter your email!"
            isNotValid={data.email && !isValidEmail()}
          />

          <Button disabled={!isValidEmail()} onClick={() => {}}>
            Recover
          </Button>
        </form>
      </div>
    </section>
  );
};
