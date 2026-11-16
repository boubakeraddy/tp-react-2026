import React, { useMemo, useState } from "react";
import { useEffect } from "react";
export default function StatistiquesFret({ expeditions, seuilMinimum }) {
  // Calcul lourd mémorisé : ne se réexécute QUE si 'expeditions' ou 'seuilMinimum' change
  let dureeCalculRerender = 0;
  const { stats, dureeCalculMs } = useMemo(() => {
    const debut = performance.now();
    // Simulation d'un calcul analytique lourd avec agrégation
    const expedFiltrees = expeditions.filter(
      (e) => parseFloat(e.montantMAD) >= seuilMinimum
    );
    const totalChiffreAffaires = expedFiltrees.reduce((total, e) => {
      return total + parseFloat(e.montantMAD);
    }, 0);
    const montantMaximal =
      expedFiltrees.length > 0
        ? Math.max(...expedFiltrees.map((e) => parseFloat(e.montantMAD)))
        : 0;
    const moyenneFret =
      expedFiltrees.length > 0
        ? totalChiffreAffaires / expedFiltrees.length
        : 0;
    // Simulation d'un calcul intensif supplémentaire (ex : corrélation mathématique)
    let hashSimule = 0;
    for (let i = 0; i < 3000000; i++) {
      hashSimule += i % 7;
    }
    const fin = performance.now();
    const duree = (fin - debut).toFixed(2);
    dureeCalculRerender = duree;
    return {
      stats: {
        totalExpeditions: expedFiltrees.length,
        totalChiffreAffaires,
        montantMaximal,
        moyenneFret,
      },
      dureeCalculMs: duree,
    };
  }, [expeditions, seuilMinimum]);

  const formaterDevise = (valeur) => {
    return new Intl.NumberFormat("fr-MA", {
      style: "currency",
      currency: "MAD",
      maximumFractionDigits: 0,
    }).format(valeur);
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h3 style={{ margin: 0, color: "#0f172a" }}>
          Indicateurs Clés de Performance
        </h3>
        <span
          style={{
            fontSize: "0.8rem",
            padding: "4px 10px",
            borderRadius: "12px",
            backgroundColor: "#dcfce7",
            color: "#15803d",
            fontWeight: "bold",
          }}
        >
          Temps de calcul : {dureeCalculRerender} ms
        </span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: "14px",
        }}
      >
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "12px",
            borderRadius: "6px",
          }}
        >
          <span
            style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}
          >
            Expéditions Éligibles
          </span>
          <strong style={{ fontSize: "1.4rem", color: "#0f172a" }}>
            {stats.totalExpeditions}
          </strong>
        </div>
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "12px",
            borderRadius: "6px",
          }}
        >
          <span
            style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}
          >
            Chiffre d'Affaires
          </span>
          <strong style={{ fontSize: "1.4rem", color: "#0284c7" }}>
            {formaterDevise(stats.totalChiffreAffaires)}
          </strong>
        </div>
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "12px",
            borderRadius: "6px",
          }}
        >
          <span
            style={{ fontSize: "0.8rem", color: "#64748b", display: "block" }}
          >
            Tarif Moyen
          </span>
          <strong style={{ fontSize: "1.4rem", color: "#16a34a" }}>
            {formaterDevise(stats.moyenneFret)}
          </strong>
        </div>
      </div>
    </div>
  );
}
