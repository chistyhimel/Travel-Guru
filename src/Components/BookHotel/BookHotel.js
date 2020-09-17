import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";
import "./BookHotel.css";

const BookHotel = () => {
  return (
    <div className="container book-container">
      <div className="row">
        <div className="col-md-5">
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            
            <div className="d-flex">
            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59415.15048673002!2d91.967882538403!3d21.45097439382655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1600290739460!5m2!1sen!2sbd"
            width="600"
            height="750"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default BookHotel;
// AIzaSyAVCB41xN2AIQokG5eFXuVkFJO4Ff1FnaQ
