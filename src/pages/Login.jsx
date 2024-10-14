import { AuthLeft } from "../components/auth/AuthLeft";
import { LoginRight } from "../components/auth/login-right";
import { AuthWarper } from "../components/auth/warper";

export const Login = () => {
  return (
    <AuthWarper>
      <AuthLeft
        link="/register"
        buttonText="Sign Up"
        label="You don’t have an account?"
      />
      <LoginRight />
    </AuthWarper>
  );
};
