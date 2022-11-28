import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../commonComponents/Header";
import BrandBanner from "../../assets/images/brand/banner.svg";
import Fendi from "../../assets/images/brand/fendi.svg";
import FImg from "../../assets/images/brand/f-small.svg";
import Loved from "../../assets/images/brand/text-love.svg";
import Ranttxt from "../../assets/images/brand/ranttxt.svg";
import Topproduct from "../../assets/images/brand/top-product.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import MenuIcon from "../../assets/images/studio/menu.svg";
import { useMediaQuery } from "react-responsive";
const Menu = React.lazy(() => import("../../commonComponents/Menu"));
const ProductPoP = React.lazy(() => import("../Product/Product"));
const TopProduct = React.lazy(() => import("./TopProduct"));

const BrandWrapper = styled.div`
  background: #fcf9f2;
  padding: 0 0 50px;
  .brand-section {
    .img1 {
      width: 100vw;
      object-fit: cover;
      position: relative;
    }

    .fendi-section {
      padding: 50px 30px 30px;
      background: #000000;
      .img2 {
        height: 100vh;
        width: 100vw;
        object-fit: cover;
      }
      .fendi-area {
        display: flex;
        align-items: center;
        gap: 20px;
        .left-area {
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
          display: flex;
          align-items: center;
          img {
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
  .think {
    width: 100%;
  }
  .menu-icon {
    display: none;
  }

  @media (max-width: 1000px) {
    .menu-width {
      width: 100%;
      position: absolute;
      z-index: 9;
    }
    .menu-icon {
      display: flex;
      margin: auto;
      width: 83px;
      height: 83px;
    }
    .brand-section .fendi-section .fendi-area .left-area {
      p {
        font-size: 14px;
      }
      h2 {
        font-size: 70px;
      }
    }
    .most-loved-product {
      width: 700px;
    }
    .think-section h4 {
      font-size: 30px;
    }
    .rent-it {
      width: 200px;
    }
  }
  @media (max-width: 850px) {
    .brand-section .img1 {
      height: 50vh;
    }

    .brand-section .fendi-section .fendi-area {
      .left-area {
        p {
          font-size: 12px;
        }
        h2 {
          font-size: 60px;
        }
        .imgs .fimg {
          height: 200px;
        }
      }
      .right-area img {
        height: 460px;
      }
    }
    .most-loved-product {
      width: 600px;
    }
    .think {
      background: #ffe600;
    }
    .think-section {
      border: none;
      h4 {
        font-size: 20px;
        text-transform: uppercase;
      }
    }
    .rent-it {
      width: 150px;
    }
  }
  @media (max-width: 700px) {
    .fendi-area {
      width: 100%;
    }
    .brand-section .fendi-section .fendi-area {
      .left-area {
        width: 50%;

        p {
          font-size: 11px;
        }
        h2 {
          font-size: 55px;
        }
        .imgs .fimg {
          height: 150px;
        }
      }
      .right-area {
        width: 50%;
        img {
          height: 430px;
        }
      }
    }
    .most-loved-product {
      width: 500px;
    }
    .think-section {
      padding: 0;
      h4 {
        font-size: 15px;
      }
    }
    .rent-it {
      width: 110px;
    }
  }
  @media (max-width: 600px) {
    .brand-section .fendi-section .fendi-area {
      .left-area {
        p {
          font-size: 10px;
        }
        h2 {
          font-size: 45px;
        }
        .imgs .fimg {
          height: 120px;
        }
      }
      .right-area {
        img {
          height: 380px;
        }
      }
    }
    .most-loved-product {
      width: 400px;
    }
    .think-section {
      h4 {
        font-size: 13px;
      }
    }
    .rent-it {
      width: 100px;
    }
  }
  @media (max-width: 500px) {
    .brand-section .fendi-section .fendi-area {
      .left-area {
        p {
          font-size: 10px;
          text-overflow: ellipsis;
          -webkit-line-clamp: 5;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 14px;
        }
        h2 {
          font-size: 40px;
        }
        .imgs {
          margin-top: 10px;
          .fimg {
            height: 90px;
            padding-right: 15px;
          }
        }
      }
      .right-area {
        img {
          height: 320px;
        }
      }
    }
    .imgs {
      margin-top: 15px;
      .fimg {
        width: 100%;
        height: 200px;
      }
    }
    .most-loved-product {
      width: 300px;
    }
    .think-section {
      h4 {
        font-size: 10px;
      }
    }
    .rent-it {
      width: 55px;
    }
  }
  @media (max-width: 380px) {
    .brand-section .fendi-section .fendi-area {
      .left-area {
        h2 {
          font-size: 30px;
        }
        .imgs {
          margin-top: 5px;
          .fimg {
            height: 70px;
            padding-right: 10px;
          }
        }
      }
      .right-area {
        img {
          height: 230px;
        }
      }
    }
    .think-section {
      h4 {
        font-size: 9px;
      }
    }
    .rent-it {
      width: 40px;
    }
  }
`;

const Brand = () => {
  const [isInView, setIsInView] = useState(false);
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <BrandWrapper>
      <motion.div
        // initial={{ y: "200vh" }}
        // animate={{ y: 0 }}
        // transition={{ duration: 1 }}
        className="brand-section"
      >
        <img loading="lazy" src={BrandBanner} alt="" className="img1" />
        <div className="menu-width">
          <div
            className="menu-icon"
            onClick={() => setMenuOpenModal(!menuOpenModal)}
          >
            <Menu
              menuOpenModal={menuOpenModal}
              onClick={(e) => e.stopPropagation()}
            />
            {menuOpenModal ? (
              <img src={MenuIcon} loading="lazy" alt="menu" height={45} />
            ) : (
              <img src={MenuIcon} loading="lazy" alt="menu" height={45} />
            )}
          </div>
        </div>
        <div className="fendi-section">
          <div className="fendi-area">
            <motion.div
              initial={{ x: "-50vw", width: "70%" }}
              whileInView={() => {
                setIsInView(true);
              }}
              animate={
                isInView && {
                  x: 0,
                  width: "70%",
                  transition: {
                    duration: 1.5,
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
              {!isResponsive && (
                <div className="imgs">
                  <div className="d-flex" style={{ overflow: "hidden" }}>
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
                      initial={{ x: "-50vw" }}
                      whileInView={() => {
                        setIsInView(true);
                      }}
                      animate={
                        isInView && {
                          x: 0,
                          transition: {
                            duration: 2.6,
                            ease: "easeInOut",
                          },
                        }
                      }
                    />
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
                      initial={{ x: "-50vw" }}
                      whileInView={() => {
                        setIsInView(true);
                      }}
                      animate={
                        isInView && {
                          x: 0,
                          transition: {
                            duration: 2.3,
                            ease: "easeInOut",
                          },
                        }
                      }
                    />
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
                      initial={{ x: "-50vw" }}
                      whileInView={() => {
                        setIsInView(true);
                      }}
                      animate={
                        isInView && {
                          x: 0,
                          transition: {
                            duration: 2,
                            ease: "easeInOut",
                          },
                        }
                      }
                    />
                  </div>
                </div>
              )}
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
                    duration: 1.5,
                  },
                }
              }
              className="right-area"
            >
              <img loading="lazy" src={Fendi} alt="Fendi" />
            </motion.div>
          </div>
          {isResponsive && (
            <div className="d-flex imgs" style={{ overflow: "hidden" }}>
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
                initial={{ x: "-50vw" }}
                whileInView={() => {
                  setIsInView(true);
                }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 2.6,
                      ease: "easeInOut",
                    },
                  }
                }
              />
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
                initial={{ x: "-50vw" }}
                whileInView={() => {
                  setIsInView(true);
                }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 2.3,
                      ease: "easeInOut",
                    },
                  }
                }
              />
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
                initial={{ x: "-50vw" }}
                whileInView={() => {
                  setIsInView(true);
                }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 2,
                      ease: "easeInOut",
                    },
                  }
                }
              />
            </div>
          )}
        </div>
      </motion.div>
      <div className="love-product text-center">
        <img loading="lazy" src={Loved} alt="" className="most-loved-product" />
      </div>
      <ProductPoP />
      <div className="think">
        <div className="think-section">
          <h4>thinking of buying for an occassion?</h4>
          <img loading="lazy" src={Ranttxt} alt="" className="rent-it" />
        </div>
      </div>
      <div className="head text-center">
        <img
          loading="lazy"
          src={Topproduct}
          alt=""
          className="most-loved-product"
        />
      </div>
      <TopProduct />
      <TopProduct />
    </BrandWrapper>
  );
};

export default Brand;
