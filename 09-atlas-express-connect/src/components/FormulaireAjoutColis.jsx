import { useState } from "react";
const VILLES_DISPONIBLES = [
  "Tanger Med",
  "Casablanca",
  "Marrakech",
  "Fès",
  "Agadir",
  "Rabat",
  "Oujda",
];
export const FormulaireAjoutColis = ({ onAjouterColis, enSauvegarde }) => {
  const [destinataire, setDestinataire] = useState("");
  const [description, setDescription] = useState("");
  const [villeDestination, setVilleDestination] = useState("Tanger Med");
  const [poidsKg, setPoidsKg] = useState("2.5");
  const [fraisExpeditionMAD, setFraisExpeditionMAD] = useState("150");
  const [erreurValidation, setErreurValidation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destinataire.trim() || !description.trim()) {
      setErreurValidation(
        "Le destinataire et la description sont obligatoires."
      );
      return;
    }
    setErreurValidation("");
    onAjouterColis({
      destinataire: destinataire.trim(),
      description: description.trim(),
      villeDepart: "Casablanca Hub",
      villeDestination,
      poidsKg: Number(poidsKg),
      fraisExpeditionMAD: Number(fraisExpeditionMAD),
    });
    // Réinitialisation après soumission
    setDestinataire("");
    setDescription("");
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        marginBottom: "24px",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: "700",
          marginBottom: "14px",
          color: "#1e293b",
        }}
      >
        Émission d'un Nouveau Bordereau d'Expédition (POST)
      </h3>
      {erreurValidation && (
        <p style={{ color: "#dc2626", fontSize: "13px", marginBottom: "12px" }}>
          {erreurValidation}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "12px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "4px",
            }}
          >
            Destinataire (Société / Particulier)
          </label>
          <input
            type="text"
            placeholder="Ex: Omnicell Tanger"
            value={destinataire}
            onChange={(e) => setDestinataire(e.target.value)}
            disabled={enSauvegarde}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "4px",
            }}
          >
            Description des Marchandises
          </label>
          <input
            type="text"
            placeholder="Ex: Composants électroniques"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={enSauvegarde}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "4px",
            }}
          >
            Ville de Destination
          </label>
          <select
            value={villeDestination}
            onChange={(e) => setVilleDestination(e.target.value)}
            disabled={enSauvegarde}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
              backgroundColor: "#fff",
            }}
          >
            {VILLES_DISPONIBLES.map((ville) => (
              <option key={ville} value={ville}>
                {ville}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "4px",
            }}
          >
            Poids (kg)
          </label>
          <input
            type="number"
            step="0.5"
            min="0.5"
            value={poidsKg}
            onChange={(e) => setPoidsKg(e.target.value)}
            disabled={enSauvegarde}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "12px",
              fontWeight: "600",
              color: "#475569",
              marginBottom: "4px",
            }}
          >
            Frais de Port (MAD)
          </label>
          <input
            type="number"
            min="30"
            value={fraisExpeditionMAD}
            onChange={(e) => setFraisExpeditionMAD(e.target.value)}
            disabled={enSauvegarde}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #cbd5e1",
              fontSize: "13px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <button
            type="submit"
            disabled={enSauvegarde}
            style={{
              width: "100%",
              backgroundColor: enSauvegarde ? "#94a3b8" : "#16a34a",
              color: "#ffffff",
              border: "none",
              padding: "10px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "600",
            }}
          >
            {enSauvegarde ? "Enregistrement..." : "Créer le bordereau"}
          </button>
        </div>
      </form>
    </div>
  );
};
