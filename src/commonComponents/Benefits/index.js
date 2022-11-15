import React, { useState } from "react";
import styled from "styled-components";
import SellFast from "../../assets/images/nfts/sell-fast.svg";
import EarnMore from "../../assets/images/nfts/earn-more.svg";
import Chat from "../../assets/images/nfts/chat.svg";
import AnimatedTextWord from "../Animation/FlipAnimation";
import { motion } from "framer-motion";

const BenefitsWrapper = styled.div`
  .category {
    display: flex;
    margin-top: 50px;
  }
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  .benefits {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .titles {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #a75b41;
  }
  .details {
    color: #a79586;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
  }
`;

const Benefits = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <BenefitsWrapper>
      <div className="benefits">
        <AnimatedTextWord text="BENEFITS" />
      </div>
      <div className="category">
        <div className="container">
          <img src={SellFast} alt="sell-fast" height={120} />
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="titles"
          >
            SELL FAST
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="details"
          >
            Most of the products sell within 30 days
          </motion.div>
        </div>
        <div className="container">
          <img
            src={EarnMore}
            alt="sell-fast"
            height={90}
            style={{ margin: "15px" }}
          />
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="titles"
          >
            EARN MORE
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="details"
          >
            Earn upto 75% of the buying price, 3x more than{" "}
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="details"
          >
            other resllers
          </motion.div>
        </div>
        <div className="container">
          <img
            src={Chat}
            alt="sell-fast"
            height={90}
            style={{ margin: "15px" }}
          />
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="titles"
          >
            WE MAKE IT EASY
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="details"
          >
            We are here to help you earn through yor luxury
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ rotateX: "90deg", y: "10vh" }}
            animate={
              isInView && {
                rotateX: 0,
                y: 0,
                transition: {
                  duration: 1.2,
                },
              }
            }
            className="details"
          >
            {" "}
            products{" "}
          </motion.div>
        </div>
      </div>
    </BenefitsWrapper>
  );
};

export default Benefits;
