import React, { useState, useMemo } from "react";
export default function GrilleExpeditions({ expeditions }) {
  const [recherche, setRecherche] = useState("");
  const [portFiltre, setPortFiltre] = useState("");
  // useMemo mémorise le tableau filtré. Si l'utilisateur clique ailleurs ou change de thème,
  // ce calcul lourd sur 2 500 objets est immédiatement ignoré.
  const expeditionsFiltrees = useMemo(() => {
    return expeditions.filter((item) => {
      const correspondRecherche =
        item.reference.toLowerCase().includes(recherche.toLowerCase()) ||
        item.port.toLowerCase().includes(recherche.toLowerCase());
      const correspondPort = portFiltre === "" || item.port === portFiltre;
      return correspondRecherche && correspondPort;
    });
  }, [expeditions, recherche, portFiltre]);
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f172a" }}>
        Registre des Déclarations
      </h3>
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "16px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          placeholder="Rechercher par référence (ex: CONT-10025)..."
          style={{
            flex: 1,
            minWidth: "220px",
            padding: "8px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "5px",
          }}
        />
        <select
          value={portFiltre}
          onChange={(e) => setPortFiltre(e.target.value)}
          style={{
            padding: "8px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "5px",
          }}
        >
          <option value="">Tous les ports maritimes</option>
          <option value="Tanger Med">Tanger Med</option>
          <option value="Casablanca Port">Casablanca Port</option>
          <option value="Agadir Atlantique">Agadir Atlantique</option>
          <option value="Nador West Med">Nador West Med</option>
          <option value="Dakhla Atlantique">Dakhla Atlantique</option>
        </select>
      </div>
      <p
        style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "12px" }}
      >
        {expeditionsFiltrees.length} résultat(s) trouvé(s) sur 2 500 conteneurs.
      </p>
      <div
        style={{
          maxHeight: "320px",
          overflowY: "auto",
          border: "1px solid #e2e8f0",
          borderRadius: "6px",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
            fontSize: "0.9rem",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#f1f5f9",
                borderBottom: "2px solid #cbd5e1",
                color: "#334155",
              }}
            >
              <th style={{ padding: "8px 12px" }}>Réf. Conteneur</th>
              <th style={{ padding: "8px 12px" }}>Port d'Arrivée</th>
              <th style={{ padding: "8px 12px" }}>Statut</th>
              <th style={{ padding: "8px 12px", textAlign: "right" }}>
                Montant Fret
              </th>
            </tr>
          </thead>
          <tbody>
            {expeditionsFiltrees.slice(0, 50).map((item) => (
              <tr key={item.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td style={{ padding: "8px 12px", fontWeight: "bold" }}>
                  {item.reference}
                </td>
                <td style={{ padding: "8px 12px" }}>{item.port}</td>
                <td style={{ padding: "8px 12px" }}>
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: "4px",
                      fontSize: "0.75rem",
                      backgroundColor:
                        item.statut === "Dédouané" ? "#dcfce7" : "#fef3c7",
                      color: item.statut === "Dédouané" ? "#15803d" : "#b45309",
                    }}
                  >
                    {item.statut}
                  </span>
                </td>
                <td
                  style={{
                    padding: "8px 12px",
                    textAlign: "right",
                    fontWeight: "bold",
                    color: "#0284c7",
                  }}
                >
                  {item.montantMAD} MAD
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {expeditionsFiltrees.length > 50 && (
        <p
          style={{
            fontSize: "0.8rem",
            color: "#94a3b8",
            textAlign: "center",
            marginTop: "8px",
          }}
        >
          Affichage limité aux 50 premiers résultats pour préserver le rendu du
          DOM.
        </p>
      )}
    </div>
  );
}
