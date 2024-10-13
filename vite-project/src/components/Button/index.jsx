import "./style.css"
import { useState } from "react";
import { Modal } from "../Modal";
 
export function Button({postGame}) {
    const [visible, setVisible] = useState("none")

    function openModal(){
        setVisible("block"); 
    }

    return ( 
        <>
            <button className="button add-button" onClick={openModal}>
                <strong> + Agregar juego </strong>
            </button>
            <Modal 
                visible={visible} setVisible={setVisible}
                postGame= {postGame}
            />
        </>
    )
}