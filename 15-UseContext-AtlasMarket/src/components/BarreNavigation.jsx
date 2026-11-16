import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useAuth } from "../contexts/AuthContext";
export default function BarreNavigation() {
  const { themeActif, nomTheme, basculerTheme } = useTheme();
  const { utilisateur, seConnecter, seDeconnecter } = useAuth();
  return (
    <header
      style={{
        backgroundColor: themeActif.surface,
        borderBottom: `1px solid ${themeActif.bordure}`,
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "8px",
            backgroundColor: themeActif.primaire,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          A
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "1.25rem",
              color: themeActif.textePrincipal,
              fontWeight: "700",
            }}
          >
            AtlasMarket
          </h1>
          <span
            style={{ fontSize: "0.75rem", color: themeActif.texteSecondaire }}
          >
            Artisanat Marocain Authentique
          </span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {utilisateur.estConnecte ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: themeActif.arrierePlan,
              padding: "6px 14px",
              borderRadius: "20px",
              border: `1px solid ${themeActif.bordure}`,
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  color: themeActif.textePrincipal,
                }}
              >
                {utilisateur.nom} ({utilisateur.ville})
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: themeActif.texteSecondaire,
                }}
              >
                Solde :{" "}
                <strong style={{ color: "#16a34a" }}>
                  {utilisateur.soldeMAD.toLocaleString()} MAD
                </strong>
              </span>
            </div>
            <button
              onClick={seDeconnecter}
              style={{
                backgroundColor: "#ef4444",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "4px 10px",
                fontSize: "0.75rem",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Quitter
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              seConnecter("Fatima Zahra", "Marrakech", "Acheteur VIP")
            }
            style={{
              backgroundColor: themeActif.primaire,
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "8px 16px",
              fontSize: "0.85rem",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Se Connecter
          </button>
        )}
        <button
          onClick={basculerTheme}
          style={{
            backgroundColor: themeActif.surface,
            color: themeActif.textePrincipal,
            border: `1px solid ${themeActif.bordure}`,
            padding: "8px 14px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span>Mode :</span>
          <strong>{nomTheme === "clair" ? "Clair" : "Sombre"}</strong>
        </button>
      </div>
    </header>
  );
}
