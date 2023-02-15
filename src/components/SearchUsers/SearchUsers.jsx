import React from "react";
import "./SearchUsers.css";
import clean from '../../images/clean.svg';
import search from '../../images/search.svg';
export const SearchUsers = ({searchValue,setSearchValue}) =>{
    return(
        <div className="search-users">
            <div className="search-input-block">
                <input
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Поиск по имени или e-mail"
                    className="search-input"
                />
                <img src={search} alt="search" className="search"/>
            </div>
            {
                searchValue && (
                    <div
                        onClick={() => setSearchValue('')}
                        className="clean-filter-block not-active-clean-block"
                    >
                        <img src={clean} alt="clean"/>
                        <p className="clean-filter">Очистить фильтр</p>
                    </div>
                )
            }
        </div>
    )
}