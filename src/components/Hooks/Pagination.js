import React from "react";
import classNames from "../../../node_modules/classnames/index";
import "./pagination.scss";
import { DOTS, usePagination } from "./usePagination";
export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };


console.log(totalCount,pageSize,"dasdasdasdasd");
  let lastPage = paginationRange[paginationRange.length - 1];
  if(totalCount<=pageSize){
    return null
  }else {
    return (
      <ul
        className={classNames("pagination-container", { [className]: className })}
      >
        {/* Left navigation arrow */}
        <li
          className={classNames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }
  
          // Render our Page Pills
          return (
            <li
              className={classNames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          className={classNames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
    )
  } 
};
