import React, { useState } from "react";
import { genererExpeditions } from "./data/expeditionsData";
import StatistiquesFret from "./components/StatistiquesFret";
import GrilleExpeditions from "./components/GrilleExpeditions";
// Données initialisées une seule fois hors composant
const TOUTES_LES_EXPEDITIONS = genererExpeditions();
export default function App() {
  const [compteurReRendu, setCompteurReRendu] = useState(0);
  const [seuil, setSeuil] = useState(15000);
  const [themeSombre, setThemeSombre] = useState(false);
  return (
    <div
      style={{
        backgroundColor: themeSombre ? "#0f172a" : "#f8fafc",
        color: themeSombre ? "#f8fafc" : "#0f172a",
        minHeight: "100vh",
        padding: "24px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        transition: "background-color 0.2s",
      }}
    >
      <div style={{ maxWidth: "850px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "2px solid #cbd5e1",
            paddingBottom: "14px",
          }}
        >
          <div>
            <h1 style={{ margin: "0 0 4px 0", fontSize: "1.6rem" }}>
              MarocLogistics Tanger Med
            </h1>
            <p style={{ margin: 0, color: "#64748b" }}>
              Atelier Pratique Dédié au Hook <code>useMemo</code> (Mémorisation
              de Calculs)
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              onClick={() => setThemeSombre(!themeSombre)}
              style={{
                padding: "8px 14px",
                backgroundColor: themeSombre ? "#f8fafc" : "#1e293b",
                color: themeSombre ? "#0f172a" : "#ffffff",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {themeSombre ? "Mode Clair" : "Mode Sombre"}
            </button>
            <button
              type="button"
              onClick={() => setCompteurReRendu((c) => c + 1)}
              style={{
                padding: "8px 14px",
                backgroundColor: "#0284c7",
                color: "#ffffff",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Forcer un re-render ({compteurReRendu})
            </button>
          </div>
        </header>
        <div
          style={{
            backgroundColor: themeSombre ? "#1e293b" : "#ffffff",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "20px",
            border: "1px solid #cbd5e1",
          }}
        >
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Seuil de fret minimal pris en compte : <strong>{seuil} MAD</strong>
          </label>
          <input
            type="range"
            min="10000"
            max="35000"
            step="1000"
            value={seuil}
            onChange={(e) => setSeuil(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
        <StatistiquesFret
          expeditions={TOUTES_LES_EXPEDITIONS}
          seuilMinimum={seuil}
        />
        <GrilleExpeditions expeditions={TOUTES_LES_EXPEDITIONS} />
      </div>
    </div>
  );
}
