import React from "react";
import styled from "styled-components";
import Login from "../../assets/images/ProfilePage/Rectangle178.png";
import MenuImage from "../../assets/images/ProfilePage/menu.png";

const AssistanceWrapper = styled.div`
  .assistance-page {
    height: 100vh;
    width: 100%;
    background: rgba(252, 249, 242, 0.8);
    backdrop-filter: blur(2px);
    background-image: url(${Login});
    display: flex;
  }
  .text-topbar {
    height: 300px;
    width: 800px;
    background: rgba(167, 149, 134, 0.3);
    backdrop-filter: blur(2px);
    border-radius: 45px;
    margin-top: 150px;
    margin-left: 250px;
  }
  .normal-text {
    font-family: "Coral Blush";
    font-style: normal;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 33px;
    margin-top: 12px;
    color: #665e2f;
  }
  .text-top-page {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-left: 100px;
  }
  .classical-text {
    font-family: "Coral Blush Script";
    font-style: normal;
    font-weight: 400;
    font-size: 43px;
    color: #665e2f;
  }
  .footer-button {
    margin-top: 83px;
    margin-left: 100px;
    display: flex;
    gap: 50px;
  }
  .button-bottom {
    height: 60px;
    width: 300px;
    border: none;
    background: #665e2f;
    color: #fff;
    border-radius: 20px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
  .assistance-footer {
    margin-top: 120px;
    text-align: center;
  }
  .image-footer {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  @media (max-width: 576px) {
    .text-topbar {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 0;
      margin-left: 0;
      align-self: center;
      margin: 0px 20px;
      height: 265px;
    }
    .classical-text{
      font-size: 30px;
    }
    .normal-text{
      font-size: 28px;
      margin-top: 4px;
    }
    .button-bottom{
      width: 200px;
    }
    .footer-button{
      margin-left: 37px;
      display: flex;
      gap: 35px;
    }
    .text-top-page{
      display: flex;
      gap: 10px;
      margin-left: 35px;
    }
  }
  @media (max-width: 1000px) {
    .text-topbar {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 0;
      margin-left: 0;
      align-self: center;
      margin: 0px 20px;
    }
  }
`;

const PersonalAssistance = () => {
  return (
    <>
      <AssistanceWrapper>
        <div className="assistance-page">
          <div className="text-topbar">
            <div className="text-top-page">
              <div className="normal-text">do you want</div>
              <div className="classical-text"> personal assistance </div>
            </div>
            <div className="footer-button">
              <button className="button-bottom">KNOW MORE</button>
              <button className="button-bottom">NO THANKS</button>
            </div>
            <div className="assistance-footer">
              <img src={MenuImage} alt="" className="image-footer" />
            </div>
          </div>
        </div>
      </AssistanceWrapper>
    </>
  );
};

export default PersonalAssistance;
