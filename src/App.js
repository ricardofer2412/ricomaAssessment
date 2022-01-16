import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ProductList from "./components/Products/ProductList";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
