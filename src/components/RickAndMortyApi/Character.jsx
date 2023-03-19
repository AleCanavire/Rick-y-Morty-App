import React, { useState } from 'react';
import portalSound from "../../assets/media/portal-sound-effect.mp3"

function Character({ character }) {
  const status = character.status.toLowerCase();

  const [active, setActive] = useState(false);
  const [flip, setFlip] = useState(false);
  const audio = new Audio(portalSound);

  const activePortalGun = () => {
    setFlip(!flip)
    setActive(true);
    getEpisodes();
    setTimeout(()=>{
      audio.play();
    }, 1500)
    setTimeout(()=>{
      setActive(false);
    }, 4150)
  }

  

  const [episodes, setEpisodes] = useState([]);
  const getEpisodes = async () => {
    if (episodes.length === 0) {
      const responses = await Promise.all(character.episode.map(url => fetch(url)));
      const jsonData = await Promise.all(responses.map(response => response.json()));
      setEpisodes(jsonData);
    }
  };

  return (
    <div onClick={!active ? activePortalGun : undefined} style={active ? {zIndex: 10} : {}} className="character-container">
      <div className={`character-card-container ${active ? "changeCard" : ""}`}>
        <div className="gradient-container">
          <div className={`gradient ${status}`}/>
        </div>
        <div className="character-card-front" style={flip ? {opacity: 0, visibility: "hidden"}: {opacity: 1, visibility: "visible"}}>
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
        <div className="character-card-back" style={flip ? {opacity: 1, visibility: "visible"}: {opacity: 0, visibility: "hidden"}}>
          <div className="character-episodes-container">
            <h3>Episodes</h3>
            <div className="character-episodes">
              { episodes && 
                episodes.map((episode, index)=>{
                return(
                  <div className="episode-container" key={index}>
                    <div className="episode-info">
                      <span className="episode-season">{episode.episode}</span>
                      <span className="episode-date">{episode.air_date}</span>
                    </div>
                    <span className="episode-name">{episode.name}</span>
                  </div>
                )})
              }
            </div>
          </div>
          
        </div>
      </div>
      <div style={active ? {visibility: "visible"} : {}} className="portal-gun-container">
        <div className={`portal-gun ${active ? "gunPortal" : ""}`}>
          <img src="/images/portal-gun.webp" alt="Pistola de portales" />
        </div> 
      </div>
      <div className="portal-gun-ray">
        <img src="/images/portal-gun-template.webp" alt="Pistola de portales" />
        <div className="gun-ray">
          <div className={`ray ray-one ${active ? "gunRay" : ""}`}/>
          <div className={`ray ray-two ${active ? "gunRay" : ""}`}/>
          <div className={`ray ray-three ${active ? "gunRay" : ""}`}/>
          <div className={`wave wave-one ${active ? "waves" : ""}`}/>
          <div className={`wave wave-two ${active ? "waves" : ""}`}/>
          <div className={`wave wave-three ${active ? "waves" : ""}`}/>
          <div className={`circle circle-one ${active ? "circleRay" : ""}`}/>
          <div className={`circle circle-two ${active ? "circleRay" : ""}`}/>
        </div>
      </div> 
      <div className="portal-ray">
        <img src="/images/portal-gun-template.webp" alt="Pistola de portales" />
        <div className="gun-ray">
          <img className={`portal ${active ? "portalOpen" : ""}`} src="/images/portal.gif" alt="portal"/>
        </div>
      </div> 
    </div>
  )
}

export default Character