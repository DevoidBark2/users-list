import React, {useState} from "react";
import './Pagination.css';
import left from '../../images/left.svg';
import right from '../../images/right.svg';

export const Pagination = ({usersPerPage,totalUser,handlePagination,currentPage,setCurrentPage}) => {
    const [notActiveArrow,setNotActiveArrow] = useState(false)
    const pageNumbers = []
    for(let i = 1;i <= Math.ceil(totalUser/usersPerPage);i++){
        pageNumbers.push(i)
    }
    const nextPage = () =>{
        if(currentPage !== pageNumbers.length){
            setCurrentPage(prev => prev + 1)
        }
    }
    const prevPage = () =>{
        if(currentPage !== 1){
            setCurrentPage(prev => prev - 1)
            setNotActiveArrow(true)
        }
    }
    return(
        <ul className="pagination">
            <button disabled={currentPage === 1} className="arrow-block">
                <img className={`arrow ${notActiveArrow ? 'not-active' : ''}`} src={left} alt="left"  onClick={prevPage}/>
            </button>
            {pageNumbers.map(num =>(
                <li
                    key={num}
                    onClick={() => handlePagination(num)}
                    className={`page-link ${currentPage === num ? "active-page" : ""}`}
                >
                    {num}
                </li>
            ))}
            <button disabled={currentPage === pageNumbers.length} className="arrow-block">
                <img className={`arrow ${notActiveArrow ? 'not-active' : ''}`} src={right} alt="right" onClick={nextPage}/>
            </button>
        </ul>
    )
}