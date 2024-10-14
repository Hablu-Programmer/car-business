import { AuthLeft } from "../components/auth/AuthLeft";
import { RecoverPasswordRight } from "../components/auth/recover-password-right";
import { AuthWarper } from "../components/auth/warper";

export const RecoverPassword = () => (
  <AuthWarper>
    <AuthLeft
      link="/register"
      buttonText="Sign Up"
      label="You don’t have an account?"
    />
    <RecoverPasswordRight />
  </AuthWarper>
);
