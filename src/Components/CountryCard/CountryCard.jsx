import React from "react";
import "./CountryCard.css";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { ccn3, name, flags:{png}, capital, region, population, area } = country;

  return country ? (
    <Link to={`/countries/${ccn3}`}>
      <div className="country-card-container">
        <h1 className="country-name">{name.common}</h1>
        <img className="card-image" src={png} alt={name.common}/>
        <div className="country-info">
          <p className="card-info"><strong>Capital</strong>: {capital}</p>
          <p className="card-info"><strong>Region</strong>: {region}</p>
          <p className="card-info"><strong>Population</strong>: {population}</p>
          <p className="card-info"><strong>Area</strong>: {area} km2</p>
        </div>
      </div>
    </Link>
  ) : null;
}