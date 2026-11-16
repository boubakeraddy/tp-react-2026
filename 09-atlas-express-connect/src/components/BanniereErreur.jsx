export const BanniereErreur = ({ message, onReessayer }) => {
  return (
    <div
      style={{
        backgroundColor: "#fef2f2",
        borderLeft: "4px solid #ef4444",
        padding: "16px",
        borderRadius: "6px",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h4 style={{ color: "#991b1b", fontSize: "14px", fontWeight: "bold" }}>
          Incident de communication
        </h4>
        <p style={{ color: "#b91c1c", fontSize: "13px", marginTop: "2px" }}>
          {message}
        </p>
      </div>
      {onReessayer && (
        <button
          onClick={onReessayer}
          style={{
            backgroundColor: "#ef4444",
            color: "#ffffff",
            border: "none",
            padding: "8px 14px",
            borderRadius: "4px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Réessayer
        </button>
      )}
    </div>
  );
};
