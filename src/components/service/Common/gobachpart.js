import React from "react";
import styled from "styled-components";
import BackArrow from "../../../assets/images/product/back-arrow.svg";

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
      <div className="goback">
        <img src={BackArrow} alt="back-arrow" />
        <div>Go Back</div>
      </div>
      <div className="des">
        <div>KNOW THE WORLD OF LUXURY</div>
        <div>ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY PRODUCTS.</div>
      </div>
    </GoBackPartWrapper>
  );
};

export default GoBackpart;
