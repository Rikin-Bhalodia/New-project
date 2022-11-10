import React, { useState } from "react";
import styled from "styled-components";
import AboutProductText from "../../assets/images/product-section/about-product-text.svg";
import { motion } from "framer-motion";

const AboutProductWrapper = styled.div`
  .about--text {
    margin-top: 100px;
    margin-bottom: 80px;
    text-align: center;
  }
  .about-product--container {
    border-bottom: 1px solid rgba(0, 0, 0, 0.37);
  }
  .about-below--container {
    padding: 0 38px 41px 103px;
  }
  .about-below--container .text1,
  .about-below--container .text3 {
    font-family: "Arial";
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.092px;
    padding-bottom: 20px;
  }
  .about-below--container .text2 {
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.092px;
    padding-bottom: 40px;
  }
  .about-below--container ul li {
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    margin-left: 20px;
    letter-spacing: 0.092px;
  }
  .product-details {
    gap: 94px;
    margin-bottom: 82px;
    margin-left: 103px;
  }
  .product-details .product-title {
    font-family: "Arial";
    font-weight: 900;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.092px;
    padding-bottom: 20px;
  }
  .product-details .product-detail {
    font-family: "Arial";
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.092px;
  }
  .blank-line {
    align-self: center;
    height: 1px;
    background: #000000;
    width: 100%;
  }
`;
const AboutProduct = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <AboutProductWrapper>
      <section className="about-product--container">
        <div className="about--text d-flex">
          <div className="blank-line"></div>
          <img loading="lazy" src={AboutProductText} alt="" />
          <div className="blank-line"></div>
        </div>
        <div className="about-below--container">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-100vh", opacity: 0 }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                },
              }
            }
            className="text1"
          >
            Bottega Senatore - When The Quality Talks Itself
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "100vh", opacity: 0 }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                },
              }
            }
            className="text2"
          >
            Bottega Senatore is a company that combines the professionalism of
            several collaborators with the forty years experience of a group of
            Italian Footwear Artisan Masters.
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-100vh", opacity: 0 }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                },
              }
            }
            className="text3"
          >
            Rubirio - High Quality Italian Brief Case
          </motion.div>
          <motion.ul
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "100vh", opacity: 0 }}
            animate={
              isInView && {
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                },
              }
            }
          >
            <li>
              This bag has an innate class, an accessory that immediately
              catches the eye!
            </li>
            <li>Covered internally in fabric, it has a lockable buckle.</li>
            <li>An accessory for everyone!</li>
          </motion.ul>
        </div>
        <div className="d-flex product-details">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.3,
                },
              }
            }
          >
            <div className="product-title">Material</div>
            <div className="product-detail">Tumbled leather</div>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.5,
                },
              }
            }
          >
            <div className="product-title">Color</div>
            <div className="product-detail">Lavender</div>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.7,
                },
              }
            }
          >
            <div className="product-title">Sole</div>
            <div className="product-detail">Leather</div>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.9,
                },
              }
            }
          >
            <div className="product-title">Reference</div>
            <div className="product-detail">RUBIRIODBG2</div>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "20vh", opacity: 0 }}
            animate={
              isInView && {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 1.1,
                },
              }
            }
          >
            <div className="product-title">Production</div>
            <div className="product-detail">Made in Italy</div>
          </motion.div>
        </div>
      </section>
    </AboutProductWrapper>
  );
};

export default AboutProduct;
