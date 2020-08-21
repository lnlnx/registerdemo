import React from "react";
import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import "./App.css";
import MainPage from "./MainPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
