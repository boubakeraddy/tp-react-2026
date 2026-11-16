export const TaskContainer = ({ titre, total, children }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <h2 className="text-lg font-black text-slate-900">{titre}</h2>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
          {total} élément(s)
        </span>
      </header>
      <div>{children}</div>
    </section>
  );
};
