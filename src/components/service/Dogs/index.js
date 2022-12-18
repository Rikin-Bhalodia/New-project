import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/dogs/banner.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import { PetsIcons } from "../../../utils";
import { ReviewSlider } from "../Grooming/ReviewSlider";
import { motion } from "framer-motion";
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);
const TopProduct = React.lazy(() => import("../../brand/TopProduct"));
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
    height: 90vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${BannerImage});
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
    display: flex;
    justify-content: center;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 120px;
  }
  .load-line {
    border-bottom: 2px solid #000000;
    width: 40%;
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
    align-items: center;
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
  }
  .yellow-bar {
    margin-top: 50px;
  }
  @media (max-width: 1100px) {
    .plus {
      height: 50px;
      width: 50px;
      font-size: 42px;
    }
    .text {
      font-size: 26px;
    }
    .button-review {
      width: 350px;
      font-size: 28px;
    }
  }

  @media (max-width: 1000px) {
    .heading-part {
      font-size: 90px;
    }
    .icons {
      margin-top: 80px;
    }
    .plus {
      height: 40px;
      width: 40px;
      font-size: 35px;
      margin: 0 10px;
    }
    .text {
      font-size: 23px;
    }
    .review {
      margin-top: 80px;
      font-size: 38px;
    }
    .button-review {
      width: 320px;
      font-size: 26px;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      font-size: 80px;
    }
    .icons {
      margin-top: 70px;
      column-gap: 10px;
    }
    .pets-icon {
      height: 35px;
      width: 50px;
    }
    .icon-name {
      font-size: 12px;
    }
    .text {
      width: 26%;
    }
    .load-line {
      width: 37%;
    }
    .review {
      margin-top: 60px;
      font-size: 34px;
    }
    .button-review {
      width: 290px;
      font-size: 24px;
      height: 70px;
      margin-top: 50px;
    }
  }
  @media (max-width: 700px) {
    .pets-icon {
      height: 35px;
      width: 40px;
    }
    .icon-name {
      font-size: 10px;
    }
    .text {
      width: 30%;
    }
    .load-line {
      width: 35%;
    }
  }
  @media (max-width: 600px) {
    .pets-icon {
      height: 30px;
      width: 30px;
    }
    .icon-name {
      font-size: 8px;
    }
    .text {
      width: 40%;
    }
    .load-line {
      width: 30%;
    }
    .change-style {
      font-size: 16px;
    }
    .review {
      margin-top: 40px;
      font-size: 30px;
    }
    .button-review {
      width: 260px;
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 70px;
    }
    .icons {
      margin-top: 40px;
      column-gap: 8px;
    }
    .pets-icon {
      height: 22px;
      width: 22px;
    }
    .icon-name {
      font-size: 7px;
    }
    .text {
      width: 46%;
      font-size: 20px;
    }
    .load-line {
      width: 27%;
    }
    .button-review {
      width: 240px;
      font-size: 18px;
    }
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
  const [isInView, setIsInView] = useState(false);

  return (
    <DogsWrapper>
      <div>
        <div className="heading-part">
          <div className="goback">
            <img src={BackArrow} alt="back-arrow" loading="lazy" />
            <div>Go Back</div>
          </div>
          <div>
            <AnimatedTextWord text="DOGS" />
          </div>
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
                  className="pets-icon"
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
        <TopProduct />
        <TopProduct />
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
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ y: "60vh" }}
          animate={
            isInView && {
              y: 0,
              transition: {
                duration: 0.7,
              },
            }
          }
        >
          <div className="review">
            <AnimatedTextWord text="REVIEWS" />
          </div>
          <ReviewSlider
            background="transparent"
            color="#00000"
            des="#A75A40"
            border="1px solid #665E2F"
          />
          <div className="btn">
            <button className="button-review">Request the service</button>
          </div>
        </motion.div>
        <ExploreShop />
        <div className="component-wrapper">
          <YellowBarContent requiredPersonalAssistance={false} />
        </div>
      </div>
    </DogsWrapper>
  );
};

export default Dogs;
