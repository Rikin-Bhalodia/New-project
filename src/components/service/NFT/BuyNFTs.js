import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.svg";
import { ReviewSlider } from "../Grooming/ReviewSlider";
import { NftIcons } from "../../../utils";
import { motion } from "framer-motion";
const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const TopProduct = React.lazy(() => import("../../brand/TopProduct"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const Filters = React.lazy(() => import("../../../commonComponents/Filters"));
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);
const WannaShop = React.lazy(() =>
  import("../../../commonComponents/WannaShop")
);

const BuyNFTsWrapper = styled.div`
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43)),
      url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .load-more {
    display: flex;
    width: 100%;
    margin-top: 120px;
  }
  .line2 {
    border-bottom: 2px solid #000000;
    width: 40%;
    margin-bottom: 35px;
  }
  .text1 {
    width: 20%;
    display: flex;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    justify-content: space-around;
    margin: 0px 10px;
  }
  .plus1 {
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
  .slider-review {
    margin-top: 70px;
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
  .menu-icon{
    top: -40px !important;
  }
  @media (max-width: 1000px) {
    .heading-part {
      font-size: 90px;
    }
    .icons {
      margin: 30px 0;
      word-break: break-word;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      font-size: 70px;
    }
    .icons {
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 15px;
    }

    .icon-name {
      font-size: 12px;
    }
  }
  @media (max-width: 700px) {
    .icon-name {
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .heading-part {
      font-size: 55px;
      object-fit: cover;
      background-repeat: no-repeat;
      height: 50vh;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 45px;
    }
    .icon-name {
      font-size: 9px;
    }
  }
  @media (max-width: 450px) {
    .heading-part {
      font-size: 35px;
      height: 42vh;
    }
  }
  @media (max-width: 400px) {
    .icons {
      padding: 0 10px;
      row-gap: 10px;
      column-gap: 6px;
      margin-top: 20px;
    }
  }
  @media (max-width: 850px) {
    .load-more {
      margin-top: 80px;
    }
    .text1 {
      font-size: 28px;
      width: 32%;
    }
    .line2 {
      width: 33%;
    }
  }
  @media (max-width: 650px) {
    .load-more {
      margin-top: 70px;
    }
    .text1 {
      font-size: 26px;
      width: 37%;
    }
    .line2 {
      width: 30%;
    }
  }
  @media (max-width: 550px) {
    .load-more {
      margin-top: 60px;
    }
    .line2 {
      margin-bottom: 23px;
      width: 27%;

    }
    .text1 {
      font-size: 24px;
      width: 42%;
    }
    .plus1 {
      height: 45px;
      width: 45px;
      border-radius: 50%;
      font-size: 30px;
    }
  }
  @media (max-width: 450px) {
    .load-more {
      margin-top: 40px;
    }
    .text1 {
      font-size: 20px;
      width: 50%;
    }
    .line2 {
      width: 25%;
    }
  }
`;

const FiltersName = [
  { name: "WALLETS", option: ["Dry Food", "Wet Food"] },
  { name: "COLOR", option: ["Puppy", "Adult Dog", "Senior Dog"] },
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
];

const BuyNFTs = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  return (
    <BuyNFTsWrapper>
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="heading-part">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, type: "spring", damping: 7 }}
            className="goback"
          >
            <img src={BackArrow} alt="back-arrow" />
            <div>Go Back</div>
          </motion.div>
          <div>
            <AnimatedTextWord text="BUY NFT" />
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
          {NftIcons.map(({ img, name }) => {
            return (
              <div className="icon">
                <img
                  loading="lazy"
                  src={img}
                  alt="icon"
                  height={40}
                  width={60}
                />
                <div className="icon-name">{name}</div>
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
        <TopProduct />
        <TopProduct />
        <div className="load-more">
          <div className="line2"></div>
          <div className="text1">
            <div>LOAD</div>
            <div className="plus1">+</div>
            <div>MORE</div>
          </div>
          <div className="line2"></div>
        </div>
        <div className="slider-review">
          <ReviewSlider
            background="transparent"
            color="#00000"
            des="#A75A40"
            border="1px solid #665E2F"
          />
        </div>
        <YellowBarContent requiredPersonalAssistance={true} />
      </motion.div>
    </BuyNFTsWrapper>
  );
};

export default BuyNFTs;
