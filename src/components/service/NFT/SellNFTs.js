import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.svg";
import Menu from "../../../commonComponents/Menu";
import Form from "../../../commonComponents/Form";

import { NftIcons } from "../../../utils";
import YellowBarContent from "../Common/YellowBarContent";
import WhyWithUs from "../../../commonComponents/WhyWithUs";
import Benefits from "../../../commonComponents/Benefits";
import SellWithUs from "../../../commonComponents/SellWithUs";

const SellNFTsWrapper = styled.div`
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
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 50px;
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
  .title {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
  }
  .content {
    font-family: "Arial";
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
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

const SellNFTs = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <SellNFTsWrapper>
      <div className="heading-part">
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <div>Go Back</div>
        </div>
        <div>SELL YOUR NFT</div>
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
      <div className="title">I WANNA SELL NFT</div>
      <div className="content">List your NFTs below!</div>
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
      <Form />
      <div className="line">
        <div className="border-line"></div>
      </div>
      <WhyWithUs />
      <Benefits />
      <SellWithUs />
      <YellowBarContent requiredPersonalAssistance={false} />
    </SellNFTsWrapper>
  );
};

export default SellNFTs;
