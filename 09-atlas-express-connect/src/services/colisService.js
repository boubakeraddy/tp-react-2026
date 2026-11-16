import { apiClient } from "./apiClient";
// Liste des villes d'intervention au Maroc
const VILLES_MAROC = [
  "Casablanca",
  "Tanger Med",
  "Marrakech",
  "Fès",
  "Agadir",
  "Rabat",
];
const STATUTS = ["enregistre", "en_transit", "en_livraison", "livre"];
// 1. Récupération de la liste des colis
export const recupererColis = async () => {
  const reponse = await apiClient.get(
    "/products?limit=8&select=title,price,stock,category"
  );
  // Adaptation des données distantes en entités logistiques marocaines
  const colisAdaptes = reponse.data.products.map((item, index) => ({
    id: `ATLAS-${1000 + item.id}`,
    referenceInterne: item.id,
    destinataire: `Client Partenaire #${item.id}`,
    description: item.title,
    villeDepart: "Casablanca Hub",
    villeDestination: VILLES_MAROC[index % VILLES_MAROC.length],
    statut: STATUTS[index % STATUTS.length],
    poidsKg: Math.max(1, (item.price / 100).toFixed(1)),
    fraisExpeditionMAD: Math.round(item.price * 1.5),
    dateCreation: new Date(Date.now() - index * 86400000).toLocaleDateString(
      "fr-FR"
    ),
  }));
  return colisAdaptes;
};
// 2. Création d'un nouveau colis (POST)
export const creerColis = async (nouveauColis) => {
  const payload = {
    title: nouveauColis.description,
    price: Math.round(nouveauColis.fraisExpeditionMAD / 1.5),
  };
  const reponse = await apiClient.post("/products/add", payload);
  return {
    id: `ATLAS-${2000 + reponse.data.id}`,
    referenceInterne: reponse.data.id,
    destinataire: nouveauColis.destinataire,
    description: nouveauColis.description,
    villeDepart: nouveauColis.villeDepart,
    villeDestination: nouveauColis.villeDestination,
    statut: "enregistre",
    poidsKg: Number(nouveauColis.poidsKg),
    fraisExpeditionMAD: Number(nouveauColis.fraisExpeditionMAD),
    dateCreation: new Date().toLocaleDateString("fr-FR"),
  };
};
// 3. Mise à jour du statut d'acheminement (PATCH)
export const changerStatutColis = async (referenceInterne, nouveauStatut) => {
  // Appel distant simulé sur l'API REST
  await apiClient.patch(`/products/${referenceInterne}`, {
    title: `Statut actualisé : ${nouveauStatut}`,
  });
  return nouveauStatut;
};
// 4. Suppression d'un colis (DELETE)
export const supprimerColis = async (referenceInterne) => {
  await apiClient.delete(`/products/${referenceInterne}`);
  return true;
};
