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
  
  return (
    <>
      <div className="logo">
        <img src="/images/rick-and-morty.png" alt="Rick and Morty Logo" />
      </div>
      <Pagination onPrevPage={()=>getCharacters(pages.prev)} onNextPage={()=>getCharacters(pages.next)}/>
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
      <Pagination onPrevPage={()=>getCharacters(pages.prev)} onNextPage={()=>getCharacters(pages.next)}/>
    </>
  )
}

export default RickAndMortyApi