import React from "react";
import "./BookHotel.css";
import Map from "../../Map/Map";
import starImg from "../../img/Icon/star_1_.png"
import { useParams } from "react-router-dom";

const BookHotel = () => {
    const {travelPlace} = useParams();

  return (
    <div className="container book-container"> 
      <div class="row text-dark">
        <div class="col-md-6">
            <p className="lead text-light mb-0 pb-0">252 Stays November 19-25</p>
  <h1 className="text-light">STAY IN {travelPlace}</h1>
            <div class="card mb-2">
                <div class="row no-gutters">
                    <div class="col-6">
                        <img src="https://i.ibb.co/6BtwBFM/Blog-1.png" class="card-img" alt="..."/>
                    </div>
                    <div class="col-6">
                        <div class="card-body">
                            <h5 class="card-title">Hotel Blue Star</h5>
                            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, rerum.</p>
                            <img src={starImg} style={{width:"25px"}} alt=""/> <span>4.9(20)  $34/night</span>
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
                            <h5 class="card-title">Hotel Ocean Blue</h5>
                            <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, maiores!</p>
                            <img src={starImg} style={{width:"25px"}} alt=""/> <span>4.9(20)  $34/night</span>
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
                            <h5 class="card-title">Hotel Best Inn</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, minus.</p>
                            <img src={starImg} style={{width:"25px"}} alt=""/> <span>4.9(20)  $34/night</span>
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
