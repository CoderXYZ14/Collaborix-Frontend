import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const InputBox = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  className = "",
  required = true,
}) => {
  return (
    <div className="mt-2">
      <Label
        htmlFor={name}
        className="block mb-1.5 text-sm font-medium text-slate-900 dark:text-white"
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`
          block w-full px-3 py-2 text-sm rounded-lg
          bg-white/70 dark:bg-slate-800/70
          border border-slate-200 dark:border-slate-700
          text-slate-900 dark:text-white
          placeholder:text-slate-500 dark:placeholder:text-slate-400
          focus:outline-none 
          focus:ring-2 
          focus:ring-violet-500/50 dark:focus:ring-violet-400/50 
          focus:border-violet-500 dark:focus:border-violet-400
          disabled:cursor-not-allowed 
          disabled:opacity-50
          transition-all duration-200
          backdrop-blur-sm
          ${className}
        `}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBox;
