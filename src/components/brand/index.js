import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../commonComponents/Header";
import BrandBanner from "../../assets/images/brand/banner.svg";
import FendiBanner from "../../assets/images/brand/fendi-banner.svg";
import Fendi from "../../assets/images/brand/fendi.svg";
import FImg from "../../assets/images/brand/f-small.svg";
import Loved from "../../assets/images/brand/text-love.svg";
import Ranttxt from "../../assets/images/brand/ranttxt.svg";
import Topproduct from "../../assets/images/brand/top-product.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
const Menu = React.lazy(() => import("../../commonComponents/Menu"));
const ProductPoP = React.lazy(() => import("../Product/Product"));
const TopProduct = React.lazy(() => import("./TopProduct"));

const BrandWrapper = styled.div`
  background: #fcf9f2;
  padding: 0 0 50px;
  .brand-section {
    .img1 {
      /* height: 100vh; */
      width: 100vw;
      object-fit: cover;
      position: relative;
    }
    .fendi-section {
      position: relative;
      .img2 {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
      }
      .fendi-area {
        position: absolute;
        z-index: 100;
        top: 30px;
        display: flex;
        gap: 50px;
        .left-area {
          padding-left: 50px;
          h2 {
            font-weight: 400;
            font-size: 90px;
            color: #ffffff;
            font-family: Coral-Blush;
          }
          a {
            font-style: italic;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            text-decoration-line: underline;
            color: #ffffff;
          }
          p {
            font-family: "Arial";
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: #ffffff;
          }
          .imgs {
            margin-top: 30px;
            .fimg {
              z-index: 1;
              padding-right: 30px;
              height: 270px;
            }
          }
        }
        .right-area {
          img {
            width: 550px;
            height: 560px;
          }
        }
      }
    }
  }
  .think-section {
    margin: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    gap: 30px;
    padding: 30px 0;
    h4 {
      font-weight: 400;
      font-size: 43px;
      line-height: 48px;
      text-align: center;
      color: #000000;
      text-transform: capitalize;
    }
  }
`;

const Brand = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <BrandWrapper>
      <Header />
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="brand-section"
      >
        <img loading="lazy" src={BrandBanner} alt="" className="img1" />
        <div className="menu-box">
          <Menu />
        </div>
        <div className="fendi-section">
          <img loading="lazy" src={FendiBanner} alt="" className="img2" />
          <div className="fendi-area">
            <motion.div
              initial={{ x: "-50vw" }}
              whileInView={() => {
                setIsInView(true);
              }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
              className="left-area"
            >
              <h2>
                <AnimatedTextWord text="FENDI" />
              </h2>
              <div style={{ marginBottom: "10px" }}>
                <a href="#">Visit Official Link</a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
              <p>
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="imgs">
                <div className="d-flex" style={{ overflow: "hidden" }}>
                  {[1, 2, 3].map((_) => {
                    return (
                      <motion.img
                        loading="lazy"
                        src={FImg}
                        alt=""
                        className="fimg"
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: "50vw" }}
              whileInView={() => {
                setIsInView(true);
              }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
              className="right-area"
            >
              <img loading="lazy" src={Fendi} alt="Fendi" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <div className="love-product text-center">
        <img loading="lazy" src={Loved} alt="" />
      </div>
      <ProductPoP />
      <div className="think-section">
        <h4>thinking of buying for an occassion?</h4>
        <img loading="lazy" src={Ranttxt} alt="" />
      </div>
      <div className="head text-center">
        <img loading="lazy" src={Topproduct} alt="" />
      </div>
      <TopProduct />
      <TopProduct />
    </BrandWrapper>
  );
};

export default Brand;
