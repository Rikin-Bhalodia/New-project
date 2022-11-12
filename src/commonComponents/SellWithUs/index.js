import React from "react";
import styled from "styled-components";
import Background from "../../assets/images/nfts/back.svg";
import SellWithUsBack from "../../assets/images/nfts/sell-with-us.svg";

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
`;

const SellWithUs = () => {
  return (
    <SellWithUsWrapper>
      <img src={Background} alt="back" className="background-sellwithus" />
      <div className="sell-with-us" style={{ margin: "-150px 0px 0 0" }}>
        <div style={{ textAlign: "center" }}>sell with us</div>
      </div>
      <div className="sell-with-us" style={{ margin: "150px 70px 0 0" }}>
        <div style={{ textAlign: "center" }}>buy</div>
      </div>
    </SellWithUsWrapper>
  );
};

export default SellWithUs;
