import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddMovie from "./components/AddMovies/AddMovie";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-movie" component={AddMovie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
