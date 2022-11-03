import React, { useState } from "react";
import styled from "styled-components";
import smallProduct from "../../assets/images/studio-product/small-product.svg";
import bigProduct from "../../assets/images/studio-product/big-product.svg";
import productHead from "../../assets/images/studio-product/product-head.svg";
import SP from "../../assets/images/studio-product/s-p.svg";
import Polygon from "../../assets/images/polygon-right.svg";
import { motion } from "framer-motion";

const SimillerProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 100px 0;
  padding: 0 0 0 100px;
  position: relative;
  .polygon-right {
    position: absolute;
    height: 1000px;
    z-index: -1;
    right: 0;
  }
  .simillier-leftpart {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
    .simillier-img {
      position: relative;

      div {
        position: absolute;
        top: -57px;
        left: -36px;
      }
      p {
        font-size: 25px;
        font-weight: 600;
      }
    }
    .simillier-btn {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .btn-top {
        display: flex;
        align-items: center;
        gap: 20px;
        p {
          font-size: 18px;
          margin-bottom: 0;
          font-weight: 600;
        }
        .btn1 {
          background: #ffffff;
          border: 1px solid #a75b41;
          border-radius: 79px;
          padding: 0.7rem 3rem;
          text-transform: uppercase;
          font-weight: 700;
          color: #a75b41;
          text-align: center;
          transition: all 0.4s linear;
        }

        .btn1:hover {
          background: #a75b41;
          color: #fff;
        }

        .btn2 {
          background: #a75b41;
          border-radius: 46px;
          padding: 0.7rem 3rem;
          text-transform: uppercase;
          text-align: center;
          color: #ffffff;
          border: 1px solid #a75b41;
          transition: all 0.4s linear;
        }
        .btn2:hover {
          background: #fff;
          color: #a75b41;
        }
      }
      .btn-bottom {
        .btn3 {
          background: #665e2f;
          border-radius: 46px;
          padding: 0.7rem 3rem;
          text-transform: uppercase;
          text-align: center;
          color: #ffffff;
          border: 1px solid #665e2f;
          transition: all 0.4s linear;
        }

        .btn3:hover {
          background: #fff;
          color: #665e2f;
        }
      }
    }
  }
  .simillier-rightpart {
    .simillier-head {
      margin-bottom: 40px;
    }
    .simillier-body {
      display: grid;
      gap: 20px;
      .product-box {
        display: flex;
        align-items: center;
        gap: 30px;
        .right-img {
          width: 150px;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 150px;
            object-fit: none;
          }
        }
        .right-data {
          h5 {
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: #665e2f;
          }
          p {
            width: 60%;
            font-weight: 700;
            font-size: 13px;
            line-height: 15px;
            color: #a65a40;
            padding: 10px 0 25px;
          }
          h6 {
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: #665e2f;
          }
        }
      }
    }
  }
  .productHeadImg {
    width: 465px;
  }
  .bigProductImg {
    height: 550px;
  }
`;
// const svgVariants = {
//   hidden: {
//     rotate: "-180deg",
//   },
//   visible: {
//     rotate: 0,
//     transition: {
//       duration: 1,
//     },
//   },
// };
// const pathVariants = {
//   hidden: {
//     pathLength: 0,
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 5,
//       ease: "easeInOut",
//     },
//   },
// };

const SimillerProduct = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <SimillerProductWrapper>
      <img
        src={Polygon}
        alt="triangle-rl"
        className="polygon-right"
        loading="lazy"
      />
      <motion.div
        className="simillier-leftpart"
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "60vh" }}
        animate={
          isInView && {
            y: 0,
            transition: {
              duration: 0.7,
            },
          }
        }
      >
        <div className="simillier-img">
          <div>
            <img
              src={productHead}
              alt="productHeadImg"
              className="productHeadImg"
              loading="lazy"
            />
          </div>
          <img
            src={bigProduct}
            alt=""
            className="bigProductImg"
            loading="lazy"
          />
          <p>₹ 1890</p>
        </div>
        <div className="simillier-btn">
          <div className="btn-top">
            <a href="/" className="btn1">
              ADD TO CART
            </a>
            <p>or</p>
            <a href="" className="btn2">
              RENT IT
            </a>
          </div>
          <div className="btn-bottom">
            <a href="" className="btn3">
              KNOW MORE
            </a>
          </div>
        </div>
      </motion.div>
      <div className="simillier-rightpart">
        <div className="simillier-head">
          <img src={SP} alt="sp-1" loading="lazy" />
        </div>
        <div className="simillier-body">
          <motion.div
            className="product-box"
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
          >
            <div className="right-img">
              <motion.img
                src={smallProduct}
                alt="smallProduct1"
                loading="lazy"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </div>
            <div className="right-data">
              <h5>product 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h6>Rs. 1890</h6>
            </div>
          </motion.div>
          <motion.div
            className="product-box"
            initial={{ x: "50vw" }}
            whileInView={() => {
              setIsInView(true);
            }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
          >
            <div className="right-img">
              <motion.img
                src={smallProduct}
                loading="lazy"
                alt="smallProduct1"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </div>
            <div className="right-data">
              <h5>product 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h6>Rs. 1890</h6>
            </div>
          </motion.div>
          <motion.div
            className="product-box"
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "50vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.4,
                },
              }
            }
          >
            <div className="right-img">
              <motion.img
                src={smallProduct}
                loading="lazy"
                alt="smallProduct1"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
              />
            </div>
            <div className="right-data">
              <h5>product 1</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h6>Rs. 1890</h6>
            </div>
          </motion.div>
        </div>
      </div>
    </SimillerProductWrapper>
  );
};

export default SimillerProduct;
