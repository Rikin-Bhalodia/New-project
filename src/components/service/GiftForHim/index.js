import React, { useState } from "react";
import styled from "styled-components";
import GoBackpart from "../Common/gobachpart";
import Price from "../../../assets/images/service/gift-for-him/price.svg";
import YellowBarContent from "../Common/YellowBarContent";
import DownArrow from "../../../assets/images/product/down-arrow.svg";
import Search from "../../../assets/images/service/gift-for-him/seach-icon.svg";
import Filters from "../../../commonComponents/Filters";

const GiftForHimWrapper = styled.div`
  margin: 100px 150px 0px 150px;
  .heading {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    padding-top: 40px;
  }
  button {
    background: #ffffff;
    border: 1px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
    color: #a75b41;
    width: 220px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    height: 50px;
    font-size: 20px;
  }
  .price {
    letter-spacing: -0.408px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    column-gap: 180px;
    row-gap: 50px;
    margin: 80px 50px;
  }
`;

const FullScreenWrapper = styled.div`
  width: 100%;
  .load-more {
    display: flex;
    width: 100%;
    margin-top: 120px;
  }
  .line {
    border-bottom: 2px solid #000000;
    width: 40%;
    margin-bottom: 35px;
  }
  .text {
    width: 20%;
    display: flex;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    justify-content: space-around;
    margin: 0px 10px;
  }
  .plus {
    height: 60px;
    width: 60px;
    border: 1px solid #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 700;
    position: relative;
    top: -5px;
  }
`;

const FiltersName = [
  { name: "GIFT CARDS", option: ["Dry Food", "Wet Food"] },
  { name: "BY OCCASION", option: ["Veg", "Non-veg"] },
  {
    name: "CATEGORY",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "BY RECIPIENT", option: ["Cat", "Dog", "Others"] },
  { name: "PRICE RANGE", option: [], range: "SET RANGE" },
  { name: "COLOR", option: ["Puppy", "Adult Dog", "Senior Dog"] },
];

const GiftForHim = () => {
  return (
    <>
      <GiftForHimWrapper>
        <GoBackpart />
        <div className="heading">GIFTS FOR HIM</div>
        <Filters FiltersName={FiltersName} />
        <div className="products">
          {[1, 1, 11, 1, 11, 1, 1, 1, 1].map((_) => {
            return (
              <div className="product">
                <img src={Price} alt="price" height={250} />
                <div className="price">Price</div>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </GiftForHimWrapper>
      <FullScreenWrapper>
        <div className="load-more">
          <div className="line"></div>
          <div className="text">
            <div>LOAD</div>
            <div className="plus">+</div>
            <div>MORE</div>
          </div>
          <div className="line"></div>
        </div>
        <YellowBarContent requiredPersonalAssistance={true} />
      </FullScreenWrapper>
    </>
  );
};

export default GiftForHim;
