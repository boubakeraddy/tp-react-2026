import TaskManager from "./components/TaskManager";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-6 sm:p-10">
      <header className="mx-auto max-w-3xl mb-8 flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-black text-slate-900">
            Atlas Agile Solutions
          </h1>
          <p className="text-xs text-slate-500">
            Plateforme de Suivi Événementiel des Tâches
          </p>
        </div>
        <span className="rounded-xl bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-bold text-blue-700">
          Séance 8 : SyntheticEvents
        </span>
      </header>

      <main>
        <TaskManager />
      </main>
    </div>
  );
}
