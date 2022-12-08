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
  height: 100vh;
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
    bottom: 30px;
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
  .title-name.padding {
    padding-left: 70px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
    .leftImg {
      height: 250px;
      width: 200px;
    }
    .rightImg {
      height: 250px;
      width: 200px;
    }
    .hover-images {
      bottom: 50px;
    }
  }
  @media (max-width: 530px) {
    font-size: 26px;
    .leftImg {
      height: 220px;
      width: 160px;
    }
    .rightImg {
      height: 220px;
      width: 160px;
    }
    .hover-images {
      bottom: 100px;
    }
  }
  @media (max-width: 450px) {
    font-size: 22px;
    .leftImg {
      height: 190px;
      width: 130px;
    }
    .rightImg {
      height: 190px;
      width: 130px;
    }
    .hover-images {
      bottom: 150px;
    }
  }
  .menu-icon {
    background: #a65a40;
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 7px solid white;
    margin: auto;
    position: absolute;
    top: unset !important;
    bottom: -40px !important;
    left: calc(50vw - 40px);
    z-index: 1;
  }
`;

const menuData = [
  {
    name: "STUDIO",
    duration: 1,
    hoverImgLeft: studioInner1,
    hoverImgRight: studioInner4,
    css: "",
  },
  {
    name: "AVENUE",
    duration: 1.2,
    hoverImgLeft: studioInner3,
    hoverImgRight: studioInner1,
    css: "padding",
  },
  {
    name: "RENT& RESELL",
    duration: 1.4,
    hoverImgLeft: studioInner1,
    hoverImgRight: studioInner4,
    css: "",
  },
  {
    name: "LIVE SHOP",
    duration: 1.8,
    hoverImgLeft: studioInner3,
    hoverImgRight: studioInner1,
    css: "",
  },
];
const MobileBanner = () => {
  const [showImage, setShowImage] = useState(false);
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <>
      <MobileBannerWrapper>
        {menuData.map(
          ({ name, duration, hoverImgLeft, hoverImgRight, css }, i) => {
            return (
              <>
                <motion.div
                  className={
                    name === "RENT& RESELL"
                      ? `title-name fix-width `
                      : `title-name ${css}`
                  }
                  initial={{ y: "35vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: duration }}
                  onMouseEnter={() => setShowImage(i)}
                  onMouseLeave={() => {
                    setShowImage("");
                  }}
                >
                  {name}
                </motion.div>
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
          }
        )}
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
      </MobileBannerWrapper>
    </>
  );
};

export default MobileBanner;
