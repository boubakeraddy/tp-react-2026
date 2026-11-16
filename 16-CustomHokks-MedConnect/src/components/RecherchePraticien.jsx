import React, { useState, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";
// Annuaire local représentatif de praticiens au Maroc pour démonstration sans dépendance API externe;
const PRATICIENS_MAROC = [
  {
    id: 1,
    nom: "Dr Mehdi Bennani",
    specialite: "Cardiologie",
    ville: "Casablanca",
    hopital: "CHU Ibn Rochd",
    tarifMAD: 400,
  },
  {
    id: 2,
    nom: "Dr Amina Tazi",
    specialite: "Pédiatrie",
    ville: "Rabat",
    hopital: "Clinique Agdal",
    tarifMAD: 350,
  },
  {
    id: 3,
    nom: "Dr Omar El Fassi",
    specialite: "Médecine Générale",
    ville: "Fès",
    hopital: "Centre Médical Atlas",
    tarifMAD: 250,
  },
  {
    id: 4,
    nom: "Dr Kenza Alaoui",
    specialite: "Dermatologie",
    ville: "Marrakech",
    hopital: "Hôpital Militaire Avicenne",
    tarifMAD: 450,
  },
  {
    id: 5,
    nom: "Dr Youssef Berrada",
    specialite: "Cardiologie",
    ville: "Tanger",
    hopital: "Polyclinique Tanger Med",
    tarifMAD: 500,
  },
  {
    id: 6,
    nom: "Dr Salma Chraibi",
    specialite: "Ophtalmologie",
    ville: "Casablanca",
    hopital: "Centre Laser Vision",
    tarifMAD: 380,
  },
];
export default function RecherchePraticien() {
  const [saisie, setSaisie] = useState("");
  // 1. Application du Custom Hook useDebounce
  const rechercheTemporisee = useDebounce(saisie, 400);
  // 2. Démonstration de useFetch (interroge une API simulée ou JSONPlaceholder)
  // Ici nous interrogeons les utilisateurs de test pour valider le hook en conditions réseau   réelles;
  const {
    donnees: donneesAPI,
    enChargement,
    erreur,
    recharger,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  // Filtrage réactif basé sur la valeur différée
  const resultatsPraticiens = useMemo(() => {
    const terme = rechercheTemporisee.trim().toLowerCase();
    if (!terme) return PRATICIENS_MAROC;
    return PRATICIENS_MAROC.filter(
      (praticien) =>
        praticien.nom.toLowerCase().includes(terme) ||
        praticien.specialite.toLowerCase().includes(terme) ||
        praticien.ville.toLowerCase().includes(terme)
    );
  }, [rechercheTemporisee]);
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        padding: "24px",
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
          <h3
            style={{
              margin: "0 0 4px 0",
              color: "#0f172a",
              fontSize: "1.2rem",
            }}
          >
            Annuaire des Médecins Référents
          </h3>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "#64748b" }}>
            Recherche optimisée par <code>useDebounce</code> (délai de 400 ms)
            et état réseau par <code>useFetch</code>.
          </p>
        </div>
        <button
          onClick={recharger}
          style={{
            backgroundColor: "#0284c7",
            color: "#ffffff",
            border: "none",
            borderRadius: "6px",
            padding: "8px 14px",
            fontSize: "0.85rem",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Actualiser le flux
        </button>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Rechercher par nom (ex. Bennani), spécialité (Cardiologie) ou ville
(Casablanca)..."
          value={saisie}
          onChange={(e) => setSaisie(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "1rem",
            border: "2px solid #0284c7",
            borderRadius: "8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "6px",
            fontSize: "0.8rem",
            color: "#64748b",
          }}
        >
          <span>
            Saisie immédiate en cours : <strong>"{saisie}"</strong>
          </span>
          <span>
            Valeur stabilisée par debounce :{" "}
            <strong style={{ color: "#0284c7" }}>
              "{rechercheTemporisee}"
            </strong>
          </span>
        </div>
      </div>
      {enChargement && (
        <div
          style={{
            padding: "16px",
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "600",
            marginBottom: "16px",
          }}
        >
          Synchronisation avec l'infrastructure réseau MedConnect...
        </div>
      )}
      {erreur && (
        <div
          style={{
            padding: "16px",
            backgroundColor: "#fee2e2",
            color: "#991b1b",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        >
          {erreur}
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {resultatsPraticiens.map((praticien) => (
          <div
            key={praticien.id}
            style={{
              border: "1px solid #cbd5e1",
              borderRadius: "8px",
              padding: "16px",
              backgroundColor: "#f8fafc",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "#0284c7",
                    backgroundColor: "#e0f2fe",
                    padding: "2px 8px",
                    borderRadius: "4px",
                  }}
                >
                  {praticien.ville}
                </span>
                <span
                  style={{
                    fontWeight: "700",
                    color: "#16a34a",
                    fontSize: "0.95rem",
                  }}
                >
                  {praticien.tarifMAD} MAD
                </span>
              </div>
              <h4
                style={{
                  margin: "0 0 4px 0",
                  color: "#0f172a",
                  fontSize: "1rem",
                }}
              >
                {praticien.nom}
              </h4>
              <p
                style={{
                  margin: "0 0 4px 0",
                  fontSize: "0.85rem",
                  color: "#334155",
                  fontWeight: "500",
                }}
              >
                {praticien.specialite}
              </p>
              <p style={{ margin: 0, fontSize: "0.8rem", color: "#64748b" }}>
                {praticien.hopital}
              </p>
            </div>
            <button
              style={{
                marginTop: "12px",
                width: "100%",
                backgroundColor: "#ffffff",
                border: "1px solid #0284c7",
                color: "#0284c7",
                borderRadius: "6px",
                padding: "8px",
                fontSize: "0.85rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Planifier une Consultation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
