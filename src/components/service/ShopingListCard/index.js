import React, { useState } from "react";
import styled from "styled-components";
import ShopingCard from "../../../assets/images/service/valentine-gift/shoping-card.svg";
import Heart from "../../../assets/images/service/valentine-gift/heart.svg";
import FillHeart from "../../../assets/images/service/valentine-gift/fill-heart.svg";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ShoppingListCardWrapper = styled.div`
  margin-top: 50px 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  column-gap: 50px;
  .card {
    background: #ffffff;
    box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    width: 360px;
    height: 450px;
    margin-bottom: 50px;
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
  const location = useLocation();
  const [isInView, setIsInView] = useState(false);

  return (
    <ShoppingListCardWrapper
      style={
        location.pathname === "/nft-metaverse"
          ? { padding: "" }
          : { margin: "" }
      }
    >
      {[1, 2, 3].map((_, i) => {
        return (
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateY: "90deg" }}
            animate={
              isInView && {
                y: 0,
                rotateY: "0deg",
                transition: {
                  duration: 1,
                },
              }
            }
            className="card"
            style={
              location.pathname === "/nft-metaverse"
                ? { height: "350px", width: "280px" }
                : {}
            }
          >
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
            <motion.img
              whileHover={{
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              src={ShopingCard}
              alt="shoping-card"
              height={location.pathname === "/nft-metaverse" ? 150 : 250}
            />
            <div className="product-name">MOSCHINO</div>
            <div className="des">White Quilted Large Tote</div>
            <div className="mrp">MRP ₹87,950.00</div>
          </motion.div>
        );
      })}
    </ShoppingListCardWrapper>
  );
};

export default ShoppingListCard;
