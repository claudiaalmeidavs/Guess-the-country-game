import './App.css';
import { Routes, Route } from "react-router-dom";
import CountryList from './Pages/CountryList/CountryList.jsx';
import GamePage from "./Pages/GamePage/GamePage.jsx";
import Navbar from './Components/Navbar/Navbar';
import CountryDetails from './Pages/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/countries" element={<CountryList />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        </Routes>
    </div>
  );
}

export default App;
