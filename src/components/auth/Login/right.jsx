import { useState } from "react";
import { Link } from "react-router-dom";
import { Email, Password } from "../../../lib/icon";
import { Header } from "../Register/header";
import { SocialLogin } from "../SocialLogin";
import { Button } from "../button";
import { Input } from "../input";

export const LoginRight = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [agree, setAgree] = useState(false);

  const changeData = (name, value) => setData({ ...data, [name]: value });
  const clearFiled = (name) => setData({ ...data, [name]: "" });

  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  return (
    <section className="py-[70px] w-full max-w-[455px]">
      {/* Header */}
      <Header
        title="Sign In to your account"
        subTitle="Enter your details to proceed further"
      />

      {/* Authentication Form */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        <form>
          <div className="space-y-2">
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
            <Input
              isClearable
              icon={<Password />}
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              value={data.password}
              isNotValid={false}
              clearFiled={clearFiled}
              changeData={changeData}
            />
          </div>

          <div className="flex justify-between items-center gap-2.5  pt-[15px]">
            <div className="space-x-2.5">
              <input
                type="radio"
                name=""
                id=""
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span className="font-bold text-sm text-[#0D0A19]">
                Remember me
              </span>
            </div>
            <Link
              to="/recover-password"
              className="font-semibold text-sm text-[#7963F0]"
            >
              Recover password
            </Link>
          </div>

          <Button disabled={!agree || !isValidEmail()} onClick={() => {}}>
            Sign in
          </Button>
        </form>
        <SocialLogin />
      </div>
    </section>
  );
};
