import React, { useEffect, useState } from "react";
import "./PlaceDetails.css";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Link, useParams } from "react-router-dom";
import PlaceData from "../../fakeData/PlaceData";

const PlaceDetails = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const { placeName } = useParams();
  const [places, setPlaces] = useState(PlaceData);
  const [place, setPlace] = useState([]);

  useEffect(() => {
    const currentPlace = places.find(
      (place) => place.name.toLocaleLowerCase() === placeName
    );
    setPlace(currentPlace);
  }, []);

  return (
    <div className="container place-details-container">
      <div>
        <div className="row">
          <div className="col-md-6">
            <div>
              <h1 className="place-name display-1">{place.name}</h1>
              <p>{place.description}</p>
            </div>
          </div>

          <div className="col-md-6 place-details-booking-card p-4">
            <div>
              <form>
                <div class="form-group">
                  <label
                    for="exampleInputEmail1"
                    className="text-dark font-weight-bold"
                  >
                    Origin
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your location"
                  />
                </div>
                <div class="form-group">
                  <label
                    for="exampleInputPassword1"
                    className="text-dark font-weight-bold"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={place.name}
                  />
                </div>

                <div className="form-group">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                      <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="To"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                </div>
                <Link to={`/bookHotel/${place.name}`}>
                  <button
                    type="submit"
                    class="btn btn-warning btn-lg btn-block"
                  >
                    Start Booking
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
