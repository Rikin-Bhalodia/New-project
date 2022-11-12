import React, { useState } from "react";
import styled from "styled-components";

import rentItText from "../../assets/images/product-section/rent-it-text.svg";
import completeLookText from "../../assets/images/product-section/complete-look-text.svg";
import postLike from "../../assets/images/product-section/postlike.svg";
import sandal from "../../assets/images/product-section/sandal.svg";
import ring from "../../assets/images/product-section/ring.svg";
import lipstick from "../../assets/images/product-section/lipstick.svg";
import makeupbox from "../../assets/images/product-section/makeupbox.svg";
import instapost from "../../assets/images/product-section/instapost.svg";
import { motion } from "framer-motion";

const ReletedServices = React.lazy(() =>
  import("../studio-product/RelatedSrevices")
);
const AboutProduct = React.lazy(() => import("./AboutProduct"));
const ProductSelectionCommon = React.lazy(() =>
  import("../../commonComponents/ProductSelectionCommon")
);
const YouMayLike = React.lazy(() =>
  import("../../commonComponents/ProductSelectionCommon/YouMayLike")
);

const ProductSectionWrapper = styled.div`
  .last--text div {
    align-self: center;
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .complete-look-section {
    margin: 40px 73px 0 73px;
  }
  .text-svg {
    margin-bottom: 10px;
  }
  .complete-bottom--container {
    border: 1px solid #000000;
    border-radius: 37px;
    padding: 20px 100px;
  }
  .cards--section {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 50px;
  }
  .cards--section .card {
    border: none;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    width: 240px;
    height: 260px;
  }
  .card .card-like {
    margin-right: 20px;
    margin-top: 12px;
  }
  .card .card-like .label {
    background: #a75b41;
    border-radius: 0px 74px 74px 0px;
    font-family: "Arial";
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #ffffff;
    width: 58.35px;
    padding: 2px 0;
  }
  .card .product--image {
    align-self: center;
    height: 217px;
  }
  .card--detail {
    align-self: center;
  }
  .card--detail .text {
    font-family: "Arial";
    font-weight: 400;
    font-size: 9px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #b0b0b0;
  }
  .card--detail .title {
    font-family: "Arial";
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    text-transform: uppercase;
    color: #000000;
  }
  .card--detail .price {
    font-family: "Arial";
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
  .card--detail .price span {
    font-family: "Arial";
    font-weight: 700;
    font-size: 11px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
  .insta--card {
    /* margin: 20px 80px 40px; */
  }
  .delivary-status {
    right: -35px;
    top: 18px;
  }
  .delivary-status .text {
    font-family: "Arial";
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
  }
  .delivary-status .date {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    letter-spacing: 0.092px;
    color: #000000;
  }

  .cur-pointer {
    cursor: pointer;
  }
  .rotate-90 {
    transform: rotate(270deg) !important;
    margin-bottom: 25px;
  }
`;

const ProductSection = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <ProductSectionWrapper>
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ProductSelectionCommon />
        <AboutProduct />
        <section className="complete-look-section">
          <div className="text-svg">
            <img
              loading="lazy"
              src={completeLookText}
              alt=""
              width={400}
              height={100}
            />
          </div>
          <div className="complete-bottom--container d-flex justify-content-between">
            <div className="cards--section d-grid">
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "90deg" }}
                animate={
                  isInView && {
                    y: 0,
                    rotateY: "0deg",
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="card"
              >
                <div className="d-flex justify-content-between card-like">
                  <div className="label">NEW!</div>
                  <img loading="lazy" src={postLike} alt="" />
                </div>
                <div className="product--image" style={{ overflow: "hidden" }}>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={sandal}
                    alt=""
                    height={180}
                  />
                </div>
                <div className="card--detail">
                  <div className="text">VERSACE</div>
                  <div className="title">FENDANCE SANDALS</div>
                  <div className="price">
                    <span>MRP</span> ₹87,950.00
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "90deg" }}
                animate={
                  isInView && {
                    y: 0,
                    rotateY: "0deg",
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="card"
              >
                <div className="d-flex justify-content-between card-like">
                  <div></div>
                  <img loading="lazy" src={postLike} alt="" />
                </div>
                <div className="product--image" style={{ overflow: "hidden" }}>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={lipstick}
                    alt=""
                  />
                </div>
                <div className="card--detail">
                  <div className="text">M.A.C.</div>
                  <div className="title">deep brown lipstick</div>
                  <div className="price">
                    <span>MRP</span> ₹87,950.00
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "90deg" }}
                animate={
                  isInView && {
                    y: 0,
                    rotateY: "0deg",
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="card"
              >
                <div className="d-flex justify-content-between card-like">
                  <div className=""></div>
                  <img loading="lazy" src={postLike} alt="" />
                </div>
                <div className="product--image" style={{ overflow: "hidden" }}>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={ring}
                    alt=""
                  />
                </div>
                <div className="card--detail">
                  <div className="text">BVLGARI</div>
                  <div className="title">SERPENTI VIPER BRACELET</div>
                  <div className="price">
                    <span>MRP</span> ₹87,950.00
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "90deg" }}
                animate={
                  isInView && {
                    y: 0,
                    rotateY: "0deg",
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="card"
              >
                <div className="d-flex justify-content-between card-like">
                  <div className="label">NEW!</div>
                  <img loading="lazy" src={postLike} alt="" />
                </div>
                <div className="product--image" style={{ overflow: "hidden" }}>
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={makeupbox}
                    alt=""
                  />
                </div>
                <div className="card--detail">
                  <div className="text">M.A.C.</div>
                  <div className="title">EYE SHADOW X 9: BURGUNDY</div>
                  <div className="price">
                    <span>MRP</span> ₹87,950.00
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "30vh", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0,
                  },
                }
              }
              className="insta--card"
            >
              <img loading="lazy" src={instapost} alt="" height={530} />
            </motion.div>
          </div>
        </section>
        <YouMayLike />
        <ReletedServices />
        <div className="last--text d-flex justify-content-center">
          <div>thinking of buying for an occassion?</div>
          <img loading="lazy" src={rentItText} alt="" />
        </div>
      </motion.div>
    </ProductSectionWrapper>
  );
};

export default ProductSection;
