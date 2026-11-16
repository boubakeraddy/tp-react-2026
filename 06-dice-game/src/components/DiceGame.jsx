import { useState } from "react";
import { GameCard } from "./GameCard";
import { DiceFace } from "./DiceFace";
import { ScoreBoard } from "./ScoreBoard";
import { GameHistory } from "./GameHistory";
export default function DiceGame() {
  const SCORE_OBJECTIF = 30;
  // États locaux avec useState
  const [joueurActif, setJoueurActif] = useState(1);
  const [scores, setScores] = useState({ j1: 0, j2: 0 });
  const [valeurDe, setValeurDe] = useState(1);
  // const [scoreTotal, setScoreTotal] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [historique, setHistorique] = useState([]);
  // Calcul dérivé instantané (zéro état redondant !)
  const aGagne = scores.j1 >= SCORE_OBJECTIF || scores.j2 >= SCORE_OBJECTIF;

  // Gestionnaire de lancer de dé avec respect rigoureux de l'immutabilité
  const handleLancerDe = () => {
    if (aGagne || isRolling) return;
    // Déclenchement de l'animation
    setIsRolling(true);
    setTimeout(() => {
      // Tirage aléatoire d'un entier entre 1 et 6
      const nouveauTirage = Math.floor(Math.random() * 6) + 1;
      setValeurDe(nouveauTirage);
      // Calcul du score avec forme fonctionnelle
      // detecter le joueur actif et mettre à jour son score
      if (joueurActif === 1) {
        setScores((prevScores) => ({
          ...prevScores,
          j1:
            nouveauTirage === 1
              ? Math.max(prevScores.j1 - 2, 0)
              : prevScores.j1 + nouveauTirage,
        }));
      } else {
        setScores((prevScores) => ({
          ...prevScores,
          j2:
            nouveauTirage === 1
              ? Math.max(prevScores.j2 - 2, 0)
              : prevScores.j2 + nouveauTirage,
        }));
      }
      // Ajout immuable dans l'historique chronologique
      const nouvelEnregistrement = {
        id: Date.now(),
        valeur: nouveauTirage,
        joueur: joueurActif,
        heure: new Date().toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      };
      setHistorique((prevHist) => [nouvelEnregistrement, ...prevHist]);
      setIsRolling(false);
      setJoueurActif((prevJoueur) => (prevJoueur === 1 ? 2 : 1));
    }, 400); // Durée calquée sur l'animation CSS
  };
  // Réinitialisation complète du jeu
  const handleReinitialiser = () => {
    setValeurDe(1);
    setScores({ j1: 0, j2: 0 });
    setHistorique([]);
    setIsRolling(false);
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Colonne 1 : Le Dé et les Commandes */}
        <GameCard
          titre="Arène du Dé"
          sousTitre="Tirage physique aléatoire"
          badge={
            <span
              className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-bold
text-white"
            >
              6 Faces
            </span>
          }
        >
          <DiceFace valeur={valeurDe} isRolling={isRolling} />
          <div className="mt-6 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleLancerDe}
              disabled={aGagne || isRolling}
              className="w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-black
text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-
98 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isRolling
                ? "Roulement en cours..."
                : aGagne
                ? "Partie Gagnée !"
                : "Lancer le Dé"}
              {joueurActif === 1 ? " (Joueur 1)" : " (Joueur 2)"}
            </button>
            <button
              type="button"
              onClick={handleReinitialiser}
              className="w-full rounded-2xl border border-slate-200 bg-white py-2.5
text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
            >
              Nouvelle Partie (Reset)
            </button>
          </div>
        </GameCard>
        {/* Colonne 2 : Tableau de Score */}
        <GameCard
          titre="Tableau de Bord"
          sousTitre="Objectif et progression"
          badge={
            <span
              className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold
text-blue-700"
            >
              Manche Active
            </span>
          }
        >
          <ScoreBoard
            scores={scores}
            objectif={SCORE_OBJECTIF}
            aGagne={aGagne}
            winner={
              scores.j1 >= SCORE_OBJECTIF
                ? 1
                : scores.j2 >= SCORE_OBJECTIF
                ? 2
                : 0
            }
          />
        </GameCard>
        {/* Colonne 3 : Historique des Lancers */}
        <GameCard
          titre="Historique des Lancers"
          sousTitre={`Total de ${historique.length} coups joués`}
          badge={
            <span
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold
text-slate-700"
            >
              Journal
            </span>
          }
        >
          <GameHistory lancers={historique} />
        </GameCard>
      </div>
    </div>
  );
}
