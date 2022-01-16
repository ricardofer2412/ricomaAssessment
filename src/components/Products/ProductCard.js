import React from "react";
import "./index.css";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div>
        <img className="product-image" src={props.image} alt="product" />
      </div>
      <div className="desc">
        <h1 className="product-title">{props.name}</h1>
        <p className="product-desc">{props.description}</p>
        <div>
          {props.color.map((color) => (
            <div style={{ backgrounColor: `#${color}` }}>
              <input
                className="colorCheck"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value={color.color}
              ></input>
            </div>
          ))}
        </div>
      </div>

      <div className="button-div">
        <button onClick={props.addNewItem} className="submit-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
}
