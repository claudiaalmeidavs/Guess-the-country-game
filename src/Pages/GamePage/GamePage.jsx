import axios from "axios";
import { useState, useEffect } from "react";
import RandomCountryCard from "../../Components/RandomCountryCard/RandomCountryCard";

export default function GamePage () {
    const [country, setCountry] = useState(null);

    const fetchRandomCountry = () => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then(response => {
          const countries = response.data;
          const randomIndex = Math.floor(Math.random() * countries.length);
          const randomCountry = countries[randomIndex];
          setCountry(randomCountry);
        })
        .catch(error => console.error(error));
    };
  
    useEffect(() => {
      fetchRandomCountry();
    }, []);
  
    useEffect(() => {
      console.log(country);
    }, [country]);
    
    return (
        <div>
            <h3>Guess the Country</h3>
            <RandomCountryCard country={country}/>
        </div>
    )
}