export default function ListItem({ element, onSupprimer, onToggleTerminee }) {
  return (
    <li key={element.id} className="element">
      <input
        type="checkbox"
        checked={element.terminee}
        onChange={() => onToggleTerminee(element.id)}
        aria-label={`Marquer ${element.texte} comme ${
          element.terminee ? "non terminée" : "terminée"
        }`}
      />
      <span
        style={{ textDecoration: element.terminee ? "line-through" : "none" }}
      >
        {element.texte}
      </span>
      <button
        className="bouton-supprimer"
        onClick={() => {
          if (
            window.confirm(
              `Êtes-vous sûr de vouloir supprimer "${element.texte}" ?`
            )
          ) {
            onSupprimer(element.id);
          }
        }}
        aria-label={`Supprimer ${element.texte}`}
      >
        🗑
      </button>
    </li>
  );
}
