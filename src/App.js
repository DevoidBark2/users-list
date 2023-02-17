import React, {useEffect, useState} from "react";
import './App.css';
import {SearchUsers} from "./components/SearchUsers/SearchUsers";
import {UsersList} from "./components/UsersList/UsersList";
import axios from "axios";

function App() {
    const [users,setUsers] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const [openClearFilter,setOpenClearFilter] = useState(false)
    const [typeSort,setTypeSort] = useState('')
    const [activeFilterDate,setActiveFilterDate] = useState(false)
    const [activeFilterRating,setActiveFilterRating] = useState(false)
    useEffect(() => {
        axios.get("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
            .then(data => setUsers(data.data))
    },[])
    return (
       <div className="App">
           <div className="container">
             <h1 className="main-title">Список пользователей</h1>
             <SearchUsers
                 searchValue={searchValue}
                 setSearchValue={setSearchValue}
                 openClearFilter={openClearFilter}
                 setOpenClearFilter={setOpenClearFilter}
                 setTypeSort={setTypeSort}
                 setActiveFilterRating={setActiveFilterRating}
                 setActiveFilterDate={setActiveFilterDate}
             />
             <UsersList setUsers={setUsers} users={users} searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        setOpenClearFilter={setOpenClearFilter}
                        typeSort={typeSort}
                        setTypeSort={setTypeSort}
                        setActiveFilterRating={setActiveFilterRating}
                        setActiveFilterDate={setActiveFilterDate}
                        activeFilterRating={activeFilterRating}
                        activeFilterDate={activeFilterDate}
             />
         </div>
       </div>
    );
}
export default App;
