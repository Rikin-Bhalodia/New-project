import React from "react";
import styled from "styled-components";
import AboutProductText from "../../assets/images/product-section/about-product-text.svg";

import rentItText from "../../assets/images/product-section/rent-it-text.svg";
import completeLookText from "../../assets/images/product-section/complete-look-text.svg";
import postLike from "../../assets/images/product-section/postlike.svg";
import sandal from "../../assets/images/product-section/sandal.svg";
import ring from "../../assets/images/product-section/ring.svg";
import lipstick from "../../assets/images/product-section/lipstick.svg";
import makeupbox from "../../assets/images/product-section/makeupbox.svg";
import instapost from "../../assets/images/product-section/instapost.svg";
import ReletedServices from "../studio-product/RelatedSrevices";
const ProductSelectionCommon = React.lazy(() =>
  import("../../commonComponents/ProductSelectionCommon")
);
const YouMayLike = React.lazy(() =>
  import("../../commonComponents/ProductSelectionCommon/YouMayLike")
);

const ProductSectionWrapper = styled.div`
  .about--text {
    margin-top: 100px;
    margin-bottom: 80px;
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
    padding-bottom: 40px;
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
    gap: 94px;
    margin-bottom: 82px;
    margin-left: 103px;
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

  .last--text div {
    align-self: center;
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .complete-look-section {
    margin: 40px 73px 0 73px;
  }
  .text-svg {
    margin-bottom: 57px;
  }
  .complete-bottom--container {
    border: 1px solid #000000;
    border-radius: 37px;
  }
  .cards--section {
    margin: 24px 46px 0;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 87px;
    row-gap: 28px;
  }
  .cards--section .card {
    border: none;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    width: 257px;
    height: 338.61px;
  }
  .card .card-like {
    margin-right: 20px;
    margin-top: 12px;
  }
  .card .card-like .label {
    background: #a75b41;
    border-radius: 0px 74px 74px 0px;
    font-family: "Arial";
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #ffffff;
    width: 58.35px;
    padding: 2px 0;
  }
  .card .product--image {
    align-self: center;
    height: 217px;
  }
  .card--detail {
    align-self: center;
  }
  .card--detail .text {
    font-family: "Arial";
    font-weight: 400;
    font-size: 9px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #b0b0b0;
  }
  .card--detail .title {
    font-family: "Arial";
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    text-transform: uppercase;
    color: #000000;
  }
  .card--detail .price {
    font-family: "Arial";
    font-weight: 400;
    font-size: 11px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
  .card--detail .price span {
    font-family: "Arial";
    font-weight: 700;
    font-size: 11px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.408px;
    color: #000000;
  }
  .insta--card {
    margin: 20px 80px 40px;
  }
  .delivary-status {
    right: -35px;
    top: 25px;
  }
  .delivary-status .text {
    font-family: "Arial";
    font-weight: 700;
    font-size: 17px;
    line-height: 22px;
    letter-spacing: 0.092px;
    text-transform: uppercase;
  }
  .delivary-status .date {
    font-family: "Arial";
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0.092px;
    color: #000000;
  }
  .blank-line {
    align-self: center;
    height: 1px;
    background: #000000;
    width: 100%;
  }
  .cur-pointer {
    cursor: pointer;
  }
  .rotate-90 {
    transform: rotate(270deg) !important;
    margin-bottom: 25px;
  }
`;

const ProductSection = () => {
  return (
    <ProductSectionWrapper>
      <ProductSelectionCommon />
      <section className="about-product--container">
        <div className="about--text d-flex">
          <div className="blank-line"></div>
          <img src={AboutProductText} alt="" />
          <div className="blank-line"></div>
        </div>
        <div className="about-below--container">
          <div className="text1">
            Bottega Senatore - When The Quality Talks Itself
          </div>
          <div className="text2">
            Bottega Senatore is a company that combines the professionalism of
            several collaborators with the forty years experience of a group of
            Italian Footwear Artisan Masters.
          </div>
          <div className="text3">Rubirio - High Quality Italian Brief Case</div>
          <ul>
            <li>
              This bag has an innate class, an accessory that immediately
              catches the eye!
            </li>
            <li>Covered internally in fabric, it has a lockable buckle.</li>
            <li>An accessory for everyone!</li>
          </ul>
        </div>
        <div className="d-flex product-details">
          <div>
            <div className="product-title">Material</div>
            <div className="product-detail">Tumbled leather</div>
          </div>
          <div>
            <div className="product-title">Color</div>
            <div className="product-detail">Lavender</div>
          </div>
          <div>
            <div className="product-title">Sole</div>
            <div className="product-detail">Leather</div>
          </div>
          <div>
            <div className="product-title">Reference</div>
            <div className="product-detail">RUBIRIODBG2</div>
          </div>
          <div>
            <div className="product-title">Production</div>
            <div className="product-detail">Made in Italy</div>
          </div>
        </div>
      </section>
      <section className="complete-look-section">
        <div className="text-svg">
          <img src={completeLookText} alt="" />
        </div>
        <div className="complete-bottom--container d-flex justify-content-between">
          <div className="cards--section d-grid">
            <div className="card">
              <div className="d-flex justify-content-between card-like">
                <div className="label">NEW!</div>
                <img src={postLike} alt="" />
              </div>
              <div className="product--image">
                <img src={sandal} alt="" />
              </div>
              <div className="card--detail">
                <div className="text">VERSACE</div>
                <div className="title">FENDANCE SANDALS</div>
                <div className="price">
                  <span>MRP</span> ₹87,950.00
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex justify-content-between card-like">
                <div></div>
                <img src={postLike} alt="" />
              </div>
              <div className="product--image">
                <img src={lipstick} alt="" />
              </div>
              <div className="card--detail">
                <div className="text">M.A.C.</div>
                <div className="title">deep brown lipstick</div>
                <div className="price">
                  <span>MRP</span> ₹87,950.00
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex justify-content-between card-like">
                <div className=""></div>
                <img src={postLike} alt="" />
              </div>
              <div className="product--image">
                <img src={ring} alt="" />
              </div>
              <div className="card--detail">
                <div className="text">BVLGARI</div>
                <div className="title">SERPENTI VIPER BRACELET</div>
                <div className="price">
                  <span>MRP</span> ₹87,950.00
                </div>
              </div>
            </div>
            <div className="card">
              <div className="d-flex justify-content-between card-like">
                <div className="label">NEW!</div>
                <img src={postLike} alt="" />
              </div>
              <div className="product--image">
                <img src={makeupbox} alt="" />
              </div>
              <div className="card--detail">
                <div className="text">M.A.C.</div>
                <div className="title">EYE SHADOW X 9: BURGUNDY</div>
                <div className="price">
                  <span>MRP</span> ₹87,950.00
                </div>
              </div>
            </div>
          </div>
          <div className="insta--card">
            <img src={instapost} alt="" />
          </div>
        </div>
      </section>
      <YouMayLike />
      <ReletedServices />
      <div className="last--text d-flex justify-content-center">
        <div>thinking of buying for an occassion?</div>
        <img src={rentItText} alt="" />
      </div>
    </ProductSectionWrapper>
  );
};

export default ProductSection;
