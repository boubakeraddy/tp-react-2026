export const TaskItem = ({ tache, onBasculerStatut, onSupprimer }) => {
  const { id, titre, categorie, terminee, heure } = tache;

  const categorieBadges = {
    Développement: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-100",
    },
    "Design UI/UX": {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-100",
    },
    "Réunion Client": {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-100",
    },
  };

  const badge = categorieBadges[categorie] || categorieBadges["Développement"];

  const handleSupprimerClic = (e) => {
    // Coupe la propagation si le conteneur était également cliquable
    e.stopPropagation();
    onSupprimer(id);
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 p-4 rounded-2xl border transition-all ${
        terminee
          ? "bg-slate-50/70 border-slate-100 opacity-60"
          : "bg-white border-slate-200 shadow-2xs hover:border-slate-300"
      }`}
    >
      <div className="flex items-center gap-3 min-w-0">
        <input
          type="checkbox"
          checked={terminee}
          onChange={() => onBasculerStatut(id)}
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <div className="min-w-0">
          <p
            className={`text-xs font-bold truncate ${
              terminee ? "line-through text-slate-400" : "text-slate-800"
            }`}
          >
            {titre}
          </p>
          <span className="text-[10px] text-slate-400 font-medium">
            Créée à {heure}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${badge.bg} ${badge.text} ${badge.border}`}
        >
          {categorie}
        </span>
        <button
          type="button"
          onClick={handleSupprimerClic}
          className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition"
          title="Supprimer la tâche"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
