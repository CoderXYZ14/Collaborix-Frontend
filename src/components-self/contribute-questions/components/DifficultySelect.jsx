import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGetDifficultyColor from "@/custom-hooks/useGetDifficultyColor";

const DifficultySelect = ({ value, onValueChange }) => {
  const getColorClasses = (difficulty) => useGetDifficultyColor(difficulty);

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white hover:bg-slate-800/90 transition-colors">
        <SelectValue placeholder="Select difficulty">
          {value && (
            <span className="inline-flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${getColorClasses(
                  value
                ).textColor.replace("text-", "bg-")}`}
              />
              <span className={getColorClasses(value).textColor}>{value}</span>
            </span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-slate-900/90 backdrop-blur-sm border border-slate-700">
        {["Easy", "Medium", "Hard"].map((difficulty) => {
          const colors = getColorClasses(difficulty);
          return (
            <SelectItem
              key={difficulty}
              value={difficulty}
              className={`relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-slate-800/90 cursor-pointer transition-colors ${colors.textColor}`}
            >
              <span
                className={`absolute left-2 h-2 w-2 rounded-full ${colors.textColor.replace(
                  "text-",
                  "bg-"
                )}`}
              />
              {difficulty}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default DifficultySelect;
