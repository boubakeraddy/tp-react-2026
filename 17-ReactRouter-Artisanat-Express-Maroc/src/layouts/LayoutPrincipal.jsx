import { NavLink, Outlet } from "react-router-dom";
export const LayoutPrincipal = () => {
  // Fonction pour appliquer un style visuel à l'onglet sélectionné
  const styleLienNav = ({ isActive }) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "6px",
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#ffffff" : "#94a3b8",
    backgroundColor: isActive ? "#0284c7" : "transparent",
    transition: "all 0.2s ease-in-out",
  });
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* 1. Barre de navigation commune */}
      <header
        style={{
          backgroundColor: "#0f172a",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h1 style={{ color: "#38bdf8", fontSize: "20px", margin: 0 }}>
            Artisanat Express Maroc
          </h1>
        </div>
        <nav style={{ display: "flex", gap: "12px" }}>
          <NavLink to="/" style={styleLienNav}>
            Accueil
          </NavLink>
          <NavLink to="/catalogue" style={styleLienNav}>
            Catalogue
          </NavLink>
          <NavLink to="/panier" style={styleLienNav}>
            Mon Panier
          </NavLink>
        </nav>
      </header>
      {/* 2. Emplacement réservé pour les pages enfants */}
      <main
        style={{
          flex: 1,
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          padding: "30px 20px",
          boxSizing: "border-box",
        }}
      >
        <Outlet />
      </main>
      {/* 3. Pied de page commun */}
      <footer
        style={{
          backgroundColor: "#0f172a",
          color: "#64748b",
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: 0 }}>
          © 2026 Artisanat Express Maroc - Plateforme de promotion des
          coopératives artisanales
        </p>
      </footer>
    </div>
  );
};
