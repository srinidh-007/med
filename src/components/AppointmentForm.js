import { useState } from "react";
import CalendarFunc from "./Calendar";
import TimeFrame from "./TimeFrame";
import "./AppointmentForm.css";

const AppointmentForm = () => {
  const [time, setTime] = useState(false);
  const setTimeHandler = (e) => {
    console.log(e, e.getFullYear(), e.getDate());
    console.log(
      e.getDate(),
      e.getMonth(),
      e.getFullYear(),
      e.getMilliseconds()
    );
    setTime(true);
  };
  const getTimeFromTimeFrame = (e) => {
    let timeSelected = e;
    console.log(timeSelected);
  };

  const formHandler = (e) => {
    //e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css"
      ></link>

      <div className={`container`} style={{ padding: "30px" }}>
        <form action="/activeappointments" method="">
          <div className="form-div-main" style={{ textAlign: "left", color: "#F9951F", }}>
            <center>
            <div class="form-group" className="inp">
              <label for="first_name">First Name</label>
              <input
                type="text"
                class="form-control"
                id="first_name"
                placeholder="First Name"
                required
                autofocus
                autocomplete="on"
                
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="last_name">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="last_name"
                placeholder="Last Name"
                required
                autofocus
                autocomplete="on"
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="email_address">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email_addr"
                placeholder="Email address"
                required
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="email_address_confirm">
                Please re-confirm your email address.
              </label>
              <input
                type="email"
                class="form-control"
                id="email_address_confirm"
                placeholder="Confirm email address"
                required
                autocomplete="off"
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="phone_number">Phone Number</label>
              <input
                type="tel"
                class="form-control"
                id="phone_number"
                placeholder="+1-416-967-1111"
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="dob">Date of Birth</label>
              <input type="date" class="form-control" id="dob" />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label for="age">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Age"
                min="1"
                max="110"
                required
              />
              <span class="help-block"></span>
            </div>
            <div class="form-group" className="inp">
              <label htmlFor="Location">Location</label>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder="Location"
                required
              />
              <span class="help-block"></span>
            </div>
            </center>
          </div>
          <div style={{ color: "green" }}>
            <p id="temp"></p>
            <h2>Select data and time for appointment</h2>
            <CalendarFunc onChange={setTimeHandler} />
            {time ? <TimeFrame getTime={getTimeFromTimeFrame} /> : null}
          </div>
          <br />
          <button
            type="submit"
            class="btn btn-lg btn-primary btn-block"
            onClick={formHandler}
          >
            Make Appointment
          </button>
          
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
