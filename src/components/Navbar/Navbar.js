import React, { useState } from "react";
import "./index.css";
import cart from "./images/Cart Icon.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function removeItem(id) {
    console.log(id);
  }

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

        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img src={cart} alt="cart" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {props.cartList.map((product) => (
              <MenuItem onClick={handleClose}>
                <div className="cart-products-list">
                  <div className="cart-products-list-img">
                    <img
                      className="cartImg"
                      src={product.imageFile}
                      alt="imageProd"
                    />
                  </div>
                  <div className="cart-products-list-desc">
                    <p className="cart-products-list-title">{product.name}</p>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="remove-btn"
                    >
                      remove
                    </button>
                  </div>
                </div>
                <Divider />
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
}
