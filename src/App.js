import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Apps/Auth/Login";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="ms-5 me-5">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
