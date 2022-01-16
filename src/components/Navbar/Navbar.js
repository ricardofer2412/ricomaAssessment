import React from "react";
import "./index.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navbar">
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="nav-timer">
          <div className="time-div">
            <div>
              <p className="time">00</p>
            </div>
            <div>
              <p>days</p>
            </div>
          </div>
          <div>
            <p className="time">00</p>
            <p>hours</p>
          </div>
          <div>
            <p className="time">00</p>
            <p>minutes</p>
          </div>
          <div>
            <p className="time">00</p>
            <p>seconds</p>
          </div>
        </div>
      </div>
      <div className="nav-b">
        <h2 style={{ fontSize: "24px" }}>Lorem Ipsum</h2>

        <p className="nav-links">LOREM</p>
        <p className="nav-links">IPSUM</p>
        <p className="nav-links">EXCEPTEUR</p>
        <p className="nav-links">VENIAM</p>
      </div>
    </div>
  );
}
