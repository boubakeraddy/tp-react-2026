import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Produit />
        <Produit />
        <Produit />
        <Produit />
      </div>
      <Footer />
    </>
  );
}

export default App;
