import React from 'react'
import { useLocation } from 'react-router-dom';

function Pagination({ onPrevPage, onNextPage, prev, next }) {
  const location = useLocation();
  
  const WithLink = ({ link, children }) => (
    link ?
    <a href={link}>
      {children}
    </a>
    : children
  );

  return (
    <div className="pagination-characters">
      <WithLink link={prev && "#RickAndMorty"}>
        <button onClick={ location.pathname === "/" ? onPrevPage : undefined } className={`pagination-button ${!prev ? "disabled": ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15 6l-6 6l6 6"></path>
          </svg>
        </button>
      </WithLink>
      <WithLink link={next && "#RickAndMorty"}>
        <button onClick={ location.pathname === "/" ? onNextPage : undefined } className={`pagination-button ${!next ? "disabled": ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </button>
      </WithLink>
    </div>
  )
}

export default Pagination