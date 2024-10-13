import { AuthLeft } from "../components/auth/AuthLeft";
import { RegisterRight } from "../components/auth/Register/right";
import { AuthWarper } from "../components/auth/warper";

export const Register = () => {
  return (
    <AuthWarper>
      <AuthLeft
        link="/login"
        buttonText={<>Sign&nbsp;In</>}
        label="Do you already have an account?"
      />
      <RegisterRight />
    </AuthWarper>
  );
};
