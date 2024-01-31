import React from 'react';
import "./degreeCard.css";


function DegreeCard({ degree }) {
  const { title, subtitle, logo_path, alt_name, duration, descriptions } = degree;

  return (
    <div className="degree-card">
      <div className="degree-logo">
        <img src={logo_path} alt={alt_name} />
      </div>
      <div className="degree-details">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{duration}</p>
        <ul>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DegreeCard;
