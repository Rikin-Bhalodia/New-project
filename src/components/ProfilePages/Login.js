import React from "react";
import styled from "styled-components";
import Login from "../../assets/images/ProfilePage/Rectangle178.png";

const ProfileWrapper = styled.div`
  .profile-login {
    height: 100vh;
    width: 100%;
    display: flex;
    background: rgba(252, 249, 242, 0.8);
    backdrop-filter: blur(2px);
    background-image: url(${Login});
  }
  .leftbar {
    height: 50%;
    width: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  .leftbar-content {
    margin-top: 415px;
  }
  .login-account {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #665e2f;
  }
  .signup-button {
    margin-top: 20px;
    width: 300px;
    padding: 20px;
    background: #665e2f;
    border-radius: 20px;
    font-size: 17px;
    letter-spacing: 3px;
    color: #fff;
    border: none;
  }
  .rightbar {
    width: 50%;
    align-items: center;
    justify-content: center;
    background: rgba(167, 149, 134, 0.3);
    backdrop-filter: blur(2px);
  }
  .rightbar-content{
    display: flex;
    font-family: 'Coral Blush';
    font-style: normal;
    font-weight: 400;
    color: #665E2F;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 295px;
  }
  .rightbar-content input{
    width: 485px;
    height: 45px;
    margin-bottom: 20px;
    border: none;
    letter-spacing: 5px;
    padding-left: 10px;
  }
  .login-button{
    width: 200px;
    padding: 20px;
    background: #665e2f;
    border-radius: 16px;
    color: #fff;
    border: none;
    font-size: 17px;
    letter-spacing: 3px;
  }
  .page-footer{
    display: flex;
    margin-top: 30px;
    color: #665e2f;
}
.link-signup{
    margin-right: 30px;
    color: #665e2f;
  }
`;

const ProfilePageLogin = () => {
  return (
    <>
      <ProfileWrapper>
        <div className="profile-login">
          <div className="leftbar">
            <div className="leftbar-content">
              <div className="login-account">CREATE AN ACCOUNT</div>
              <button className="signup-button">SIGN UP</button>
            </div>
          </div>
          <div className="rightbar">
            <div className="rightbar-content">
              <input type="text" placeholder="USERNAME/ EMAIL/ MOBILE NUMBER" />
              <input type="password" placeholder="PASSWORD" />
              <button className="login-button">LOGIN</button>
              <div className="page-footer">
                <a href="/profilepage-signup" className="link-signup">SIGN UP</a>
                <div>FORGOT  PASSWORD?</div>
              </div>
            </div>
          </div>
        </div>
      </ProfileWrapper>
    </>
  );
};

export default ProfilePageLogin;
