import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CustomDialog = ({
  isOpen,
  onClose,
  title,
  description,
  inputPlaceholder,
  inputValue,
  onInputChange,
  onConfirm,
  confirmButtonText,
  confirmButtonColor = "bg-purple-700 text-gray-300",
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-900 transition-colors duration-200">
        <DialogHeader>
          <DialogTitle className="dark:text-gray-300">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {description && (
            <div className="text-sm text-slate-600 dark:text-slate-300">
              {description}
            </div>
          )}
          {inputPlaceholder && (
            <div className="flex items-center space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => onInputChange(e.target.value)}
                placeholder={inputPlaceholder}
                className="font-mono text-sm dark:text-gray-200 text-gray-800"
              />
              <Button
                size="sm"
                className={confirmButtonColor}
                onClick={onConfirm}
              >
                {confirmButtonText}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
