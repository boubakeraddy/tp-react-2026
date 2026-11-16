import { Link } from "react-router-dom";
export const Accueil = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h2 style={{ fontSize: "32px", color: "#0f172a", marginBottom: "16px" }}>
        L'Artisanat Authentique du Maroc Chez Vous
      </h2>
      <p
        style={{
          fontSize: "18px",
          color: "#475569",
          maxWidth: "700px",
          margin: "0 auto 30px auto",
          lineHeight: "1.6",
        }}
      >
        Découvrez notre collection exclusive de pièces uniques façonnées à la
        main par les maîtres artisans de Fès, Marrakech, Safi et du Moyen Atlas.
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
        <Link
          to="/catalogue"
          style={{
            display: "inline-block",
            backgroundColor: "#0284c7",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Découvrir le Catalogue
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ color: "#0284c7", marginTop: 0 }}>Fait Main 100%</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Chaque création est certifiée d'origine artisanale marocaine.
          </p>
        </div>
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ color: "#0284c7", marginTop: 0 }}>Circuit Court</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Les bénéfices sont directement reversés aux coopératives d'artisans.
          </p>
        </div>
        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ color: "#0284c7", marginTop: 0 }}>Livraison Rapide</h3>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Expédition soignée dans toutes les villes du Maroc sous 48h.
          </p>
        </div>
      </div>
    </div>
  );
};
