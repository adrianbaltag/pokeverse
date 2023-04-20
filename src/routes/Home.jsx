import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { PokemonCard } from "../components/PokemonCard";

function Home({ pokemonList }) {
  const [filteredPokemonList, setFilteredPokemonList] = useState([]); //this is the state that holds the filtered list of pokemon
  const [searchInput, setSearchInput] = useState(""); //this is the state that holds the search input

  useEffect(() => {
    //this is the effect that filters the pokemon list based on the search input
    setFilteredPokemonList(
      pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [pokemonList, searchInput]);

  const handleSearchInputChange = (event) => {
    //this is the function that handles the search input change
    setSearchInput(event.target.value);
  };
  return (
    <div>
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
    </div>
  );
}

export default Home;
