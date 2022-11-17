import React from "react";
import styled from "styled-components";
import leafImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/leafImage.svg";
import ThanksLetterImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/Vector (1).png";
import CircleImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/circle.svg";
import CheckMarkImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/checkmark.svg";
import CrossImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/CrossImage.svg";

const ThanksCookiesWrapper = styled.div`
  main {
    background: rgba(0, 0, 0, 0.53);
    width: 100%;
    height: 700px;
  }
  .popup-content {
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 480px;
    position: relative;
    top: 50px;
    z-index: 999;
    margin: 0 auto;
    border-radius: 50%;
    background: #fff;
    box-shadow: 38px 35px 85px rgba(0, 0, 0, 0.25);
  }
  .popup-back {
    width: 403px;
    top: 112px;
    left: 35px;
    opacity: 0.95;
    position: absolute;
  }
  .popup-image {
    width: 444px;
    position: absolute;
    top: 206px;
    right: 16px;
  }
  .popup-bar {
    top: 58px;
    position: absolute;
    width: 70px;
    right: 205px;
  }
  .popup-center {
    position: absolute;
    width: 50px;
    top: 67px;
    right: 206px;
  }
  .popup-agree {
    background: #a75b41;
    border-radius: 46px;
    width: 50px;
    border: none;
    width: 110px;
    height: 35px;
    color: #fff;
    margin-top: 359px;
    margin-left: 190px;
  }
  .popup-pages-allpopups {
    display: flex;
    position: absolute;
    top: 436px;
    right: 212px;
    font-size: 11px;
  }
  .popup-footer {
    position: absolute;
    top: 404px;
    right: 130px;
    font-size: 11px;
    color: #000;
  }
`;

const ThanksCookies = () => {
  return (
    <>
      <ThanksCookiesWrapper>
        <main>
          <div className="popup-content">
            <div className="popup-header">
              <img src={CircleImage} className="popup-bar" alt="" />
              <img src={CheckMarkImage} className="popup-center" alt="" />
            </div>
            <div className="background-popup">
              <img src={leafImage} alt="" className="popup-back" />
              <img src={ThanksLetterImage} alt="" className="popup-image" />
            </div>
            <div className="popup-button">
              <button className="popup-agree">AGREE</button>
            </div>
            <div className="popup-footer">
              We Will Protect Your Personal Information
            </div>
            <div className="popup-pages-allpopups">
              <img src={CrossImage} alt="" />
              <a
                className="popup-close"
                href="/"
                style={{
                  color: "black",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
              >
                CLOSE
              </a>
            </div>
          </div>
        </main>
      </ThanksCookiesWrapper>
    </>
  );
};

export default ThanksCookies;
