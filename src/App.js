import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/Products/ProductList";
import Footer from "./components/Footer/Footer";
import { compose } from "@mui/system";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <div className="App">
      <Navbar cartList={cartList} />
      <Banner />
      <ProductList setCartList={setCartList} />
      <Footer />
    </div>
  );
}

export default App;
