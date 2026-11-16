export const TableauColis = ({
  listeColis,
  onModifierStatut,
  onSupprimerColis,
}) => {
  if (listeColis.length === 0) {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          textAlign: "center",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          color: "#64748b",
        }}
      >
        Aucune expédition en mémoire. Cliquez sur « Actualiser les flux » pour
        interroger l'API.
      </div>
    );
  }
  const getBadgeStyle = (statut) => {
    switch (statut) {
      case "livre":
        return { backgroundColor: "#dcfce7", color: "#166534" };
      case "en_livraison":
        return { backgroundColor: "#e0f2fe", color: "#0369a1" };
      case "en_transit":
        return { backgroundColor: "#fef3c7", color: "#92400e" };
      default:
        return { backgroundColor: "#f1f5f9", color: "#475569" };
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
        overflowX: "auto",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
          fontSize: "13px",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f8fafc",
              borderBottom: "1px solid #e2e8f0",
              color: "#475569",
              fontSize: "12px",
            }}
          >
            <th style={{ padding: "12px 16px" }}>Code Colis</th>
            <th style={{ padding: "12px 16px" }}>Destinataire</th>
            <th style={{ padding: "12px 16px" }}>Trajet</th>
            <th style={{ padding: "12px 16px" }}>Poids</th>
            <th style={{ padding: "12px 16px" }}>Montant</th>
            <th style={{ padding: "12px 16px" }}>Statut Logistique</th>
            <th style={{ padding: "12px 16px", textAlign: "right" }}>
              Actions REST
            </th>
          </tr>
        </thead>
        <tbody>
          {listeColis.map((colis) => {
            const badge = getBadgeStyle(colis.statut);
            return (
              <tr key={colis.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                <td
                  style={{
                    padding: "12px 16px",
                    fontWeight: "bold",
                    color: "#0f172a",
                  }}
                >
                  {colis.id}
                  <span
                    style={{
                      display: "block",
                      fontSize: "11px",
                      color: "#94a3b8",
                      fontWeight: "normal",
                    }}
                  >
                    {colis.dateCreation}
                  </span>
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <div style={{ fontWeight: "600", color: "#1e293b" }}>
                    {colis.destinataire}
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>
                    {colis.description}
                  </div>
                </td>
                <td style={{ padding: "12px 16px", color: "#334155" }}>
                  {colis.villeDepart} →{" "}
                  <span style={{ fontWeight: "600" }}>
                    {colis.villeDestination}
                  </span>
                </td>
                <td style={{ padding: "12px 16px" }}>{colis.poidsKg} kg</td>
                <td
                  style={{
                    padding: "12px 16px",
                    fontWeight: "bold",
                    color: "#0284c7",
                  }}
                >
                  {colis.fraisExpeditionMAD} MAD
                </td>
                <td style={{ padding: "12px 16px" }}>
                  <span
                    style={{
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontSize: "11px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      ...badge,
                    }}
                  >
                    {colis.statut.replace("_", " ")}
                  </span>
                </td>
                <td style={{ padding: "12px 16px", textAlign: "right" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      justifyContent: "flex-end",
                    }}
                  >
                    {colis.statut !== "livre" && (
                      <button
                        onClick={() => {
                          const ordre = [
                            "enregistre",
                            "en_transit",
                            "en_livraison",
                            "livre",
                          ];
                          const prochain =
                            ordre[ordre.indexOf(colis.statut) + 1] || "livre";
                          onModifierStatut(colis.referenceInterne, prochain);
                        }}
                        title="Faire progresser le statut (PATCH)"
                        style={{
                          backgroundColor: "#f0fdf4",
                          color: "#16a34a",
                          border: "1px solid #bbf7d0",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: "600",
                        }}
                      >
                        Avancer statut
                      </button>
                    )}
                    <button
                      onClick={() => onSupprimerColis(colis.referenceInterne)}
                      title="Annuler l'expédition (DELETE)"
                      style={{
                        backgroundColor: "#fef2f2",
                        color: "#dc2626",
                        border: "1px solid #fecaca",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "11px",
                        fontWeight: "600",
                      }}
                    >
                      Supprimer
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
