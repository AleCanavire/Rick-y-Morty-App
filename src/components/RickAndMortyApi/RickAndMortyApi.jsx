import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import Character from './Character';

function RickAndMortyApi() {
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const [characters, setCharacters] = useState([]);
  const [pages, setPages] = useState({
    prev: null,
    next: null
  });

  const getCharacters = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
      setPages({ prev: data.info.prev, next: data.info.next })
    })
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
    getCharacters(initialUrl)
  }, [])

  const prev = Boolean(pages.prev);
  const next = Boolean(pages.next);
  
  return (
    <>
      <div className="logo">
        <img src="/images/rick-and-morty.webp" alt="Rick and Morty Logo" />
      </div>
      <Pagination
        onPrevPage={()=>{ pages.prev !== null && getCharacters(pages.prev) }}
        onNextPage={()=>{ pages.next !== null && getCharacters(pages.next) }}
        prev={prev}
        next={next}
      />
      <div className="characters">
        { characters.map((character, index)=>{
          return(
            <Character
              key={index}
              character={character}
            />
          )})
        }  
      </div>
      <Pagination
        onPrevPage={()=>{ pages.prev !== null && getCharacters(pages.prev) }}
        onNextPage={()=>{ pages.next !== null && getCharacters(pages.next) }}
        prev={prev}
        next={next}
      />
    </>
  )
}

export default RickAndMortyApi