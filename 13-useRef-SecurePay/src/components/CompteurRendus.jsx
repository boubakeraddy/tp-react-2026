import React, { useState, useRef, useEffect } from "react";
export default function CompteurRendus() {
  const [montant, setMontant] = useState(500);
  // 1. Compteur de rendus : si on utilisait useState, incrémenter provoquerait un re-render infini !
  const nbRendusRef = useRef(0);
  nbRendusRef.current += 1;
  // 2. Mémorisation de la valeur précédente du montant
  const precedentMontantRef = useRef(montant);
  useEffect(() => {
    // Après chaque rendu, on met à jour la valeur précédente
    precedentMontantRef.current = montant;
  }, [montant]);
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f172a" }}>
        Moniteur de Transaction &amp; Diagnostic
      </h3>
      <div style={{ marginBottom: "14px" }}>
        <label
          htmlFor="input-montant"
          style={{ display: "block", fontWeight: "bold", marginBottom: "6px" }}
        >
          Montant du virement (MAD) :
        </label>
        <input
          id="input-montant"
          type="number"
          step="50"
          value={montant}
          onChange={(e) => setMontant(Number(e.target.value))}
          style={{
            padding: "8px 12px",
            borderRadius: "5px",
            border: "1px solid #cbd5e1",
            fontSize: "1rem",
            width: "180px",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "14px",
          borderRadius: "6px",
          fontSize: "0.9rem",
        }}
      >
        <p style={{ margin: "0 0 6px 0" }}>
          Montant actuel : <strong>{montant} MAD</strong>
        </p>
        <p style={{ margin: "0 0 6px 0", color: "#64748b" }}>
          Montant précédent (avant modification) :{" "}
          <strong>
            {precedentMontantRef.current}
            MAD
          </strong>
        </p>
        <p style={{ margin: 0, color: "#0284c7", fontWeight: "bold" }}>
          Nombre de rendus exécutés par React : {nbRendusRef.current}
        </p>
      </div>
    </div>
  );
}
