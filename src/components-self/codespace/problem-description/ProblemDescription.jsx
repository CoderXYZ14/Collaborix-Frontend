import { useState } from "react";
import { Users, UserPlus, LogOut } from "lucide-react";
import useGetDifficultyColor from "@/custom-hooks/useGetDifficultyColor";
import useProblemSolvedStatus from "@/custom-hooks/useProblemSolvedStatus";
import { v4 as uuidV4 } from "uuid";
import {
  showErrorToast,
  showSuccessToast,
} from "@/utils/toast/toastNotifications";
import {
  Collaborators,
  CustomDialog,
  CustomHoverCard,
  ProblemExamples,
  ProblemStatement,
} from "./components";
import ProblemDetails from "./components/ProblemDetails";

const ProblemDescription = ({
  problem,
  solved,
  onRoomCreated,
  onLeaveRoom,
  clients,
  isConnected,
}) => {
  const isSolved = useProblemSolvedStatus(problem.id);
  const { textColor, bgColor } = useGetDifficultyColor(problem.difficulty);

  const [roomId, setRoomId] = useState("");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [joinRoomId, setJoinRoomId] = useState("");
  const [roomActive, setRoomActive] = useState(false);

  const handleCreateRoom = (e) => {
    e.preventDefault();
    const newRoomId = uuidV4();
    setRoomId(newRoomId);
    setShowCreateDialog(true);
    onRoomCreated(newRoomId);
    setRoomActive(true);
  };

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setShowCreateDialog(false);
    showSuccessToast("Room ID copied to clipboard!");
  };

  const handleJoinRoom = () => {
    if (joinRoomId) {
      setRoomId(joinRoomId);
      setShowJoinDialog(false);
      onRoomCreated(joinRoomId);
      setRoomActive(true);
    } else showErrorToast("Please enter a room ID");
  };

  const handleLeaveRoom = () => {
    setRoomId("");
    setRoomActive(false);
    onLeaveRoom();
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between h-12 items-center bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b-2 border-violet-500 transition-colors duration-200 flex items-center">
          Description
        </div>
        <div className="mr-4 flex items-center space-x-2">
          {/* Create Room Icon with Hover Card */}
          <CustomHoverCard
            tooltipText="Create a room"
            onClick={!isConnected ? handleCreateRoom : undefined}
            disabled={isConnected}
          >
            <UserPlus className="h-4 w-4" />
          </CustomHoverCard>
          {/* Join Room Icon */}
          <CustomHoverCard
            tooltipText="Join a room"
            onClick={!isConnected ? () => setShowJoinDialog(true) : undefined}
            disabled={isConnected}
          >
            <Users className="h-4 w-4" />
          </CustomHoverCard>
          {/* Leave Room Icon */}
          <CustomHoverCard
            tooltipText="Leave room"
            onClick={isConnected ? handleLeaveRoom : undefined}
            disabled={!isConnected}
          >
            <LogOut className="h-4 w-4" />
          </CustomHoverCard>
        </div>
      </div>

      {/* Create Room Dialog */}
      <CustomDialog
        isOpen={showCreateDialog}
        onClose={() => setShowCreateDialog(false)}
        title="Room Created"
        description="Share this room ID with others to collaborate:"
        inputValue={roomId}
        inputPlaceholder="Room ID"
        onInputChange={() => {}}
        onConfirm={handleCopyRoomId}
        confirmButtonText="Copy"
      />

      {/* Join Room Dialog */}
      <CustomDialog
        isOpen={showJoinDialog}
        onClose={() => setShowJoinDialog(false)}
        title="Join Room"
        description="Enter the room ID to join:"
        inputValue={joinRoomId}
        inputPlaceholder="Enter room ID"
        onInputChange={setJoinRoomId}
        onConfirm={handleJoinRoom}
        confirmButtonText="Join"
      />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <ProblemDetails
          problem={problem}
          isSolved={solved || isSolved}
          bgColor={bgColor}
          textColor={textColor}
        />
        <ProblemStatement problemStatement={problem.problemStatement} />
        <ProblemExamples examples={problem.examples} />
        <Collaborators clients={clients} />
      </div>
    </div>
  );
};

export default ProblemDescription;
