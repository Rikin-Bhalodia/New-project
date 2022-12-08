import React from "react";
import styled from "styled-components";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import { motion } from "framer-motion";

const GoBackPartWrapper = styled.div`
  .goback {
    margin-left: 40px;
    display: flex;
  }
  .des {
    text-align: center;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
  }
  @media (max-width: 850px) {
    padding: 80px 0 0 0;
    .des {
      padding: 20px 10px 0 10px;
    }
  }
  @media (max-width: 650px) {
    padding: 70px 0 0 0;
    .des {
      font-size: 13px;
    }
  }
  @media (max-width: 600px) {
    color: #fff;
  }
  @media (max-width: 550px) {
    padding: 60px 0 0 0;
    .des {
      font-size: 12px;
    }
  }
`;

const GoBackpart = () => {
  return (
    <GoBackPartWrapper>
      <div>
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <div>Go Back</div>
        </div>
        <div className="des">
          <motion.div
            initial={{ y: "-2vh", rotateX: "-90deg", opacity: 0 }}
            animate={{ y: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            KNOW THE WORLD OF LUXURY
          </motion.div>
          <motion.div
            initial={{ y: "-2vh", rotateX: "-90deg", opacity: 0 }}
            animate={{ y: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
          </motion.div>
        </div>
      </div>
    </GoBackPartWrapper>
  );
};

export default GoBackpart;
