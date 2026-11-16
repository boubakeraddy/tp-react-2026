import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [utilisateur, setUtilisateur] = useState({
    estConnecte: true,
    nom: "Karim Bennani",
    ville: "Casablanca",
    role: "Artisan Vendeur",
    soldeMAD: 4850,
  });
  const seConnecter = (nom, ville, role) => {
    setUtilisateur({
      estConnecte: true,
      nom: nom || "Amina Tazi",
      ville: ville || "Fès",
      role: role || "Acheteur Particulier",
      soldeMAD: 1250,
    });
  };
  const seDeconnecter = () => {
    setUtilisateur({
      estConnecte: false,
      nom: null,
      ville: null,
      role: "Visiteur",
      soldeMAD: 0,
    });
  };
  const crediterSolde = (montantMAD) => {
    setUtilisateur((prev) => {
      if (!prev.estConnecte) return prev;
      return { ...prev, soldeMAD: prev.soldeMAD + montantMAD };
    });
  };
  const valeur = {
    utilisateur,
    seConnecter,
    seDeconnecter,
    crediterSolde,
  };
  return <AuthContext.Provider value={valeur}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const contexte = useContext(AuthContext);
  if (!contexte) {
    throw new Error(
      "useAuth doit obligatoirement être utilisé au sein d'un AuthProvider"
    );
  }
  return contexte;
}
