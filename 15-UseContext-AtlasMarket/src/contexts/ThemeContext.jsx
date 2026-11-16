import React, { createContext, useContext, useState } from "react";
// 1. Création de l'objet Contexte
const ThemeContext = createContext(null);
// 2. Définition des palettes de couleurs selon le thème
export const themes = {
  clair: {
    nom: "clair",
    arrierePlan: "#f8fafc",
    surface: "#ffffff",
    textePrincipal: "#0f172a",
    texteSecondaire: "#64748b",
    bordure: "#e2e8f0",
    primaire: "#0284c7",
    badge: "#e0f2fe",
  },
  sombre: {
    nom: "sombre",
    arrierePlan: "#0f172a",
    surface: "#1e293b",
    textePrincipal: "#f8fafc",
    texteSecondaire: "#94a3b8",
    bordure: "#334155",
    primaire: "#38bdf8",
    badge: "#0369a1",
  },
};
// 3. Composant Provider
export function ThemeProvider({ children }) {
  const [nomTheme, setNomTheme] = useState("clair");
  const basculerTheme = () => {
    setNomTheme((themePrecedent) =>
      themePrecedent === "clair" ? "sombre" : "clair"
    );
  };
  const valeurDuContexte = {
    themeActif: themes[nomTheme],
    nomTheme,
    basculerTheme,
  };
  return (
    <ThemeContext.Provider value={valeurDuContexte}>
      {children}
    </ThemeContext.Provider>
  );
}
// 4. Custom Hook pour consommer le contexte en toute sécurité
export function useTheme() {
  const contexte = useContext(ThemeContext);
  if (!contexte) {
    throw new Error(
      "useTheme doit obligatoirement être utilisé à l'intérieur d'un ThemeProvider"
    );
  }
  return contexte;
}
