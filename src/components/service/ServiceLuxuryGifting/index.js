import React, { useState } from "react";
import styled from "styled-components";
import Luxury from "../../../assets/images/service/luxury.svg";
import Left from "../../../assets/images/service/left.png";
import Right from "../../../assets/images/service/right.png";
import ServiceLuxuryGiftingBanner from "../../../assets/images/service/luxury-gifting-banner.png";
import LuxuryText from "../../../assets/images/service/luxury-text.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";

import { motion } from "framer-motion";
import {
  GiftsByClients,
  OccasionGifts,
  ServiceLuxuryGiftingPage,
} from "../../../utils";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { useMediaQuery } from "react-responsive";
import Menu from "../../../commonComponents/Menu";
const ServiceYellowBar = React.lazy(() =>
  import("../../../commonComponents/ServiceYellowBar")
);
const GoBackpart = React.lazy(() => import("../Common/gobachpart"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));

const ServiceLuxuryGiftingWrapper = styled.div`
  margin: 100px 150px 0px 150px;

  .gifting {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    margin-left: 100px;
    position: absolute;
    bottom: -50px;
  }
  .luxury {
    position: relative;
    top: -20px;
  }
  .name {
    position: relative;
    height: fit-content;
    top: 40px;
    padding-left: 90px;
  }
  .images {
    display: flex;
    justify-content: flex-end;
    position: relative;
    align-items: center;
    padding-right: 100px;
  }
  .left {
    position: relative;
    left: 30px;
  }
  .icons {
    display: flex;
    margin-top: 90px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 10px;
  }
  .gifts-by-recipient {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    padding-top: 100px;
  }
  .gifts {
    display: flex;
    flex-wrap: wrap;
    column-gap: 250px;
    row-gap: 30px;
    justify-content: space-between;
    text-align: center;
    font-family: "Beatlys";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #665e2f;
    margin: 40px 100px 0 100px;
  }
  .que {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    padding-top: 70px;
  }
  @media (max-width: 1200px) {
    margin: 100px 50px 0;
    .luxury {
      top: -10px;
    }
    .gifting {
      font-size: 80px;
      margin-left: 50px;
    }
  }
  @media (max-width: 1100px) {
    .gifts-by-recipient {
      font-size: 52px;
      padding-top: 40px;
    }
    .gifts {
      column-gap: 200px;
      row-gap: 30px;
      font-size: 36px;
      margin: 30px 50px 0 50px;
    }
    .que {
      font-size: 18px;
      padding-top: 50px;
    }
    .gift-for-him-image {
      height: 230px;
    }
    .for-him-text {
      font-size: 30px;
    }
  }
  @media (max-width: 1000px) {
    margin: 80px 20px 0;
    .luxury {
      top: 0px;
    }
    .gifting {
      font-size: 70px;
    }
    .left {
      height: 250px;
    }
    .right {
      height: 400px;
    }
    .luxury {
      height: 220px;
    }
    .icons {
      margin: 30px 0;
      word-break: break-word;
    }
    .gifts-by-recipient {
      font-size: 46px;
      padding-top: 30px;
      padding-left: 50px;
    }
    .gifts {
      column-gap: 150px;
      row-gap: 20px;
    }
    .que {
      font-size: 16px;
      padding-top: 50px;
    }
    .gift-for-him-image {
      height: 210px;
    }
    .for-him-text {
      font-size: 26px;
    }
  }
  @media (max-width: 850px) {
    margin: 60px 10px 0;

    .gifting {
      font-size: 60px;
      margin-left: 50px;
    }
    .left {
      height: 220px;
    }
    .right {
      height: 370px;
    }
    .luxury {
      height: 200px;
    }
    .icons {
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 15px;
    }
    .icon-name {
      font-size: 12px;
    }
    .size-icon {
      height: 30px;
      width: 50px;
    }
  }
  @media (max-width: 750px) {
    margin: 30px 0 0 0;
    .icon-name {
      font-size: 10px;
    }
    .left {
      height: 200px;
    }
    .right {
      height: 320px;
    }
    .luxury {
      height: 165px;
    }
    .gifting {
      font-size: 50px;
      margin-left: 30px;
      margin-bottom: 20px;
    }
    .gifts-by-recipient {
      font-size: 40px;
      padding-top: 20px;
      padding-left: 40px;
    }
    .gifts {
      column-gap: 100px;
    }
    .que {
      font-size: 16px;
      padding-top: 30px;
    }
    .gift-for-him-image {
      height: 190px;
    }
    .for-him-text {
      font-size: 24px;
    }
  }
  @media (max-width: 650px) {
    .name {
      padding-left: 50px;
    }
    .left {
      height: 190px;
    }
    .right {
      height: 310px;
    }
    .luxury {
      height: 155px;
    }
    .gifting {
      font-size: 45px;
    }
  }
  @media (max-width: 600px) {
    margin: 0;
    .heading-part {
      font-size: 55px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${ServiceLuxuryGiftingBanner});
      object-fit: cover;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 40px;
    }
    .gifting2 {
      font-family: "Coral Blush";
      font-style: normal;
      font-weight: 400;
      font-size: 65px;
      text-align: end;
      color: white;
      position: relative;
      top: -70px;
    }
    .luxury-heading {
      margin-left: 160px;
      height: 65%;
      width: 60%;
    }
    .gifts-by-recipient {
      font-size: 34px;
      padding-left: 30px;
    }
    .gifts {
      column-gap: 50px;
    }
    .que {
      padding-top: 20px;
    }
    .gift-for-him-image {
      height: 170px;
    }
    .for-him-text {
      font-size: 22px;
    }
    .menu-icon {
      top: -40px !important;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 45px;
    }
    .icon-name {
      font-size: 9px;
    }
    .size-icon {
      height: 25px;
      width: 45px;
    }
    .gifting2 {
      font-size: 50px;
    }
    .luxury-heading {
      margin-left: 160px;
      height: 60%;
      width: 50%;
    }
    .gifts-by-recipient {
      font-size: 30px;
      padding-left: 20px;
    }
    .gifts {
      column-gap: 20px;
      margin: 20px 20px 0;
    }
    .que {
      padding-top: 20px;
    }
    .gift-for-him-image {
      height: 150px;
    }
    .for-him-text {
      font-size: 20px;
    }
  }
  @media (max-width: 450px) {
    .gifting2 {
      font-size: 45px;
    }
  }
  @media (max-width: 400px) {
    .icons {
      padding: 0 10px;
      row-gap: 10px;
      column-gap: 6px;
      margin-top: 20px;
    }
    .gifts-by-recipient {
      font-size: 25px;
    }
    .gifts {
      column-gap: 10px;
      margin: 20px 10px 0;
    }
    .que {
      padding-top: 20px;
    }
    .gift-for-him-image {
      height: 130px;
    }
  }
`;

const HalfWrapper = styled.div`
  overflow: hidden;
  .occasion {
    height: 66px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin-top: 40px;
  }
  .blank {
    width: 48%;
    border-bottom: 1px solid #000000;
  }
  .occ {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    width: 48%;
  }
  .occation-gifts {
    margin: 50px 250px 0px 250px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 250px;
    justify-content: space-between;
    text-align: center;
    font-family: "Beatlys";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #665e2f;
  }
  @media (max-width: 1100px) {
    .occ {
      font-size: 52px;
      padding-top: 40px;
    }
    .occation-gifts {
      column-gap: 200px;
      row-gap: 30px;
      font-size: 36px;
      margin: 30px 50px 0 50px;
    }
    .gift-for-him-image {
      height: 230px;
    }
    .for-him-text {
      font-size: 30px;
    }
  }
  @media (max-width: 1000px) {
    .occ {
      font-size: 40px;
      padding-top: 30px;
      padding-left: 50px;
      width: 60%;
    }
    .blank {
      width: 40%;
    }
    .occation-gifts {
      column-gap: 150px;
      row-gap: 20px;
    }
    .gift-for-him-image {
      height: 210px;
    }
    .for-him-text {
      font-size: 26px;
    }
  }
  @media (max-width: 750px) {
    margin: 30px 0 0 0;
    .occ {
      font-size: 36px;
      padding-top: 40px;
      padding-left: 00px;
    }
    .blank {
      width: 35%;
    }
    .occation-gifts {
      column-gap: 100px;
    }
    .que {
      font-size: 16px;
      padding-top: 30px;
    }
    .gift-for-him-image {
      height: 190px;
    }
    .for-him-text {
      font-size: 24px;
    }
  }
  @media (max-width: 600px) {
    .occ {
      font-size: 30px;
    }
    .occation-gifts {
      column-gap: 50px;
    }
    .que {
      padding-top: 20px;
    }
    .gift-for-him-image {
      height: 170px;
    }
    .for-him-text {
      font-size: 22px;
    }
    .blank {
      width: 40%;
    }
  }
  @media (max-width: 500px) {
    .occation-gifts {
      column-gap: 20px;
      margin: 20px 20px 0;
    }
    .que {
      padding-top: 20px;
    }
    .gift-for-him-image {
      height: 150px;
    }
    .for-him-text {
      font-size: 20px;
    }
    .blank {
      width: 35%;
    }
    .occ {
      width: 65%;
      font-size: 26px;
    }
  }
  @media (max-width: 400px) {
    .occ {
      font-size: 22px;
    }
    .occation-gifts {
      column-gap: 10px;
      margin: 20px 10px 0;
    }
    .gift-for-him-image {
      height: 130px;
    }
  }
`;

const ServiceLuxuryGifting = () => {
  const [isInView, setIsInView] = useState(false);
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <div>
        <ServiceLuxuryGiftingWrapper>
          {!isResponsive ? (
            <>
              <GoBackpart />
              <div>
                <div className="name">
                  <img
                    loading="lazy"
                    src={Luxury}
                    alt="luxury"
                    height={260}
                    className="luxury"
                  />
                  <div className="gifting">
                    <AnimatedTextWord text="GIFTING" />
                  </div>
                </div>
                <div className="images">
                  <motion.img
                    initial={{ y: "40vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1, zIndex: 1 }}
                    transition={{ duration: 1.5 }}
                    loading="lazy"
                    src={Left}
                    alt="left"
                    height={300}
                    className="left"
                    whileHover={{
                      scale: 1.1,
                    }}
                    // transition={{
                    //   duration: 0.4,
                    // }}
                  />
                  <motion.img
                    initial={{ y: "40vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    loading="lazy"
                    src={Right}
                    alt="right"
                    height={500}
                    className="right"
                    whileHover={{
                      scale: 1.1,
                    }}
                    // transition={{
                    //   duration: 0.4,
                    // }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="heading-part">
                <img src={LuxuryText} alt="text" className="luxury-heading" />
                <div className="gifting2">
                  <AnimatedTextWord text="GIFTING" />
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
            </>
          )}
          <div className="icons">
            {ServiceLuxuryGiftingPage.map((value) => {
              return (
                <div className="icon">
                  <img
                    loading="lazy"
                    src={value.img}
                    alt="img"
                    height={40}
                    width={60}
                    className="size-icon"
                  />
                  <div className="icon-name">{value.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="gifts-by-recipient">
              <AnimatedTextWord text="GIFTS BY RECIPIENT" />
            </div>
            <div className="gifts">
              {GiftsByClients.map((ele) => {
                return (
                  <div
                    className=""
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <motion.img
                      whileInView={() => {
                        setIsInView(true);
                      }}
                      initial={{ rotateX: ele.animation }}
                      animate={
                        isInView && {
                          rotateX: 0,
                          transition: {
                            duration: 0.5,
                          },
                        }
                      }
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      loading="lazy"
                      src={ele.img}
                      alt="img"
                      height={250}
                      className="gift-for-him-image"
                    />
                    <div
                      className="for-him-text"
                      style={{ display: "flex", justifyContent: "Center" }}
                    >
                      <AnimatedTextWord text={ele.name} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="que">Not sure what to gift? </div>
        </ServiceLuxuryGiftingWrapper>
        <HalfWrapper>
          <ServiceYellowBar
            content={"buy a gift card"}
            note={"and give them freedom to choose!"}
          />
          <div className="occasion">
            <div className="blank"> </div>
            <div className="occ">
              <AnimatedTextWord text="GIFTS BY OCCASION" />
            </div>
          </div>
          <div className="occation-gifts">
            {OccasionGifts.map((ele) => {
              return (
                <motion.div
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ x: ele.x }}
                  animate={
                    isInView && {
                      x: 0,
                      transition: {
                        duration: ele.duration,
                      },
                    }
                  }
                  className=""
                >
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={ele.img}
                    alt="img"
                    height={250}
                    className="gift-for-him-image"
                  />
                  <div className="for-him-text">{ele.name}</div>
                </motion.div>
              );
            })}
          </div>
          <div className="border-width">
            <div className="border"></div>
          </div>
          <YellowBarContent requiredPersonalAssistance={true} />
        </HalfWrapper>
      </div>
    </>
  );
};

export default ServiceLuxuryGifting;
