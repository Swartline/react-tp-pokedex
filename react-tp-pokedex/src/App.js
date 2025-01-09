import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";
import PokemonDetail from "./components/PokemonDetail";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Pokedex />
        </Route>
        <Route exact path="/pokemon/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
