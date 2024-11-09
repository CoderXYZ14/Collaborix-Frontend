const Collaborators = ({ clients }) => (
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
);

export default Collaborators;
