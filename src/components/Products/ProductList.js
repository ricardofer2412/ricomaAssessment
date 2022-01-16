import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div className="productList">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
