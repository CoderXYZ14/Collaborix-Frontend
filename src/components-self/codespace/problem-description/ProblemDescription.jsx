import React from "react";
import { CheckCircle, Users, UserPlus } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useGetDifficultyColor from "@/custom-hooks/useGetDifficultyColor";
import useProblemSolvedStatus from "@/custom-hooks/useProblemSolvedStatus";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";

const ProblemDescription = ({ problem, solved, onRoomCreated }) => {
  const isSolved = useProblemSolvedStatus(problem.id);
  const { textColor, bgColor } = useGetDifficultyColor(problem.difficulty);

  const [roomId, setRoomId] = useState("");
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [joinRoomId, setJoinRoomId] = useState("");

  const handleCreateRoom = (e) => {
    e.preventDefault();
    const newRoomId = uuidV4();
    setRoomId(newRoomId);
    setShowCreateDialog(true);
    onRoomCreated(newRoomId);
  };

  const handleCopyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setShowCreateDialog(false);

    toast.success("Room ID copied to clipboard!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleJoinRoom = () => {
    if (joinRoomId) {
      // Update the roomId with the joinRoomId
      setRoomId(joinRoomId);
      setShowJoinDialog(false); // Close the join room dialog
      onRoomCreated(joinRoomId); // Notify parent component that the room was created/joined
    } else {
      toast.error("Please enter a room ID", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-800 transition-colors duration-200">
      {/* Tab Navigation */}
      <div className="flex justify-between h-12 items-center bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b-2 border-violet-500 transition-colors duration-200 flex items-center">
          Description
        </div>
        <div className="mr-4 flex items-center space-x-1 ">
          {/* Create Room Icon with Hover Card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <UserPlus
                className="h-4 w-4 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer transition-colors duration-200"
                onClick={handleCreateRoom}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="text-sm">Create a room</div>
            </HoverCardContent>
          </HoverCard>

          {/* Join Room Icon with Hover Card */}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Users
                className="h-4 w-4 text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 cursor-pointer transition-colors duration-200"
                onClick={() => setShowJoinDialog(true)}
              />
            </HoverCardTrigger>
            <HoverCardContent className="w-64">
              <div className="text-sm">Join a room </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      {/* Create Room Dialog */}
      <Dialog
        open={showCreateDialog}
        onOpenChange={setShowCreateDialog}
        className="bg-white"
      >
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
                className="bg-purple-700 text-gray-300 "
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

      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200">
                {problem.title}
              </h1>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor} transition-colors duration-200`}
                  >
                    {problem.difficulty}
                  </span>
                  {(solved || isSolved) && (
                    <CheckCircle
                      color="#078827"
                      className="w-4 h-4 transition-colors duration-200"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="text-slate-700 dark:text-slate-300 space-y-4 text-sm transition-colors duration-200">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples Section */}
            <div className="space-y-6">
              {problem.examples.map((example, index) => (
                <div key={example.id} className="space-y-3 mb-3">
                  <h3 className="text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors duration-200">
                    Example {index + 1}
                  </h3>

                  <div className="rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-200">
                    <div className="p-4 space-y-2 font-mono text-xs">
                      <div className="text-slate-700 dark:text-slate-300 transition-colors duration-200">
                        <span className="font-semibold text-violet-600 dark:text-violet-400 transition-colors duration-200">
                          Input:{" "}
                        </span>
                        {example.inputText}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 transition-colors duration-200">
                        <span className="font-semibold text-violet-600 dark:text-violet-400 transition-colors duration-200">
                          Output:{" "}
                        </span>
                        {example.outputText}
                      </div>
                      {example.explanation && (
                        <div className="text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-700 transition-colors duration-200">
                          <span className="font-semibold text-violet-600 dark:text-violet-400 transition-colors duration-200">
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
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
