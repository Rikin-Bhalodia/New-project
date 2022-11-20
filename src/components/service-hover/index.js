import React, { useState } from "react";
import styled from "styled-components";
import studioInner5 from "../../assets/images/img/studioInner-1.jpg";
import studioInner3 from "../../assets/images/img/studioInner-3.jpg";
import { motion } from "framer-motion";

const ServiceHoverWrapper = styled.div`
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
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

const menuData = [
  {
    name: "BEAUTY & WELLNESS",
    duration: 1,
  },
  {
    name: "Culture",
    duration: 1.2,
  },
  {
    name: "DESIGN CONSULTATION",
    duration: 1.4,
  },
  {
    name: "Fine Dine",
    duration: 1.6,
  },
  {
    name: "Lifestyle Management",
    duration: 1.8,
  },
  {
    name: "NFT & METAVERSE",
    duration: 2,
  },
  {
    name: "Pets",
    duration: 2.2,
  },
  {
    name: "Private Parties, Kitty Parties, Weddings & Celebration ",
    duration: 2.4,
  },
  {
    name: "Real Estate",
    duration: 2.6,
  },
  {
    name: "Transportation",
    duration: 2.8,
  },
  {
    name: "TRAVEL & LEISURE",
    duration: 3,
  },
];

export default function ServiceHover() {
  const [showImage, setShowImage] = useState(false);

  return (
    <ServiceHoverWrapper>
      <motion.section
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
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
    </ServiceHoverWrapper>
  );
}
