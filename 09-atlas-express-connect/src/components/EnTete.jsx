export const EnTete = ({ onActualiser, enChargement }) => {
  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            letterSpacing: "-0.5px",
          }}
        >
          ATLAS EXPRESS CONNECT
        </h1>
        <p style={{ fontSize: "12px", color: "#94a3b8" }}>
          Plateforme Nationale de Routage & Supervision Logistique
        </p>
      </div>
      <button
        onClick={onActualiser}
        disabled={enChargement}
        style={{
          backgroundColor: enChargement ? "#334155" : "#0284c7",
          color: "#ffffff",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          fontSize: "13px",
          fontWeight: "600",
          transition: "background-color 0.2s",
          opacity: enChargement ? 0.7 : 1,
        }}
      >
        {enChargement ? "Synchronisation..." : "Actualiser les flux"}
      </button>
    </header>
  );
};
