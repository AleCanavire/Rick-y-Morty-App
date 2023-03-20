import React from "react";
import Background from "./components/Background/Background";
import RickAndMortyApi from "./components/RickAndMortyApi/RickAndMortyApi";
import { FavContextProvider } from "./context/favContext";

function App() {
  return (
    <div className="App">
      <Background/>
      <FavContextProvider>
        <main id="RickAndMorty">
          <RickAndMortyApi/>
        </main>
      </FavContextProvider>
      <footer>
        <p>Esta pagina fue desarrollada por
          <a href="https://www.linkedin.com/in/alexander-canavire/"> {"Alexander\u00A0Canavire"}</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
