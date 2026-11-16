export const IndicateurChargement = ({
  message = "Synchronisation avec le serveur Atlas en cours...",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        color: "#64748b",
      }}
    >
      <div className="spinner" />
      <p style={{ marginTop: "12px", fontSize: "14px", fontWeight: "500" }}>
        {message}
      </p>
    </div>
  );
};
