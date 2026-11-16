import { useParams, useNavigate, Link } from "react-router-dom";
import { LISTE_PRODUITS } from "../data/produits";
export const DetailProduit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Recherche du produit par son ID (attention à convertir la chaîne en nombre)
  const produit = LISTE_PRODUITS.find((p) => p.id === Number(id));
  // Gestion du cas où l'identifiant tapé dans l'URL n'existe pas
  if (!produit) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          border: "1px solid #f87171",
        }}
      >
        <h3 style={{ color: "#dc2626", margin: "0 0 10px 0" }}>
          Produit Non Trouvé
        </h3>
        <p style={{ color: "#64748b" }}>
          Aucun produit ne correspond au code article « {id} ».
        </p>
        <button
          onClick={() => navigate("/catalogue")}
          style={{
            marginTop: "15px",
            backgroundColor: "#0284c7",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Retourner au catalogue
        </button>
      </div>
    );
  }
  const commanderProduit = () => {
    // Redirige vers le panier en passant l'information du produit
    navigate("/panier", { state: { produitSelectionne: produit } });
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "30px",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          background: "none",
          border: "none",
          color: "#0284c7",
          cursor: "pointer",
          padding: 0,
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        ← Page précédente
      </button>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
        <div>
          <span
            style={{
              backgroundColor: "#e0f2fe",
              color: "#0369a1",
              padding: "4px 10px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            Artisanat de {produit.ville}
          </span>
          <h2 style={{ fontSize: "28px", color: "#0f172a", margin: "12px 0" }}>
            {produit.nom}
          </h2>
          <p style={{ fontSize: "16px", color: "#475569", lineHeight: "1.6" }}>
            {produit.description}
          </p>
          <div
            style={{
              margin: "24px 0",
              padding: "16px",
              backgroundColor: "#f8fafc",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                margin: "0 0 8px 0",
                fontSize: "15px",
                color: "#334155",
              }}
            >
              <strong>Catégorie : </strong> {produit.categorie}
            </p>
            <p
              style={{
                margin: "0 0 8px 0",
                fontSize: "15px",
                color: "#334155",
              }}
            >
              <strong>Disponibilité : </strong>
              <span
                style={{
                  color: produit.enStock ? "#16a34a" : "#dc2626",
                  fontWeight: "bold",
                }}
              >
                {produit.enStock
                  ? "En Stock (Expédition immédiate)"
                  : "Rupture temporaire"}
              </span>
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "26px",
                color: "#0284c7",
                fontWeight: "bold",
              }}
            >
              {produit.prix} DH
            </p>
          </div>
          <div style={{ display: "flex", gap: "15px" }}>
            <button
              onClick={commanderProduit}
              disabled={!produit.enStock}
              style={{
                backgroundColor: produit.enStock ? "#16a34a" : "#94a3b8",
                color: "white",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: produit.enStock ? "pointer" : "not-allowed",
              }}
            >
              Commander maintenant
            </button>
            <Link
              to="/catalogue"
              style={{
                backgroundColor: "#f1f5f9",
                color: "#334155",
                textDecoration: "none",
                padding: "12px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                display: "inline-block",
              }}
            >
              Voir d'autres articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
