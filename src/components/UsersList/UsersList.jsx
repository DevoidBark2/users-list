import React from "react";
import "./UsersList.css";
import cancel from '../../images/cancel.svg';
export const UsersList = () =>{
    return(
        <div className="users-list-block">
            <div className="sort-users-block">
                <p className="sort-title">Сортировка:</p>
                <p className="sort-item active">Дата регистрации</p>
                <p className="sort-item">Рейтинг</p>
            </div>
            <div className="users-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Имя пользователя</th>
                            <th>E-mail</th>
                            <th>Дата регистрации</th>
                            <th>Рейтинг</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>test@test.ru</td>
                            <td>23.09.19</td>
                            <td>12</td>
                            <td><img src={cancel} alt="cancel"/></td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>test@test.ru</td>
                            <td>23.09.19</td>
                            <td>12</td>
                            <td><img src={cancel} alt="cancel"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}