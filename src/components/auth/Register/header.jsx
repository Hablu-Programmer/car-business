import React from "react";

export const Header = ({ title, subTitle, customImg }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img src={customImg || "/logo.svg"} alt="Logo" />
      <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl pt-[34px]">
        {title}
      </h1>
      <p className="text-sm text-foreground pt-[5px]">{subTitle}</p>
    </div>
  );
};
