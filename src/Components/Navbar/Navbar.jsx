import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar () {
return (
    <div className="navbar">
        <h2 className="brand-name">Guess the Country</h2>
        <ul className="nav-list">
            <li className="nav-item">
                <Link className="nav-link" to="/countries">Country list</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/game">Play the game</Link>
            </li>
        </ul>
    </div>
)
}