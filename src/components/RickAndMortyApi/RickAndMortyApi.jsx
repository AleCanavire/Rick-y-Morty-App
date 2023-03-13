import React, { useEffect, useState } from 'react'
import Character from './Character';

function RickAndMortyApi() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = () => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      setCharacters(data.results);
    })
    .catch((error) => console.log(error));
  }
  useEffect(()=>{
    getCharacters()
  }, [])
  
  return (
    <>
      <div className="logo">
        <img src="/images/rick-and-morty.png" alt="Rick and Morty Logo" />
      </div>
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
    </>
  )
}

export default RickAndMortyApi