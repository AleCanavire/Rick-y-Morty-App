import { createContext, useState } from "react";

export const CharactersContext = createContext();

export function CharactersContextProvider({ children }){
  const [favorites, setFavorites] = useState([]);

  function addCharacter(character){
    setFavorites([...favorites, character]);
  }
  function removeCharacter(id){
    const newFavorites = favorites.filter(character => character.id !== id)
    setFavorites(newFavorites);
  }
  function isFavorite(id){
    const character = favorites.some(character => character.id === id);
    return character;
  }

  return(
		<CharactersContext.Provider value={{ favorites, addCharacter, removeCharacter, isFavorite }}>
			{ children }
		</CharactersContext.Provider>
	)
}