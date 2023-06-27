import React from "react";
import "./CountryCard.css";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  const { ccn3, name, flags:{png}, capital, region, population } = country;

  return country ? (
    <Link className="country-card-container" to={`/countries/${ccn3}`}>
        <h1 className="country-name">{name.common}</h1>
        <img className="card-image" src={png} alt={name.common}/>
        <div className="country-info">
          <p className="card-info"><strong>Capital</strong>: {capital}</p>
          <p className="card-info"><strong>Region</strong>: {region}</p>
          <p className="card-info"><strong>Population</strong>: {population}</p>
        </div>
    </Link>
  ) : null;
}