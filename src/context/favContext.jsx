import { createContext, useState } from "react";

export const favContext = createContext();

export function FavContextProvider(props){

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
		<favContext.Provider
    value={{ favorites, addCharacter, removeCharacter, isFavorite }}>
			{props.children }
		</favContext.Provider>
	)
}