import React, { useState } from "react";
import styled from "styled-components";
import Menu from "../../../commonComponents/Menu";
import WannaShop from "../../../commonComponents/WannaShop";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.svg";
import TopProduct from "../../brand/TopProduct";
import { ReviewSlider } from "../Grooming/ReviewSlider";
import YellowBarContent from "../Common/YellowBarContent";
import Filters from "../../../commonComponents/Filters";
import { NftIcons } from "../../../utils";

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
      <div className="heading-part">
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <div>Go Back</div>
        </div>
        <div>BUY NFT</div>
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
              <img loading="lazy" src={img} alt="icon" height={40} width={60} />
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
    </BuyNFTsWrapper>
  );
};

export default BuyNFTs;
