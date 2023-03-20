import React, { useContext, useEffect, useState } from 'react';
import { favContext } from '../../context/favContext';
import Options from '../Options/Options';
import Pagination from '../Pagination/Pagination';
import Character from './Character';

function RickAndMortyApi() {
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([])
  const [pages, setPages] = useState({
    prev: null,
    next: null
  });

  const getCharacters = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.results) {
        setCharacters(data.results);
      }
      if (data.info) {
        setPages({ prev: data.info.prev, next: data.info.next })
      }
      if (allCharacters.length === 0) {
        setAllCharacters(data.results);
      }
    })
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
    getCharacters(initialUrl);
  }, [])
  
  const onSearch = (e)=> {
    getCharacters(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
  }

  const [activePage, setActivePage] = useState("home");
  const favorites = useContext(favContext).favorites

  function onViewFavorites() {
    if (activePage === "home") {
      setActivePage("favorites");
      setPages({ prev: null, next: null })
    } else if (activePage === "favorites") {
      setActivePage("home");
      getCharacters(initialUrl)
    }
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
        prev={Boolean(pages.prev)}
        next={Boolean(pages.next)}/>
      }
      <Options onSearch={onSearch} onViewFavorites={onViewFavorites}/>
      <div className="characters">
        { activePage === "home"
          ? ( characters
              ? characters.map((character)=>{
                return(
                  <Character
                    key={character.id}
                    character={character}
                  />
                )})
              : <div className="no-characters-found">
                  <h3>No se encontraron personajes</h3>
                </div>
            )
          : ( favorites.length !== 0
              ? favorites.map((character)=>{
                return(
                  <Character
                    key={character.id}
                    character={character}
                  />
                )})
              : <div className="no-characters-found">
                  <h3>No agregaste personajes a favoritos</h3>
                </div>
            )
        }
      </div>
      { characters &&
        <Pagination
        onPrevPage={()=>{ pages.prev !== null && getCharacters(pages.prev) }}
        onNextPage={()=>{ pages.next !== null && getCharacters(pages.next) }}
        prev={Boolean(pages.prev)}
        next={Boolean(pages.next)}/>
      }
    </>
  )
}

export default RickAndMortyApi