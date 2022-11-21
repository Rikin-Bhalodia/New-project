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
import MobileHeader from "./commonComponents/Header/MobileHeader";

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
const ServiceTravelCategory = React.lazy(() =>
  import("./components/service/Travel/TravelCategory")
);
const ServiceTravel = React.lazy(() => import("./components/service/Travel"));
const TravelDestination = React.lazy(() =>
  import("./components/service/Travel/TravelDestination")
);
const CelebrationUdaipur = React.lazy(() =>
  import("./components/service/Travel/CelebrationUdaipur")
);
const TravelCelebration = React.lazy(() =>
  import("./components/service/Travel/TravelCelebration")
);
const TheLeelaPalace = React.lazy(() =>
  import("./components/service/Travel/TheLeelaPalace")
);
const NFTProductSelection = React.lazy(() =>
  import("./components/service/NFT/NFTProductSelection")
);
const BuyNFTs = React.lazy(() => import("./components/service/NFT/BuyNFTs"));
const SellNFTs = React.lazy(() => import("./components/service/NFT/SellNFTs"));
const ServiceCelebration = React.lazy(() =>
  import("./components/service/Celebration")
);
const NFTMetaVerse = React.lazy(() =>
  import("./components/service/NFT/NFTMetaVerse")
);
const CheckoutForm = React.lazy(() =>
  import("./components/checkout-flow/checkoutForm")
);
const CheckoutCard = React.lazy(() =>
  import("./components/checkout-flow/CheckoutCard")
);
const NewsLetter = React.lazy(() =>
  import("./components/PopUp-Letter/Newsletter.js")
);
const ThanksLettter = React.lazy(() =>
  import("./components/PopUp-Letter/ThanksLetter.js")
);
const CookiesPopUp = React.lazy(() =>
  import("./components/PopUp-Letter/CookiePopUp.js")
);
const CookiesThankYou = React.lazy(() =>
  import("./components/PopUp-Letter/ThanksCookies.js")
);
const ProfilePageOrders = React.lazy(() =>
  import("./components/ProfilePages/Orders.js")
);
const ProfilePageLogin = React.lazy(() =>
  import("./components/ProfilePages/Login.js")
);
const ProfilePageSignUp = React.lazy(() =>
  import("./components/ProfilePages/SignUp.js")
)
const TermsAndConditions = React.lazy(() =>
  import("./components/ProfilePages/T&C")
)
const PersonalAssistance = React.lazy(() =>
  import("./components/ProfilePages/PersonalAssistance.js")
)
const PersonalAssistanceInfo = React.lazy(() =>
  import("./components/PersonalAssists/Info.js")
)
const AssistForm = React.lazy(() =>
  import("./components/PersonalAssists/AssistForm.js")
)
const DesktopDetails = React.lazy(() =>
  import("./components/ProfilePages/Address.js")
)
const Preferances = React.lazy(() =>
  import("./components/ProfilePages/Prefrences.js")
)
// const Product = React.lazy(() =>
//   import("./components/ProfilePages/Prefrences.js")
// )
const RecentlyViewed = React.lazy(() =>
  import("./components/ProfilePages/RViewed")
)

const SideBar = React.lazy(() =>
  import("./commonComponents/SidebarOfProfilePage/index.js")
);

function App() {
  const { pathname } = useLocation();
  // const scrollIntertia = 70;

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
        <Route path="/sub-menu1" element={<SubMenu1 />} />
        <Route path="/sub-menu2" element={<SubMenu2 />} />

        <Route path="/shop-hover" element={<ShopHover />} />
        <Route path="/service-hover" element={<ServiceHover />} />
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
        <Route
          path="/service-travel-destination"
          element={<ServiceTravelCategory name="DESTINATIONS" />}
        />
        <Route
          path="/service-travel-stays"
          element={<ServiceTravelCategory name="STAYS" />}
        />
        <Route path="/service-travel" element={<ServiceTravel />} />
        <Route
          path="/service-travel-celebration-destination"
          element={<TravelDestination />}
        />
        <Route
          path="/service-travel-celebration-udaipur"
          element={<CelebrationUdaipur />}
        />
        <Route
          path="/service-travel-celebration"
          element={<TravelCelebration />}
        />
        <Route
          path="/service-travel-the-leela-place"
          element={<TheLeelaPalace />}
        />
        <Route
          path="/nft-product-selection"
          element={<NFTProductSelection />}
        />
        <Route path="/buy-nfts" element={<BuyNFTs />} />
        <Route path="/sell-your-nfts" element={<SellNFTs />} />
        <Route path="/service-celebration" element={<ServiceCelebration />} />
        <Route path="/nft-metaverse" element={<NFTMetaVerse />} />

        <Route path="/checkout-form" element={<CheckoutForm />} />
        <Route path="/checkout-card" element={<CheckoutCard />} />
        <Route path="/newsletter-popup" element={<NewsLetter />} />
        <Route path="/thanksletter-popup" element={<ThanksLettter />} />
        <Route path="/cookies-popup" element={<CookiesPopUp />} />
        <Route path="/cookies-thankyou-popup" element={<CookiesThankYou />} />
        <Route path="/profilepage-order" element={<ProfilePageOrders />} />
        <Route path="/profilepage-address" element={<DesktopDetails/>} />
        <Route path="/profilepage-preferance" element={<Preferances/>} />
        <Route path="/profilepage-view" element={<RecentlyViewed/>} />
        <Route path="/profilepage-login" element={<ProfilePageLogin />} />
        <Route path="/profilepage-signup" element={<ProfilePageSignUp />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/personal-assistance" element={<PersonalAssistance />} />
        <Route path="/assistance-info" element={<PersonalAssistanceInfo />} />
        <Route path="/assist-form" element={<AssistForm/>} />
        <Route path="/sidebar" element={<SideBar />} />

        {/* <Route path="/MH" element={<MobileHeader />} /> */}
      </Routes>
      {pathname !== "/sub-menu1" && pathname !== "/sub-menu2" && <Footer />}
      {/* </ScrollContainer> */}
    </div>
  );
}

export default App;
