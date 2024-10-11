import { AuthLeft } from "../components/auth/AuthLeft";
import { RegisterRight } from "../components/auth/Register/RegisterRight";

export const Register = () => {
  return (
    <main className="p-7 flex flex-col-reverse lg:flex-row items-center justify-evenly gap-2.5">
      <AuthLeft />
      <RegisterRight />
    </main>
  );
};
