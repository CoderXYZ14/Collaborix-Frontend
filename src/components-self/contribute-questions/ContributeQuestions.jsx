import React, { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertCircle, CheckCircle2, LogIn, Rocket } from "lucide-react";

const ContributeQuestions = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    difficulty: "Easy",
    category: "",
    videoId: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/problems", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          order: Date.now(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Problem successfully added!",
        });
        setFormData({
          id: "",
          title: "",
          difficulty: "Easy",
          category: "",
          videoId: "",
        });
      } else {
        throw new Error(data.message || "Failed to add problem");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 dark:from-slate-900 dark:to-purple-900">
      <div className="flex min-h-screen flex-col items-center px-6 py-20">
        <h1 className="flex items-center gap-2 text-3xl font-bold text-purple-900 dark:text-purple-100 mb-8">
          Contribute a Problem <Rocket className="h-8 w-8" />
        </h1>

        <div className="w-full max-w-2xl rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm backdrop-filter border border-purple-100 dark:border-purple-500/20 shadow-xl">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <InputBox
                  label="Problem ID"
                  name="id"
                  type="text"
                  placeholder="e.g., two-sum"
                  value={formData.id}
                  onChange={handleChange}
                />

                <InputBox
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="e.g., Two Sum"
                  value={formData.title}
                  onChange={handleChange}
                />

                <div className="mt-2">
                  <label className="block mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                    Difficulty
                  </label>
                  <Select
                    value={formData.difficulty}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, difficulty: value }))
                    }
                  >
                    <SelectTrigger className="bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value="Easy"
                        className="text-green-600 dark:text-green-400"
                      >
                        Easy
                      </SelectItem>
                      <SelectItem
                        value="Medium"
                        className="text-yellow-600 dark:text-yellow-400"
                      >
                        Medium
                      </SelectItem>
                      <SelectItem
                        value="Hard"
                        className="text-red-600 dark:text-red-400"
                      >
                        Hard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <InputBox
                  label="Category"
                  name="category"
                  type="text"
                  placeholder="e.g., Array"
                  value={formData.category}
                  onChange={handleChange}
                />

                <InputBox
                  label="Video ID"
                  name="videoId"
                  type="text"
                  placeholder="e.g., two-sum-check-if-a-pair-with-given-sum-exists-in-array"
                  value={formData.videoId}
                  onChange={handleChange}
                  required={false}
                />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "error"
                      ? "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-500/20"
                      : "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-500/20"
                  } flex items-center gap-2`}
                >
                  {status.type === "error" ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5" />
                  )}
                  <p>{status.message}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg transition-colors duration-200"
              >
                Add Problem <LogIn size={20} className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContributeQuestions;
