import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps";
import { useParams } from "react-router-dom";
import PlaceData from "../fakeData/PlaceData";

const Map = () => {
  const { travelPlace } = useParams();
  const [places, setPlaces] = useState(PlaceData);
  const [place, setPlace] = useState([]);
  useEffect(() => {
    const currentPlace = places.find(
      (place) => place.name.toLocaleLowerCase() === travelPlace.toLowerCase()
    );
    setPlace(currentPlace);
  }, []);
  console.log(place.lng);


  function gMap() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: place.lat, lng: place.lng }}>
               <Marker 
               position={{lat: place.lat, lng: place.lng}}
                />
        </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(gMap));

  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAVCB41xN2AIQokG5eFXuVkFJO4Ff1FnaQ`}
        loadingElement={<div style={{ height: `702px` }} />}
        containerElement={<div style={{ height: `702px` }} />}
        mapElement={
          <div style={{ width: "100%", height: "96%", borderRadius: "8px" }} />
        }
      />
    </div>
  );
};

export default Map;
