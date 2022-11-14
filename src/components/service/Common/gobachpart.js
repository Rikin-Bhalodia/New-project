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
`;

const GoBackpart = () => {
  return (
    <GoBackPartWrapper>
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <div>Go Back</div>
        </motion.div>
        <div className="des">
          <div>KNOW THE WORLD OF LUXURY</div>
          <div>
            ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.
          </div>
        </div>
      </motion.div>
    </GoBackPartWrapper>
  );
};

export default GoBackpart;
