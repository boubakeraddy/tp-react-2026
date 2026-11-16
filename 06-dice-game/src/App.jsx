import DiceGame from "./components/DiceGame";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* En-tête de marque */}
      <header className="border-b border-slate-200 bg-white shadow-xs">
        <div
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-
4"
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl bg-
blue-600 font-black text-white shadow-sm"
            >
              🎲
            </div>
            <div>
              <h1
                className="text-lg font-black text-slate-900 leading-
tight"
              >
                YallaPlay Studio
              </h1>
              <p className="text-xs text-slate-500">
                Module Interactif Atlas Dice Challenge
              </p>
            </div>
          </div>
          <span
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold
text-emerald-700 border border-emerald-200"
          >
            React 18 + Vite
          </span>
        </div>
      </header>
      {/* Contenu principal */}
      <main className="mx-auto max-w-6xl px-6 py-8">
        <DiceGame />
      </main>
      {/* Pied de page technique */}
      <footer
        className="border-t border-slate-200 bg-white py-6 text-center text-xs
text-slate-400"
      >
        Module M204 – Développer en Front-end (React JS) • Séance 6 : Props,
        Children & State
      </footer>
    </div>
  );
}
