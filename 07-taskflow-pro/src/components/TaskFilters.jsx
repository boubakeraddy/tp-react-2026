export const TaskFilters = ({
  filtreActif,
  onFiltreChange,
  recherche,
  onRechercheChange,
  statistiques,
}) => {
  const filtres = [
    { cle: "TOUTES", label: "Toutes", count: statistiques.total },
    { cle: "EN_COURS", label: "En Cours", count: statistiques.enCours },
    { cle: "TERMINEES", label: "Terminées", count: statistiques.terminees },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
      {/* Recherche en temps réel */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Rechercher une tâche..."
          value={recherche}
          onChange={(e) => onRechercheChange(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {recherche && (
          <button
            type="button"
            onClick={() => onRechercheChange("")}
            className="absolute right-2.5 top-1.5 text-xs text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        )}
      </div>

      {/* Boutons de filtres */}
      <div className="flex gap-1.5">
        {filtres.map((f) => (
          <button
            key={f.cle}
            type="button"
            onClick={() => onFiltreChange(f.cle)}
            className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
              filtreActif === f.cle
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            <span>{f.label}</span>
            <span
              className={`rounded-full px-1.5 py-0.2 text-[10px] font-black ${
                filtreActif === f.cle
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {f.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
