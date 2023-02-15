import React from "react";
import './Pagination.css';

export const Pagination = ({usersPerPage,totalUser,handlePagination,currentPage}) => {
    const pageNumbers = []
    for(let i = 1;i <= Math.ceil(totalUser/usersPerPage);i++){
        pageNumbers.push(i)
    }
    return(
        <ul className="pagination">
            {pageNumbers.map(num =>(
                <li
                    key={num}
                    onClick={() => handlePagination(num)}
                    className={`page-link ${currentPage === num ? "active" : ""}`}
                >
                    {num}
                </li>
            ))}
        </ul>
    )
}