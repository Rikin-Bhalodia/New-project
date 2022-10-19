import "./App.css";
import React from "react";
import Home from "./components/Home";
import Studio from "./studio";
import StudioProduct from "../src/components/studio-product/StudioProduct";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Route, Routes, useLocation } from "react-router-dom";
import StudioProductMaterial from "./components/studio-material";
import "antd/dist/antd.variable.min.css";
import StudioSecVideo from "./components/studio-sec-video";
import Product from "./components/Product";
import Header from "./commonComponents/Header";
import Footer from "./commonComponents/Footer";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "studio" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/studio-product" element={<StudioProduct />} />
        <Route path="/studio-material" element={<StudioProductMaterial />} />
        <Route path="/studio-sec-video" element={<StudioSecVideo />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
