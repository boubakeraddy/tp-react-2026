export const DiceFace = ({ valeur = 1, isRolling = false }) => {
  // Grille 3x3 pour positionner les points authentiques d'un dé cubique
  // Coordonnées matricielles : [ligne (1 à 3), colonne (1 à 3)]
  const pointsParValeur = {
    1: [[2, 2]],
    2: [
      [1, 1],
      [3, 3],
    ],
    3: [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    4: [
      [1, 1],
      [1, 3],
      [3, 1],
      [3, 3],
    ],
    5: [
      [1, 1],
      [1, 3],
      [2, 2],
      [3, 1],
      [3, 3],
    ],
    6: [
      [1, 1],
      [1, 3],
      [2, 1],
      [2, 3],
      [3, 1],
      [3, 3],
    ],
  };
  const pointsActifs = pointsParValeur[valeur] || pointsParValeur[1];
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div
        className={`relative h-32 w-32 rounded-3xl border-2 border-slate-800 bg-
    gradient-to-br from-white to-slate-100 p-3 shadow-xl transition-all duration-300 ${
      isRolling ? "animate-dice scale-105 shadow-2xl" : "hover:scale-102"
    }`}
      >
        {/* Grille 3x3 pour le placement des pips */}
        <div
          className="grid h-full w-full grid-cols-3 grid-rows-3 items-center
    justify-items-center"
        >
          {[1, 2, 3].map((row) =>
            [1, 2, 3].map((col) => {
              const estAllume = pointsActifs.some(
                ([r, c]) => r === row && c === col
              );
              return (
                <div
                  key={`${row}-${col}`}
                  className="flex h-full w-full items-center
    justify-center"
                >
                  {estAllume && (
                    <span
                      className={`h-5 w-5 rounded-full shadow-inner transition-
    transform duration-200 ${
      valeur === 1 ? "bg-rose-600 scale-110" : "bg-slate-900"
    }`}
                    />
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
      <div className="mt-4 text-center">
        <span
          className="font-mono text-xs font-bold uppercase tracking-wider text-
    slate-400"
        >
          Face Active
        </span>
        <p className="text-xl font-black text-slate-800">
          {valeur === 1 ? "1 (Pénalité !)" : `${valeur} Points`}
        </p>
      </div>
    </div>
  );
};
