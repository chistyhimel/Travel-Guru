import React, { useState } from "react";
import PlaceData from "../../fakeData/PlaceData";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = () => {
  const [places, setPlaces] = useState(PlaceData);
  return (
    <div className="container card-container">
      <div className="card-deck">
        {places.map((place) => (
          <Card place={place} key={place.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
