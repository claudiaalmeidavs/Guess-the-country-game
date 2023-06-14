import React from "react";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const { name, flags:{png}, capital, region, population, area } = country;
  return country ? (
    <div className="country-card-container">
      <h1 className="country-name">{name.common}</h1>
      <img className="card-image" src={png} alt={name.common}/>
      <div className="country-info">
        <p className="card-item">Capital: {capital}</p>
        <p className="card-item">Region: {region}</p>
        <p className="card-item">Population: {population}</p>
        <p className="card-item">Area: {area}</p>
      </div>
    </div>
  ) : null;
}