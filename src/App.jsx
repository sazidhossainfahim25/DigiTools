import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Card from "./components/Card";
import PricingCard from "./components/PricingCard";
import ProductCards from "./components/ProductCards.jsx";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>
      <ProductCards cart={cart} setCart={setCart}/>
      <Card/>
      <PricingCard/>
      <Cta/>
      <Footer />
    </>
  );
}

export default App;
