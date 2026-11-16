import React, { useState, useRef, useEffect } from "react";
export default function SaisieCodeOTP({ onCodeComplet }) {
  const [chiffres, setChiffres] = useState(["", "", "", ""]);
  // Tableau de 4 références pour cibler chaque champ HTML
  const inputsRef = [useRef(null), useRef(null), useRef(null), useRef(null)];
  // Focus automatique sur la première case dès le montage du composant
  useEffect(() => {
    if (inputsRef[0].current) {
      inputsRef[0].current.focus();
    }
  }, []);
  const handleChange = (index, valeur) => {
    // N'autoriser qu'un seul chiffre numérique
    const chiffreNettoye = valeur.slice(-1).replace(/[^0-9]/g, "");
    const nouvelleListe = [...chiffres];
    nouvelleListe[index] = chiffreNettoye;
    setChiffres(nouvelleListe);
    // Si un chiffre a été tapé et qu'il reste une case suivante, déplacer le curseur
    if (chiffreNettoye && index < 3 && inputsRef[index + 1].current) {
      inputsRef[index + 1].current.focus();
    }
    // Vérifier si les 4 cases sont renseignées
    if (nouvelleListe.every((c) => c !== "")) {
      onCodeComplet(nouvelleListe.join(""));
    }
  };
  const handleKeyDown = (index, e) => {
    // Si l'utilisateur appuie sur "Retour arrière" (Backspace) dans une case vide,
    // on repositionne le focus sur la case précédente
    if (
      e.key === "Backspace" &&
      !chiffres[index] &&
      index > 0 &&
      inputsRef[index - 1].current
    ) {
      inputsRef[index - 1].current.focus();
    }
  };
  const viderCode = () => {
    setChiffres(["", "", "", ""]);
    if (inputsRef[0].current) {
      inputsRef[0].current.focus();
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginTop: 0, color: "#0f172a" }}>
        Vérification par Code SMS (OTP)
      </h3>
      <p style={{ color: "#64748b", fontSize: "0.9rem", marginBottom: "20px" }}>
        Saisissez le code de confirmation à 4 chiffres envoyé sur votre numéro
        mobile.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        {chiffres.map((valeur, i) => (
          <input
            key={i}
            ref={inputsRef[i]}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={valeur}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            style={{
              width: "50px",
              height: "55px",
              fontSize: "1.6rem",
              textAlign: "center",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "2px solid #cbd5e1",
              color: "#0f172a",
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={viderCode}
        style={{
          padding: "8px 16px",
          backgroundColor: "#f1f5f9",
          color: "#475569",
          border: "1px solid #cbd5e1",
          borderRadius: "5px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Effacer et recommencer
      </button>
    </div>
  );
}
