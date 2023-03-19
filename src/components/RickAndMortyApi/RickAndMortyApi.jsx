import React, { useEffect, useState } from 'react'
import Options from '../Options/Options';
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
      if (data.results) {
        setCharacters(data.results);
      }
      if (data.info) {
        setPages({ prev: data.info.prev, next: data.info.next })
      }
    })
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
    getCharacters(initialUrl)
  }, [])
  
  const onSearch = (e)=> {
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
        prev={Boolean(pages.prev)}
        next={Boolean(pages.next)}/>
      }
      <Options onSearch={onSearch}/>
      <div className="characters">
        { characters
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