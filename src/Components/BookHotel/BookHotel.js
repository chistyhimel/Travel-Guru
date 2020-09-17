import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";
import "./BookHotel.css";
import img1 from "../../img/Image/Rectangle 26.png";
import img2 from "../../img/Image/Rectangle 27.png";
import img3 from "../../img/Image/Rectangle 28.png";

const BookHotel = () => {
  return (
    <div className="container book-container">
      <div class="card-deck">
        <div class="card">
          <img src={img1} class="card-img-top" alt="..." />
          <div class="card-body text-dark">
            <h5 class="card-title">Hotel City Inn</h5>
            <p class="card-text text-dark">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={img2} class="card-img-top" alt="..." />
          <div class="card-body text-dark">
            <h5 class="card-title">Hotel Blue Starr</h5>
            <p class="card-text text-dark">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card">
          <img src={img3} class="card-img-top" alt="..." />
          <div class="card-body text-dark">
            <h5 class="card-title">Best Inn</h5>
            <p class="card-text text-dark">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHotel;
// AIzaSyAVCB41xN2AIQokG5eFXuVkFJO4Ff1FnaQ
