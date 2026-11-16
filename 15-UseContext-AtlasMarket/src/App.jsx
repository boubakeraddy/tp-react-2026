import React from "react";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import BarreNavigation from "./components/BarreNavigation";
import PanneauUtilisateur from "./components/PanneauUtilisateur";
import GrilleProduits from "./components/GrilleProduits";
const LISTE_PRODUITS = [
  {
    id: 1,
    titre: "Tapis Berbère Taznakht",
    prixMAD: 1800,
    region: "Ouarzazate",
    description:
      "Tissage en pure laine naturelle aux motifs géométriques traditionnels amazighs.",
  },
  {
    id: 2,
    titre: "Théière Royale en Cuivre Ciselé",
    prixMAD: 450,
    region: "Fès",
    description:
      "Fabrication artisanale martelée à la main par les maîtres dinandiers de la médina.",
  },
  {
    id: 3,
    titre: "Tajine Émaillé Décoratif et Cuisson",
    prixMAD: 220,
    region: "Safi",
    description:
      "Terre cuite réfractaire haute résistance aux motifs artisanaux safiots traditionnels.",
  },
  {
    id: 4,
    titre: "Huile d'Argan Cosmétique Bio (250ml)",
    prixMAD: 300,
    region: "Essaouira",
    description:
      "Extraite à froid par une coopérative féminine certifiée biologique dans le Souss.",
  },
];
// Sous-composant Conteneur pour appliquer le fond dynamique du thème
function ConteneurApplication() {
  const { themeActif } = useTheme();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: themeActif.arrierePlan,
        color: themeActif.textePrincipal,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <BarreNavigation />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>
        <PanneauUtilisateur />
        <h2
          style={{
            fontSize: "1.4rem",
            margin: "0 0 8px 0",
            color: themeActif.textePrincipal,
          }}
        >
          Sélection Artisanale du Mois
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            color: themeActif.texteSecondaire,
          }}
        >
          Commandez directement auprès des coopératives locales avec règlement
          instantané en Dirhams.
        </p>
        <GrilleProduits produits={LISTE_PRODUITS} />
      </main>
    </div>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ConteneurApplication />
      </AuthProvider>
    </ThemeProvider>
  );
}
