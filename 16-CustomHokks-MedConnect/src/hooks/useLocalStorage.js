import { useState, useEffect } from "react";
/**
 * Custom Hook synchronisant une valeur d'état avec le localStorage du navigateur
 * @param {string} cle - La clé de stockage sous laquelle enregistrer la valeur
 * @param {any} valeurInitiale - La valeur de repli si aucune donnée n'existe en cache
 */
export function useLocalStorage(cle, valeurInitiale) {
  // 1. Initialisation paresseuse (lazy initialization) pour ne lire le localStorage qu'au premier rendu
  const [valeur, setValeur] = useState(() => {
    try {
      const elementEnregistre = window.localStorage.getItem(cle);
      if (elementEnregistre !== null) {
        return JSON.parse(elementEnregistre);
      }
      return typeof valeurInitiale === "function"
        ? valeurInitiale()
        : valeurInitiale;
    } catch (erreur) {
      console.warn(
        `Erreur lors de la lecture de localStorage pour la cle "${cle}":`,
        erreur
      );
      return valeurInitiale;
    }
  });
  // 2. Synchronisation automatique vers localStorage à chaque modification de la valeur ou de la clé
  useEffect(() => {
    try {
      window.localStorage.setItem(cle, JSON.stringify(valeur));
    } catch (erreur) {
      console.error(
        `Impossible d'écrire dans localStorage pour la cle "${cle}":`,
        erreur
      );
    }
  }, [cle, valeur]);
  return [valeur, setValeur];
}
