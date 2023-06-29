import "./ScoreCounter.css"

export default function ScoreCounter ( {score}) {
    return (
        <div className="score-counter-container">
            <h2 className="score-heading">Your score</h2>
            <h3 className="score-number">{score}</h3>
        </div>
    )
}