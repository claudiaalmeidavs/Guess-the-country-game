import "./GamePage.css"
import RandomCountryCard from "../../Components/RandomCountryCard/RandomCountryCard";
import ScoreCounter from "../../Components/ScoreCounter/ScoreCounter";
import React, { useState } from "react";

export default function GamePage () {
    const [score, setScore] = useState(0);

    return (
        <div className="game-container">
            <div className="heading-score-row">
                <h3 className="game-heading">Play the game</h3>
                <ScoreCounter score={score}/>
            </div>
                <RandomCountryCard score={score} setScore={setScore} />
        </div>
    )
}