import React from "react";
import styled from "styled-components";
import Connect from "../../assets/images/studio/connect.svg";
// import WithusText from "../../assets/images/studio/withus.svg";
// import A from "../../assets/images/studio/royclan/A.svg";
// import R from "../../assets/images/studio/royclan/R.svg";
// import O from "../../assets/images/studio/royclan/O.svg";
// import Y from "../../assets/images/studio/royclan/Y.svg";
// import N from "../../assets/images/studio/royclan/N.svg";
// import L from "../../assets/images/studio/royclan/L.svg";
// import C from "../../assets/images/studio/royclan/C.svg";
// import Leaf from "../../assets/images/studio/royclan/leaf.svg";
import FooterLogo from "../../assets/images/footer_logo.svg";
import { useLocation } from "react-router-dom";
import AnimatedTextWord from "../Animation/FlipAnimation";

const FooterWrapper = styled.div`
  padding: 50px 0px;
  position: relative;
  /* margin-top: 40px; */
  /* background: white; */
  .get {
    p {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 0 !important;
      position: absolute;
    }
  }
  .with-us1 {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    /* line-height: 122px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .connect-img {
    position: relative;
    top: 55px;
    left: -70px;
    width: 500px;
  }
  .f_logo {
    position: absolute;
    width: 750px;
    bottom: 0;
    right: 0;
  }
  .c-footer-info-other {
    margin-top: 30px;
  }
  .head-color {
    color: #fff;
  }
  .change-color {
    color: #fff;
  }
  @media (max-width: 1000px) {
    .f_logo {
      width: 600px;
    }
    .with-us1 {
      font-size: 80px;
    }
    .connect-img {
      left: -60px;
      width: 400px;
    }
  }
  @media (max-width: 700px) {
    padding: 20px 0px;
    .f_logo {
      width: 450px;
    }
    .with-us1 {
      font-size: 60px;
    }
    .connect-img {
      left: -50px;
      width: 300px;
    }
    .c-footer-info-other {
      margin-top: 20px;
    }
    .c-footer-info-other ul li a:after {
      content: " ";
      display: block;
      position: absolute;
      top: 4px;
      left: -9px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #a75b41;
    }
  }
  @media (max-width: 400px) {
    .get {
      p {
        font-size: 10px;
      }
    }
    .f_logo {
      width: 300px;
    }
    .with-us1 {
      font-size: 40px;
    }
    .connect-img {
      left: -40px;
      width: 200px;
      top: 30px;
    }
    .c-footer-info li {
      margin-bottom: 15px;
    }
    .c-footer-info {
      font-size: 9px;
      margin: 0 !important;
    }
    .c-footer-info-other {
      p {
        font-size: 9px;
      }
      ul {
        font-size: 9px;
        flex-wrap: wrap;
      }
    }
  }
`;

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/nft-metaverse");
  return (
    <FooterWrapper
      style={
        pathname === "/nft-metaverse"
          ? { background: "#000" }
          : { background: "white" }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-left get">
              <p className={pathname === "/nft-metaverse" ? "head-color" : ""}>
                GET IN TOUCH
              </p>
            </div>
          </div>
          <div className="col-12">
            <div className="text-center">
              <img src={Connect} alt="" className="connect-img" />
              <div
                className={
                  pathname === "/nft-metaverse"
                    ? "with-us1 change-color"
                    : "with-us1"
                }
              >
                <AnimatedTextWord text="WITH US" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="contect-area">
              <ul className="c-footer-info">
                <li>
                  <a href="#"> SEND US A MESSAGE </a>
                </li>
                <li>
                  <a href="tel:+91 9876543210">CALL +91 9876543210</a>
                </li>
                <li className="mb-0">
                  FIND US AT :<span>ABC StressT 981 Building Delhi-110088</span>
                </li>
                <li className="mb-0">
                  MAIL US AT :{" "}
                  <span>
                    <a href="#">abcd@royclan.com </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="c-footer-info-other">
              <p>
                KNOW THE WORLD OF LUXURY
                <span>
                  ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
                </span>
              </p>
              <ul>
                <li>
                  <a href="#">TERMS & CONDITIONS </a>
                </li>
                <li>
                  <a href="#">FAQs </a>
                </li>
                <li>
                  <a href="#">NEWSLETTER </a>
                </li>
                <li>
                  <a href="#">SHIPPING & RETURNS </a>
                </li>
                <li>
                  <a href="#">ABOUT US </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={FooterLogo} alt="" className="f_logo" />
    </FooterWrapper>
  );
};

export default Footer;
