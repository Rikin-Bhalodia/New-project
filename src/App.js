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
import 'antd/dist/antd.css';
import StudioSecVideo from "./components/studio-sec-video";
import Product from "./components/Product";
import Header from "./commonComponents/Header";
import Footer from "./commonComponents/Footer";
import ShopHover from "./components/shop-hover";
import ServiceHover from "./components/service-hover";
import SubMenu1 from "./components/sub-category-1";
import SubMenu2 from "./components/sub-category-2";
import Brand from "./components/brand";
import About from "./components/About";
import ProductSection from "./components/product-section";
import BrandProduct from "./components/brand-product";
import BrandProductSection from "./components/brand-product-selection";
import BrandProductLanding from "./components/brand-product-landing";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/studio" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/studio-product" element={<StudioProduct />} />
        <Route path="/studio-material" element={<StudioProductMaterial />} />
        <Route path="/studio-sec-video" element={<StudioSecVideo />} />
        <Route path="/product" element={<Product />} />
        <Route path="/shop-hover" element={<ShopHover />} />
        <Route path="/service-hover" element={<ServiceHover />} />
        <Route path="/sub-menu1" element={<SubMenu1 />} />
        <Route path="/sub-menu2" element={<SubMenu2 />} />
        <Route path="/product-selection" element={<ProductSection />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/brand-product" element={<BrandProduct />} />
        <Route path="/brand-product-sec" element={<BrandProductSection />} />
        <Route path="/brand-product-lan" element={<BrandProductLanding />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
