import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import PokemonDetails from "./routes/PokemonDetails";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]); //this is the state that holds the list of pokemon

  useEffect(() => {
    //this is the effect that fetches the pokemon list from the api
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log("Pokemon not found", error));
  }, []);

  return (
    <BrowserRouter>
      <Container className="my-5">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home pokemonList={pokemonList} />} />
          {/* route for rendering PokemonDetails component */}
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export { App };
