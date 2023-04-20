import { createContext, useState } from "react";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (name) => {
    setFavorites((prevFavorites) => [...prevFavorites, name]);
  };

  const removeFavorite = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav !== name)
    );
  };

  const contextValue = {
    favorites,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesContext, FavoritesProvider };
