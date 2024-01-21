import React from "react";
import "./App.css";
import Slider from "./components/Slider";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

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
      {/* <Slider /> */}
    </BrowserRouter>
  );
}

export default App;
