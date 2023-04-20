import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PokemonCard(props) {
  const [pokemonData, setPokemonData] = useState(null);
  const { pokemonName } = props;

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemonData(data))
      .catch((error) => console.log("Pokemon not found", error));
  }, [pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  const { name, sprites, abilities } = pokemonData;

  return (
    <Card
      style={{ width: "14rem", height: "20rem", boxShadow: "0 0 10px #000" }}
      bg="light"
      text="dark"
      shadow
    >
      <Card.Img variant="top" src={sprites.front_default} />
      <Card.Body>
        <Link to={`/${name}`}>{name}</Link>
        <Card.Text as="div">
          <ul>
            {abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
