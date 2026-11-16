import React from "react";
function ServiceCard(props) {
  return (
    <article className="service-card">
      <div className="card-header">
        <span className="card-badge">{props.categorie}</span>
        <span className="card-id">#{props.code}</span>
      </div>
      <h3 className="card-title">{props.titre}</h3>
      <p className="card-description">{props.description}</p>
      <div className="card-footer">
        <span className="tech-badge">{props.technologie}</span>
        <button
          className="card-button"
          onClick={() =>
            alert(`En savoir plus sur le service : ${props.titre}`)
          }
        >
          Consulter les détails →
        </button>
      </div>
    </article>
  );
}
export default ServiceCard;
