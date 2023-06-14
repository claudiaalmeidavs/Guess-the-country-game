import './App.css';
import { Routes, Route } from "react-router-dom";
import CountryList from './Pages/CountryList/CountryList.jsx';
import GamePage from "./Pages/GamePage/GamePage.jsx";
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
    </div>
  );
}

export default App;
