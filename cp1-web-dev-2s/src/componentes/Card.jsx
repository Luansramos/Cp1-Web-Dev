import React from "react";
import "./Card.css";

function Card({ bgColor, title, icon, number, description }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="card-header">
        <div className="card-number">{number}</div>
        <div className="card-icon">{icon}</div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
