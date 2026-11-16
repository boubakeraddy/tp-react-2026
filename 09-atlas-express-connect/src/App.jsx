import { useState } from "react";
import { EnTete } from "./components/EnTete";
import { IndicateursKPI } from "./components/IndicateursKPI";
import { FormulaireAjoutColis } from "./components/FormulaireAjoutColis";
import { TableauColis } from "./components/TableauColis";
import { IndicateurChargement } from "./components/IndicateurChargement";
import { BanniereErreur } from "./components/BanniereErreur";
import {
  recupererColis,
  creerColis,
  changerStatutColis,
  supprimerColis,
} from "./services/colisService";
export default function App() {
  const [colis, setColis] = useState([]);
  const [chargement, setChargement] = useState(false);
  const [sauvegardeEnCours, setSauvegardeEnCours] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [notificationSucces, setNotificationSucces] = useState("");
  // 1. Déclenchement de la récupération des données distantes (GET)
  const handleActualiser = async () => {
    setChargement(true);
    setErreur(null);
    setNotificationSucces("");
    try {
      const donnees = await recupererColis();
      setColis(donnees);
      setNotificationSucces("Flux logistique synchronisé avec succès.");
    } catch (err) {
      setErreur(
        err.message || "Impossible de joindre la passerelle API Atlas."
      );
    } finally {
      setChargement(false);
    }
  };
  // 2. Création d'une nouvelle expédition (POST)
  const handleAjouterColis = async (nouveauColis) => {
    setSauvegardeEnCours(true);
    setErreur(null);
    try {
      const colisCree = await creerColis(nouveauColis);
      // Insertion immuable en tête de liste
      setColis((anciennes) => [colisCree, ...anciennes]);
      setNotificationSucces(
        `Bordereau ${colisCree.id} créé et transmis au hub.`
      );
    } catch (err) {
      setErreur(err.message || "Échec de la création du bordereau.");
    } finally {
      setSauvegardeEnCours(false);
    }
  };
  // 3. Mise à jour du statut d'acheminement (PATCH)
  const handleModifierStatut = async (refInterne, nouveauStatut) => {
    try {
      await changerStatutColis(refInterne, nouveauStatut);
      // Mise à jour locale immuable
      setColis((anciennes) =>
        anciennes.map((item) =>
          item.referenceInterne === refInterne
            ? { ...item, statut: nouveauStatut }
            : item
        )
      );
      setNotificationSucces(
        `Statut du colis mis à jour : ${nouveauStatut.replace("_", " ")}.`
      );
    } catch (err) {
      setErreur(
        err.message || "Impossible de modifier le statut sur le serveur."
      );
    }
  };
  // 4. Suppression d'un colis (DELETE)
  const handleSupprimerColis = async (refInterne) => {
    const confirmation = window.confirm(
      "Confirmez-vous l'annulation et la suppression de cette expédition ?"
    );
    if (!confirmation) return;
    try {
      await supprimerColis(refInterne);
      // Retrait immuable de l'élément
      setColis((anciennes) =>
        anciennes.filter((item) => item.referenceInterne !== refInterne)
      );
      setNotificationSucces("Expédition retirée du plan de transport.");
    } catch (err) {
      setErreur(err.message || "Échec de la suppression sur le serveur.");
    }
  };
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <EnTete onActualiser={handleActualiser} enChargement={chargement} />
      <main
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "24px 16px",
          flex: 1,
        }}
      >
        {erreur && (
          <BanniereErreur message={erreur} onReessayer={handleActualiser} />
        )}
        {notificationSucces && (
          <div
            style={{
              backgroundColor: "#ecfdf5",
              borderLeft: "4px solid #10b981",
              padding: "12px 16px",
              borderRadius: "4px",
              color: "#065f46",
              fontSize: "13px",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{notificationSucces}</span>
            <button
              onClick={() => setNotificationSucces("")}
              style={{
                background: "none",
                border: "none",
                color: "#065f46",
                fontWeight: "bold",
              }}
            >
              ×
            </button>
          </div>
        )}
        <IndicateursKPI listeColis={colis} />
        <FormulaireAjoutColis
          onAjouterColis={handleAjouterColis}
          enSauvegarde={sauvegardeEnCours}
        />
        {chargement ? (
          <IndicateurChargement />
        ) : (
          <TableauColis
            listeColis={colis}
            onModifierStatut={handleModifierStatut}
            onSupprimerColis={handleSupprimerColis}
          />
        )}
      </main>
      <footer
        style={{
          textAlign: "center",
          padding: "16px",
          fontSize: "12px",
          color: "#94a3b8",
          borderTop: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
        }}
      >
        Atlas Express Connect v2.4 - Module M204 / Développer en Front-end
        (React JS) - Casablanca
      </footer>
    </div>
  );
}
