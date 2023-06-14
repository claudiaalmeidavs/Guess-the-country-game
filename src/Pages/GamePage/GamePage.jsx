import "./GamePage.css"
import RandomCountryCard from "../../Components/RandomCountryCard/RandomCountryCard";

export default function GamePage () {

    return (
        <div className="game-container">
            <h3 className="game-heading">Play the game</h3>
            <RandomCountryCard/>
        </div>
    )
}