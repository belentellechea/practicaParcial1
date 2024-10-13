import { Button } from "../../components/Button"
import "./style.css"
import { GameList } from "../../components/GameList"

export function Home({ games, postGame, deleteGame }){
    return (
        <>
            <div className="divTitle">
                <h1 className="title">Juegos Olímpicos de París 2024</h1>
            </div>
            <div className="divButton">
                <Button postGame={postGame}></Button>
            </div>
            <GameList games={games} deleteGame={deleteGame} />
        </>

    )
}