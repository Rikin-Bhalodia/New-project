import React, { useState } from "react";
import styled from "styled-components";
import backarrow from "../../assets/images/product-section/backarrow.svg";
import like from "../../assets/images/product-section/like.svg";
import share from "../../assets/images/product-section/share.svg";
import checkicon from "../../assets/images/product-section/checkicon.png";
import productSample from "../../assets/images/product-section/product-sample.svg";
import sampleimage1 from "../../assets/images/product-section/sampleimage1.svg";
import sampleimage2 from "../../assets/images/product-section/sampleimage2.svg";
import count from "../../assets/images/product-section/count.svg";
import productLogo from "../../assets/images/product-section/product-logo.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ProductSelectionCommonWrapper = styled.div`
  margin-top: 60px;
  .product-main-container {
    padding: 30px 40px;
  }
  .go-back-text {
    font-family: "Arial";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-decoration-line: underline;
  }
  .breadcumb-section {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    padding-top: 44px;
    margin-right: 48px;
  }
  .breadcumb-section span {
    font-size: 18px;
    font-weight: 700;
  }
  .breadcumb-section img {
    cursor: pointer;
  }
  .border-bottom {
    border-bottom: 0.5px solid #000000;
  }
  .product-logo {
    right: -32px;
    top: 67px;
  }
  .detail-sub1 {
    font-family: "Arial";
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
    color: #bdbdbd;
  }
  .detail-sub2 {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
  }
  .detail-sub3 {
    padding-top: 18px;
    padding-bottom: 20px;
    max-width: 380px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    text-align: justify;
    letter-spacing: 0.092px;
  }
  .size-container {
    padding-top: 15px;
    max-width: 380px;
  }
  .size-title div {
    font-family: "Arial";
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
  }
  .size-title img {
    transform: rotate(90deg);
    height: 7px;
    height: 15px;
    margin-left: 5px;
    margin-top: 2px;
  }
  .size--div {
    gap: 10px;
    padding: 15px 0 15px 0;
  }
  .size--div div {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background: #c4c4c4;
  }
  .size-guide {
    font-family: "Arial";
    font-style: italic;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-decoration-line: underline;
    text-transform: uppercase;
    padding-bottom: 25px;
  }
  .icon--container {
    gap: 20px;
    margin: 20px 0 20px 0;
  }
  .icon--container img {
    cursor: pointer;
  }
  .pin-code--section .text {
    font-family: "Arial";
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
  }
  .input--section {
    margin-top: 20px;
    border: 1px solid #000000;
    width: 217px;
  }
  .pin-code--section div input:focus {
    outline: none;
  }
  .pin-code--section div input {
    background: transparent;
    width: 154px;
    border: none;
    font-family: "Arial";
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 7.092px;
    text-transform: uppercase;
    color: #9d9d9d;
    padding: 10px 26px;
    padding-right: 0px !important;
  }
  .submit--section {
    background: #a75b41;
    border-left: 1px solid #000000;
    cursor: pointer;
  }
  .submit--section img {
    padding: 19px 19px 15px 21px;
  }
  .section--right-container {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 28%;
  }
  .sampleimg1 {
    padding-bottom: 20px;
  }
  .section--right {
    max-width: 260px;
    border: 1px solid #000000;
    padding: 10px;
  }
  .section--right .title {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 26px;
    line-height: 40px;
    padding-bottom: 10px;
    text-transform: uppercase;
    text-align-last: center;
  }
  .section--right .description {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    text-align: center;
    padding-bottom: 15px;
  }
  .button--container {
    font-family: "Arial";
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    padding: 13px 22px;
    cursor: pointer;
    margin-top: 40px;
    color: #a75b41;
    border: 2px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
    letter-spacing: 0.092px;
  }
  .code--text {
    font-family: "Arial";
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    text-align: center;
    margin-top: 11px;
  }
  .code--text span {
    font-weight: 700;
  }
  .price--item-section {
    position: absolute;
    top: 44%;
    left: -16%;
    width: 188px;
    background: radial-gradient(
      100% 100% at 0% 0%,
      rgba(220, 220, 220, 0.4) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
    filter: drop-shadow(0px 2px 20px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(15px);
    border-radius: 29px;
  }
  .price--title {
    font-family: "Arial";
    padding-top: 41px;
    font-weight: 700;
    font-size: 24px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
  }
  .quantity--title {
    font-family: "Arial";
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #a75b41;
    padding-top: 11px;
  }
  .count--machine {
    margin-top: 14px;
    margin-bottom: 40px;
    align-items: center;
    text-align: center;
  }

  .menu-icon {
    margin: 0 !important;
    top: -80px !important;
  }
  .product-selection-image {
    display: flex;
    justify-content: center;
    .price--item-section {
      position: absolute;
      left: 15%;
      background: #fff;
    }
  }
  .product--logo {
    position: absolute;
    left: 20%;
    top: 6%;
  }
  .sample-images {
    height: 60px;
  }
  .sample-images1 {
    height: 40px;
  }
  .center--container {
    width: 35%;
  }
  .left-side-part {
    width: 37%;
  }

  @media (max-width: 1300px) {
    .desktop-product-sample {
      width: 420px;
    }
  }

  @media (max-width: 1200px) {
    .desktop-product-sample {
      width: 400px;
    }
  }
  @media (max-width: 1100px) {
    .product--container {
      width: 100%;
      gap: 20px;
    }
    .left-side-part {
      width: 50%;
    }
    .section--right-container {
      width: 50%;
    }
  }
  @media (max-width: 800px) {
    .section--right {
      width: 300px;
      padding: 10px 10px;
      .title {
        font-size: 25px;
      }
      .description {
        font-size: 13px;
      }
    }
    .button--container {
      padding: 10px 20px;
      font-size: 20px;
      margin-top: 15px;
    }
    .code--text {
      font-size: 17px;
    }
    .detail-sub2 {
      font-size: 18px;
    }
    .size-title div {
      font-size: 15px;
    }
    .pin-code--section {
      margin-top: 15px;
      .text {
        font-size: 15px;
      }
    }
    .breadcumb-section span {
      font-size: 15px;
    }
    .go-back-text {
      font-size: 18px;
    }
    .pin-section {
      flex-direction: column;
    }
  }
  @media (max-width: 680px) {
    .product-main-container {
      padding: 50px 30px;
    }
    .section--right {
      width: 250px;
      padding: 5px 10px;
      .title {
        font-size: 23px;
      }
      .description {
        font-size: 12px;
      }
    }
    .button--container {
      padding: 15px 10px;
      font-size: 20px;
    }
    .code--text {
      font-size: 15px;
    }
    .detail-sub2 {
      font-size: 17px;
    }
    .size-title div {
      font-size: 14px;
    }
    .pin-code--section .text {
      font-size: 14px;
    }
    .breadcumb-section span {
      font-size: 14px;
    }
    .go-back-text {
      font-size: 17px;
    }
    .product-selection-image {
      .price--item-section {
        left: 0%;
      }
    }
    .sample-images {
      height: 60px;
    }
    .sample-images1 {
      height: 40px;
    }
    .product--logo {
      left: 10%;
    }
    .detail-sub3 {
      max-width: 230px;
    }
    .product-selection-image {
      flex-direction: column;
      align-items: center;

      .price--item-section {
        position: relative;
        left: unset;
        top: -30px;
        width: 160px;
        backdrop-filter: unset;
      }
    }
    .product--container {
      margin-top: 20px;
    }
  }
  @media (max-width: 550px) {
    .detail-sub2 {
      font-size: 14px;
    }
    .detail-sub3 {
      padding: 10px 0;
    }
    .section--right {
      width: 220px;
    }
    .size--div {
      padding: 10px 0;
    }
    .size-guide {
      font-size: 12px;
      padding-bottom: 15px;
    }
    .input--section {
      width: 200px;
    }
    .submit--section img {
      padding: 19px 3px 15px 9px;
    }
    .pin-code--section div input {
      padding: 0 20px;
    }
    .delivary-status .date {
      line-height: 18px;
      font-size: 12px;
    }
    .button--container {
      padding: 10px 8px;
      font-size: 16px;
    }
    .product-sample {
      width: 90%;
      height: 500px;
    }

    .price--title {
      font-size: 18px;
      padding-top: 20px;
    }
    .count--machine {
      margin-bottom: 20px;
    }
    .paths {
      font-size: 14px;
    }
    .product-selection-image {
      .price--item-section {
        top: 10px;
      }
    }
    .product--logo {
      left: 20px;
    }
    .product--container {
      margin-top: 40px;
    }
    .size--div div {
      width: 25px;
      height: 25px;
    }
  }
  @media (max-width: 460px) {
    .product-main-container {
      padding: 30px 10px;
    }
    .detail-sub2 {
      font-size: 12px;
    }
    .detail-sub3 {
      padding: 10px 0;
      font-size: 12px;
    }
    .section--right {
      width: 165px;
    }
    .size--div {
      padding: 10px 0;
      gap: 5px;
    }
    .size-guide {
      font-size: 10px;
      padding-bottom: 12px;
    }
    .input--section {
      width: 170px;
    }
    .submit--section img {
      padding: 19px 3px 15px 13px;
    }
    .pin-code--section div input {
      padding: 0 15px;
      width: 130px;
    }
    .delivary-status .date {
      line-height: 16px;
      font-size: 11px;
    }
    .button--container {
      padding: 10px 8px;
      font-size: 15px;
    }
    .product-sample {
      height: 430px;
    }
    .product--logo {
      top: 5.5%;
    }
    .price--item-section {
      width: 140px;
      backdrop-filter: unset;
    }
    .price--title {
      font-size: 16px;
      padding-top: 16px;
    }
    .count--machine {
      margin-bottom: 16px;
    }
    .section--right .title {
      font-size: 18px;
      padding-bottom: 0;
    }
    .section--right .description {
      font-size: 12px;
      padding-bottom: 10px;
    }
    .sampleimg1 {
      padding-bottom: 10px;
    }
    .sampleimg2 {
      padding-bottom: 10px;
    }
    .sample-images {
      height: 50px;
    }
    .sample-images1 {
      width: 30px;
    }
    .paths {
      font-size: 12px;
    }
  }
  .arrow {
    position: absolute;
    top: 275px;
    right: 30px;
    a i {
      font-size: 20px;
      color: black;
    }
  }
  .g-10 {
    gap: 10px;
  }
`;

const ProductSelectionCommon = () => {
  const [selectedState, setSelectedState] = useState("");
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 1150px)" });

  return (
    <ProductSelectionCommonWrapper>
      <section className="product-main-container">
        <div className="d-flex">
          <img loading="lazy" src={backarrow} alt="" />
          <div className="go-back-text">Go Back</div>
        </div>
        <motion.div
          initial={{ y: "20vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="breadcumb-section d-flex justify-content-between"
        >
          <div className="paths">
            SHOP / CLOTHING / WOMEN / DRESSES /
            <span>VERSACE BAROCCO GODDESS SLASH SILK DRESS</span>
          </div>
        </motion.div>
        {isResponsive && (
          <>
            <div className="product--logo">
              <img loading="lazy" src={productLogo} alt="" />
            </div>
            <motion.div
              initial={{ y: "20vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="product-selection-image"
            >
              <img
                loading="lazy"
                src={productSample}
                alt=""
                height={600}
                width={400}
                className="product-sample"
              />
              <div className="price--item-section">
                <div className="price--title">₹3,56,367.34</div>
                <div className="quantity--title">Quantity</div>
                <div className="count--machine">
                  <img loading="lazy" src={count} alt="" />
                </div>
              </div>
            </motion.div>
          </>
        )}
        <div className="product--container d-flex justify-content-between">
          <motion.div
            initial={{ y: "20vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="left-side-part"
          >
            <div className="detail1 position-relative">
              {!isResponsive && (
                <div className="position-absolute product-logo">
                  <img loading="lazy" src={productLogo} alt="" />
                </div>
              )}
              <div className="detail-sub1">VERSACE</div>
              <div className="detail-sub2">
                BAROCCO GODDESS SLASH SILK DRESS
              </div>
              <div className="detail-sub3 border-bottom">
                From the runway, this slashed silk dress features the Barocco
                Goddess print with multi-colored Medusa buttons clasping the
                ruche and slash detailing. Adorned at the top with a gold-tone
                Medusa button and collarbone cut-out detail.
              </div>
            </div>
            <div className="size-container border-bottom">
              <div className="size-title d-flex">
                <div>size</div>
                {selectedState === "!size" ? (
                  <img
                    loading="lazy"
                    src={backarrow}
                    alt=""
                    className="cur-pointer rotate-90"
                    onClick={() => setSelectedState("")}
                  />
                ) : (
                  <img
                    loading="lazy"
                    src={backarrow}
                    alt=""
                    className="cur-pointer"
                    onClick={() => setSelectedState("!size")}
                  />
                )}
              </div>
              {selectedState === "!size" ? (
                ""
              ) : (
                <>
                  <div className="size--div d-flex">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="size-guide">View Size Guide</div>
                </>
              )}
            </div>
            <div className="size-container border-bottom">
              <div className="size-title d-flex">
                <div>color</div>
                {selectedState === "!color" ? (
                  <img
                    loading="lazy"
                    src={backarrow}
                    alt=""
                    className="cur-pointer rotate-90"
                    onClick={() => setSelectedState("")}
                  />
                ) : (
                  <img
                    loading="lazy"
                    src={backarrow}
                    alt=""
                    className="cur-pointer"
                    onClick={() => setSelectedState("!color")}
                  />
                )}
              </div>
              {selectedState === "!color" ? (
                ""
              ) : (
                <div className="size--div d-flex">
                  <div style={{ background: "#FFE600" }}></div>
                  <div style={{ background: "#FF4E4E" }}></div>
                  <div style={{ background: "#63FA4B" }}></div>
                  <div style={{ background: "#1DA7F5" }}></div>
                  <div style={{ background: "#CF0CE0" }}></div>
                </div>
              )}
            </div>
            <div className="icon--container d-flex">
              <img loading="lazy" src={like} alt="" height={20} />
              <img loading="lazy" src={share} alt="" height={20} />
            </div>
            {!isResponsive && (
              <div className="pin-code--section">
                <div className="text">ENTER PIN CODE</div>
                <div className="d-flex align-items-center g-10">
                  <div className="input--section d-flex">
                    <input placeholder="201012" />
                    <div className="submit--section">
                      <img loading="lazy" src={checkicon} alt="" />
                    </div>
                  </div>
                  <div className="position-relative delivary-status">
                    <div className="text">ESTIMATED DELIVERY</div>
                    <div className="date">16 July - 19 July</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
          {!isResponsive && (
            <motion.div
              initial={{ y: "20vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="center--container position-relative "
            >
              <img
                loading="lazy"
                src={productSample}
                alt=""
                height={600}
                width={435}
                className="desktop-product-sample"
              />
              <div className="price--item-section">
                <div className="price--title">₹3,56,367.34</div>
                <div className="quantity--title">Quantity</div>
                <div className="count--machine">
                  <img loading="lazy" src={count} alt="" />
                </div>
              </div>
              <div class="arrow">
                <a href="">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </a>
              </div>
            </motion.div>
          )}
          <motion.div
            initial={{ y: "20vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="section--right-container"
          >
            <div className="section--right">
              <div className="title">how it feels</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
                tortor eu, et aliquet urna. Sed nulla diam lobortis faucibus.
                Dictum turpis lobortis{" "}
              </div>
              <div className="d-flex sampleimg1 justify-content-between">
                <img
                  loading="lazy"
                  src={sampleimage1}
                  alt=""
                  height={80}
                  className="sample-images"
                />
                <img
                  loading="lazy"
                  src={sampleimage1}
                  alt=""
                  height={80}
                  className="sample-images"
                />
                <img
                  loading="lazy"
                  src={sampleimage1}
                  alt=""
                  height={80}
                  className="sample-images"
                />
                <img
                  loading="lazy"
                  src={sampleimage1}
                  alt=""
                  height={80}
                  className="sample-images"
                />
              </div>
              <div className="d-flex sampleimg2 justify-content-between">
                <img
                  loading="lazy"
                  src={sampleimage2}
                  alt=""
                  height={50}
                  className="sample-images1"
                />
                <img
                  loading="lazy"
                  src={sampleimage2}
                  alt=""
                  height={50}
                  className="sample-images1"
                />
                <img
                  loading="lazy"
                  src={sampleimage2}
                  alt=""
                  height={50}
                  className="sample-images1"
                />
                <img
                  loading="lazy"
                  src={sampleimage2}
                  alt=""
                  height={50}
                  className="sample-images1"
                />
              </div>
            </div>
            <div className="button--container">ADD TO CART</div>
            <div className="code--text">
              50% off use code <span>FIRST50</span>
            </div>
            {isResponsive && (
              <div className="pin-code--section">
                <div className="text">ENTER PIN CODE</div>
                <div className="d-flex pin-section">
                  <div className="input--section d-flex">
                    <input placeholder="201012" />
                    <div className="submit--section">
                      <img loading="lazy" src={checkicon} alt="" />
                    </div>
                  </div>
                  <div className="position-relative delivary-status">
                    <div className="text">ESTIMATED DELIVERY</div>
                    <div className="date">16 July - 19 July</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </ProductSelectionCommonWrapper>
  );
};

export default ProductSelectionCommon;
