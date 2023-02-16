import React from "react";
import './User.css';
import cancel from "../../images/cancel.svg";

export const User = ({user,setModalActive}) =>{
    return(
        <>
            <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.registration_date.slice(0,10).split('-').reverse().join('.')}</td>
                <td>{user.rating}<img
                    src={cancel}
                    alt="cancel"
                    className="cancel"
                    onClick={() => setModalActive(true)}
                /></td>
            </tr>
        </>
    )
}