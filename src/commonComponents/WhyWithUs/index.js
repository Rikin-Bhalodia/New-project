import React from "react";
import styled from "styled-components";
import Sell from "../../assets/images/nfts/sell.svg";

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
  }
  .withus {
    font-size: 40px;
    text-align: right;
    padding-right: 30px;
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
  return (
    <>
      <WhyWithUsWrapper>
        <div className="whywithus">
          <div className="why">WHY</div>
          <div className="withus">WITH US</div>
        </div>
        <div className="sell-part">
          <img src={Sell} alt="sell" height={170} />
          <div className="content-para">
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
          </div>
        </div>
      </WhyWithUsWrapper>
      <div className="line">
        <div className="border-line"></div>
      </div>
    </>
  );
};

export default WhyWithUs;
