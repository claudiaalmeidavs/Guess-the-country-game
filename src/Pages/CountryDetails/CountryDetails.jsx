import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CountryDetails.css";

export default function CountryDetails() {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  const fetchCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${id}`)
      .then(response => {
        setCountry(response.data[0]);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchCountry();
  }, []);


  return (
    country ? 
    (<div className="country-details-container">
      <h2 className="details-title">{country.name.common}</h2>
      <img className="details-image" src={country.flags.png} alt={country.name.common}/>
      {country.unMember = true ? <p className="un-member-p">UN Member</p> : null}
      <p className="details-p"><strong>Official name</strong>: {country.name.official}</p>
      <p className="details-p"><strong>Area</strong>: {country.area} km2</p>
      <p className="details-p"><strong>Capital</strong>: {country.capital}</p>
      <p className="details-p"><strong>Continent</strong>: {country.continents}</p>
      <p className="details-p"><strong>Languages</strong>:</p>
      {Object.entries(country.languages).map(([code, language]) => (
        <li className="details-p list-languages" key={code}>{language}</li>
      ))}
      <p className="details-p"><strong>Status</strong>: {country.tld.independent = true ? "Independent" : "Not independent"}</p>
      
    </div>) : <div>Page loading...</div>
  );
}