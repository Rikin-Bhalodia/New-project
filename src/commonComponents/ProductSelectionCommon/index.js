import React, { useState } from "react";
import styled from "styled-components";
import backarrow from "../../assets/images/product-section/backarrow.svg";
import MenuIcon from "../../assets/images/product-section/menuIcon.svg";
import like from "../../assets/images/product-section/like.svg";
import share from "../../assets/images/product-section/share.svg";
import checkicon from "../../assets/images/product-section/checkicon.png";
import productSample from "../../assets/images/product-section/product-sample.svg";
import sampleimage1 from "../../assets/images/product-section/sampleimage1.svg";
import sampleimage2 from "../../assets/images/product-section/sampleimage2.svg";
import count from "../../assets/images/product-section/count.svg";
import productLogo from "../../assets/images/product-section/product-logo.svg";

const ProductSelectionCommonWrapper = styled.div`
  .product-main-container {
    margin-top: 117px;
    margin-left: 73px;
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
  .detail1 {
    padding-top: 38px;
  }
  .product-logo {
    right: -70px;
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
    width: 320px;
  }
  .detail-sub3 {
    padding-top: 18px;
    padding-bottom: 31px;
    max-width: 264px;
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    text-align: justify;
    letter-spacing: 0.092px;
  }
  .size-container {
    padding-top: 20px;
    max-width: 264px;
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
    padding: 15px 0 25px 0;
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
    gap: 27px;
    margin: 20px 0 40px 0;
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
    padding: 16px 26px;
    padding-right: 0px !important;
  }
  .submit--section {
    background: #a75b41;
    border-left: 1px solid #000000;
    cursor: pointer;
  }
  .submit--section img {
    padding: 19px 21.05px 15px 18px;
  }
  .section--right-container {
    align-self: center;
    margin-right: 31px;
  }
  .sampleimg1 {
    padding-bottom: 37px;
  }
  .section--right {
    max-width: 368px;
    border: 1px solid #000000;
    padding: 34px 24px 27px 24px;
  }
  .section--right .title {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    padding-bottom: 29px;
    text-transform: uppercase;
    text-align-last: center;
  }
  .section--right .description {
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    padding-bottom: 41px;
  }
  .button--container {
    font-family: "Arial";
    font-weight: 700;
    font-size: 36px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    padding: 33px 48px;
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
`;

const ProductSelectionCommon = () => {
  const [selectedState, setSelectedState] = useState("");

  return (
    <ProductSelectionCommonWrapper>
      <section className="product-main-container">
        <div className="d-flex">
          <img src={backarrow} alt="" />
          <div className="go-back-text">Go Back</div>
        </div>
        <div className="breadcumb-section d-flex justify-content-between">
          <div>
            SHOP / CLOTHING / WOMEN / DRESSES /{" "}
            <span>VERSACE BAROCCO GODDESS SLASH SILK DRESS</span>
          </div>
          <img src={MenuIcon} alt="menu" />
        </div>
        <div className="product--container d-flex justify-content-between">
          <div>
            <div className="detail1 position-relative">
              <div className="position-absolute product-logo">
                <img src={productLogo} alt="" />
              </div>
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
                    src={backarrow}
                    alt=""
                    className="cur-pointer rotate-90"
                    onClick={() => setSelectedState("")}
                  />
                ) : (
                  <img
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
                    src={backarrow}
                    alt=""
                    className="cur-pointer rotate-90"
                    onClick={() => setSelectedState("")}
                  />
                ) : (
                  <img
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
              <img src={like} alt="" />
              <img src={share} alt="" />
            </div>
            <div className="pin-code--section">
              <div className="text">ENTER PIN CODE</div>
              <div className="d-flex">
                <div className="input--section d-flex">
                  <input placeholder="201012" />
                  <div className="submit--section">
                    <img src={checkicon} alt="" />
                  </div>
                </div>
                <div className="position-relative delivary-status">
                  <div className="text">ESTIMATED DELIVERY</div>
                  <div className="date">16 July - 19 July</div>
                </div>
              </div>
            </div>
          </div>
          <div className="center--container position-relative">
            <img src={productSample} alt="" />
            <div className="price--item-section">
              <div className="price--title">₹3,56,367.34</div>
              <div className="quantity--title">Quantity</div>
              <div className="count--machine">
                <img src={count} alt="" />
              </div>
            </div>
          </div>
          <div className="section--right-container">
            <div className="section--right">
              <div className="title">how it feels</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
                tortor eu, et aliquet urna. Sed nulla diam lobortis faucibus.
                Dictum turpis lobortis{" "}
              </div>
              <div className="d-flex sampleimg1 justify-content-between">
                <img src={sampleimage1} alt="" />
                <img src={sampleimage1} alt="" />
                <img src={sampleimage1} alt="" />
                <img src={sampleimage1} alt="" />
              </div>
              <div className="d-flex sampleimg2 justify-content-between">
                <img src={sampleimage2} alt="" />
                <img src={sampleimage2} alt="" />
                <img src={sampleimage2} alt="" />
                <img src={sampleimage2} alt="" />
              </div>
            </div>
            <div className="button--container">ADD TO CART</div>
            <div className="code--text">
              50% off use code <span>FIRST50</span>
            </div>
          </div>
        </div>
      </section>
    </ProductSelectionCommonWrapper>
  );
};

export default ProductSelectionCommon;
