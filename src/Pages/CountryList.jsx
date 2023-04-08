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
          {country.map((country, index) => (
            <div key={index}>
            <CountryCard country={country} />
            </div>
          ))}
        </div>
      );
    }