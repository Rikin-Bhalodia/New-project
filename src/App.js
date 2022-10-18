import "./App.css";
import React from "react";
import Home from "./components/Home";
import Studio from "./studio";
import StudioProduct from "../src/components/studio-product/StudioProduct";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Route, Routes } from "react-router-dom";
import StudioProductMaterial from "./components/studio-material";
import "antd/dist/antd.variable.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/studio-product" element={<StudioProduct />} />
        <Route path="/studio-material" element={<StudioProductMaterial />} />
      </Routes>
    </div>
  );
}

export default App;
