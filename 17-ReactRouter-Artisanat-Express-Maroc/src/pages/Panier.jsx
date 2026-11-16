import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
export const Panier = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [commandeValidee, setCommandeValidee] = useState(false);
  // Récupération de l'article passé depuis la page précédente
  const produit = location.state?.produitSelectionne;
  const [nomClient, setNomClient] = useState("");
  const [telephone, setTelephone] = useState("");
  const [villeLivraison, setVilleLivraison] = useState("Casablanca");
  const finaliserAchat = (e) => {
    e.preventDefault();
    setCommandeValidee(true);
    // Après 3 secondes, on redirige l'utilisateur vers l'accueil
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  if (commandeValidee) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#f0fdf4",
          border: "1px solid #86efac",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#16a34a", margin: "0 0 10px 0" }}>
          Choukrane ! Commande Validée
        </h2>
        <p style={{ color: "#15803d" }}>
          Merci {nomClient}, votre commande sera livrée à {villeLivraison} dans
          les plus brefs délais.
        </p>
        <small style={{ color: "#16a34a" }}>
          Redirection automatique vers l'accueil dans 3 secondes...
        </small>
      </div>
    );
  }
  if (!produit) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <h3>Votre panier est actuellement vide</h3>
        <p style={{ color: "#64748b" }}>
          Vous n'avez pas encore sélectionné d'article artisanal.
        </p>
        <Link
          to="/catalogue"
          style={{
            display: "inline-block",
            marginTop: "10px",
            backgroundColor: "#0284c7",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Parcourir notre catalogue
        </Link>
      </div>
    );
  }
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "8px",
        border: "1px solid #e2e8f0",
      }}
    >
      <h2>Finalisation de votre commande</h2>
      <div
        style={{
          padding: "16px",
          background: "#f8fafc",
          borderRadius: "6px",
          marginBottom: "20px",
        }}
      >
        <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>
          Article sélectionné :
        </p>
        <p style={{ margin: 0, color: "#0284c7" }}>
          {produit.nom} - {produit.prix} DH
        </p>
      </div>
      <form
        onSubmit={finaliserAchat}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          maxWidth: "450px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Nom complet :
          </label>
          <input
            type="text"
            required
            value={nomClient}
            onChange={(e) => setNomClient(e.target.value)}
            placeholder="Ex: Fatima Zahra"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Numéro de téléphone :
          </label>
          <input
            type="tel"
            required
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Ex: 06 12 34 56 78"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "6px",
            }}
          >
            Ville de livraison :
          </label>
          <select
            value={villeLivraison}
            onChange={(e) => setVilleLivraison(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              boxSizing: "border-box",
            }}
          >
            <option value="Casablanca">Casablanca</option>
            <option value="Rabat">Rabat</option>
            <option value="Fès">Fès</option>
            <option value="Marrakech">Marrakech</option>
            <option value="Tanger">Tanger</option>
            <option value="Agadir">Agadir</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            marginTop: "10px",
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "6px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Confirmer la commande ({produit.prix} DH)
        </button>
      </form>
    </div>
  );
};
