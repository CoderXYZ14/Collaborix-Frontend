import React from "react";
import { CheckCircle } from "lucide-react";

const ProblemDescription = ({ problem }) => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:bg-gradient-to-b dark:from-slate-800 dark:from-5% dark:to-purple-800  transition-colors duration-200">
      {/* Tab Navigation */}
      <div className="flex h-12 items-center bg-gray-100 dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-200">
        <div className="px-6 py-2.5 text-sm font-medium bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b-2 border-violet-500 transition-colors duration-200">
          Description
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-200">
                {problem.title}
              </h1>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-950/30 text-green-600 dark:text-green-400 transition-colors duration-200">
                    Easy
                  </span>
                  <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 transition-colors duration-200" />
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
