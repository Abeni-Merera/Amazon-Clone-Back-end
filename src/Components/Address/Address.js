import React from "react";
import { Link } from "react-router-dom";
import "../Address/Address.css";

function Address() {
  return (
    <div className="address">
      <Link to="/">
        <img
          className="address__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxe5ylhaBtmC0HQosIWZBSrHbjp-sypjT-Pg&usqp=CAU"
          alt=""
        />
      </Link>
      <div className="address__container">
        <h3>Choose your location</h3>
        <p>
          Delivery options and delivery speeds may vary for diifrent locations
        </p>

        <button className="address__signInB">
          Sign in to see your addresses
        </button>
        <p>or enter a US zip code</p>
        <div>
          <input></input>
          <button>Apply</button>
        </div>
        <button className="confirm" type="text">Done</button>
      </div>
    </div>
  );
}

export default Address;
