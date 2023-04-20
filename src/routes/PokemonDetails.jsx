import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>
        Abilities:{" "}
        {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
      </p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
      <p>Stats:</p>
      <ul>
        {pokemon.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
