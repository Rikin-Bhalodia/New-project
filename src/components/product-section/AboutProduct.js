import React, { useState } from "react";
import styled from "styled-components";
import AboutProductText from "../../assets/images/product-section/about-product-text.svg";
import { motion } from "framer-motion";

const AboutProductWrapper = styled.div`
  .about--text {
    margin-top: 100px;
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
    padding-bottom: 20px;
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
    gap: 90px;
    margin-bottom: 82px;
    margin-left: 103px;
    justify-content: center;
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
  .open-product-details {
    border-radius: 50%;
    font-size: 40px;
    display: flex;
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    padding-bottom: 9px;
    margin: auto;
    border: 1px solid black;
    margin-bottom: 40px;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    .about--text {
      margin-top: 50px;
    }
    .about-product-text {
      width: 550px;
    }
    .about-below--container {
      padding: 0 40px 40px;
    }
    .product-details {
      padding: 0px 50px 30px;
      margin: 0;
    }
  }
  @media (max-width: 1000px) {
    .about-product-text {
      width: 500px;
    }
    .about-below--container .text1,
    .about-below--container .text3 {
      font-size: 16px;
      line-height: 20px;
    }
    .about-below--container {
      padding: 0 40px 0px;
    }
    .product-details {
      padding: 30px 50px 30px;
      margin: 0;
      gap: 70px;
    }
    .about-below--container .text2 {
      font-size: 16px;
    }
    .about-below--container ul li {
      font-size: 16px;
    }
  }
  @media (max-width: 800px) {
    .about-product-text {
      width: 450px;
    }
    .product-details {
      padding: 30px 50px 50px;
      margin: 0;
      gap: 50px;
      .product-title {
        font-size: 16px;
      }
      .product-detail {
        font-size: 16px;
      }
    }
    .about--text {
      margin-top: 40px;
    }
  }
  @media (max-width: 600px) {
    .about--text {
      margin-top: 30px;
    }
    .about-product-text {
      width: 400px;
    }
    .about-below--container .text1,
    .about-below--container .text3 {
      font-size: 14px;
      line-height: 18px;
      padding-bottom: 15px;
    }
    .about-below--container {
      padding: 0 30px 0px;
    }
    .product-details {
      padding: 20px 25px 30px;
      margin: 0;
      gap: 30px;
      flex-wrap: wrap;
      .product-title {
        font-size: 14px;
      }
      .product-detail {
        font-size: 14px;
      }
    }
    .about-below--container .text2 {
      font-size: 14px;
      padding-bottom: 20px;
    }
    .about-below--container ul li {
      font-size: 14px;
    }
  }
  @media (max-width: 500px) {
    .about-product-text {
      width: 300px;
    }
    .about-below--container .text1,
    .about-below--container .text3 {
      font-size: 13px;
      line-height: 16px;
    }
    .about-below--container {
      padding: 0 20px 0px;
    }
    .product-details {
      padding: 15px 20px 25px;
      margin: 0;
      gap: 15px;
      .product-title {
        font-size: 13px;
      }
      .product-detail {
        font-size: 13px;
      }
    }
    .about-below--container .text2 {
      font-size: 13px;
    }
    .about-below--container ul li {
      font-size: 13px;
    }
  }
  @media (max-width: 400px) {
    .about-product-text {
      width: 250px;
    }
    .about-below--container .text1,
    .about-below--container .text3 {
      font-size: 12px;
    }
    .about-below--container {
      padding: 0 15px 0px;
    }
    .product-details {
      padding: 10px 10px 15px;
      margin: 0;
      gap: 20px;
      .product-title {
        font-size: 12px;
      }
      .product-detail {
        font-size: 12px;
      }
    }
    .about-below--container .text2 {
      font-size: 12px;
    }
    .about-below--container ul li {
      font-size: 12px;
    }
  }
`;
const AboutProduct = ({ desView, setDesView }) => {
  return (
    <AboutProductWrapper>
      <section className="about-product--container">
        <div className="about--text d-flex">
          <div className="blank-line"></div>
          <img
            loading="lazy"
            src={AboutProductText}
            alt=""
            className="about-product-text"
          />
          <div className="blank-line"></div>
        </div>
        <div
          className="open-product-details"
          onClick={() => setDesView(!desView)}
        >
          {desView ? "-" : "+"}
        </div>
        {desView && (
          <>
            <div className="about-below--container">
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
                className="text1"
              >
                Bottega Senatore - When The Quality Talks Itself
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
                className="text2"
              >
                Bottega Senatore is a company that combines the professionalism
                of several collaborators with the forty years experience of a
                group of Italian Footwear Artisan Masters.
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
                className="text3"
              >
                Rubirio - High Quality Italian Brief Case
              </motion.div>
              <motion.ul
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
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
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
              >
                <div className="product-title">Material</div>
                <div className="product-detail">Tumbled leather</div>
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
              >
                <div className="product-title">Color</div>
                <div className="product-detail">Lavender</div>
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
              >
                <div className="product-title">Sole</div>
                <div className="product-detail">Leather</div>
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
              >
                <div className="product-title">Reference</div>
                <div className="product-detail">RUBIRIODBG2</div>
              </motion.div>
              <motion.div
                initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
                animate={
                  desView && {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                    },
                  }
                }
              >
                <div className="product-title">Production</div>
                <div className="product-detail">Made in Italy</div>
              </motion.div>
            </div>{" "}
          </>
        )}
      </section>
    </AboutProductWrapper>
  );
};

export default AboutProduct;
