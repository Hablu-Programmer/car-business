import React from "react";

export const SocialLogin = () => {
  return (
    <div>
      {/* Divider */}
      <div className="flex justify-center items-center gap-4 py-7 text-foreground">
        <div className="w-full h-[1px] bg-[#ECECF2]" />
        <span>Or</span>
        <div className="w-full h-[1px] bg-[#ECECF2]" />
      </div>

      {/* Social Login */}
      <div className="space-y-1.5">
        <SignUpWith icon="/icons/google.png" provider="Google" />
        <SignUpWith icon="/icons/fb.png" provider="Facebook" />
        <SignUpWith icon="/icons/tw.png" provider="Twitter" />
      </div>
    </div>
  );
};
