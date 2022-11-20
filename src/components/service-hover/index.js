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
    border-bottom: 1px solid #fff;
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
    position: absolute;
    left: 50px;
    top: 20%;
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
  .rightImg {
    position: absolute;
    right: 50px;
    top: 20%;
    img {
      width: 270px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

export default function ServiceHover() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

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
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3>BEAUTY & WELLNESS</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <h3>Culture</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
              >
                <h3>DESIGN CONSULTATION</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
              >
                <h3>Fine Dine</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
              >
                <h3>Lifestyle Management</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h3>NFT & METAVERSE</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.2 }}
              >
                <h3>Pets</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.4 }}
              >
                <h3>Private Parties, Kitty Parties, Weddings & Celebration </h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.6 }}
              >
                <h3>Real Estate</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.8 }}
              >
                <h3>Transportation</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <h3>TRAVEL & LEISURE</h3>
              </motion.div>
            </div>
          </div>
          <div className="leftImg">
            <img src={studioInner3} alt="" loading="lazy" />
          </div>
          <div className="rightImg">
            <img src={studioInner5} alt="" loading="lazy" />
          </div>
        </div>
      </motion.section>
    </ServiceHoverWrapper>
  );
}
