import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log(props.place);
  const { name, img, description } = props.place;
  return (
    <div className="card place-card">
      <img src={img} className="card-img-top" alt="..." />

      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
      <p className="card-text">
        <Link to={`/placeDetail/${name.toLowerCase()}`}>
          <button className="btn btn-lg btn-warning">Book Now</button>
        </Link>
      </p>
    </div>
  );
};

export default Card;
