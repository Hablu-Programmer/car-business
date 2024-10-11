import { SocialLogin } from "../SocialLogin";
import { Header } from "./header";
import { Step1 } from "./Step1";

export const RegisterRight = () => {
  return (
    <section className="py-[70px] w-full max-w-[455px]">
      {/* Header */}
      <Header
        title="Sign Up to getting started"
        subTitle="Enter your details to proceed further"
      />

      {/* Authentication Form */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        {/* Step: 1 */}
        <Step1 />

        <SocialLogin />
      </div>
    </section>
  );
};
