import React from "react";
import styled from "styled-components";
import Header from "../../commonComponents/Header";
import BrandBanner from "../../assets/images/brand/banner.svg";
import FendiBanner from "../../assets/images/brand/fendi-banner.svg";
import Fendi from "../../assets/images/brand/fendi.svg";
import FImg from "../../assets/images/brand/f-small.svg";
import Menu from "../../commonComponents/Menu";
import Loved from "../../assets/images/brand/text-love.svg";
import Ranttxt from "../../assets/images/brand/ranttxt.svg";
import ProductPoP from "../Product/Product";
import TopProduct from "./TopProduct";

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
        top: 50px;
        display: flex;
        gap: 50px;
        .left-area {
          padding-left: 50px;
          h2 {
            font-weight: 400;
            font-size: 100px;
            color: #ffffff;
            font-family: Coral-Blush;
          }
          a {
            font-style: italic;
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            text-decoration-line: underline;
            color: #ffffff;
          }
          p {
            font-family: "Arial";
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #ffffff;
          }
          .imgs {
            margin-top: 80px;
            .fimg {
              z-index: 1;
              padding-right: 30px;
              height: 300px;
            }
          }
        }
        .right-area {
          img {
            width: 550px;
            height: 600px;
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
  return (
    <BrandWrapper>
      <Header />
      <div className="brand-section">
        <img src={BrandBanner} alt="" className="img1" />
        <div className="menu-box">
          <Menu />
        </div>
        <div className="fendi-section">
          <img src={FendiBanner} alt="" className="img2" />
          <div className="fendi-area">
            <div className="left-area">
              <h2>FENDI</h2>
              <div style={{ marginBottom: "30px" }}>
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
                {[1, 2, 3].map((_) => {
                  return <img src={FImg} alt="" className="fimg" />;
                })}
              </div>
            </div>
            <div className="right-area">
              <img src={Fendi} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="love-product text-center">
        <img src={Loved} alt="" />
      </div>
      <ProductPoP />
      <div className="think-section">
        <h4>thinking of buying for an occassion?</h4>
        <img src={Ranttxt} alt="" />
      </div>
      <TopProduct />
    </BrandWrapper>
  );
};

export default Brand;
