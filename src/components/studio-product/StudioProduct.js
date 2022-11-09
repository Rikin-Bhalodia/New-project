import React, { useState } from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-product/video.svg";
import Polygon from "../../assets/images/polygon-left.svg";
// import Header from "../../commonComponents/Header";
import { motion } from "framer-motion";
import Menu from "../../commonComponents/Menu";
import MenuIcon from "../../assets/images/product-section/menuIcon.svg";

const ReletedServices = React.lazy(() => import("./RelatedSrevices"));
const SimillerProduct = React.lazy(() => import("./SimillierProduct"));
const WatchMoreSlider = React.lazy(() => import("./WatchMoreSlider"));

const StudioProductWrapper = styled.div`
  position: relative;
  margin-top: 60px;
  .polygon-left {
    position: absolute;
    height: 1000px;
    z-index: -1;
  }
  .studio-product-head {
    display: flex;
    position: relative;
    height: 170px;
    align-items: center;
    justify-content: space-between;
    .leftside-area {
      .goback-link {
        a {
          font-size: 20px;
          text-decoration: underline;
          color: #000;
        }
      }
      .product-head {
        p {
          font-size: 18px;
          margin: 30px 0 10px;
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
    height: 100%;
    .studio-product-video {
      img {
        width: 100%;
        height: 550px;
        object-fit: cover;
      }
    }
    .box-area {
      .product-box {
        width: 364px;
        height: 400px;
        background: #a75b41;
        border-radius: 44px;
        padding: 0 30px;
        p {
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #ffffff;
          height: 100%;
        }
      }
    }
  }
`;

export default function StudioProduct() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <StudioProductWrapper>
        <img
          src={Polygon}
          alt="triangle-lr"
          className="polygon-left"
          loading="lazy"
        />
        <motion.div
          className="container-fluid px-5"
          initial={{ y: "200vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="studio-product-head">
            <div className="leftside-area">
              <div className="goback-link">
                <a href="/">Go Back</a>
              </div>
              <motion.div
                className="product-head"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p>STUDIO / CHANEL’S MOST EXPENSIVE PRODUCTS</p>
              </motion.div>
            </div>
            <div className="rightside-area">
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
            </div>
          </div>
          <div className="studio-product-body">
            <div className="studio-product-video">
              <img src={Video} alt="videoImg" width={"500px"} loading="lazy" />
            </div>
            <div className="box-area">
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
            </div>
          </div>
        </motion.div>
      </StudioProductWrapper>
      <SimillerProduct />
      <WatchMoreSlider />
      <ReletedServices />
    </>
  );
}
