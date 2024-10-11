import React from "react";

export const Header = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src="/logo.svg" alt="Logo" />
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center pt-[34px]">
        {title}
      </h1>
      <p className="text-sm text-foreground pt-[5px]">{subTitle}</p>
    </div>
  );
};
