import React from "react";
import styled from "styled-components";
import SignUpPng from "../../assets/images/PersonalAssist/SignUp.png"

const AssistFormWrapper = styled.div`
  .FormContent {
    height: 78vh;
    width: 60%;
    margin: 100px 0px 0px 270px;
    background: rgba(167, 149, 134, 0.3);
    backdrop-filter: blur(30px);
    border-radius: 45px;
    background-image: url(${SignUpPng});
  }
  .FormHeader {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    position: relative;
    color: #665e2f;
    top: 20px;
    margin-left: 50px;
  }
  .FormInputs {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 30px;
  }
  .InputOne {
    display: flex;
    gap: 30px;
  }
  .InputOne input {
    width: 100%;
    height: 55px;
    letter-spacing: 5px;
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f;
  }
  .InputTwo {
    margin-top: 30px;
  }
  .InputTwo input {
    width: 100%;
    height: 55px;
    letter-spacing: 5px;
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f;
  }
  .InputThree {
    margin-top: 30px;
    display: flex;
    gap: 30px;
  }
  .InputThree input {
    width: 100%;
    height: 55px;
    letter-spacing: 5px;
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f;
  }
  .FormButton {
    margin-top: 50px;
    text-align: center;
  }
  .FormButton button {
    height: 60px;
    width: 250px;
    background: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #fcf9f2;
    border: none;
    border-radius: 20px;
  }
  @media (max-width: 576px){
    .FormContent{
      width: 100%;
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  @media (max-width: 1000px){
    .FormContent{
      width: 100%;
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const AssistForm = () => {
  return (
    <>
      <AssistFormWrapper>
        <div className="FormWrapper">
          <div className="FormContent">
            <div className="FormHeader">FILL THIS UP!</div>
            <div className="FormInputs">
              <div className="InputOne">
                <input type="text" placeholder="FIRST NAME" />
                <input type="text" placeholder="LAST NAME" />
              </div>
              <div className="InputTwo">
                <input type="text" placeholder="EMAIL" />
              </div>
              <div className="InputThree">
                <input type="number" placeholder="PHONE" />
                <input type="number" placeholder="PINCODE" />
              </div>
            </div>
            <div className="FormButton">
              <button>SIGN UP</button>
            </div>
          </div>
        </div>
      </AssistFormWrapper>
    </>
  );
};

export default AssistForm;
