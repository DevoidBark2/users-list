import React from "react";
import "./SearchUsers.css";
import clean from '../../images/clean.svg';
import search from '../../images/search.svg';
export const SearchUsers = () =>{
    return(
        <div className="search-users">
            <div className="search-input-block">
                <input placeholder="Поиск по имени или e-mail" className="search-input"/>
                <img src={search} alt="search" className="search"/>
            </div>
            <div className="clean-filter-block">
                <img src={clean} alt="clean"/>
                <p className="clean-filter">Очистить фильтр</p>
            </div>
        </div>
    )
}