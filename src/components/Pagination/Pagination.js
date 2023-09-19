import React from 'react'
import { Link } from 'react-router-dom'

export const Pagination = ({page}) => {
  return (
    <div className="pagination-main-section">
    <div className="container">
      <div className="pagination-box">
        <button className="btn-2 previous"  
        disabled={page===1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
          >
            <path
              id="Icon_material-chevron-left"
              data-name="Icon material-chevron-left"
              d="M7,1.41,5.668,0,0,6l5.668,6L7,10.59,2.673,6Z"
            />
          </svg>
          <span>Previous</span>
        </button>
         <button className="btn-2" >{page}</button>
 
        <button className="btn-2 next" >
          <span>Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
          >
            <path
              id="Icon_material-chevron-left"
              data-name="Icon material-chevron-left"
              d="M0,1.41,1.332,0,7,6,1.332,12,0,10.59,4.327,6Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
    )
}



