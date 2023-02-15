import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import {SearchUsers} from "./components/SearchUsers/SearchUsers";
import {UsersList} from "./components/UsersList/UsersList";

function App() {
    const [users,setUsers] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    useEffect(() => {
        axios.get("https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users")
            .then(data => setUsers(data.data))
    },[])
    return (
       <div className="App">
           <div className="container">
             <h1 className="main-title">Список пользователей</h1>
             <SearchUsers searchValue={searchValue} setSearchValue={setSearchValue}/>
             <UsersList users={users} searchValue={searchValue}/>
         </div>
       </div>
    );
}

export default App;
