import React, {useState} from "react";
import "./UsersList.css";
import {Modal} from "../../UI/Modal/Modal";
import {User} from "../User/User";
import {Pagination} from "../../UI/Pagination/Pagination";
export const UsersList = ({users,searchValue}) =>{
    const [modalActive,setModalActive] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const allUsers = users.filter(user => {
        return user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
            user.email.toLowerCase().includes(searchValue.toLowerCase());

    }).map(user => (<User user={user} setModalActive={setModalActive}/>))
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    const currentUser = allUsers.slice(firstUserIndex,lastUserIndex);
    const handlePagination = pageNumber =>setCurrentPage(pageNumber)
    return(
        <div className="users-list-block">
            <div className="sort-block">
                <div className="sort-users-block">
                    <p className="sort-title">Сортировка:</p>
                    <p className="sort-item">Дата регистрации</p>
                    <p className="sort-item">Рейтинг</p>
                </div>
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUser={allUsers.length}
                    handlePagination={handlePagination}
                    currentPage={currentPage}
                />
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
                    {currentUser}
                    </tbody>
                </table>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}