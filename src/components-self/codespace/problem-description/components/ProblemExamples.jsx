const ProblemExamples = ({ examples }) => (
  <div className="space-y-6">
    {examples.slice(0, 3).map((example, index) => (
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
);

export default ProblemExamples;
