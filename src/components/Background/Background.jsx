import React, { useState, useEffect } from 'react';

function Background() {
  const [cords, setCords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCords({ x: e.clientX, y: e.clientY });
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="background">
      <img style={{transform: `translate(${cords.x / 100}px, ${cords.y / 100}px)`}} className="nubes" src="/images/Nubes.jpg" alt="Nubes" />
      <img style={{transform: `translate(${cords.x / 160}px, ${cords.y / 160}px)`}} className="city" src="/images/City.png" alt="City" />
      <img style={{transform: `translate(${cords.x / 150}px, ${cords.y / 150}px)`}} className="asteroids shadow" src="/images/Asteroids.png" alt="Asteroids" />
      <img style={{transform: `translate(${cords.x / 60}px, ${cords.y / 60}px)`}} className="jerry space-shadow" src="/images/Jerry.png" alt="Jerry Flotando" />
      <img style={{transform: `translate(${cords.x / 60}px, ${cords.y / 60}px)`}} className="rick shadow" src="/images/Rick.png" alt="Rick Flotando" />
      <img style={{transform: `translate(${cords.x / 35}px, ${cords.y / 35}px)`}} className="morty shadow" src="/images/Morty.png" alt="Morty Flotando" />
      <img style={{transform: `translate(${cords.x / 50}px, ${cords.y / 50}px)`}} className="beth space-shadow" src="/images/Beth.png" alt="Beth Flotando" />
      <img style={{transform: `translate(${cords.x / -50}px, ${cords.y / -50}px)`}} className="summer space-shadow" src="/images/Summer.png" alt="Summer Flotando" />
    </div>
  )
}

export default Background