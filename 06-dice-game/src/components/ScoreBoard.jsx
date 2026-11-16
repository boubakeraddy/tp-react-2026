export const ScoreBoard = ({
  scores = { j1: 0, j2: 0 },
  objectif = 20,
  aGagne = false,
  winner = 0,
}) => {
  const pourcentage1 = Math.min(Math.round((scores.j1 / objectif) * 100), 100);
  const pourcentage2 = Math.min(Math.round((scores.j2 / objectif) * 100), 100);
  return (
    <>
      <div className="space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Score Joueur 1
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-4xl font-black text-slate-900">
                {scores.j1}
              </span>
              <span className="text-xs font-bold text-slate-400">
                / {objectif} pts requis
              </span>
            </div>
          </div>
          <span
            className="rounded-2xl px-3 py-1.5 text-xs font-black uppercase tracking-wider"
            style={{
              backgroundColor: aGagne && winner == 1 ? "#dcfce7" : "#eff6ff",
              color: aGagne && winner == 1 ? "#15803d" : "#2563eb",
            }}
          >
            {aGagne && winner == 1 ? "Victoire !" : "En Course"}
          </span>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-600">
            <span>Progression</span>
            <span className="font-mono">{pourcentage1}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${pourcentage1}%`,
                backgroundColor:
                  aGagne && winner == 1
                    ? "#16a34a"
                    : pourcentage1 > 60
                    ? "#2563eb"
                    : "#f59e0b",
              }}
            />
          </div>
        </div>
        {aGagne && winner == 1 ? (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
            <p className="text-xs font-bold text-emerald-800">
              Félicitations ! Vous avez atteint l'objectif des {objectif}{" "}
              points.
            </p>
            <p className="text-[11px] text-emerald-600 mt-0.5">
              Votre code promotionnel :{" "}
              <strong className="font-mono text-xs">YALLA- PROMO-2026</strong>
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-500 text-center">
            Encore{" "}
            <strong className="text-slate-800">
              {Math.max(objectif - scores.j1, 0)}
              points
            </strong>{" "}
            pour remporter la manche.
          </p>
        )}
      </div>
      <div className="space-y-5">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Score Joueur 2
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-mono text-4xl font-black text-slate-900">
                {scores.j2}
              </span>
              <span className="text-xs font-bold text-slate-400">
                / {objectif} pts requis
              </span>
            </div>
          </div>
          <span
            className="rounded-2xl px-3 py-1.5 text-xs font-black uppercase tracking-wider"
            style={{
              backgroundColor: aGagne && winner == 2 ? "#dcfce7" : "#eff6ff",
              color: aGagne && winner == 2 ? "#15803d" : "#2563eb",
            }}
          >
            {aGagne && winner == 2 ? "Victoire !" : "En Course"}
          </span>
        </div>
        <div>
          <div className="mb-1.5 flex justify-between text-xs font-bold text-slate-600">
            <span>Progression</span>
            <span className="font-mono">{pourcentage2}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 p-0.5">
            <div
              className="h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${pourcentage2}%`,
                backgroundColor:
                  aGagne && winner == 2
                    ? "#16a34a"
                    : pourcentage2 > 60
                    ? "#2563eb"
                    : "#f59e0b",
              }}
            />
          </div>
        </div>
        {aGagne && winner == 2 ? (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
            <p className="text-xs font-bold text-emerald-800">
              Félicitations ! Vous avez atteint l'objectif des {objectif}{" "}
              points.
            </p>
            <p className="text-[11px] text-emerald-600 mt-0.5">
              Votre code promotionnel :{" "}
              <strong className="font-mono text-xs">YALLA- PROMO-2026</strong>
            </p>
          </div>
        ) : (
          <p className="text-xs text-slate-500 text-center">
            Encore{" "}
            <strong className="text-slate-800">
              {Math.max(objectif - scores.j2, 0)}
              points
            </strong>{" "}
            pour remporter la manche.
          </p>
        )}
      </div>
    </>
  );
};
