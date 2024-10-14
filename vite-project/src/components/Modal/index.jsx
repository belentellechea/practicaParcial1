import "./style.css";
import { useRef } from "react";

export function Modal({ visible, setVisible, postGame }) {
    const formRef = useRef(null);

    function addGame(e) {
        e.preventDefault(); 

        const newGame = {
            title: e.target.title.value,
            description: e.target.description.value, 
            players: e.target.players.value,
            categories: e.target.category.value, 
        };

        postGame(newGame); 
        resetForm(); 
        cerrarModal(); 
    }

    function resetForm() {
        if (formRef.current) {
            formRef.current.reset(); //restablece los campos del formulario
        }
    }

    function cerrarModal() {
        resetForm();
        setVisible("none"); 
    }

    return (
        <div className="modal" style={{ display: visible }}> 
            <div className="modal-content">
                <h2>Nuevo juego</h2>
                <form id="gameForm" onSubmit={addGame} ref={formRef}>
                    <div className="columns is-mobile">
                        <div className="column">
                            <div className="box">
                                <label htmlFor="title"><strong>Título</strong></label>
                                <input type="text" id="titleInput" name="title" required />
                            </div>

                            <div className="box">
                                <label htmlFor="description"><strong>Descripción</strong></label>
                                <input type="text" id="descriptionInput" name="description" required />
                            </div>
                        </div>
                        <div className="column">
                            <div className="box">
                                <label htmlFor="players"><strong>Cantidad de jugadores</strong></label>
                                <input type="number" id="playersInput" name="players" required />
                            </div>

                            <div className="box">
                                <label htmlFor="category"><strong>Categorías</strong></label>
                                <input type="text" id="categoryInput" name="category" required />
                            </div>
                        </div>
                    </div>
                    <div className="modal-buttons">
                        <button type="button" id="cancel-button" onClick={cerrarModal}>Cancelar</button>
                        <button type="submit" id="accept-button">Aceptar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
