import React from "react";
import "./index.css";
import cart from "./images/Cart Icon.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}
