import React from "react";
import "./SearchUsers.css";
import clean from '../../images/clean.svg';
import search from '../../images/search.svg';
export const SearchUsers = ({searchValue,setSearchValue,openClearFilter,setOpenClearFilter,setTypeSort}) =>{

    const handleChange = (event) =>{
        setSearchValue(event.target.value);
        setOpenClearFilter(true);
    }
    const handleCLick = () =>{
        setSearchValue('')
        setOpenClearFilter(false)
        setTypeSort('')
    }
    return(
        <div className="search-users">
            <div className="search-input-block">
                <input
                    value={searchValue}
                    onChange={(event) => handleChange(event)}
                    placeholder="Поиск по имени или e-mail"
                    className="search-input"
                />
                <img src={search} alt="search" className="search"/>
            </div>
            {
                openClearFilter && (
                    <div
                        onClick={() => handleCLick()}
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