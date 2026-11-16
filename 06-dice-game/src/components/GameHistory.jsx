export const GameHistory = ({ lancers = [] }) => {
  if (lancers.length === 0) {
    return (
      <div
        className="flex flex-col items-center justify-center py-8 text-center text-
    slate-400"
      >
        <p className="text-xs">Aucun lancer enregistré pour le moment.</p>
        <p className="text-[11px] mt-1">
          Cliquez sur « Lancer le Dé » pour commencer.
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
      {lancers.map((item, index) => {
        const estUn = item.valeur === 1;
        const estSix = item.valeur === 6;
        return (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-
    slate-100 bg-slate-50/60 p-3 text-xs transition-colors hover:bg-slate-100/60"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-lg bg-
    white font-mono text-[11px] font-bold text-slate-400 shadow-2xs"
              >
                #{lancers.length - index}
              </span>
              <span className="font-medium text-slate-900">
                Joueur {item.joueur}
              </span>
              <span className="font-medium text-slate-700">
                Tirage à {item.heure}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="rounded-lg px-2 py-0.5 font-bold text-[11px]"
                style={{
                  backgroundColor: estSix
                    ? "#dbeafe"
                    : estUn
                    ? "#fee2e2"
                    : "#f1f5f9",
                  color: estSix ? "#1d4ed8" : estUn ? "#b91c1c" : "#475569",
                }}
              >
                {estSix
                  ? "Coup Parfait (+6)"
                  : estUn
                  ? "Malus (-2)"
                  : `+${item.valeur}`}
              </span>
              <span
                className="font-mono font-black text-sm text-slate-900 w-6 text-
    right"
              >
                {item.valeur}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
