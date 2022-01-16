import React from "react";
import "./index.css";
import bannerPerson from "./imgs/banner2.jpeg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <div>
          <p className="banner-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p className="banner-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="lorem ">Lorem</button>
        </div>
      </div>
      <div className="banner-right">
        <img className="left-img" src={bannerPerson} alt="person" />
      </div>
    </div>
  );
}
