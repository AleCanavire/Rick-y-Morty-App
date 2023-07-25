import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Options({ onSearch }) {
  const location = useLocation();

  return (
    <div className="options">
      <div className="search-container">
        <input onChange={(e)=> onSearch(e)} className="search-input" type="text" placeholder="Buscar..."/>
        <button className="search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </div>
      <Link className="my-favorites" to={location.pathname === "/" ? "/favorites" : "/"}>
        { location.pathname === "/"
          ? "Favorites"
          : "Home"
        }
      </Link>
    </div>
  )
}

export default Options