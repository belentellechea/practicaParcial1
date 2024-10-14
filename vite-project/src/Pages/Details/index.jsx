import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./style.css"

const url= `http://localhost:3000/api/games`;

export function Details() {
    const { id } = useParams(); 
    const [game, setGame] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const navigate = useNavigate(); 

    useEffect(() => {
        async function fetchGameDetails() {
        try {
            const response = await axios.get(`${url}/${id}`);
            setGame(response.data[0]); 
        } catch (error) {
            console.error("Error fetching game details:", error);
        } finally {
            setLoading(false); 
        }
        }
        fetchGameDetails();
    }, [id]);
    
    function goBackHome() {
        navigate(`/`);
    }

    return (
        !isLoading && <div>
            <button className="button backButton" onClick={goBackHome}>Atrás</button>
            <div className='info'>
                <div className='divTitle'>
                    <h1>Mostrando detalles del juego</h1>
                    <h1 className='title title-is-1'><strong>{game.title}</strong></h1>
                </div>
                <p><strong>Descripción: </strong>{game.description}</p>
                <p><strong>Cantidad de jugadores: </strong>{game.players}</p>
                <p><strong>Categorías: </strong>{game.categories}</p>
            </div>
        </div>
    );
}
