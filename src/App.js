import "./App.css";
import React from "react";
import Home from "./components/Home";
import Studio from "./studio";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </div>
  );
}

export default App;
