import React from "react";
import { CheckCircle } from "lucide-react";

const ProblemDescription = ({ problem }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 bg-black/30 text-white overflow-x-hidden shrink-0">
        <div className="bg-gray-700 rounded-t-sm px-5 py-2.5 text-xs cursor-pointer">
          Description
        </div>
      </div>

      <div className="flex-grow overflow-y-auto">
        <div className="px-5 py-4">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg dark:text-white text-black font-medium">
                {problem.title}
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="text-green-600 bg-green-800 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize">
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-600">
                <CheckCircle size={22} />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-gray-50 text-sm">
              <div
                dangerouslySetInnerHTML={{ __html: problem.problemStatement }}
              />
            </div>

            {/* Examples */}
            <div className="mt-4">
              {problem.examples.map((example, index) => (
                <div key={example.id} className="mb-3">
                  <p className="font-medium text-white">
                    Example {index + 1}:{" "}
                  </p>
                  {example.img && (
                    <img
                      src="/api/placeholder/400/200"
                      alt={`Example ${index + 1} visualization`}
                      className="mt-3"
                    />
                  )}
                  <div className="example-card">
                    <pre className="bg-neutral-800 p-4 mt-2 rounded-lg text-gray-50 text-sm whitespace-normal break-words">
                      <strong className="text-white">Input: </strong>{" "}
                      {example.inputText}
                      <br />
                      <strong>Output:</strong>
                      {example.outputText} <br />
                      {example.explanation && (
                        <>
                          <strong>Explanation:</strong> {example.explanation}
                        </>
                      )}
                    </pre>
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
