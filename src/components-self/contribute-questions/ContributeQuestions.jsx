import { useState } from "react";
import InputBox from "../InputBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Rocket } from "lucide-react";
import useContributeQuestion from "@/custom-hooks/useContributeQuestion";
import DifficultySelect from "./components/DifficultySelect";

const ContributeQuestions = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    difficulty: "Easy",
    category: "",
    videoId: "",
  });
  const { submitQuestion } = useContributeQuestion();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitQuestion(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:from-slate-800 dark:to-purple-800 transition-colors duration-200 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Contribute a{" "}
          <span className="text-violet-600 dark:text-violet-400">Problem</span>
        </h1>
      </div>

      <Card className="w-full max-w-2xl border-none shadow-lg bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <CardContent className="px-6 py-8">
          <h1 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-6">
            Add a new problem <Rocket className="h-5 w-5" />
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <InputBox
              label="Problem ID"
              name="id"
              type="text"
              placeholder="e.g., two-sum"
              value={formData.id}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <InputBox
              label="Title"
              name="title"
              type="text"
              placeholder="e.g., Two Sum"
              value={formData.title}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-slate-900 dark:text-white">
                Difficulty
              </label>
              <DifficultySelect
                value={formData.difficulty}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, difficulty: value }))
                }
              />
            </div>

            <InputBox
              label="Category"
              name="category"
              type="text"
              placeholder="e.g., Array"
              value={formData.category}
              onChange={handleChange}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <InputBox
              label="Video ID"
              name="videoId"
              type="text"
              placeholder="e.g., two-sum-video"
              value={formData.videoId}
              onChange={handleChange}
              required={false}
              className="bg-white/70 dark:bg-slate-800/70"
            />

            <Button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700 text-white"
            >
              Submit Problem
              <LogIn className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContributeQuestions;
