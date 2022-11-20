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
    gap: 15px;
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
    width: 100%;
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
    left: 0px;
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
  .rightImg {
    position: absolute !important;
    right: 0px;
    top: 0;
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
  .shop-hover-category {
    display: flex;
  }
`;

const menuData = [
  {
    name: "ACCESSORIES",
    duration: 1,
  },
  {
    name: "BEAUTY & FREGRANCE",
    duration: 1.2,
  },
  {
    name: "Fashion",
    duration: 1.4,
  },
  {
    name: "Foods & Drinks (FMCG)",
    duration: 1.6,
  },
  {
    name: "Footwear",
    duration: 1.8,
  },
  {
    name: "Fragrance",
    duration: 2,
  },
  {
    name: "Handbags & Travel Bags",
    duration: 2.2,
  },
  {
    name: "HOME",
    duration: 2.4,
  },
  {
    name: "Jewelry",
    duration: 2.6,
  },
  {
    name: "Luxury Games",
    duration: 2.8,
  },
  {
    name: "Kids",
    duration: 3,
  },
  {
    name: "Luxury Gifting",
    duration: 3.2,
  },
  {
    name: "Pets (Shop)",
    duration: 3.4,
  },
  {
    name: "Sports",
    duration: 3.6,
  },
  {
    name: "Tech & Electronics",
    duration: 3.8,
  },
];

export default function ShopHover() {
  const [showImage, setShowImage] = useState(false);

  return (
    <ShopHoverWrapper>
      <motion.section
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="homeBanner overflow-hidden minHeightSec minBannerHeight "
      >
        <div className="hover-show-img">
          <div className="grid">
            <div className="menu-list">
              {menuData.map(({ name, duration }, i) => {
                return (
                  <div className="shop-hover-category">
                    {showImage === i && (
                      <div className="leftImg">
                        <img src={studioInner3} alt="" loading="lazy" />
                      </div>
                    )}

                    <motion.div
                      initial={{ y: "30vh", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: duration }}
                      onMouseEnter={() => setShowImage(i)}
                      onMouseLeave={() => {
                        setShowImage("");
                      }}
                    >
                      <h3>{name}</h3>
                    </motion.div>
                    {showImage === i && (
                      <div className="rightImg">
                        <img src={studioInner5} alt="" loading="lazy" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </ShopHoverWrapper>
  );
}
