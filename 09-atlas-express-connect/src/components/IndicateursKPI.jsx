export const IndicateursKPI = ({ listeColis }) => {
  const totalColis = listeColis.length;
  const colisEnCours = listeColis.filter(
    (c) => c.statut === "en_transit" || c.statut === "en_livraison"
  ).length;
  const colisLivres = listeColis.filter((c) => c.statut === "livre").length;
  const chiffreAffairesMAD = listeColis.reduce(
    (cumul, c) => cumul + c.fraisExpeditionMAD,
    0
  );
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#64748b",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Volume Total
        </span>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#0f172a",
            marginTop: "4px",
          }}
        >
          {totalColis}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#0284c7",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          En Transit / Livraison
        </span>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#0284c7",
            marginTop: "4px",
          }}
        >
          {colisEnCours}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#16a34a",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Colis Livrés
        </span>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#16a34a",
            marginTop: "4px",
          }}
        >
          {colisLivres}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            color: "#7c3aed",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Chiffre d'Affaires
        </span>
        <p
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: "#7c3aed",
            marginTop: "4px",
          }}
        >
          {chiffreAffairesMAD.toLocaleString()} MAD
        </p>
      </div>
    </section>
  );
};
