// import React from "react";
// import { useState, useEffect } from "react";

// function PokemonCard({ url, name }) {
//   const [pokemon, setPokemon] = React.useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setPokemon(data);
//       })
//       .catch((error) => {
//         console.log("Pokemon not found", error);
//       });
//   }, []);
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={pokemon?.sprites.front_default} alt={name} />
//       <h3>{abilities}</h3>
//     </div>
//   );
// }
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
    <Card style={{ width: "18rem" }} bg="dark" text="light" shadow>
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

// import React from "react";
// import Card from "react-bootstrap/Card";

// function PokemonCard(props) {
//   const { pokemonData } = props;
//   const { name, sprites, abilities } = pokemonData;

//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src={sprites.front_default} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text as="div">
//           <ul>
//             {abilities.map((ability) => (
//               <li key={ability.ability.name}>{ability.ability.name}</li>
//             ))}
//           </ul>
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default PokemonCard;
