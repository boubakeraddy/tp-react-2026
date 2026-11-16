import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
export default function ParametresCabinet() {
  // Utilisation directe du Custom Hook useLocalStorage
  const [parametres, setParametres] = useLocalStorage(
    "medconnect_parametres_cabinet",
    {
      nomCabinet: "Cabinet Médical Al Massira",
      villeCabinet: "Casablanca Anfa",
      specialiteParDefaut: "Cardiologie",
      dureeConsultationMin: 30,
      notificationsActives: true,
    }
  );
  const mettreAJourChamp = (champ, valeur) => {
    setParametres((prev) => ({
      ...prev,
      [champ]: valeur,
    }));
  };
  const reinitialiser = () => {
    setParametres({
      nomCabinet: "Cabinet Médical Al Massira",
      villeCabinet: "Casablanca Anfa",
      specialiteParDefaut: "Généraliste",
      dureeConsultationMin: 20,
      notificationsActives: false,
    });
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "20px",
        marginBottom: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div>
          <h3 style={{ margin: 0, color: "#0f172a", fontSize: "1.15rem" }}>
            Configuration du Cabinet (Sauvegardée dans LocalStorage)
          </h3>
          <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
            Géré de manière totalement transparente par le hook{" "}
            <code>useLocalStorage</code>.
          </span>
        </div>
        <button
          onClick={reinitialiser}
          style={{
            backgroundColor: "#f1f5f9",
            color: "#475569",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            padding: "6px 12px",
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          Valeurs par défaut
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "16px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            Nom de l'Établissement
          </label>
          <input
            type="text"
            value={parametres.nomCabinet}
            onChange={(e) => mettreAJourChamp("nomCabinet", e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            Ville d'Exercice
          </label>
          <input
            type="text"
            value={parametres.villeCabinet}
            onChange={(e) => mettreAJourChamp("villeCabinet", e.target.value)}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9rem",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            Spécialité Principale
          </label>
          <select
            value={parametres.specialiteParDefaut}
            onChange={(e) =>
              mettreAJourChamp("specialiteParDefaut", e.target.value)
            }
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9rem",
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
            }}
          >
            <option value="Cardiologie">Cardiologie</option>
            <option value="Pédiatrie">Pédiatrie</option>
            <option value="Médecine Générale">Médecine Générale</option>
            <option value="Dermatologie">Dermatologie</option>
            <option value="Ophtalmologie">Ophtalmologie</option>
          </select>
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#334155",
              marginBottom: "4px",
            }}
          >
            Durée Consultation (min)
          </label>
          <input
            type="number"
            min="10"
            max="120"
            step="5"
            value={parametres.dureeConsultationMin}
            onChange={(e) =>
              mettreAJourChamp("dureeConsultationMin", Number(e.target.value))
            }
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              fontSize: "0.9rem",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>
    </div>
  );
}
