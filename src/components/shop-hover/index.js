import React, { useState } from "react";
import styled from "styled-components";
import studioInner5 from "../../assets/images/img/studioInner-1.jpg";
import studioInner3 from "../../assets/images/img/studioInner-3.jpg";
import { motion } from "framer-motion";

const ShopHoverWrapper = styled.div`
  .hover-show-img {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100vw;
    position: relative;
  }
  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 90vw;
    height: 100vh;
    overflow: auto;
    padding: 100px 0;
  }
  .menu-list::-webkit-scrollbar {
    display: none;
  }
  .menu-list div {
    /* border-bottom: 1px solid #fff; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  .menu-list div h3 {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 37px;
    letter-spacing: -0.408px;
    color: #000000;
    text-transform: uppercase;
    position: relative;
    top: 24px;
    background: #fff;
    background: none;
    width: max-content;
    padding: 0 10px;
  }
  .menu-list div:hover {
    border-bottom: 1px solid #665e2f;
  }
  .menu-list div:hover h3 {
    color: #665e2f;
    background: #fff;
  }
  .leftImg {
    position: absolute !important;
    left: 50px;
    top: 170px;
    transform: rotate(-20deg);
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
  .rightImg {
    position: absolute !important;
    right: 50px;
    top: 170px;
    transform: rotate(20deg);
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
  .shop-hover-category {
    display: flex;
  }
  .shop-hover-category .menu_hover h3:hover .rightImg {
    transform: rotate(0deg);
  }
  .shop-hover-category .menu_hover h3:hover .leftImg {
    transform: rotate(90deg);
  }
`;

const menuData = [
  {
    name: "ACCESSORIES",
    duration: 1,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "BEAUTY & FREGRANCE",
    duration: 1.2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Fashion",
    duration: 1.4,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Foods & Drinks (FMCG)",
    duration: 1.6,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Footwear",
    duration: 1.8,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Fragrance",
    duration: 2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Handbags & Travel Bags",
    duration: 2.2,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "HOME",
    duration: 2.4,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Jewelry",
    duration: 2.6,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Luxury Games",
    duration: 2.8,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Kids",
    duration: 3,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Luxury Gifting",
    duration: 3.2,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Pets (Shop)",
    duration: 3.4,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
  {
    name: "Sports",
    duration: 3.6,
    leftImg: studioInner3,
    rightImg: studioInner5,
  },
  {
    name: "Tech & Electronics",
    duration: 3.8,
    leftImg: studioInner5,
    rightImg: studioInner3,
  },
];

export default function ShopHover() {
  const [showImage, setShowImage] = useState({
    leftImg: "",
    rightImg: "",
  });

  return (
    <ShopHoverWrapper>
      <motion.section className="homeBanner overflow-hidden minHeightSec minBannerHeight ">
        <div className="hover-show-img">
          <div className="grid">
            <div className="menu-list">
              {showImage.leftImg && (
                <div className="leftImg">
                  <motion.img src={showImage.leftImg} alt="" loading="lazy" />
                </div>
              )}
              {menuData.map(({ name, duration, leftImg, rightImg }, i) => {
                return (
                  <div className="shop-hover-category">
                    <motion.div
                      initial={{ y: "30vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: duration }}
                      onMouseEnter={() =>
                        setShowImage({
                          leftImg,
                          rightImg,
                        })
                      }
                      onMouseLeave={() => {
                        setShowImage(showImage);
                      }}
                      className="menu_hover"
                    >
                      <h3>{name}</h3>
                    </motion.div>
                  </div>
                );
              })}
              {showImage.rightImg && (
                <div className="rightImg">
                  <motion.img src={showImage.rightImg} alt="" loading="lazy" />
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </ShopHoverWrapper>
  );
}
