import React from 'react'

function Character({ character }) {
  const status = character.status.toLowerCase();
  return (
    <div className="character-container">
      <div className={`gradient ${status}`}/>
      <div className="character-card">
        <div className={`character-image ${status}`}>
          <img src={character.image} alt={character.name} />
          <div className={`character-status ${status}`}>
            <span className="status">{character.status}</span>
          </div>
        </div>
        <div className="character-content">
          <h2 className={`character-name ${status}`}>{character.name}</h2>
          <h3 className="character-species">{character.species}</h3>
          <ul className="character-info">
            <li className="gender"><span>Gender</span>{character.gender}</li>
            <li className="origin"><span>Origin</span>{character.origin.name}</li>
            <li className="location"><span>Location</span>{character.location.name}</li>
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default Character