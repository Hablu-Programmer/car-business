export const SignUpWith = ({ icon, provider }) => (
  <div className="p-[18px] flex justify-center items-center border border-outline rounded-[10px]">
    <img src={icon} alt="google" />
    <p className="w-full text-center font-semibold text-sm text-foreground">
      Sign Up with {provider}
    </p>
  </div>
);
