import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CardContainer from "./Components/CardContainer/CardContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PlaceDetails from "./Components/PlaceDetails/PlaceDetails";
import Login from "./Components/Login/Login";
import BookHotel from "./Components/BookHotel/BookHotel";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";


export const UserContext = createContext()

function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    loggedIn: false
  })
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
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
          <PrivateRoute path="/bookHotel/:travelPlace">
            <BookHotel></BookHotel>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
          <CardContainer></CardContainer>
          </Route>
         <Route path="*">
					</Route>
        </div>
        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
