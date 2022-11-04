import React, { useState } from "react";
import styled from "styled-components";
import ShopingCard from "../../../assets/images/service/valentine-gift/shoping-card.svg";
import Heart from "../../../assets/images/service/valentine-gift/heart.svg";
import FillHeart from "../../../assets/images/service/valentine-gift/fill-heart.svg";

const ShoppingListCardWrapper = styled.div`
  margin: 50px 100px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 100px;
  .card {
    background: #ffffff;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    width: 360px;
    height: 450px;
  }
  .new-tag {
    background: #a75b41;
    border-radius: 0px 74px 74px 0px;
    color: #ffffff;
    width: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    height: 35px;
  }
  .top-part {
    display: flex;
    justify-content: space-between;
    padding: 15px 10px 0px 0px;
  }
  .product-name {
    color: #b0b0b0;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    text-align: center;
    padding-top: 25px;
  }
  .des {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    padding-top: 15px;
  }
  .mrp {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    text-align: center;
    padding-top: 15px;
  }
`;

const ShoppingListCard = () => {
  const [fillHeart, setFillHeart] = useState(false);
  return (
    <ShoppingListCardWrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => {
        return (
          <div className="card">
            <div className="top-part">
              <div className="new-tag">NEW!</div>
              {fillHeart === i ? (
                <img
                  src={FillHeart}
                  alt="heart"
                  height={20}
                  width={22}
                  onClick={() => setFillHeart("")}
                />
              ) : (
                <img
                  src={Heart}
                  alt="heart"
                  height={20}
                  width={22}
                  onClick={() => setFillHeart(i)}
                />
              )}
            </div>
            <img src={ShopingCard} alt="shoping-card" height={250} />
            <div className="product-name">MOSCHINO</div>
            <div className="des">White Quilted Large Tote</div>
            <div className="mrp">MRP ₹87,950.00</div>
          </div>
        );
      })}
    </ShoppingListCardWrapper>
  );
};

export default ShoppingListCard;