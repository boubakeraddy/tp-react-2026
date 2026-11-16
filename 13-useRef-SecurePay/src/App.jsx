import React, { useState } from "react";
import SaisieCodeOTP from "./components/SaisieCodeOTP";
import MinuteurSecurise from "./components/MinuteurSecurise";
import CompteurRendus from "./components/CompteurRendus";
export default function App() {
  const [codeValide, setCodeValide] = useState("");
  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "30px auto",
        padding: "0 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <header
        style={{
          marginBottom: "24px",
          borderBottom: "2px solid #e2e8f0",
          paddingBottom: "12px",
        }}
      >
        <h1 style={{ color: "#0f172a", margin: "0 0 6px 0" }}>
          SecurePay Maroc
        </h1>
        <p style={{ color: "#64748b", margin: 0 }}>
          Atelier Pratique Dédié au Hook <code>useRef</code> (DOM &amp;
          Variables Persistantes)
        </p>
      </header>
      {codeValide && (
        <div
          style={{
            backgroundColor: "#dcfce7",
            color: "#15803d",
            padding: "12px 16px",
            borderRadius: "6px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Code de vérification validé : {codeValide}
        </div>
      )}
      <SaisieCodeOTP onCodeComplet={(code) => setCodeValide(code)} />
      <MinuteurSecurise />
      <CompteurRendus />
    </div>
  );
}
