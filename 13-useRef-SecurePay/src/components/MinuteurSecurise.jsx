import React, { useState, useRef, useEffect } from "react";
export default function MinuteurSecurise() {
  const [tempsRestant, setTempsRestant] = useState(60);
  const [expire, setExpire] = useState(false);
  // timerRef stocke l'ID du timer sans déclencher de re-render lors de son affectation
  const timerRef = useRef(null);
  useEffect(() => {
    // Démarrage du décompte
    timerRef.current = setInterval(() => {
      setTempsRestant((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setExpire(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    // Nettoyage au démontage
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  const relancerMinuteur = () => {
    // Stopper le timer existant si actif
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTempsRestant(60);
    setExpire(false);
    // Recréer un nouveau timer
    timerRef.current = setInterval(() => {
      setTempsRestant((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          setExpire(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f172a" }}>
        Durée de Validité du Code
      </h3>
      <div
        style={{
          fontSize: "1.4rem",
          fontWeight: "bold",
          color: expire ? "#dc2626" : "#0284c7",
          margin: "10px 0",
        }}
      >
        {expire ? "Code expiré !" : `Expire dans : ${tempsRestant} seconde(s)`}
      </div>
      <button
        type="button"
        onClick={relancerMinuteur}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0284c7",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Renvoyer un nouveau code (Reset Timer)
      </button>
    </div>
  );
}
