import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/banner.svg";
import { NftIcons } from "../../../utils";
import { motion } from "framer-motion";

const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const WhyWithUs = React.lazy(() =>
  import("../../../commonComponents/WhyWithUs")
);
const Form = React.lazy(() => import("../../../commonComponents/Form"));
const Benefits = React.lazy(() => import("../../../commonComponents/Benefits"));
const SellWithUs = React.lazy(() =>
  import("../../../commonComponents/SellWithUs")
);
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);

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
    display: flex;
    justify-content: center;
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
  const [isInView, setIsInView] = useState(false);
  return (
    <SellNFTsWrapper>
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="heading-part">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="goback"
          >
            <img src={BackArrow} alt="back-arrow" />
            <div>Go Back</div>
          </motion.div>
          <div>
            <AnimatedTextWord text="SELL YOUR NFT" />
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
        <div className="title">
          <AnimatedTextWord text="I WANNA SELL NFT" />
        </div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "-60vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 3,
              },
            }
          }
          className="content"
        >
          List your NFTs below!
        </motion.div>
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
        <Form />
        <div className="line">
          <div className="border-line"></div>
        </div>
        <WhyWithUs />
        <Benefits />
        <SellWithUs />
        <YellowBarContent requiredPersonalAssistance={false} />
      </motion.div>
    </SellNFTsWrapper>
  );
};

export default SellNFTs;
