import "./App.css";
import React, { Suspense } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "antd/dist/antd.variable.min.css";
import "antd/dist/antd.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ScrollContainer from "./commonComponents/SmoothScrollingComponent";
import PetsProductSelection from "./components/service/Pets/PetsProductSelection";

const Home = React.lazy(() => import("./components/index/Home"));
const Studio = React.lazy(() => import("./studio"));
const StudioProduct = React.lazy(() =>
  import("../src/components/studio-product/StudioProduct")
);
const StudioProductMaterial = React.lazy(() =>
  import("./components/studio-material")
);
const StudioSecVideo = React.lazy(() =>
  import("./components/studio-sec-video")
);
const Product = React.lazy(() => import("./components/Product"));
const Header = React.lazy(() => import("./commonComponents/Header"));
const Footer = React.lazy(() => import("./commonComponents/Footer"));
const ShopHover = React.lazy(() => import("./components/shop-hover"));
const ServiceHover = React.lazy(() => import("./components/service-hover"));
const SubMenu1 = React.lazy(() => import("./components/sub-category-1"));
const SubMenu2 = React.lazy(() => import("./components/sub-category-2"));
const Brand = React.lazy(() => import("./components/brand"));
const About = React.lazy(() => import("./components/About"));
const ProductSection = React.lazy(() => import("./components/product-section"));
const BrandProduct = React.lazy(() => import("./components/brand-product"));
const BrandProductSection = React.lazy(() =>
  import("./components/brand-product-selection")
);
const BrandProductLanding = React.lazy(() =>
  import("./components/brand-product-landing")
);
const ServiceLuxuryGifting = React.lazy(() =>
  import("./components/service/ServiceLuxuryGifting")
);
const GiftForHim = React.lazy(() => import("./components/service/GiftForHim"));
const LuxuryProduct = React.lazy(() =>
  import("./components/service/ServiceLuxuryGifting/LuxuryProduct")
);
const ValentineGift = React.lazy(() =>
  import("./components/service/ValentineGift")
);
const Pets = React.lazy(() => import("./components/service/Pets"));
const Grooming = React.lazy(() => import("./components/service/Grooming"));
const Dogs = React.lazy(() => import("./components/service/Dogs"));

function App() {
  const { pathname } = useLocation();
  const scrollIntertia = 70;

  return (
    <div className="App">
      {pathname !== "/studio" && <Header />}
      {/* <ScrollContainer scrollIntertia={scrollIntertia}> */}
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
        <Route path="/gift-product-selection" element={<ProductSection />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/brand-product" element={<BrandProduct />} />
        <Route path="/brand-product-sec" element={<BrandProductSection />} />
        <Route path="/brand-product-lan" element={<BrandProductLanding />} />
        <Route
          path="/service-luxury-gifting"
          element={<ServiceLuxuryGifting />}
        />
        <Route path="/gift-for-him" element={<GiftForHim />} />
        <Route path="/luxury-forhim-product" element={<LuxuryProduct />} />
        <Route path="/valentine-gift" element={<ValentineGift />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route
          path="/pets-product-selection"
          element={<PetsProductSelection />}
        />
      </Routes>
      {(pathname !== "/sub-menu1" || pathname !== "/sub-menu2") && <Footer />}
      {/* </ScrollContainer> */}
    </div>
  );
}

export default App;
