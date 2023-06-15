import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";

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
      <h3>{country.name.common}</h3>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={country.maps.googleMaps}
      />
      <p><strong>Area</strong>: {country.area} km2</p>
      <p><strong>Capital</strong>: {country.capital}</p>
      <p><strong>Continent</strong>: {country.continents}</p>
      <p><strong>Languages</strong>:</p>
      {Object.entries(country.languages).map(([code, language]) => (
        <li key={code}>{language}</li>
      ))}
      
    </div>) : <div>Page loading...</div>
  );
}