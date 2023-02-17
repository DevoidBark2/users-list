import React, {useState} from "react";
import './User.css';
import cancel from "../../images/cancel.svg";

export const User = ({user,setUsers}) =>{
    const [activeModal,setActiveModal] = useState(false)
    const handleClick = () => {
        setUsers(users => users.filter(el => el.id !== user.id))
        setActiveModal(false)
    }
    return(
        <>
            {
                activeModal && <div className={activeModal ? 'modal active' : 'modal'}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 className="modal-title">Вы уверены, что хотите удалить пользователя?</h3>
                        <div className="modal-buttons">
                            <p className="modal-btn" onClick={handleClick}>Да</p>
                            <p className="modal-btn" onClick={() => setActiveModal(false)}>Нет</p>
                        </div>
                    </div>
                </div>
            }
            <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.registration_date.slice(0,10).split('-').reverse().join('.')}</td>
                <td>{user.rating}<img
                    src={cancel}
                    alt="cancel"
                    className="cancel"
                    onClick={() => setActiveModal(true)}
                /></td>
            </tr>
        </>
    )
}