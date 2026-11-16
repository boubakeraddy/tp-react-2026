import { useState, useEffect, useCallback } from "react";
/**
 * Custom Hook générique pour interroger une API REST avec gestion d'états et annulation
 * @param {string} url - L'URL du point de terminaison API
 */
export function useFetch(url) {
  const [donnees, setDonnees] = useState(null);
  const [enChargement, setEnChargement] = useState(Boolean(url));
  const [erreur, setErreur] = useState(null);
  const [compteurRechargement, setCompteurRechargement] = useState(0);
  // Fonction permettant de forcer une nouvelle requête manuellement
  const recharger = useCallback(() => {
    setCompteurRechargement((prev) => prev + 1);
  }, []);
  useEffect(() => {
    // Si aucune URL n'est fournie, ne rien exécuter
    if (!url) {
      setDonnees(null);
      setEnChargement(false);
      setErreur(null);
      return;
    }
    const controleur = new AbortController();
    setEnChargement(true);
    setErreur(null);
    fetch(url, { signal: controleur.signal })
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error(
            `Erreur HTTP ${reponse.status} : impossible de charger les données.`
          );
        }
        return reponse.json();
      })
      .then((resultat) => {
        setDonnees(resultat);
        setErreur(null);
      })
      .catch((err) => {
        // Ignorer l'erreur normale d'abandon générée par l'AbortController
        if (err.name !== "AbortError") {
          setErreur(err.message || "Une anomalie réseau est survenue.");
        }
      })
      .finally(() => {
        setEnChargement(false);
      });
    // Nettoyage : annuler la requête en cours si l'URL change ou si le composant est démonté
    return () => {
      controleur.abort();
    };
  }, [url, compteurRechargement]);
  return { donnees, enChargement, erreur, recharger };
}
