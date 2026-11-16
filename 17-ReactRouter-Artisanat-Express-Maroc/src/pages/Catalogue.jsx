import { useState } from "react";
import { Link } from "react-router-dom";
import { LISTE_PRODUITS } from "../data/produits";
export const Catalogue = () => {
  const [recherche, setRecherche] = useState("");
  // Filtrage simple par nom ou ville
  const produitsAffiches = LISTE_PRODUITS.filter((item) => {
    const terme = recherche.toLowerCase();
    return (
      item.nom.toLowerCase().includes(terme) ||
      item.ville.toLowerCase().includes(terme)
    );
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div>
          <h2 style={{ margin: 0, color: "#0f172a" }}>
            Nos Trésors Artisanaux
          </h2>
          <p style={{ margin: "4px 0 0 0", color: "#64748b" }}>
            Sélectionnez un article pour consulter ses caractéristiques
            détaillées
          </p>
        </div>
        <input
          type="text"
          placeholder="Rechercher (ex: Fès, Tapis)..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{
            padding: "10px 16px",
            fontSize: "15px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            width: "260px",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {produitsAffiches.map((produit) => (
          <div
            key={produit.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e2e8f0",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 4px rgba(0,0,0,0.04)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: "#0284c7",
                  textTransform: "uppercase",
                }}
              >
                {produit.categorie} - {produit.ville}
              </span>
              <h3
                style={{ margin: "8px 0", fontSize: "18px", color: "#1e293b" }}
              >
                {produit.nom}
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                {produit.description}
              </p>
            </div>
            <div
              style={{
                marginTop: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0f172a",
                }}
              >
                {produit.prix} DH
              </span>
              {/* Lien vers la route dynamique */}
              <Link
                to={`/catalogue/${produit.id}`}
                style={{
                  backgroundColor: "#0284c7",
                  color: "white",
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Voir Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
