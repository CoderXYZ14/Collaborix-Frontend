const ProblemStatement = ({ problemStatement }) => (
  <div className="text-slate-700 dark:text-slate-300 space-y-4 text-sm">
    <div dangerouslySetInnerHTML={{ __html: problemStatement }} />
  </div>
);

export default ProblemStatement;
