import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CustomDialog = ({ isOpen, onClose, onJoin, roomId, setRoomId }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join Room</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Input
            placeholder="Enter room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          />
          <Button onClick={onJoin}>Join</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
