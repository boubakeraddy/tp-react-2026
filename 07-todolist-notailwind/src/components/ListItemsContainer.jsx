import { useState } from "react";
import ListItem from "./ListItem";
import ListAddItem from "./ListAddItem";
export default function ListItemsContainer() {
  const [elements, setElements] = useState([
    { id: 1, texte: "Tâche 1", terminee: false },
    { id: 2, texte: "Tâche 2", terminee: false },
    { id: 3, texte: "Tâche 3", terminee: false },
    { id: 4, texte: "Tâche 4", terminee: false },
  ]);
  const [saisie, setSaisie] = useState("");

  function ajouterElement(event) {
    event.preventDefault();

    const texte = saisie.trim();
    if (!texte) return;

    setElements((anciensElements) => [
      { id: crypto.randomUUID(), texte },
      ...anciensElements,
    ]);
    setSaisie("");
  }

  function supprimerElement(id) {
    setElements((anciensElements) =>
      anciensElements.filter((element) => element.id !== id)
    );
  }
  function toggleTerminee(id) {
    setElements((anciensElements) =>
      anciensElements.map((element) =>
        element.id === id
          ? { ...element, terminee: !element.terminee }
          : element
      )
    );
  }
  return (
    <main className="application">
      <h1>TP - Gestion de Liste avec Levée d’État</h1>

      <section className="panneau">
        <ListAddItem
          onAjouter={ajouterElement}
          saisie={saisie}
          setSaisie={setSaisie}
        />

        <ul className="liste">
          {elements.map((element) => (
            <ListItem
              key={element.id}
              element={element}
              onSupprimer={supprimerElement}
              onToggleTerminee={toggleTerminee}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
