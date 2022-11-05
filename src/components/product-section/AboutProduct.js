import React from "react";
import styled from "styled-components";
import AboutProductText from "../../assets/images/product-section/about-product-text.svg";

const AboutProductWrapper = styled.div`
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
  .blank-line {
    align-self: center;
    height: 1px;
    background: #000000;
    width: 100%;
  }
`;
const AboutProduct = () => {
  return (
    <AboutProductWrapper>
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
    </AboutProductWrapper>
  );
};

export default AboutProduct;
