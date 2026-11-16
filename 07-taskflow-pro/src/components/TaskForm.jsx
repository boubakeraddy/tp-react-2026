import { useState } from "react";

export const TaskForm = ({ onAjouterTache }) => {
  const [titre, setTitre] = useState("");
  const [categorie, setCategorie] = useState("Développement");
  const handleSubmit = (e) => {
    // 1. Empêche le rechargement synchrone du navigateur
    e.preventDefault();

    // 2. Validation basique
    if (!titre.trim()) return;

    // 3. Remontée de l'action au parent via le callback
    onAjouterTache(titre.trim(), categorie);

    // 4. Réinitialisation du champ
    setTitre("");
    setCategorie("Développement");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex flex-col sm:flex-row gap-2.5 bg-slate-50 p-4 rounded-2xl border border-slate-200"
    >
      <input
        type="text"
        placeholder="Ajouter une tâche sprint (ex: Tester API REST Casablanca)..."
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
        className="flex-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        value={categorie}
        onChange={(e) => setCategorie(e.target.value)}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="Développement">Développement</option>
        <option value="Design UI/UX">Design UI/UX</option>
        <option value="Réunion Client">Réunion Client</option>
      </select>

      <button
        type="submit"
        className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-600 transition active:scale-95"
      >
        Ajouter Tâche
      </button>
    </form>
  );
};
