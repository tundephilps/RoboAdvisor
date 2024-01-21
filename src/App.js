import React from "react";
import "./App.css";
import Slider from "./components/Slider";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Hero />

      <Features />
      {/* <Slider /> */}
    </BrowserRouter>
  );
}

export default App;
