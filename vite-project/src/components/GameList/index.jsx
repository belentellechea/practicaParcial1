import { Game } from "../Game"
import "./style.css"

export function GameList({ games }) {

    return (
        <>
            <div className="cards-container">
                {games.map(game => (
                    <Game key={game.id} id={game.id} title={game.title} />
                ))}
            </div>
        </>
    )
}