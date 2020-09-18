import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Iframe from "react-iframe";
import "./BookHotel.css";
import img1 from "../../img/Image/Rectangle 26.png";
import img2 from "../../img/Image/Rectangle 27.png";
import img3 from "../../img/Image/Rectangle 28.png";
import Map from "../../Map/Map";

const BookHotel = () => {
  return (
    <div className="container book-container">
      <div class="row text-dark">
        <div class="col-md-6">
            
            <div class="card mb-2">
                <div class="row no-gutters">
                    <div class="col-6">
                        <img src="https://i.ibb.co/6BtwBFM/Blog-1.png" class="card-img" alt="..."/>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-2">
                <div class="row no-gutters">
                    <div class="col-6">
                        <img src="https://i.ibb.co/HD5ZycB/Blog-3.png" class="card-img" alt="..."/>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-2">
                <div class="row no-gutters">
                    <div class="col-6">
                        <img src="https://i.ibb.co/PCnW7bH/Blog-2.png" class="card-img" alt="..."/>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
        <Map></Map>
        </div>
    </div>
          
      </div>
   
  );
};

export default BookHotel;
// AIzaSyAVCB41xN2AIQokG5eFXuVkFJO4Ff1FnaQ
