import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
export default function PanneauUtilisateur() {
  const { themeActif } = useTheme();
  const { utilisateur, crediterSolde } = useAuth();
  if (!utilisateur.estConnecte) {
    return null;
  }
  return (
    <div
      style={{
        backgroundColor: themeActif.surface,
        border: `1px solid ${themeActif.bordure}`,
        borderRadius: "10px",
        padding: "16px 20px",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}
    >
      <div>
        <h4 style={{ margin: "0 0 4px 0", color: themeActif.textePrincipal }}>
          Portefeuille Artisan & Client AtlasMarket
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            color: themeActif.texteSecondaire,
          }}
        >
          Utilisateur actif : <strong>{utilisateur.nom}</strong> (
          {utilisateur.role}) | Solde disponible :{" "}
          <strong>{utilisateur.soldeMAD.toLocaleString()} MAD</strong>
        </p>
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => crediterSolde(200)}
          style={{
            backgroundColor: "#10b981",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 14px",
            fontSize: "0.85rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          + 200 MAD
        </button>
        <button
          onClick={() => crediterSolde(500)}
          style={{
            backgroundColor: "#059669",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 14px",
            fontSize: "0.85rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          + 500 MAD
        </button>
      </div>
    </div>
  );
}
