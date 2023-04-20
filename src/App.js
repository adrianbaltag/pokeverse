import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import PokemonCard from "./components/PokemonCard";

import PokemonDetails from "./components/PokemonDetails";

import Favorites from "./routes/Favorites";
import { FavoritesProvider } from "./context/FavoritesProvider/FavoritesProvider";

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pokemon/:id" component={PokemonDetails} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;

export { App };
