// import React from "react";
// import { useState, useEffect } from "react";
// import { Navigation } from "./components/Navigation";
// import { PokemonCard } from "./components/PokemonCard";
// import axios from "axios";

// const LIMIT = 150;
// const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

// function App() {
//   const [pokemon, setPokemon] = useState([]);

//   useEffect(() => {
//     fetch(pokeApi)
//       .then((res) => res.json())
//       .then((data) => {
//         setPokemon(data.results);
//       })
//       .catch((error) => {
//         console.log("Pokemon not found", error);
//       });
//   }, []);
//   return (
//     <div data-testid="app">
//       <Navigation />

//       <h1>Pokemon should appear here</h1>
//       {pokemon.map((pokemon) => (
//         <PokemonCard key={pokemon.name} url={pokemon.url} name={pokemon.name} />
//       ))}
//       <ul>
//         {pokemon.abilities.map((ability) => (
//           <li key={ability.ability.name}>{ability.ability.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/Navigation";
// import { PokemonCard } from "./components/PokemonCard";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import InputGroup from "react-bootstrap/InputGroup";
// import FormControl from "react-bootstrap/FormControl";
// import Container from "react-bootstrap/Container";

// const LIMIT = 150;
// const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

// function App() {
//   const [pokemonList, setPokemonList] = useState([]);
//   const [filteredPokemonList, setFilteredPokemonList] = useState([]);
//   const [searchInput, setSearchInput] = useState("");

//   useEffect(() => {
//     fetch(pokeApi)
//       .then((res) => res.json())
//       .then((data) => setPokemonList(data.results))
//       .catch((error) => console.log("Pokemon not found", error));
//   }, []);

//   useEffect(() => {
//     setFilteredPokemonList(
//       pokemonList.filter((pokemon) =>
//         pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
//       )
//     );
//   }, [pokemonList, searchInput]);

//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   return (
//     <Container fluid>
//       <Navigation />

//       <Row className="my-5">
//         <Col>
//           <InputGroup className="mb-3">
//             <InputGroup.Text>Search Pokemon</InputGroup.Text>
//             <FormControl
//               placeholder="Enter Pokemon Name"
//               aria-label="Enter Pokemon Name"
//               value={searchInput}
//               onChange={handleSearchInputChange}
//             />
//           </InputGroup>
//         </Col>
//       </Row>
//       <Row>
//         {filteredPokemonList.map((pokemon) => (
//           <Col xs={12} sm={6} md={4} lg={3} key={pokemon.name} className="my-3">
//             <PokemonCard pokemonName={pokemon.name} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export { App };
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch(pokeApi)
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((error) => console.log("Pokemon not found", error));
  }, []);

  useEffect(() => {
    setFilteredPokemonList(
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [pokemonList, searchInput]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Container className="my-5">
      <Navigation />
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Search Pokemon</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Pokemon Name"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        {filteredPokemonList.map((pokemon) => (
          <Col xs={12} sm={6} md={4} lg={4} key={pokemon.name} className="my-3">
            {/* add shadow to card */}
            <PokemonCard pokemonName={pokemon.name} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { App };
