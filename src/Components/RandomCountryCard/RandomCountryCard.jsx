import "./RandomCountryCard.css";
import React, { useState, useEffect } from "react";


export default function RandomCountryCard({ country }) {
    console.log(country);
    const [answer, setAnswer] = useState("");
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(null)
    const [submitted, setSubmitted] = useState(false);


    // Update answer variable
    const onChange = (e) => {
      setAnswer(e.target.value)
    }


    // Determine if answer was correct and trigger the message
    const HandleSubmit = (e) => {
      e.preventDefault();
      answer.toLowerCase() === country.name.common.toLowerCase() ? setIsCorrectAnswer(true) : setIsCorrectAnswer(false)
      setSubmitted(true);
    };


    useEffect(() => {
      console.log(isCorrectAnswer);
    }, [isCorrectAnswer]);


    return (
      country ? (
      <div className="country-container">
        <h2 id="question-intro">What country am I?</h2>
        <p>This is the answer: {country.name.common}</p>
        <img id="game-card-image" src={country.flags.png} alt="This is the secret country's flag" />
        <p className="card-item"><strong>Capital</strong>: {country.capital}</p>
        <p className="card-item"><strong>Continent</strong>: {country.region}</p>
        <p className="card-item"><strong>Population</strong>: {country.population}</p>
        <p className="card-item"><strong>Area</strong>: {country.area} km2</p>
        <form onSubmit={HandleSubmit}>
          <div className="answer-container">
            <input type="text" id="country-guess-input" name="country-guess" value={answer} onChange={onChange}/>
            <button id="submit-guess-button" type="submit">Submit</button>
          </div>
        </form>
        {submitted ? (
        <div className="message-submitted">
            {isCorrectAnswer ? (<p className="message-win">Congratulations! Your answer was correct</p>) : (<p className="message-lose">Nope! The answer was {country.name.common}</p>)}        
        </div> 
        ) : null
        }
      </div>  
    ) : <div>Game loading</div>
    )
  }
