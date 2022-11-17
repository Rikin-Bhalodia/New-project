import React from "react";
import styled from "styled-components";
import leafImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/leafImage.svg";
import ThanksLetterImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/CookiesPopUp.png";
import CookiesImage from "../../assets/images/PopUpImages/Cookies/Screenshot (65).png";

const CookieWrapper = styled.div`
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
    border: none;
    width: 148px;
    height: 35px;
    color: #fff;
    margin-top: 370px;
    margin-left: 166px;
  }
  .popup-pages-allpopups {
    display: flex;
    position: absolute;
    top: 425px;
    right: 198px;
    font-size: 11px;
  }
`;

const CookiePopUp = () => {
  return (
    <>
      <CookieWrapper>
        <main>
          <div className="popup-content">
            <div className="popup-header">
              <img src={CookiesImage} className="popup-bar" alt="" />
            </div>
            <div className="background-popup">
              <img src={leafImage} alt="" className="popup-back" />
              <img src={ThanksLetterImage} alt="" className="popup-image" />
            </div>
            <div className="popup-button">
              <button className="popup-agree">mmm... Sweet</button>
            </div>
            <div className="popup-pages-allpopups">
              <a
                className="popup-close"
                href="/"
                style={{
                  color: "#A75B41",
                  borderBottom: "1px solid black",
                  marginLeft: "10px",
                }}
              >
                Nope,I am on diet
              </a>
            </div>
          </div>
        </main>
      </CookieWrapper>
    </>
  );
};

export default CookiePopUp;
