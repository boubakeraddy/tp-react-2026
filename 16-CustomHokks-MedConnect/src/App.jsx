import React from "react";
import ParametresCabinet from "./components/ParametresCabinet";
import RecherchePraticien from "./components/RecherchePraticien";
export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        padding: "24px 16px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
        <header
          style={{
            backgroundColor: "#0f172a",
            color: "#ffffff",
            padding: "20px 24px",
            borderRadius: "12px",
            marginBottom: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0 0 6px 0",
                fontSize: "1.4rem",
                fontWeight: "700",
              }}
            >
              MedConnect Maroc - Espace Professionnel
            </h1>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#94a3b8" }}>
              Architecture modulaire basée sur 3 Custom Hooks :{" "}
              <code>useLocalStorage</code>,<code>useDebounce</code>, et{" "}
              <code>useFetch</code>.
            </p>
          </div>
          <span
            style={{
              backgroundColor: "#0284c7",
              color: "#ffffff",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: "600",
            }}
          >
            Casablanca Nearshore
          </span>
        </header>
        <main>
          <ParametresCabinet />
          <RecherchePraticien />
        </main>
      </div>
    </div>
  );
}
