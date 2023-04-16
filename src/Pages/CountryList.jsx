import axios from "axios";
import React, { useState, useEffect } from "react";
import CountryCard from "../Components/CountryCard/CountryCard";

export default function CountryList () {
    const [country, setCountry] = useState([]);
    const fetchCountries = () => {
        axios.get("https://restcountries.com/v3.1/all")
        .then(response => setCountry(response.data))
        .catch(error => console.error(error));
    }
    useEffect(() => {
        fetchCountries(); 
    }, []);
    return (
        <div>
          <h2>Country List</h2>
          <label htmlFor="country-select">Filter by{" "}
          <select id="country-select">
            <option value="">---</option>
            {country.map((country, id) => (
            <option key={id} value={country.name.common}>{country.name.common}</option>
            ))}
          </select>
          </label>
          {country.map((country, index) => (
            <div key={index}>
            <CountryCard country={country} />
            </div>
          ))}
        </div>
      );
    }