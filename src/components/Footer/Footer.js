import React from "react";
import "./index.css";
import logo from "./imgs/Li Logo.svg";

export default function Footer() {
  return (
    <div className="footer">
      hi
      <div className="footer-col-one">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer-col-two">
        <div>
          <h3 className="footer-title">Lorem Ipsum</h3>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
        </div>
        <div>
          <h3 className="footer-title">Lorem Ipsum</h3>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
        </div>
        <div>
          <h3 className="footer-title">Lorem Ipsum</h3>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
          <p className="footer-p">Lorem Ipsum</p>
        </div>
      </div>
      <div className="footer-col-three"></div>
    </div>
  );
}
