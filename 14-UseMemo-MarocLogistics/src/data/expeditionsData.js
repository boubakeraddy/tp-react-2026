// Génération de 2 500 enregistrements d'expéditions maritimes
const PORTS = [
  "Tanger Med",
  "Casablanca Port",
  "Agadir Atlantique",
  "Nador West Med",
  "Dakhla Atlantique",
];
const STATUTS = ["Dédouané", "En transit", "Contrôle scanner", "Livré"];
export const genererExpeditions = () => {
  const resultats = [];
  for (let i = 1; i <= 2500; i++) {
    resultats.push({
      id: i,
      reference: `CONT-${10000 + i}`,
      port: PORTS[i % PORTS.length],
      montantMAD: (Math.sin(i) * 15000 + 25000).toFixed(2), // Montants entre 10 000 et 40 000
      MADstatut: STATUTS[i % STATUTS.length],
      poidsTonnes: (i % 25) + 5,
    });
  }
  return resultats;
};
