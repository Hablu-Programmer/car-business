import React from "react";
import { cn } from "../../lib/utils";

export const Button = ({
  children,
  disabled,
  type = "button",
  onClick,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full bg-primary font-bold text-sm py-4 text-center rounded-[10px] text-white mt-[30px] disabled:opacity-80 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};
