import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CardContainer from "./Components/CardContainer/CardContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <div className="background-img text-light">
          <Header></Header>
          <Route path="/home">
            <CardContainer></CardContainer>
          </Route>
          <Route path="/placeDetail/:placeName">
            <PlaceDetails></PlaceDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
          <CardContainer></CardContainer>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
