import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
export default function CarteProduit({ produit }) {
  const { themeActif } = useTheme();
  const { utilisateur, crediterSolde } = useAuth();
  const [messageAchat, setMessageAchat] = useState(null);
  const gererAchat = () => {
    if (!utilisateur.estConnecte) {
      setMessageAchat("Veuillez vous connecter pour commander.");
      return;
    }
    if (utilisateur.soldeMAD < produit.prixMAD) {
      setMessageAchat("Solde insuffisant en Dirhams.");
      return;
    }
    crediterSolde(-produit.prixMAD);
    setMessageAchat(`Achat confirme pour ${produit.prixMAD} MAD !`);
    setTimeout(() => setMessageAchat(null), 3000);
  };
  return (
    <div
      style={{
        backgroundColor: themeActif.surface,
        border: `1px solid ${themeActif.bordure}`,
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              backgroundColor: themeActif.badge,
              color: themeActif.primaire,
              padding: "3px 8px",
              borderRadius: "4px",
              fontWeight: "700",
            }}
          >
            {produit.region}
          </span>
          <span
            style={{
              fontSize: "1.1rem",
              fontWeight: "700",
              color: "#16a34a",
            }}
          >
            {produit.prixMAD.toLocaleString()} MAD
          </span>
        </div>
        <h3
          style={{
            margin: "0 0 8px 0",
            fontSize: "1.1rem",
            color: themeActif.textePrincipal,
          }}
        >
          {produit.titre}
        </h3>
        <p
          style={{
            margin: "0 0 16px 0",
            fontSize: "0.85rem",
            color: themeActif.texteSecondaire,
            lineHeight: "1.4",
          }}
        >
          {produit.description}
        </p>
      </div>
      <div>
        {messageAchat && (
          <div
            style={{
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "6px",
              fontSize: "0.8rem",
              textAlign: "center",
              backgroundColor: messageAchat.includes("confirme")
                ? "#dcfce7"
                : "#fee2e2",
              color: messageAchat.includes("confirme") ? "#166534" : "#991b1b",
            }}
          >
            {messageAchat}
          </div>
        )}
        <button
          onClick={gererAchat}
          style={{
            width: "100%",
            backgroundColor: themeActif.primaire,
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Commander cet article
        </button>
      </div>
    </div>
  );
}
