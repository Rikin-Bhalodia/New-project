import React from "react";
import styled from "styled-components";
import SellFast from "../../assets/images/nfts/sell-fast.svg";
import EarnMore from "../../assets/images/nfts/earn-more.svg";
import Chat from "../../assets/images/nfts/chat.svg";

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
  return (
    <BenefitsWrapper>
      <div className="benefits">BENEFITS</div>
      <div className="category">
        <div className="container">
          <img src={SellFast} alt="sell-fast" height={120} />
          <div className="titles">SELL FAST</div>
          <div className="details">
            Most of the products sell within 30 days
          </div>
        </div>
        <div className="container">
          <img
            src={EarnMore}
            alt="sell-fast"
            height={90}
            style={{ margin: "15px" }}
          />
          <div className="titles">EARN MORE</div>
          <div className="details">
            Earn upto 75% of the buying price, 3x more than{" "}
          </div>
          <div className="details">other resllers</div>
        </div>
        <div className="container">
          <img
            src={Chat}
            alt="sell-fast"
            height={90}
            style={{ margin: "15px" }}
          />
          <div className="titles">WE MAKE IT EASY</div>
          <div className="details">
            We are here to help you earn through yor luxury
          </div>
          <div className="details"> products </div>
        </div>
      </div>
    </BenefitsWrapper>
  );
};

export default Benefits;
