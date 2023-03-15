import React, { useState, useEffect, useRef } from 'react';
import useResize from '../../hooks/useResize';

function Background() {
  const [cords, setCords] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef();

  useEffect(() => {
    function handleMouseMove(e) {
      setCords({ x: e.clientX, y: e.clientY });
    }
    const bgRef = backgroundRef.current;
    
    bgRef.addEventListener("mousemove", handleMouseMove);
    return () => {
      bgRef.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const windowRef = useRef(window);
  useEffect(() => {
    const mobileRef = windowRef.current;

    function handleMouseMove(e) {
      setCords({ x: e.beta, y: e.gamma });
    }
    
    mobileRef.addEventListener("deviceorientation", handleMouseMove);
    return () => {
      mobileRef.removeEventListener("deviceorientation", handleMouseMove);
    };
  }, []);

  return (
    <>
    { useResize(768)
      ? <div ref={backgroundRef} className="background">
          <img style={{transform: `translate(${cords.x / 100}px, ${cords.y / 100}px)`}} className="nubes" src="/images/Nubes.jpg" alt="Nubes" />
          <img style={{transform: `translate(${cords.x / 80}px, ${cords.y / 80}px)`}} className="city" src="/images/City.png" alt="Ciudad" />
          <div className="asteroids">
            <img style={{transform: `translate(${cords.x / 150}px, ${cords.y / 150}px)`}} className="left shadow" src="/images/Asteroids-left.png" alt="Asteroides de fondo" />
            <img style={{transform: `translate(${cords.x / 60}px, ${cords.y / 60}px)`}} className="center shadow" src="/images/Asteroids-center.png" alt="Asteroides de fondo" />
            <img style={{transform: `translate(${cords.x / 100}px, ${cords.y / 100}px)`}} className="right shadow" src="/images/Asteroids-right.png" alt="Asteroides de fondo" />
          </div>
          <img style={{transform: `translate(${cords.x / 35}px, ${cords.y / 35}px)`}} className="jerry space-shadow" src="/images/Jerry.png" alt="Jerry Flotando" />
          <img style={{transform: `translate(${cords.x / 50}px, ${cords.y / 50}px)`}} className="rick shadow" src="/images/Rick.png" alt="Rick Flotando" />
          <img style={{transform: `translate(${cords.x / 100}px, ${cords.y / 100}px)`}} className="asteroid-on shadow" src="/images/Asteroids-on.png" alt="Asteroides de fondo" />
          <img style={{transform: `translate(${cords.x / 45}px, ${cords.y / 45}px)`}} className="beth space-shadow" src="/images/Beth.png" alt="Beth Flotando" />
          <img style={{transform: `translate(${cords.x / 30}px, ${cords.y / 30}px)`}} className="morty shadow" src="/images/Morty.png" alt="Morty Flotando" />
          <img style={{transform: `translate(${cords.x / -140}px, ${cords.y / -140}px)`}} className="summer space-shadow" src="/images/Summer.png" alt="Summer Flotando" />
          <a href="#RickAndMorty" className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 9l6 6l6 -6"></path>
            </svg>
          </a>
        </div>
      : <div ref={backgroundRef} className="background">
          <img style={{transform: `translate(${cords.x / 8}px, ${cords.y / 8}px)`}} className="nubes" src="/images/Nubes.jpg" alt="Nubes" />
          <img style={{transform: `translate(${cords.x / 7}px, ${cords.y / 7}px)`}} className="city" src="/images/City.png" alt="Ciudad" />
          <div className="asteroids">
            <img style={{transform: `translate(${cords.x / 65}px, ${cords.y / 65}px)`}} className="left shadow" src="/images/Asteroids-left.png" alt="Asteroides de fondo" />
            <img style={{transform: `translate(${cords.x / 65}px, ${cords.y / 65}px)`}} className="center shadow" src="/images/Asteroids-center.png" alt="Asteroides de fondo" />
            <img style={{transform: `translate(${cords.x / 65}px, ${cords.y / 65}px)`}} className="right shadow" src="/images/Asteroids-right.png" alt="Asteroides de fondo" />
          </div>
          <img style={{transform: `translate(${cords.x / 6}px, ${cords.y / 6}px)`}} className="jerry space-shadow" src="/images/Jerry.png" alt="Jerry Flotando" />
          <img style={{transform: `translate(${cords.x / 5}px, ${cords.y / 5}px)`}} className="rick shadow" src="/images/Rick.png" alt="Rick Flotando" />
          <img style={{transform: `translate(${cords.x / 4}px, ${cords.y / 4}px)`}} className="asteroid-on shadow" src="/images/Asteroids-on.png" alt="Asteroides de fondo" />
          <img style={{transform: `translate(${cords.x / 4}px, ${cords.y / 4}px)`}} className="beth space-shadow" src="/images/Beth.png" alt="Beth Flotando" />
          <img style={{transform: `translate(${cords.x / 3}px, ${cords.y / 3}px)`}} className="morty shadow" src="/images/Morty.png" alt="Morty Flotando" />
          <img style={{transform: `translate(-${cords.x / 6}px, -${cords.y / 6}px)`}} className="summer space-shadow" src="/images/Summer.png" alt="Summer Flotando" />
          <a href="#RickAndMorty" className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6 9l6 6l6 -6"></path>
            </svg>
          </a>
        </div>
    }
    </>
  )
}

export default Background