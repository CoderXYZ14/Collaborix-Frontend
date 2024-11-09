import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const CustomHoverCard = ({ children, tooltipText, onClick, disabled }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div
          className={`h-4 w-4 text-slate-600 dark:text-slate-300 ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer"
          } transition-colors duration-200`}
          onClick={!disabled ? onClick : undefined}
        >
          {children}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <div className="text-sm">{tooltipText}</div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default CustomHoverCard;
