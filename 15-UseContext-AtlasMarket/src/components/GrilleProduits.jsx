import React from "react";
import CarteProduit from "./CarteProduit";
// Ce composant est 100% neutre : il ne sait ni ce qu'est le theme ni qui est connecte
export default function GrilleProduits({ produits }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {produits.map((produit) => (
        <CarteProduit key={produit.id} produit={produit} />
      ))}
    </div>
  );
}
