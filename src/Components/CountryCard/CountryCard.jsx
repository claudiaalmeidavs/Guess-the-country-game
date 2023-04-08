import React from "react";
import "./CountryCard.css";

export default function CountryCard({ country }) {
  const { name, flags:{png}, capital, region, population, area } = country;
  return country ? (
    <div className="container">
      <h1 className="card-item">{name.common}</h1>
      <img className="card-image" src={png} alt={name.common}/>
      <p className="card-item">Capital: {capital}</p>
      <p className="card-item">Region: {region}</p>
      <p className="card-item">Population: {population}</p>
      <p className="card-item">Area: {area}</p>
    </div>
  ) : null;
}