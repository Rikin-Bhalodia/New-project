import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/grooming/banner.svg";
import Text from "../../../assets/images/service/grooming/text.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import { BlankSlider } from "../../../slider";
import { ReviewSlider } from "./ReviewSlider";
import { motion } from "framer-motion";
import YellowBarContent from "../Common/YellowBarContent";
import Menu from "../../../commonComponents/Menu";
import ExploreShop from "../Common/ExploreShop";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
const GroomingWrapper = styled.div`
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
  .desss {
    padding: 70px 200px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
  }
  .text {
    margin-left: 100px;
    position: relative;
    top: 80px;
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
`;

const Grooming = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  return (
    <GroomingWrapper>
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
          <div>
            <AnimatedTextWord text="GROOMING" />
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
          className="desss"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
          aliquet porttitor lacus luctus accumsan tortor. Commodo ullamcorper a
          lacus vestibulum. Orci dapibus ultrices in iaculis nunc sed augue
          lacus viverra. Malesuada proin libero nunc consequat interdum varius
          sit. Imperdiet dui accumsan sit amet nulla facilisi morbi. Interdum
          posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis
          nunc sed blandit libero volutpat sed. Eget aliquet nibh praesent
          tristique magna. Et netus et malesuada fames ac turpis egestas.
          Vestibulum sed arcu non odio. Duis at consectetur lorem donec. Luctus
          venenatis lectus magna fringilla urna porttitor rhoncus. A
          pellentesque sit amet porttitor eget dolor.
        </motion.div>
        <img src={Text} alt="text" loading="lazy" className="text" />
        <BlankSlider />
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
            background="rgba(0, 0, 0, 0.43)"
            color="white"
            des="white"
          />
          <div className="btn">
            <button className="button-review">Request the service</button>
          </div>
        </motion.div>
        <ExploreShop />
        <div className="component-wrapper">
          <YellowBarContent requiredPersonalAssistance={false} />
        </div>
      </motion.div>
    </GroomingWrapper>
  );
};

export default Grooming;
