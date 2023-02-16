import React from "react";
import "./Modal.css";

export const Modal = ({active,setActive}) => {
    return(
        <div className={active ? 'modal active' : 'modal'}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3 className="modal-title">Вы уверены, что хотите удалить пользователя?</h3>
                <div className="modal-buttons">
                    <p className="modal-btn" onClick={() => alert()}>Да</p>
                    <p className="modal-btn" onClick={() => setActive(false)}>Нет</p>
                </div>
            </div>
        </div>
    )
}