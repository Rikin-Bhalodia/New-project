import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import studioInner1 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner3 from "./../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "./../../assets/images/img/studioInner-4.jpg";
import MenuIcon from "../../assets/images/studio/menu.svg";
import Menu from "../../commonComponents/Menu";

const MobileBannerWrapper = styled.div`
  height: 95vh;
  background: #a69484;
  font-size: 34px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: "coralSerif", sans-serif;
  position: relative;
  padding-top: 70px;
  .title-name {
    padding: 0px 0 0 40px;
  }
  .fix-width {
    width: 200px;
  }
  .title-name:hover {
    color: yellow;
  }
  .hover-images {
    display: flex;
    width: 100%;
    position: absolute;
    justify-content: center;
    bottom: 50px;
    column-gap: 50px;
  }
  .leftImg {
    height: 290px;
    width: 230px;
    border-radius: 20px;
  }
  .rightImg {
    height: 290px;
    width: 230px;
    border-radius: 20px;
  }
`;

const menuData = [
  {
    name: "STUDIO",
    duration: 1,
    hoverImgLeft: studioInner1,
    hoverImgRight: studioInner4,
  },
  {
    name: "AVENUE",
    duration: 1.2,
    hoverImgLeft: studioInner3,
    hoverImgRight: studioInner1,
  },
  {
    name: "RENT& RESELL",
    duration: 1.4,
    hoverImgLeft: studioInner1,
    hoverImgRight: studioInner4,
  },
  {
    name: "LIVE SHOP",
    duration: 1.8,
    hoverImgLeft: studioInner3,
    hoverImgRight: studioInner1,
  },
];
const MobileBanner = () => {
  const [showImage, setShowImage] = useState(false);
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <>
      <MobileBannerWrapper>
        {menuData.map(({ name, duration, hoverImgLeft, hoverImgRight }, i) => {
          return (
            <>
              <div
                className={
                  name === "RENT& RESELL"
                    ? "title-name fix-width"
                    : "title-name"
                }
                onMouseEnter={() => setShowImage(i)}
                onMouseLeave={() => {
                  setShowImage("");
                }}
              >
                {name}
              </div>
              <div className="hover-images">
                {showImage === i && (
                  <div>
                    <motion.img
                      src={hoverImgLeft}
                      alt=""
                      loading="lazy"
                      className="leftImg"
                    />
                  </div>
                )}
                {showImage === i && (
                  <div>
                    <motion.img
                      src={hoverImgRight}
                      alt=""
                      loading="lazy"
                      className="leftImg"
                    />
                  </div>
                )}
              </div>
            </>
          );
        })}
      </MobileBannerWrapper>
      <div
        className="menu-icon"
        onClick={() => setMenuOpenModal(!menuOpenModal)}
      >
        <Menu
          menuOpenModal={menuOpenModal}
          onClick={(e) => e.stopPropagation()}
        />
        {menuOpenModal ? (
          <img src={MenuIcon} alt="menu" height={45} loading="lazy" />
        ) : (
          <img src={MenuIcon} alt="menu" height={45} loading="lazy" />
        )}
      </div>
    </>
  );
};

export default MobileBanner;
