import { cn } from "../../lib/utils";

export const Input = ({
  icon,
  name,
  type,
  value,
  label,
  changeData,
  isNotValid,
  placeholder,
}) => {
  return (
    <div
      className={cn(
        "border rounded-lg border-outline pt-3 p-5",
        isNotValid && "border-red-500"
      )}
    >
      <label htmlFor={name} className="text-xs text-foreground">
        {label}
      </label>
      <div className="flex justify-between items-center w-full gap-2.5">
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={(e) => changeData(e.target.name, e.target.value)}
          className="w-full font-bold text-sm focus:outline-none placeholder:font-normal"
        />
        <img src={icon} alt="" />
      </div>
    </div>
  );
};
