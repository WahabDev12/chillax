import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import HomePage from "./components/HomePage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
