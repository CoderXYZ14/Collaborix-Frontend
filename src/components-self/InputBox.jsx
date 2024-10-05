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
        className="block mb-1 text-sm text-gray-900 dark:text-white font-semibold"
      >
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputBox;
