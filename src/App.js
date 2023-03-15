import React from "react";
import Background from "./components/Background/Background";
import RickAndMortyApi from "./components/RickAndMortyApi/RickAndMortyApi";

function App() {
  return (
    <div className="App">
      <nav className="nav"></nav>
      <Background/>
      <main id="RickAndMorty">
        <RickAndMortyApi/>
      </main>
    </div>
  );
}

export default App;
