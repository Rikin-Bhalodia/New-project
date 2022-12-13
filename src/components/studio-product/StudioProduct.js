import React, { useState } from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-product/video.svg";
import Polygon from "../../assets/images/polygon-left.svg";
// import Header from "../../commonComponents/Header";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Menu from "../../commonComponents/Menu";
import MenuIcon from "../../assets/images/product-section/menuIcon.svg";

const ReletedServices = React.lazy(() => import("./RelatedSrevices"));
const SimillerProduct = React.lazy(() => import("./SimillierProduct"));
const WatchMoreSlider = React.lazy(() => import("./WatchMoreSlider"));

const StudioProductWrapper = styled.div`
  position: relative;
  .polygon-left {
    position: absolute;
    height: 600px;
    z-index: -1;
  }
  .studio-product-head {
    margin-top: 60px;
    display: flex;
    position: relative;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    .leftside-area {
      .goback-link {
        a {
          font-size: 17px;
          text-decoration: underline;
          color: #000;
        }
      }
      .product-head {
        p {
          font-size: 17px;
          margin: 10px 0;
        }
      }
    }
    .rightside-area {
      .homePageButtonSection {
        position: relative;
        right: 140px;
        .menu-icon {
          top: 0 !important;
        }
      }
    }
  }
  .studio-product-body {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 50px;
    height: 100%;
    .studio-product-video {
      width: 100%;
      img {
        width: 750px;
        height: 450px;
        object-fit: cover;
      }
    }
    .box-area {
      .product-box {
        width: 364px;
        height: fit-content;
        background: #a75b41;
        border-radius: 44px;
        padding: 40px 30px 30px;
        p {
          font-weight: 400;
          font-size: 17px;
          line-height: 26px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          height: 100%;
          text-align: justify;
        }
      }
    }
  }
  @media screen and (max-width: 1270px) {
    .studio-product-body {
      gap: 30px;
      .studio-product-video {
        img {
          width: 100%;
        }
      }
      .box-area {
        .product-box {
          width: 250px;
          /* height: 400px; */
          /* padding: 0 20px; */
          p {
            font-size: 15px;
            line-height: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .studio-product-body {
      flex-direction: column;
      gap: 0px;
      .studio-product-video {
        img {
          height: 100vh;
        }
      }
      .box-area {
        .product-box {
          width: 100%;
          /* height: 400px; */
          border-radius: 0px;
          position: relative;
          top: -6px;
          p {
            font-size: 17px;
            line-height: 26px;
          }
        }
      }
    }
    .studio-product-head {
      margin: 0;
      position: absolute;
      .leftside-area {
        padding: 0px 0 0 20px;
        margin-top: 40px;
        .goback-link {
          a {
            color: #ffffff;
          }
        }
        .product-head {
          p {
            display: none;
          }
        }
      }
    }
  }
`;

export default function StudioProduct() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <>
      <StudioProductWrapper>
        <img
          src={Polygon}
          alt="triangle-lr"
          className="polygon-left"
          loading="lazy"
        />
        <div className={` ${isResponsive ? "" : "container-fluid px-5"}`}>
          <div className="studio-product-head">
            <motion.div
              initial={{ y: "30vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="leftside-area"
            >
              <div className="goback-link">
                <a href="/">Go Back</a>
              </div>
              <div className="product-head">
                <p>STUDIO / CHANEL’S MOST EXPENSIVE PRODUCTS</p>
              </div>
            </motion.div>
            {!isResponsive && (
              <motion.div
                initial={{ y: "30vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="rightside-area"
              >
                <div className="homePageButtonSection">
                  <div
                    className="menu-icon"
                    onClick={() => setMenuOpenModal(!menuOpenModal)}
                  >
                    <Menu
                      menuOpenModal={menuOpenModal}
                      onClick={(e) => e.stopPropagation()}
                    />
                    {menuOpenModal ? (
                      <img
                        src={MenuIcon}
                        loading="lazy"
                        alt="menu"
                        height={100}
                      />
                    ) : (
                      <img
                        src={MenuIcon}
                        loading="lazy"
                        alt="menu"
                        height={100}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          {/* {!isResponsive && ( */}
          <div className="studio-product-body">
            <motion.div
              initial={{ y: "30vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="studio-product-video"
            >
              <img src={Video} alt="videoImg" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ y: "30vh" }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="box-area"
            >
              <div className="product-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laboru
                </p>
              </div>
            </motion.div>
          </div>
          {/* )} */}
        </div>
      </StudioProductWrapper>
      <SimillerProduct />
      <WatchMoreSlider />
      <ReletedServices />
    </>
  );
}
