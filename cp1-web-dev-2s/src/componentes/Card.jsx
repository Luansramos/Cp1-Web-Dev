export default function Card({ bgColor, title, icon, number, description }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-header">
        <span className="card-number">{number}</span>
        <span className="card-icon">{icon}</span>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
