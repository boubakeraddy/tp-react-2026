import react from "react";

function MetricBadge(props) {
  return (
    <div className="metric-badge-card">
      <div className="metric-number">{props.chiffre}</div>
      <div className="metric-title">{props.libelle}</div>
      <p className="metric-caption">{props.description}</p>
    </div>
  );
}
export default MetricBadge;
