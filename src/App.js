import React from "react";
import './App.css';
import {SearchUsers} from "./components/SearchUsers/SearchUsers";
import {UsersList} from "./components/UsersList/UsersList";

function App() {
  return (
    <div className="App">
      <div className="container">
          <h1 className="main-title">Список пользователей</h1>
          <SearchUsers/>
          <UsersList/>
      </div>
    </div>
  );
}

export default App;
