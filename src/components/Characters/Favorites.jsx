import React, { useContext } from 'react'
import Character from './Character'
import { CharactersContext } from '../../context/CharactersContext';

function Favorites() {
  const { favorites } = useContext(CharactersContext);

  return (
    <div className="characters-wrapper">
      { favorites.length !== 0 
        ? <div className="characters">
            { favorites.map( character => {
              return(
                <Character
                  key={character.id}
                  character={character}
                />
              )})
            }
          </div>
        : <div className="no-characters-found">
            <h3>You haven't added characters to favorites yet</h3>
          </div>
      }
    </div>
  )
}

export default Favorites