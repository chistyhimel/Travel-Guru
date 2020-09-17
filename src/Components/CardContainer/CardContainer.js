import React, { useState } from "react";
import { Link } from "react-router-dom";
import PlaceData from "../../fakeData/PlaceData";
import "./CardContainer.css";

const CardContainer = () => {
  const [places, setPlaces] = useState(PlaceData);

  return (
    <div className="container card-container">
      <div
        id="carouselExampleControls"
        className="carousel slide container"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row ">
              <div className="col-md-8 ">
                <h1 className="place-name display-1 d-block align-self-center">
                  COXE'S BAZAR
                </h1>
                <div className="banner-text">
                  <p className="display-5">
                    Cox's Bazar (Bengali: কক্সবাজার, pronounced [kɔksbadʒaɾ]) is
                    a city, fishing port, tourism centre and district
                    headquarters in southeastern Bangladesh. It is famous mostly
                    for its long natural sandy beach, and it is infamous for the
                    largest refugee camp in the world. It is located 150 km (93
                    mi) south of the divisional headquarter city of Chittagong.
                    Cox's Bazar is also known by the name Panowa, which
                    translates literally as "yellow flower".
                  </p>
                  <Link
                    to={`/placeDetail/${places[0].name.toLocaleLowerCase()}`}
                  >
                    <button className="btn btn-warning btn-lg">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 banner-img">
                <img
                  src="https://i.ibb.co/tYNFpfQ/Sajek.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-8">
                <h1 className="place-name display-1 d-block align-self-center">
                  SREEMANGAL
                </h1>
                <div className="banner-text">
                  <p className="display-5">
                    Sreemangal is situated in Moulvibazar district in sylhet
                    division. Sreemangal is an Upazila. It is famous for tea
                    garden. Rain all time occurs here. Nature has adorned
                    sreemangal with green tress. Its natural scenery is very
                    charming. It soothes one’s eyes.
                  </p>
                  <Link
                    to={`/placeDetail/${places[1].name.toLocaleLowerCase()}`}
                  >
                    <button className="btn btn-warning btn-lg">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 banner-img">
                <img
                  src="https://i.ibb.co/fNsCtqL/Sreemongol.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-8">
                <h1 className="place-name display-1 d-block align-self-center">
                  SUNDARBAN
                </h1>
                <div className="banner-text">
                  <p className="display-5">
                    The Sundarbans is a mangrove area in the delta formed by the
                    confluence of the Ganges, Brahmaputra and Meghna Rivers in
                    the Bay of Bengal. It spans from the Hooghly River in
                    India's state of West Bengal to the Baleswar River in
                    Bangladesh.
                  </p>
                  <Link
                    to={`/placeDetail/${places[2].name.toLocaleLowerCase()}`}
                  >
                    <button className="btn btn-warning btn-lg">Book now</button>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 banner-img">
                <img
                  src="https://i.ibb.co/YksFMdf/sundorbon.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* {places.map((place) => (
          <Card place={place} key={place.id}></Card>
        ))} */}
    </div>
  );
};

export default CardContainer;
