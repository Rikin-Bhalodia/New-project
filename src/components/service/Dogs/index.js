import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/dogs/banner.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import { PetsIcons } from "../../../utils";
import { ReviewSlider } from "../Grooming/ReviewSlider";
import { motion } from "framer-motion";
const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const WannaShop = React.lazy(() =>
  import("../../../commonComponents/WannaShop")
);
const ExploreShop = React.lazy(() => import("../Common/ExploreShop"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const ServiceYellowBar = React.lazy(() =>
  import("../../../commonComponents/ServiceYellowBar")
);
const ShoppingListCard = React.lazy(() => import("../ShopingListCard"));
const Filters = React.lazy(() => import("../../../commonComponents/Filters"));

const DogsWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: url(${BannerImage});
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 90px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    justify-content: center;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 5px;
  }
  .line {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
  .review {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    color: #665e2f;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .button-review {
    background: #a75b41;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
    border: none;
    width: 380px;
    height: 85px;
    margin-top: 80px;
  }
  .btn {
    width: 100%;
  }
  .load-more {
    display: flex;
    width: 100%;
    margin-top: 120px;
  }
  .load-line {
    border-bottom: 2px solid #000000;
    width: 40%;
    margin-bottom: 35px;
  }
  .text {
    width: 20%;
    display: flex;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    justify-content: space-around;
    margin: 0px 10px;
  }
  .plus {
    height: 60px;
    width: 60px;
    border: 1px solid #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 700;
    position: relative;
    top: -5px;
  }
  .yellow-bar {
    margin-top: 50px;
  }
`;

const FiltersName = [
  { name: "PRODUCT TYPE", option: ["Dry Food", "Wet Food"] },
  { name: "VEG, NON-VEG", option: ["Veg", "Non-veg"] },
  { name: "PRICE RANGE", option: [], range: "SET RANGE" },
  {
    name: "BRANDS",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "SHOP BY", option: ["Cat", "Dog", "Others"] },
  { name: "LIFE STAGE", option: ["Puppy", "Adult Dog", "Senior Dog"] },
  {
    name: "SPECIAL DIET",
    option: [
      "Grain Free",
      "Hypoallergenic",
      "Weight Control",
      "Chicken Free",
      "Skin & Coat Care",
    ],
  },
  { name: "BREED SIZE", option: ["Mini Breed", "Medium Breed", "Maxi Breed"] },
];

const Dogs = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <DogsWrapper>
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="heading-part">
          <div className="goback">
            <img src={BackArrow} alt="back-arrow" />
            <div>Go Back</div>
          </div>
          <div>DOGS</div>
        </div>
        <div
          className="menu-icon"
          onClick={() => setMenuOpenModal(!menuOpenModal)}
        >
          <Menu
            menuOpenModal={menuOpenModal}
            onClick={(e) => e.stopPropagation()}
          />
          {menuOpenModal ? (
            <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
          ) : (
            <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
          )}
        </div>
        <WannaShop />
        <div className="icons">
          {PetsIcons.map((data) => {
            return (
              <div className="icon">
                <img
                  loading="lazy"
                  src={data.img}
                  alt="icon"
                  height={40}
                  width={60}
                />
                <div className="icon-name">{data.name}</div>
              </div>
            );
          })}
        </div>
        <div className="line">
          <div className="border-line"></div>
        </div>
        <Filters FiltersName={FiltersName} />
        <ShoppingListCard />
        <div className="load-more">
          <div className="load-line"></div>
          <div className="text">
            <div>LOAD</div>
            <div className="plus">+</div>
            <div>MORE</div>
          </div>
          <div className="load-line"></div>
        </div>
        <div className="yellow-bar">
          <ServiceYellowBar
            content={"GET PERSONAL ASSISTANCE"}
            note={"FIND THE RIGHT GIFT FOR THEM!"}
          />
        </div>
        <div className="review">REVIEWS</div>
        <ReviewSlider
          background="transparent"
          color="#00000"
          des="#A75A40"
          border="1px solid #665E2F"
        />
        <div className="btn">
          <button className="button-review">Request the service</button>
        </div>
        <ExploreShop />
        <div className="component-wrapper">
          <YellowBarContent requiredPersonalAssistance={false} />
        </div>
      </motion.div>
    </DogsWrapper>
  );
};

export default Dogs;
