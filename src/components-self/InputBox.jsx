import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const InputBox = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  required = true,
}) => {
  return (
    <div className="mt-2">
      <Label
        htmlFor={name}
        className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200"
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="block w-full px-3 py-2 text-sm rounded-lg
          bg-slate-100 dark:bg-slate-800/90
          border border-slate-200 dark:border-slate-700
          text-slate-900 dark:text-slate-100
          placeholder:text-slate-400 dark:placeholder:text-slate-500
          focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:focus:ring-purple-400/50 focus:border-purple-500 dark:focus:border-purple-400
          transition-colors duration-200"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBox;
