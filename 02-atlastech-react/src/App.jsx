import React from "react";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import ServiceCard from "./components/ServiceCard";
import Footer from "./components/Footer";
import MetricBadge from "./components/MetricBadge";
function App() {
  return (
    <div className="app-container">
      {/* 1. Barre de navigation */}
      <Navbar />
      {/* 2. Bannière de présentation */}
      <main className="main-content">
        <HeroBanner />
        <section className="kpi-section">
          <MetricBadge
            chiffre="+45"
            libelle="Projets Livrés au Maroc"
            description="Grandes entreprises & ministères"
          />
          <MetricBadge
            chiffre="99.8%"
            libelle="Taux de Disponibilité"
            description="Sur nos infrastructures cloud"
          />
          <MetricBadge
            chiffre="24/7"
            libelle="Support Dédié"
            description="Équipe technique basée à Casa"
          />
        </section>
        {/* 3. Section des services technologiques */}
        <section className="services-section" id="services">
          <div className="section-header">
            <span className="section-subtitle">Notre Savoir-Faire</span>
            <h2 className="section-title">Pôles d'Expertise Digitale</h2>
            <p className="section-description">
              Découvrez les solutions d'ingénierie logicielle développées par
              nos équipes pour propulser la transformation numérique au Maroc.
            </p>
          </div>
          <div className="services-grid">
            <ServiceCard
              code="SRV-01"
              categorie="Front-End Architecture"
              titre="Applications Web Monopages (SPA)"
              description="Conception d'interfaces réactives et ultra-fluides basées
sur React 18, gestion d'état globale Redux Toolkit et synchronisation temps réel."
              technologie="React 18 & Vite"
            />
            <ServiceCard
              code="SRV-02"
              categorie="Cloud & DevOps"
              titre="Déploiement Conteneurisé & CI/CD"
              description="Mise en production sécurisée de clusters Docker et
Kubernetes, automatisation des pipelines de tests unitaires et intégration continue."
              technologie="Docker & Cloud AWS"
            />
            <ServiceCard
              code="SRV-03"
              categorie="Data & IA"
              titre="Solutions d'Intelligence Artificielle"
              description="Intégration d'agents intelligents, de modèles de traitement
de langage naturel et de tableaux de bord prédictifs pour les banques et assurances."
              technologie="Python & API REST"
            />
          </div>
        </section>
      </main>
      {/* 4. Pied de page */}
      <Footer />
    </div>
  );
}
export default App;
