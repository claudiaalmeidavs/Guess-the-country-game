import "./GamePage.css"
import RandomCountryCard from "../../Components/RandomCountryCard/RandomCountryCard";
import React from "react";

export default function GamePage () {

    return (
        <div className="game-container">
            <div className="heading-score-row">
                <h3 className="game-heading">Play the game</h3>
            </div>
                <RandomCountryCard/>
        </div>
    )
}