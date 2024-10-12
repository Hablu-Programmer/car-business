import React from "react";

export const Button = ({ children, disabled, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px] disabled:opacity-80 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};
