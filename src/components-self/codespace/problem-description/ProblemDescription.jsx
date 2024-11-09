import { useState } from "react";
import { CheckCircle, Users, UserPlus, LogOut } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useGetDifficultyColor from "@/custom-hooks/useGetDifficultyColor";
import useProblemSolvedStatus from "@/custom-hooks/useProblemSolvedStatus";
import { v4 as uuidV4 } from "uuid";
import {
  showErrorToast,
  showSuccessToast,
} from "@/utils/toast/toastNotifications";
import { CustomHoverCard } from "./components";

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
          {/* Create Room Icon with Hover Card */}\
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
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="sm:max-w-md bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-900 transition-colors duration-200">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-300">
              Room Created
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Share this room ID with others to collaborate:
            </div>
            <div className="flex items-center space-x-2">
              <Input
                readOnly
                value={roomId}
                className="font-mono text-sm dark:text-gray-200 text-gray-800"
              />
              <Button
                size="sm"
                className="bg-purple-700 text-gray-300"
                onClick={handleCopyRoomId}
              >
                Copy
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Join Room Dialog */}
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent className="sm:max-w-md bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-900 transition-colors duration-200">
          <DialogHeader>
            <DialogTitle className="dark:text-gray-300">Join Room</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="text-sm text-slate-600 dark:text-slate-300">
              Enter the room ID to join:
            </div>
            <div className="flex items-center space-x-2">
              <Input
                value={joinRoomId}
                onChange={(e) => setJoinRoomId(e.target.value)}
                placeholder="Enter room ID"
                className="font-mono text-sm dark:text-gray-200 text-gray-800"
              />
              <Button
                size="sm"
                className="bg-purple-700 text-gray-300"
                onClick={handleJoinRoom}
              >
                Join
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="space-y-6">
            <h1 className="text-xl font-semibold text-slate-900 dark:text-white">
              {problem.title}
            </h1>
            <div className="flex items-center space-x-2">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}
              >
                {problem.difficulty}
              </span>
              {(solved || isSolved) && (
                <CheckCircle color="#078827" className="w-4 h-4" />
              )}
            </div>
            <div className="text-slate-700 dark:text-slate-300 space-y-4 text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>
            <div className="space-y-6">
              {problem.examples.map((example, index) => (
                <div key={example.id} className="space-y-3 mb-3">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100">
                    Example {index + 1}
                  </h3>
                  <div className="rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                    <div className="p-4 space-y-2 font-mono text-xs">
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                          Input:{" "}
                        </span>
                        {example.inputText}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                          Output:{" "}
                        </span>
                        {example.outputText}
                      </div>
                      {example.explanation && (
                        <div className="text-slate-700 dark:text-slate-300">
                          <span className="font-semibold text-violet-600 dark:text-violet-400">
                            Explanation:{" "}
                          </span>
                          {example.explanation}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Joined Clients Section */}
          <div className="mt-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">
              Collaborators
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
              {clients.map((client) => (
                <div
                  key={client.socketId}
                  className="flex flex-col items-center space-y-1"
                >
                  <div className="w-8 h-8 bg-violet-500 rounded-full text-white flex items-center justify-center">
                    {client.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300 ">
                    {client.username}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
