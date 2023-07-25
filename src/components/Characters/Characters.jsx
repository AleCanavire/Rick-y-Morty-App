import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Options from '../Options/Options';
import Pagination from '../Pagination/Pagination';
import AllCharacters from './AllCharacters';
import Favorites from './Favorites';

function RickAndMortyApi() {
  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({
    prev: null,
    next: null
  });
  const location = useLocation();

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const getCharacters = (url) => {
    fetch(url)
      .then(response => {
        if (response.status === 200){
          return response.json();
        } else {
          throw new Error("404: El personaje que estas buscando no existe.");
        }
      })
      .then(data => {
        if (data.results) {
          setCharacters(data.results);
        }
        if (data.info) {
          setPages({ prev: data.info.prev, next: data.info.next })
        }
      })
      .catch(error => console.log(error));
  }

  useEffect(()=>{
    getCharacters(initialUrl);
  }, [])
  
  const onSearch = (e) => {
    getCharacters(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
  }

  return (
    <>
      <div className="logo">
        <img src="/images/rick-and-morty.webp" alt="Rick and Morty Logo" />
      </div>
      { characters &&
        <Pagination
          onPrevPage={()=>{ pages.prev !== null && getCharacters(pages.prev) }}
          onNextPage={()=>{ pages.next !== null && getCharacters(pages.next) }}
          prev={location.pathname !== "/" ? false : Boolean(pages.prev)}
          next={location.pathname !== "/" ? false : Boolean(pages.next)}
        />
      }
      <Options
        onSearch={onSearch}
      />
      <Routes>
        <Route
          path="/"
          element={<AllCharacters characters={characters}/>}
        />
        <Route
          path="/favorites"
          element={<Favorites/>}
        />
      </Routes>
      { characters &&
        <Pagination
          onPrevPage={()=>{ pages.prev !== null && getCharacters(pages.prev) }}
          onNextPage={()=>{ pages.next !== null && getCharacters(pages.next) }}
          prev={Boolean(pages.prev)}
          next={Boolean(pages.next)}
        />
      }
    </>
  )
}

export default RickAndMortyApi