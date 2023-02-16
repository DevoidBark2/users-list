import React, {useState} from "react";
import "./UsersList.css";
import {Modal} from "../../UI/Modal/Modal";
import {User} from "../User/User";
import {Pagination} from "../../UI/Pagination/Pagination";

export const UsersList = ({users,searchValue,setOpenCLearFilter,typeSort,setTypeSort}) =>{
    const [modalActive,setModalActive] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [activeFilterDate,setActiveFilterDate] = useState(false)
    const [activeFilterRating,setActiveFilterRating] = useState(false)
    const [directionSortRating,setDirectionSortRating] = useState(true)
    const [directionSortDate,setDirectionSortDate] = useState(true)
    const [usersPerPage] = useState(5);
    const allUsers = users.sort((a,b) => typeSort === 'rating' ? a.rating - b.rating :
        typeSort === 'reverse-rating' ? b.rating - a.rating :
        typeSort === 'date' ? Date.parse(a.registration_date) - Date.parse(b.registration_date) :
        typeSort === 'reverse-date' ? Date.parse(b.registration_date) - Date.parse(a.registration_date) : a.id - b.id).
        filter(user => {
            return user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
                user.email.toLowerCase().includes(searchValue.toLowerCase());

        }).map(user => (<User key={user.id} user={user} setModalActive={setModalActive}/>))

    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    let currentUser = allUsers.slice(firstUserIndex,lastUserIndex);
    const handlePagination = pageNumber =>setCurrentPage(pageNumber);
    const sortByDate = (type) =>{
        setActiveFilterRating(false);
        if(directionSortDate){
            setTypeSort(type)
            setActiveFilterDate(true)
            setDirectionSortDate(!directionSortDate)
            setOpenCLearFilter(true);
        }
        else{
            setTypeSort(`reverse-${type}`)
            setActiveFilterDate(true);
            setDirectionSortDate(!directionSortDate)
            setOpenCLearFilter(true);
        }

    }
    const sortByRating = (type) =>{
        setActiveFilterDate(false);
        if(directionSortRating){
            setTypeSort(type);
            setActiveFilterRating(true);
            setDirectionSortRating(!directionSortRating)
            setOpenCLearFilter(true);
        }
        else{
            setTypeSort(`reverse-${type}`)
            setActiveFilterRating(true);
            setDirectionSortRating(!directionSortRating)
            setOpenCLearFilter(true);
        }
    }
    return(
        <div className="users-list-block">
            <div className="sort-block">
                <div className="sort-users-block">
                    <p className="sort-title">Сортировка:</p>
                    <p className={`${activeFilterDate ? 'sort-item active-sort-item' : 'sort-item'}`} onClick={() => sortByDate('date')}>Дата регистрации</p>
                    <p className={`${activeFilterRating  ? 'sort-item active-sort-item' : 'sort-item'}`} onClick={() => sortByRating('rating')}>Рейтинг</p>
                </div>
                <Pagination
                    usersPerPage={usersPerPage}
                    totalUser={allUsers.length}
                    handlePagination={handlePagination}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
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
                            <Modal active={modalActive} setActive={setModalActive}/>
                        </tr>
                    </thead>
                    <tbody>
                    {currentUser}
                    </tbody>
                </table>
            </div>
        </div>
    )
}