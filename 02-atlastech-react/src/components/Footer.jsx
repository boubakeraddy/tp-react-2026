import React from "react";
function Footer() {
  const anneeActuelle = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h4>AtlasTech Innovations S.A.R.L.</h4>
          <p>Route de Nouaceur, Technopark, 6ème Étage, Casablanca, Maroc.</p>
          <p>Filière Développement Digital – Web Full Stack (DDOWFS 2A).</p>
        </div>
        <div className="footer-copy">
          <p>© {anneeActuelle} AtlasTech Maroc. Tous droits réservés.</p>
          <p>Conçu sous React 18 et Vite pour une réactivité maximale.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
