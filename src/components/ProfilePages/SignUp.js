import React from "react";
import styled from "styled-components";
import Login from "../../assets/images/ProfilePage/Rectangle178.png";

const SignUpWrapper = styled.div`
  .login-content {
    height: 100vh;
    width: 100%;
    display: flex;
    background: rgba(252, 249, 242, 0.8);
    backdrop-filter: blur(2px);
    background-image: url(${Login});
  }
  .leftbar {
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .leftbar-content{
    margin-top: 105px;
  }
  .input-one {
    display: flex;
    gap: 15px;
  }
  .input-one input {
    width: 220px;
    height: 50px;
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f;
  }
  .input-two{
    margin-top: 20px;
  }
  .input-two input {
    height: 50px;
     width: 455px;
     border: none;
     font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f; 
  }
  .input-three input {
    width: 220px;
    height: 50px;
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    padding-left: 13px;
    color: #665e2f;
  }
  .input-three {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
  .signup-button {
    margin-top: 20px;
    width: 300px;
    padding: 15px;
    background: #665e2f;
    border-radius: 20px;
    font-size: 17px;
    letter-spacing: 3px;
    color: #fff;
    margin-left: 75px;
    border: none;
  }
  .rightbar {
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .accounts{
    font-size: 25px;
    color: #665e2f;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    letter-spacing: 4px;
  }
  .login-desktop{
    margin-top: 20px;
    width: 300px;
    padding: 15px;
    background: #665e2f;
    border-radius: 20px;
    font-size: 17px;
    letter-spacing: 3px;
    color: #fff;
    border: none;
  }
  .rightbar-content{
    margin-bottom: 35px;
  }
  .page-footer{
    display: flex;
    margin-top: 30px;
    margin-left: 115px;
    color: #665e2f;
}
.link-signup{
    margin-right: 30px;
    color: #665e2f;
  }
`;

const ProfilePageSignUp = () => {
  return (
    <>
      <SignUpWrapper>
        <div className="login-content">
          <div className="leftbar">
            <div className="leftbar-content">
              <div className="input-one">
                <input type="text" placeholder="FIRST NAME" />
                <input type="text" placeholder="LAST NAME" />
              </div>
              <div className="input-two">
                <input type="email" placeholder="EMAIL" />
              </div>
              <div className="input-three">
              <input type="text" placeholder="PHONE" />
                <input type="text" placeholder="PINCODE" />
              </div>
              <button className="signup-button">SIGN UP</button>
              <div className="page-footer">
                <a href="/profilepage-login" className="link-signup">LOGIN</a>
                <div>FORGOT  PASSWORD?</div>
              </div>
            </div>
          </div>
          <div className="rightbar">
            <div className="rightbar-content">
              <div className="accounts">HAVE AN ACCOUNT?</div>
              <button className="login-desktop">LOGIN</button>
            </div>
          </div>
        </div>
      </SignUpWrapper>
    </>
  );
};

export default ProfilePageSignUp;
