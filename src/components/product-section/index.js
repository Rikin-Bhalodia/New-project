import React from "react";
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
import AboutProductText from "../../assets/images/product-section/about-product-text.svg";
import youMayLike from "../../assets/images/product-section/you-may-like.svg";
import likeProduct1 from "../../assets/images/product-section/like-product-sample1.svg";
import rentItText from "../../assets/images/product-section/rent-it-text.svg";
import completeLookText from "../../assets/images/product-section/complete-look-text.svg";
import postLike from "../../assets/images/product-section/postlike.svg";
import sandal from "../../assets/images/product-section/sandal.svg";
import ring from "../../assets/images/product-section/ring.svg";
import lipstick from "../../assets/images/product-section/lipstick.svg";
import makeupbox from "../../assets/images/product-section/makeupbox.svg";
import instapost from "../../assets/images/product-section/instapost.svg";
import productLogo from "../../assets/images/product-section/product-logo.svg";
import ReletedServices from "../studio-product/RelatedSrevices";

const ProductSectionWrapper = styled.div`
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
    transform: rotate(90deg);
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
  .you-also-like--container {
    margin: 106px 81px 67px;
  }
  .you-also-like--container .like-text {
    padding-bottom: 62px;
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
  .delivary-status{
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
  .blank-line{
    align-self: center;
    height: 1px;
    background: #000000;
    width:100%;
  }
`;

const ProductSection = () => {
  return (
    <ProductSectionWrapper>
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
                <img src={backarrow} alt="" />
              </div>
              <div className="size--div d-flex">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="size-guide">View Size Guide</div>
            </div>
            <div className="size-container border-bottom">
              <div className="size-title d-flex">
                <div>color</div>
                <img src={backarrow} alt="" />
              </div>
              <div className="size--div d-flex">
                <div style={{ background: "#FFE600" }}></div>
                <div style={{ background: "#FF4E4E" }}></div>
                <div style={{ background: "#63FA4B" }}></div>
                <div style={{ background: "#1DA7F5" }}></div>
                <div style={{ background: "#CF0CE0" }}></div>
              </div>
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
      <section className="you-also-like--container">
        <div className="like-text">
          <img src={youMayLike} alt="" />
        </div>
        <div className="d-flex justify-content-between">
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
        </div>
      </section>
      <ReletedServices />
      <div className="last--text d-flex justify-content-center">
        <div>thinking of buying for an occassion?</div>
        <img src={rentItText} alt="" />
      </div>
    </ProductSectionWrapper>
  );
};

export default ProductSection;
