import { Game } from "../Game"
import "./style.css"

export function GameList({ games, deleteGame }) {

    return (
        <>
            <div className="cards-container">
                {games.map(game => (
                    <Game key={game.id} id={game.id} title={game.title} deleteGame={deleteGame} />
                ))}
            </div>
        </>
    )
} 