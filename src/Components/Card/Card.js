import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = (props) => {
  console.log(props.place);
  const { name, img, description } = props.place;
  return (
    <div className="card place-card">
      <img src={img} className="card-img-top img-fluid" alt="..." />

      <div className="card-body text-center">
      <h5 className="card-title d-block text-center display-5">{name}</h5>
      <Link to={`/placeDetail/${name.toLowerCase()}`}>
          <button className="btn btn-lg btn-warning">Book Now > </button>
        </Link>
      </div>
      {/* <p className="card-text">{description}</p>
      <p className="card-text">
        
      </p> */}
    </div>
  );
};

export default Card;
