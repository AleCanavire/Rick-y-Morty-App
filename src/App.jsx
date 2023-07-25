import React from "react";
import Background from "./components/Background/Background";
import Characters from "./components/Characters/Characters";
import { CharactersContextProvider } from "./context/CharactersContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Background/>
        <CharactersContextProvider>
          <main id="RickAndMorty">
            <Characters/>
          </main>
        </CharactersContextProvider>
        <footer>
          <p>Esta pagina fue desarrollada por
            <a href="https://www.linkedin.com/in/alexander-canavire/"> {"Alexander\u00A0Canavire"}</a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;