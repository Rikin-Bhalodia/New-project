import React, { useState } from "react";
import styled from "styled-components";
import studioInner5 from "../../assets/images/img/studioInner-1.jpg";
import studioInner1 from "../../assets/images/img/studioInner-1.jpg";
import studioInner2 from "../../assets/images/img/studioInner-2.jpg";
import studioInner3 from "../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "../../assets/images/img/studioInner-4.jpg";
import Menu from "../../commonComponents/Menu";
import MenuIcon from "../../assets/images/studio/menu.svg";
import img1 from "../../assets/images/shop-hover/img1.svg";
import img2 from "../../assets/images/shop-hover/img2.svg";
import { motion } from "framer-motion";

const ShopHoverWrapper = styled.div`
  .hover-show-img {
    display: flex;
    justify-content: center;
    text-align: center;
    /* padding: 100px 0; */
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

export default function ShopHover() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

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
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3>ACCESSORIES</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <h3>BEAUTY & FREGRANCE</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
              >
                <h3>Fashion</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6 }}
              >
                <h3>Foods & Drinks (FMCG)</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8 }}
              >
                <h3>Footwear</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h3>Fragrance</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.2 }}
              >
                <h3>Handbags & Travel Bags</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.4 }}
              >
                <h3>HOME</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.6 }}
              >
                <h3>Jewelry</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2.8 }}
              >
                <h3>Luxury Games</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <h3>Kids</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3.2 }}
              >
                <h3>Luxury Games</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3.4 }}
              >
                <h3>Luxury Gifting</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3.6 }}
              >
                <h3>Pets (Shop)</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3.8 }}
              >
                <h3>Sports</h3>
              </motion.div>
              <motion.div
                initial={{ y: "30vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 4 }}
              >
                <h3>Tech & Electronics</h3>
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
    </ShopHoverWrapper>
  );
}
