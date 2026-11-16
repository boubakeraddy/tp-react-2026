import React from "react";
function HeroBanner() {
  return (
    <section className="hero-section" id="accueil">
      <div className="hero-content">
        <div className="hero-tagline">
          Technopark Casablanca • Pôle d'Excellence Front-End
        </div>
        <h1 className="hero-title">
          Concevons les Applications Web de Demain avec React
        </h1>
        <p className="hero-description">
          AtlasTech Innovations accompagne les entreprises marocaines et
          internationales dans la digitalisation de leurs processus critiques
          grâce aux architectures modernes par composants réutilisables et au
          Virtual DOM.
        </p>
        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            Découvrir nos solutions
          </a>
          <a href="#contact" className="btn-secondary">
            Parler à un expert
          </a>
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;
