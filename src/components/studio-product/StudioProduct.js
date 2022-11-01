import React from "react";
import styled from "styled-components";
import Video from "../../assets/images/studio-product/video.svg";
import ReletedServices from "./RelatedSrevices";
import SimillerProduct from "./SimillierProduct";
import WatchMoreSlider from "./WatchMoreSlider";
import Polygon from "../../assets/images/polygon-left.svg";
import Header from "../../commonComponents/Header";
import Footer from "../../commonComponents/Footer";
import { motion } from "framer-motion";
import Menu from "../../commonComponents/Menu";

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
        right: 200px;
        bottom: -100px;
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
        height: 650px;
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
  return (
    <>
      <Header />
      <StudioProductWrapper>
        <img src={Polygon} alt="" className="polygon-left" />
        <motion.div
          className="container-fluid px-5"
          initial={{ y: "200vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
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
                transition={{ duration: 0.6 }}
              >
                <p>STUDIO / CHANEL’S MOST EXPENSIVE PRODUCTS</p>
              </motion.div>
            </div>
            <div className="rightside-area">
              <div className="homePageButtonSection">
                <Menu />
              </div>
            </div>
          </div>
          <div className="studio-product-body">
            <div className="studio-product-video">
              <img src={Video} alt="" width={"500px"} />
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
