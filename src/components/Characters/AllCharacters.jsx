import React from 'react'
import Character from './Character'

function AllCharacters({ characters }) {
  return (
    <div className="characters-wrapper">
      { characters
        ? <div className="characters">
            { characters.map( character  => {
              return(
                <Character
                  key={character.id}
                  character={character}
                />
              )})
            }
          </div>
        : <div className="no-characters-found">
            <h3>No characters found</h3>
          </div>
      }
    </div>
  )
}

export default AllCharacters