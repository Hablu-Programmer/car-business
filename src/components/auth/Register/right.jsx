import { useState } from "react";
import { SocialLogin } from "../SocialLogin";
import { Header } from "./header";
import { Step1 } from "./Step1";

export const RegisterRight = () => {
  const [data, setData] = useState({
    email: "",
  });
  const [step, setStep] = useState(1);

  const changeData = (name, value) => setData({ ...data, [name]: value });
  const nextStep = () => {
    const stepNo =
      (step === 1 && data.email.length <= 1 && 2) || (step === 2 && 2) || 1;
    setStep(stepNo);
  };

  const stepData = () => {
    switch (step) {
      case 1:
        return {
          main: (
            <>
              <Step1 nextStep={nextStep} changeData={changeData} />
              <SocialLogin />
            </>
          ),
          title: "Sign Up to getting started",
          subtitle: "Enter your details to proceed further",
        };
      case 2:
        return {
          main: <></>,
          title: "Tell us about yourself",
          subtitle: "Enter your details to proceed further",
        };

      default:
        return { main: <></>, title: "", subtitle: "" };
    }
  };

  return (
    <section className="py-[70px] w-full max-w-[455px]">
      {/* Header */}
      <Header title={stepData().title} subTitle={stepData().subtitle} />

      {/* Authentication Form */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        {stepData().main}
      </div>
    </section>
  );
};
