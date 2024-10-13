import { useState } from "react";
import { SocialLogin } from "../SocialLogin";
import { Header } from "./header";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const RegisterRight = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [step, setStep] = useState(1);

  const changeData = (name, value) => setData({ ...data, [name]: value });

  const nextStep = (propsStep) => {
    const step1 = data.email;
    const step2 =
      data.firstName || data.lastName || data.password || data.confirmPassword;
    const stepNo =
      (step === 1 && step1 && 2) ||
      (step === 2 && step2 && propsStep) ||
      2 ||
      1;
    setStep(stepNo);
  };

  const stepData = () => {
    switch (step) {
      case 1:
        return {
          main: (
            <>
              <Step1
                email={data.email}
                nextStep={nextStep}
                changeData={changeData}
              />
              <SocialLogin />
            </>
          ),
          title: "Sign Up to getting started",
          subtitle: "Enter your details to proceed further",
        };
      case 2:
        return {
          main: (
            <Step2 data={data} nextStep={nextStep} changeData={changeData} />
          ),
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
      {step !== 3 && (
        <Header title={stepData().title} subTitle={stepData().subtitle} />
      )}

      {/* Authentication Form */}
      <div className="w-full max-w-[420px] mx-auto pt-[42px]">
        {step === 3 ? <Step3 email={data.email} /> : stepData().main}
      </div>
    </section>
  );
};
