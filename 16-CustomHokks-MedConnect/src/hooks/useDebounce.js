import { useState, useEffect } from "react";
/**
 * Custom Hook retournant une version différée d'une valeur après écoulement d'un délai
 * @param {any} valeur - La valeur à temporiser (ex. texte d'un champ de recherche)
 * @param {number} delaiMs - Le délai en millisecondes d'attente
 */
export function useDebounce(valeur, delaiMs = 400) {
  const [valeurTemporisee, setValeurTemporisee] = useState(valeur);
  useEffect(() => {
    // Armer un minuteur à chaque changement de la valeur brute
    const minuteur = setTimeout(() => {
      setValeurTemporisee(valeur);
    }, delaiMs);
    // Fonction de nettoyage : annuler le minuteur précédent si l'utilisateur re-tape une touche avant la fin
    return () => {
      clearTimeout(minuteur);
    };
  }, [valeur, delaiMs]);
  return valeurTemporisee;
}
