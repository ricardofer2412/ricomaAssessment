import React, { Component } from "react";
import ProductCard from "./ProductCard";
import "./index.css";
import productOne from "./imgs/product1.jpeg";

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {
          id: 0,
          name: "Lorem ipsum1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          color: ["143061", "81396F", "F6437D"],
          imageFile: productOne,
        },
        {
          id: 1,
          name: "Lorem ipsum2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          color: ["143061", "81396F", "F6437D"],
          imageFile: productOne,
        },
        {
          id: 2,
          name: "Lorem ipsum3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          color: ["143061", "81396F", "F6437D"],
          imageFile: productOne,
        },
        {
          id: 3,
          name: "Lorem ipsum4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          color: ["143061", "81396F", "F6437D"],
          imageFile: productOne,
        },
      ],

      cartProducts: [],
    };
  }

  addToCart = (product) => {
    const newArray = this.state.cartProducts;
    newArray.push(product);
    this.props.setCartList(this.state.cartProducts);
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
