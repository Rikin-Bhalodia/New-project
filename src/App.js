import "./App.css";
import React from "react";
import Home from "./components/Home";
import Studio from "./studio";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

function App() {
  return (
    <div className="App">
      <Studio />
      <Home />
    </div>
  );
}

export default App;
