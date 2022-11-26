import React from "react";
import styled from "styled-components";
import leafImage from "../../assets/images/PopUpImages/leaf.svg";
import newsLetterImage from "../../assets/images/PopUpImages/Vector2.png";
import pageCloseImage from "../../assets/images/PopUpImages/pageCloseImage.svg";

const NewsletterWrapper = styled.div`
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
    background: #a75b41;
  }
  /* .popup-header{
    position: absolute;
    right: 125px;
    top: 90px;
    font-size: 55px;
    color: white;
  }
  .popup-page-content{
    font-size: 24px;
    position: absolute;
    top: 175px;
    font-weight: 300;
    opacity: 0.9;
    right: 10px;
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: white;
  }
  .popup-page-class{
    position: absolute;
    top: 225px;
    font-size: 24px;
    right: 10px;
    font-weight: 300;
    opacity: 0.9;
    font-weight: 300;
    font-family: Brush Script MT, Brush Script Std, cursive;
    color: white;
  } */
  .popup-back {
    width: 403px;
    top: 112px;
    left: 35px;
    position: absolute;
  }
  .popup-image {
    height: 260px;
    width: 444px;
    position: absolute;
    top: 78px;
    right: 20px;
  }
  .popup-email input {
    position: absolute;
    top: 330px;
    width: 370px;
    letter-spacing: 6px;
    right: 55px;
    border: none;
    padding-bottom: 20px;
    outline: none;
    border-bottom: 1px solid white;
    background-color: #a75b41;
    color: #fff;
    text-align: center;
  }
  .popup-footer {
    position: absolute;
    top: 390px;
    right: 150px;
    font-size: 10px;
    color: #fff;
  }
  .popup-pages {
    display: flex;
    position: absolute;
    top: 423px;
    right: 212px;
    font-size: 11px;
  }
`;

const Newsletter = () => {
  return (
    <>
      <NewsletterWrapper>
        <main>
          {/* <div className="popup-content">
               <h3 className='popup-header'>OH HEY!</h3>
               <div className='popup-page-content'>We Send Fun Emails Regarded Your Brand And offers.</div>
                <div className='popup-page-class'>Sign Up To Below To Subscribe and get 15% off on your first purchase/rent </div>
            </div> */}
          <div className="popup-content">
            <div className="background-popup">
              <img src={leafImage} alt="" className="popup-back" />
              <img src={newsLetterImage} alt="" className="popup-image" />
            </div>
            <div className="popup-email">
              <input
                type="email"
                className="popup-input"
                placeholder="ENTER YOUR EMAIL ADDRESS"
              />
            </div>
            <div className="popup-footer">
              We Will Protect Your Personal Information
            </div>
            <div className="popup-pages">
              <img src={pageCloseImage} alt="" />
              <a
                href="/"
                style={{
                  color: "white",
                  borderBottom: "1px solid white",
                  marginLeft: "10px",
                }}
              >
                CLOSE
              </a>
            </div>
          </div>
        </main>
      </NewsletterWrapper>
    </>
  );
};

export default Newsletter;
