import React, { useState } from "react";
import styled from "styled-components";
import Info from "../../assets/images/PersonalAssist/Info.png";
import OtpInput from "react-otp-input";
import MenuImage from '../../assets/images/ProfilePage/menu.png'

const InfoWrapper = styled.div`
   position: relative;
   top: 45px;
  .Info-content {
    height: 110vh;
    width: 100%;
    background: rgba(252, 249, 242, 0.4);
    backdrop-filter: blur(2px);
    background-image: url(${Info});
  }
  .InfoHeader {
    text-align: center;
    margin-top: 30px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #ffe600;
  }
  .InfoShopping {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #a65a40;
  }
  .info-main {
    margin-top: 30px;
  }
  .Infos {
    text-align: center;
    text-transform: uppercase;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #665e2f;
    margin-top: -15px;
  }
  .InfoLorem{
    margin: 0px 75px 0px 75px;
    text-align: center;
    text-transform: uppercase;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #665e2f;
  }
  .InfoWork{
    text-align: center;
    margin-top: 30px;
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
  }
  .benefits{
    text-align: center;
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin-top: 30px;
  }
  .Info-variable{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left:-100px;
}
.terms-footer {
    margin-top: 60px;
    text-align: center;
  }
  .terms-button {
    height: 60px;
    width: 400px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    background: #665e2f;
    color: #FFE600;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
  }
  .menuImages{
    position: relative;
    bottom: 100px;
    height: 65px;
    width: 65px;
    right: 40px;
    border-radius: 50%;
  }
`;

const InfoAssist = () => {
    const [otp, setOtp] = useState("");
  return (
    <>
      <InfoWrapper>
        <div className="Info-content">
          <div className="InfoHeader">PERSONAL</div>
          <div className="InfoShopping">Shopping</div>
          <div className="info-main">
            <div className="Infos">one-to-one advoce. no appointment</div>
            <div className="Infos">needed. when and how it suits you!</div>
          </div>
          <div className="Info1">
            <div className="InfoLorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              eget fermentum massa nisl in in mauris cras.
            </div>
          </div>
          <div className="InfoWork">HOW DOES IT WORK?</div>
          <div className="Info1">
            <div className="InfoLorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum
              eget fermentum massa nisl in in mauris cras.
            </div>
          </div>
          <div className="benefits">BENEFITS</div>
          <div className="Info-variable">
                <OtpInput
                  value={otp}
                  onChange={(value) => {
                    setOtp(value);
                  }}
                  numInputs={4}
                  containerStyle={"otp-container"}
                  inputStyle={"otp-input"}
                  errorStyle={"otp-error"}
                  hasErrored={false}
                  className="partitions"
                />
              </div>
              <div className="terms-footer">
            <button className="terms-button">CONNECT NOW</button>
          </div>
          <div className="InfoFooter" align="right">
              <img src={MenuImage} className="menuImages" alt="" />
          </div>
        </div>
      </InfoWrapper>
    </>
  );
};

export default InfoAssist;
