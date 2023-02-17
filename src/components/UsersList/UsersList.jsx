import React, {useState} from "react";
import "./UsersList.css";
import {User} from "../User/User";
import {Pagination} from "../../UI/Pagination/Pagination";

export const UsersList = (
    {setUsers,users,searchValue,setOpenClearFilter,typeSort,setTypeSort,
        setActiveFilterRating,setActiveFilterDate,activeFilterRating,activeFilterDate
    }) =>{
    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const [directionSortRating,setDirectionSortRating] = useState(true)
    const [directionSortDate,setDirectionSortDate] = useState(true)
    const allUsers = users.sort((a,b) =>
        typeSort === 'rating' ? b.rating - a.rating :
        typeSort === 'reverse-rating' ? a.rating - b.rating :
        typeSort === 'date' ? Date.parse(b.registration_date) - Date.parse(a.registration_date) :
        typeSort === 'reverse-date' ? Date.parse(a.registration_date) - Date.parse(b.registration_date) :
        a.id - b.id)
        .filter(user => {
            return user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
                user.email.toLowerCase().includes(searchValue.toLowerCase());
        }).map(user => (<User key={user.id}  user={user} setUsers={setUsers}/>))
    const lastUserIndex = currentPage * usersPerPage;
    const firstUserIndex = lastUserIndex - usersPerPage;
    let currentUsers = allUsers.slice(firstUserIndex,lastUserIndex);
    const handlePagination = pageNumber =>setCurrentPage(pageNumber);
    const sortUsers = (type,sort) =>{
        if(sort === 1){
            setActiveFilterRating(false);
            setActiveFilterDate(true)
            setDirectionSortDate(!directionSortDate)
            setOpenClearFilter(true);
            if(directionSortDate) setTypeSort(type)
            else setTypeSort(`reverse-${type}`)
        }else{
            setActiveFilterDate(false);
            setActiveFilterRating(true);
            setDirectionSortRating(!directionSortRating)
            setOpenClearFilter(true);
            if(directionSortRating) setTypeSort(type)
            else setTypeSort(`reverse-${type}`)
        }
    }
    return(
        <div className="users-list-block">
            <div className="sort-block">
                <div className="sort-users-block">
                    <p className="sort-title">Сортировка:</p>
                    <p className={`${activeFilterDate ? 'sort-item active-sort-item' : 'sort-item'}`}
                       onClick={() => sortUsers('date',1)}>Дата регистрации
                    </p>
                    <p className={`${activeFilterRating  ? 'sort-item active-sort-item' : 'sort-item'}`}
                       onClick={() => sortUsers('rating',2)}>Рейтинг
                    </p>
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
                        </tr>
                    </thead>
                    <tbody>
                    {currentUsers}
                    </tbody>
                </table>
            </div>
        </div>
    )
}