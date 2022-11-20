import React, { useState } from "react";
import styled from "styled-components";
import Sell from "../../assets/images/nfts/sell.svg";
import AnimatedTextWord from "../Animation/FlipAnimation";
import { motion } from "framer-motion";

const WhyWithUsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  .whywithus {
    width: 40%;
    display: flex;
    flex-direction: column;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
  }
  .why {
    font-size: 100px;
    text-align: right;
    display: flex;
    justify-content: flex-end;
  }
  .withus {
    font-size: 40px;
    text-align: right;
    padding-right: 30px;
    position: relative;
    top: -47px;
    left: 75px;
  }
  .sell-part {
    width: 60%;
  }
  .content-para {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-left: 100px;
    padding-right: 100px;
    width: 90%;
  }
`;
const WhyWithUs = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <WhyWithUsWrapper>
        <div className="whywithus">
          <div className="why">
            <AnimatedTextWord text="WHY" />
          </div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-50vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1,
                },
              }
            }
            className="withus"
          >
            WITH US
          </motion.div>
        </div>
        <div className="sell-part">
          <img src={Sell} alt="sell" height={170} />
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "50vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1,
                },
              }
            }
            className="content-para"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
            <div>
              Quam nulla porttitor massa id neque aliquam. Cras pulvinar mattis
              nunc sed blandit libero volutpat. Facilisi etiam dignissim diam
              quis enim lobortis scelerisque fermentum dui. Pharetra sit amet
              aliquam id diam. Sit amet facilisis magna etiam tempor orci.
              Tellus molestie nunc non blandit massa enim nec dui nunc. Hac
              habitasse platea dictumst quisque sagittis. Nunc aliquet bibendum
              enim facilisis gravida neque convallis a.
            </div>
          </motion.div>
        </div>
      </WhyWithUsWrapper>
      <div className="line">
        <div className="border-line"></div>
      </div>
    </>
  );
};

export default WhyWithUs;
