import { useState } from "react";
import { TaskContainer } from "./TaskContainer";
import { TaskForm } from "./TaskForm";
import { TaskFilters } from "./TaskFilters";
import { TaskItem } from "./TaskItem";

const TACHES_INITIALES = [
  {
    id: 1,
    titre: "Configurer le serveur d'intégration continue Casablanca",
    categorie: "Développement",
    terminee: false,
    heure: "09:30",
  },
  {
    id: 2,
    titre: "Concevoir les maquettes Figma du tableau de bord",
    categorie: "Design UI/UX",
    terminee: true,
    heure: "11:00",
  },
  {
    id: 3,
    titre: "Point hebdomadaire d'avancement sprint client",
    categorie: "Réunion Client",
    terminee: false,
    heure: "14:15",
  },
];

export default function TaskManager() {
  const [taches, setTaches] = useState(TACHES_INITIALES);
  const [filtreActif, setFiltreActif] = useState("TOUTES");
  const [recherche, setRecherche] = useState("");

  // 1. Callback d'ajout (remonté par TaskForm)
  const handleAjouterTache = (titre, categorie) => {
    const nouvelleTache = {
      id: Date.now(),
      titre,
      categorie,
      terminee: false,
      heure: new Date().toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setTaches((prev) => [nouvelleTache, ...prev]);
  };

  // 2. Callback de bascule (remonté par TaskItem)
  const handleBasculerStatut = (idCible) => {
    setTaches((prev) =>
      prev.map((t) => (t.id === idCible ? { ...t, terminee: !t.terminee } : t))
    );
  };

  // 3. Callback de suppression (remonté par TaskItem)
  const handleSupprimerTache = (idCible) => {
    setTaches((prev) => prev.filter((t) => t.id !== idCible));
  };

  // 4. Calculs dérivés au runtime
  const statistiques = {
    total: taches.length,
    enCours: taches.filter((t) => !t.terminee).length,
    terminees: taches.filter((t) => t.terminee).length,
  };

  const tachesFiltrees = taches
    .filter((t) => {
      if (filtreActif === "EN_COURS") return !t.terminee;
      if (filtreActif === "TERMINEES") return t.terminee;
      return true;
    })
    .filter((t) => t.titre.toLowerCase().includes(recherche.toLowerCase()));

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <TaskContainer
        titre="TaskFlow Pro – Gestionnaire de Sprint"
        total={tachesFiltrees.length}
      >
        <TaskForm onAjouterTache={handleAjouterTache} />

        <TaskFilters
          filtreActif={filtreActif}
          onFiltreChange={setFiltreActif}
          recherche={recherche}
          onRechercheChange={setRecherche}
          statistiques={statistiques}
        />

        <div className="space-y-2.5">
          {tachesFiltrees.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              Aucune tâche ne correspond aux critères de recherche.
            </div>
          ) : (
            tachesFiltrees.map((tache) => (
              <TaskItem
                key={tache.id}
                tache={tache}
                onBasculerStatut={handleBasculerStatut}
                onSupprimer={handleSupprimerTache}
              />
            ))
          )}
        </div>
      </TaskContainer>
    </div>
  );
}
