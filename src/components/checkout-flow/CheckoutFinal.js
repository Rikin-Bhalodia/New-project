import React from "react";
import styled from "styled-components";
import BackArrow from "../../assets/images/product/back-arrow.svg";
import Polygon from "../../assets/images/polygon-right.svg";
import Image1 from "../../assets/images/CheckoutFlow/Image1.svg";

const FinalWrapper = styled.div`
  .polygon-left {
    position: absolute;
    height: 700px;
    z-index: -1;
    right: 0;
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .goback a {
    color: black;
    border-bottom: 2px solid black;
  }
  .topbar {
    justify-content: center;
    text-align: center;
    margin-top: 160px;
  }
  .checkout-header {
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
  }
  .FinalContent {
    margin: 70px 150px 0px 150px;
  }
  .header {
    color: #665e2f;
  }
  .MainData {
    margin-top: 100px;
    width: 60%;
    display: flex;
  }
  .image img {
    height: 150px;
    width: 150px;
  }
  .ImageContent {
    font-family: "Coral Blush";
    font-style: normal;
    margin-left: 50px;
  }
  .beige {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    color: #665e2f;
  }
  .text {
    display: flex;
    justify-content: space-between;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #665e2f;
  }
  .price {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top: 15px;
    color: #665e2f;
  }
  .close {
    color: black;
  }
  .close button {
    background: #fff;
    margin-left: 40px;
    border: none;
  }
  .subtotal {
    height: 50px;
    width: 60%;
    margin-top: 30px;
    background: #d9d9d9;
    border: 1px solid #000000;
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
  }
  .sub {
    padding-left: 10px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color: #665e2f;
  }
  .total {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding-right: 10px;
    color: #a65a40;
  }
  .checkout-form-footer {
    display: flex;
    margin-top: 50px;
    color: black;
    padding-bottom: 50px;
  }
  .checkout-form-footer input {
    height: 25px;
    width: 25px;
    border: 2px solid black;
  }
  .checkout-form-ship {
    margin-left: 20px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }

  .finalButton button {
    height: 50px;
    width: 220px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    color: #a75b41;
    background: #ffffff;
    border: 1px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
  }
`;

const CheckoutFinal = () => {
  return (
    <>
      <FinalWrapper>
        <img
          src={Polygon}
          alt="triangle-lr"
          className="polygon-left"
          loading="lazy"
        />
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <a href="/">Go Back</a>
        </div>
        <div className="topbar">
          <div className="checkout-header">CHECKOUT</div>
        </div>
        <div className="FinalContent">
          <h3 className="header">4. REVIEW YOUR ORDER </h3>
          <div className="MainData">
            <div className="image">
              <img src={Image1} alt="" />
            </div>
            <div className="ImageContent">
              <div className="beige">BEIGE TROWSER</div>
              <div># 0199278743r92</div>
              <div className="text">
                <div>SIZE </div>
                <div>COLOUR</div>
              </div>
              <div className="price">Rs.1890</div>
            </div>
            <div className="close">
              {" "}
              <button>X</button>
            </div>
          </div>
          <div className="subtotal">
            <div className="sub">SUBTOTAL</div>
            <div className="total">RS. 1890</div>
          </div>
          <div className="checkout-form-footer">
            <input type="checkbox" />
            <div className="checkout-form-ship">
              Want to receive details about offers and sale
            </div>
          </div>
          <div className="finalButton">
            <button>PLACE ORDER</button>
          </div>
        </div>
      </FinalWrapper>
    </>
  );
};

export default CheckoutFinal;
