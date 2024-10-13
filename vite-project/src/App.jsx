import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./Pages/Home";
import { Details } from "./Pages/Details";
import axios from "axios";
import { useState, useEffect } from "react";

const url= `http://localhost:3000/api/games`;

function App() {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    try {
      const response = await axios.get(url);
      setGames(response.data); 
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  }

  useEffect(() => {
    fetchGames();
  }, []);

  async function postGame(game) {
    try {
      const response = await axios.post(url, game); 
      setGames(response.data); 
    } catch (error) {
      console.log("Error posting game: ", error); 
    }
  }

  async function deleteGame(id) {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log("Error deleting game: ", error)
    }
  }

  function deleteHandler(id) {
    deleteGame(id); 
    setGames([...games.filter(game => game.id !== id)]); 
  }

  return (
    <>
      <Router> 
        <div className="app">
  
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/" element={<Home games={games} postGame={postGame} deleteGame={deleteHandler} />} />
          <Route path="/game/:id" element={<Details />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
