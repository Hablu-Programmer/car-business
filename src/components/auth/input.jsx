import { cn } from "../../lib/utils";

export const Input = ({
  icon,
  label,
  changeData,
  isNotValid,
  ...inputProps
}) => {
  return (
    <div
      className={cn(
        "border rounded-lg border-outline pt-3 p-5 min-h-[82px] flex flex-col justify-center items-start gap-[3px]",
        isNotValid && "border-red-500"
      )}
    >
      {inputProps.value && (
        <label htmlFor={inputProps.name} className="text-xs text-foreground">
          {label}
        </label>
      )}
      <div className="flex justify-between items-center w-full gap-2.5">
        <input
          onChange={(e) => changeData(e.target.name, e.target.value)}
          className="w-full font-bold text-sm focus:outline-none placeholder:font-normal bg-transparent"
          {...inputProps}
        />
        <div
          className={cn("text-[#9A9EA7]", inputProps.value && "text-[#0D0A19]")}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
