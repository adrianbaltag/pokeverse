import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../FavoritesProvider";

function PokemonCard({ name, image }) {
  const { addFavorite, favorites, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.includes(name);

  function handleToggleFavorite() {
    if (isFavorite) {
      removeFavorite(name);
    } else {
      addFavorite(name);
    }
  }

  return (
    <Card style={{ width: "18rem" }} className="mx-auto mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={handleToggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
        <Link to={`/pokemon/${name}`} className="btn btn-secondary mx-3">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}

export default PokemonCard;
