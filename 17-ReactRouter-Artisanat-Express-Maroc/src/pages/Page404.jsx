import { Link } from "react-router-dom";
export const Page404 = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        border: "1px solid #e2e8f0",
      }}
    >
      <h1 style={{ fontSize: "80px", color: "#0284c7", margin: 0 }}>404</h1>
      <h2 style={{ color: "#0f172a", margin: "10px 0" }}>Page Introuvable</h2>
      <p
        style={{
          color: "#64748b",
          maxWidth: "500px",
          margin: "0 auto 20px auto",
        }}
      >
        L'adresse que vous cherchez n'existe pas ou l'artisan a déplacé cette
        création.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          backgroundColor: "#0284c7",
          color: "white",
          padding: "12px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Revenir à la page d'accueil
      </Link>
    </div>
  );
};
