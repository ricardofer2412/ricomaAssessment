import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./index.css";
import productOne from "./imgs/product1.jpeg";

export default class ProductList extends Component {
  state = {
    productList: [
      {
        name: "Lorem ipsum1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        color: ["143061", "81396F", "F6437D"],
        imageFile: productOne,
      },
      {
        name: "Lorem ipsum2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        color: ["143061", "81396F", "F6437D"],
        imageFile: productOne,
      },
      {
        name: "Lorem ipsum3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        color: ["143061", "81396F", "F6437D"],
        imageFile: productOne,
      },
      {
        name: "Lorem ipsum4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        color: ["143061", "81396F", "F6437D"],
        imageFile: productOne,
      },
    ],

    cartProdcuts: [],
  };

  addToCart = (product) => {
    console.log("product", product);
  };

  render() {
    return (
      <div className="productList">
        {this.state.productList.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            color={product.color}
            image={product.imageFile}
            addNewItem={() => this.addToCart(product)}
          />
        ))}
      </div>
    );
  }
}
