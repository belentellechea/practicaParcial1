import { Button } from "../../Button"
import "./style.css"
import { GameList } from "../../GameList"

export function Home({ games }){
    return (
        <>
            <div className="divTitle">
                <h1 className="title title-is1">Juegos Olímpicos de París 2024</h1>
            </div>
            <div className="divButton">
                <Button></Button>
            </div>
            <GameList games={games} />
        </>

    )
}