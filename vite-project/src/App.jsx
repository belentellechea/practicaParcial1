import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./components/Pages/Home";
import { Details } from "./components/Pages/Details";
import axios from "axios";
import { useState, useEffect } from "react";

const url= `http://localhost:3000/api/games`;

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get(url);
        setGames(response.data); 
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
    fetchGames();
  }, []);

  return (
    <>
      <Router> 
        <div className="app">
  
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/" element={<Home games={games}/>} />
          <Route path="/game/:id" element={<Details />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
