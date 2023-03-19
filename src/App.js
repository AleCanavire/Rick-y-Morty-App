import React from "react";
import Background from "./components/Background/Background";
import RickAndMortyApi from "./components/RickAndMortyApi/RickAndMortyApi";

function App() {
  return (
    <div className="App">
      <Background/>
      <main id="RickAndMorty">
        <RickAndMortyApi/>
      </main>
      <footer>
        <p>Esta pagina fue desarrollada por
          <a href="https://www.linkedin.com/in/alexander-canavire/"> {"Alexander\u00A0Canavire"}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
