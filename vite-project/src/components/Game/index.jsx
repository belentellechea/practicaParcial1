import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./style.css"

const url= `http://localhost:3000/api/games`;

export function Game(props){

    const navigate = useNavigate(); 

    async function deleteGame() {
        try {
            await axios.delete(`${url}/${props.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });            
        } catch (error) {
            console.error("Error eliminando la tarea:", error);
        }
    };

    function goToDetails() {
        navigate(`/game/${props.id}`);
    }

    return (
        <div className="card" id={props.id}>
            <div className="card-header">
                <div className="card-header-title">{props.title}</div>
            </div>
            <div className="card-content">
                <div className="button-container">
                    <button className="detailsButton" onClick={goToDetails}>Detalles</button>
                    <button className="deleteButton" onClick={deleteGame}>Borrar</button>
                </div>
            </div>
        </div>
    )
}