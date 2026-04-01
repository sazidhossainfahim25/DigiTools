import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Cta from "./components/Cta";
import Card from "./components/Card";
import PricingCard from "./components/PricingCard";
import Main from "./components/Main";
import MainProduct from "./components/MainProduct";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>
      <Main cart={cart} setCart={setCart}/>
      <Card/>
      <MainProduct/>
      <PricingCard/>
      <Cta/>
      <Footer />
    </>
  );
}

export default App;
