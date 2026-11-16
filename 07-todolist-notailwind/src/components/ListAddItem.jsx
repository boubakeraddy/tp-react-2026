export default function ListAddItem({ onAjouter, saisie, setSaisie }) {
  return (
    <form className="formulaire" onSubmit={onAjouter}>
      <input
        value={saisie}
        onChange={(event) => setSaisie(event.target.value)}
        placeholder="Saisir un élément"
        aria-label="Nouvel élément"
      />
      <button className="bouton-ajouter" type="submit" aria-label="Ajouter">
        +
      </button>
    </form>
  );
}
