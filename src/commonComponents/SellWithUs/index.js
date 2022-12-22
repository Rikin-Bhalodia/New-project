import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../assets/images/nfts/back.svg";
import SellWithUsBack from "../../assets/images/nfts/sell-with-us.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../Animation/FlipAnimation";
const SellWithUsWrapper = styled.div`
  height: 600px;
  background: #a75b41;
  margin-top: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .background-sellwithus {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .sell-with-us {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${SellWithUsBack});
    height: 350px;
    width: 350px;
    border-radius: 50%;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcf9f2;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 900;
    font-size: 55px;
    padding: 0 70px;
    text-transform: uppercase;
  }
  .sell-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right {
    margin: 150px 0 0 0;
  }
  @media (max-width: 1000px) {
    .sell-with-us {
      height: 300px;
      width: 300px;
      font-size: 45px;
      padding: 0 70px;
    }
  }
  @media (max-width: 767px) {
    height: 500px;
    .sell-with-us {
      height: 250px;
      width: 250px;
      font-size: 40px;
      padding: 0 60px;
    }
  }
  @media (max-width: 600px) {
    height: 450px;
    .sell-with-us {
      height: 200px;
      width: 200px;
      font-size: 35px;
      padding: 0 50px;
    }
  }
  @media (max-width: 450px) {
    height: 370px;
    .sell-with-us {
      height: 150px;
      width: 150px;
      font-size: 25px;
      padding: 0 40px;
    }
  }
`;

const SellWithUs = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <SellWithUsWrapper>
      <img
        src={Background}
        alt="back"
        className="background-sellwithus"
        loading="lazy"
      />
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ rotate: "-100deg", x: "-30vw" }}
        animate={
          isInView && {
            x: 0,
            rotate: 0,
            transition: {
              delay: 1,
              duration: 1.5,
            },
          }
        }
        className="sell-with-us"
        style={{ margin: "-150px 0px 0 0" }}
      >
        <div className="sell-box">
          <AnimatedTextWord text="sell" />
          <AnimatedTextWord text="with" />
          <AnimatedTextWord text="us" />
        </div>
      </motion.div>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ rotate: "100deg", x: "30vw" }}
        animate={
          isInView && {
            x: 0,
            rotate: 0,
            transition: {
              delay: 1,
              duration: 1.5,
            },
          }
        }
        className="sell-with-us right"
      >
        <div style={{ textAlign: "center" }}>
          <AnimatedTextWord text="buy" />
        </div>
      </motion.div>
    </SellWithUsWrapper>
  );
};

export default SellWithUs;
