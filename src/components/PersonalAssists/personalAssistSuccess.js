import React from 'react'
import styled from 'styled-components'
import SuccessImage from "../../assets/images/PopUpImages/PersonalAsssistSuccess/Success.svg";
import ThanksImage from "../../assets/images/PopUpImages/PersonalAsssistSuccess/Thanks.svg";
import CircleImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/circle.svg";
import leafImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/leafImage.svg";
import CheckMarkImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/checkmark.svg";
import CrossImage from "../../assets/images/PopUpImages/ThanksLetterPopUps/CrossImage.svg";

const SuccessWrapper =styled.div`
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
    top: 100px;
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
    width: 304px;
    position: absolute;
    top: 187px;
    right: 90px;
  }
  .popup-image2 {
    width: 350px;
    position: absolute;
    top: 280px;
    right: 50px;
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
    width: 130px;
    height: 35px;
    color: #fff;
    position: absolute;
    top: 350px;
    left: 182px;
  }
  .popup-pages-allpopups {
    display: flex;
    position: absolute;
    top: 410px;
    right: 205px;
    font-size: 11px;
  }
`

const personalAssistSuccess = () => {
  return (
    <>
    <SuccessWrapper>
    <main>
          <div className="popup-content">
            <div className="popup-header">
              <img src={CircleImage} className="popup-bar" alt="" />
              <img src={CheckMarkImage} className="popup-center" alt="" />
            </div>
            <div className="background-popup">
              <img src={leafImage} alt="" className="popup-back" />
              <img src={SuccessImage} alt="" className="popup-image" />
              <img src={ThanksImage} alt="" className="popup-image2" />
            </div>
            <div className="popup-button">
              <button className="popup-agree">SHOP HERE...</button>
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
    </SuccessWrapper>
    </>
  )
}

export default personalAssistSuccess