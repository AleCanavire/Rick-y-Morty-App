import React from 'react'

function Pagination({ onPrevPage, onNextPage }) {
  return (
    <div className="pagination-characters">
      <button onClick={ ()=> onPrevPage() } className="pagination-button button-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M15 6l-6 6l6 6"></path>
        </svg>
      </button>
      <button onClick={ ()=> onNextPage() } className="pagination-button button-next">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M9 6l6 6l-6 6"></path>
      </svg>
      </button>
    </div>
  )
}

export default Pagination