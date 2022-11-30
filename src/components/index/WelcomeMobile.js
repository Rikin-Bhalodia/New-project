import React from "react";
import styled from "styled-components";
import Banner from "../../assets/images/homepage/mobile_welcome_banner.svg";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import legance from "../../assets/images/homepage/legancy.svg";

const WelcomeMobileWrapper = styled.div`
  position: relative;
  top: -80px;
  .banner_img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Banner});
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .welcome_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: inherit;
    p {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      letter-spacing: 5px;
    }
    .flip-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 50px;
      font-weight: 400;
      color: white;
      line-height: 70px;
      letter-spacing: 1.5px;
      font-family: "coralSerif", sans-serif;
    }
    img {
      width: 300px;
      margin-bottom: 10px;
    }
    .btn2 {
      padding: 0.5rem 1.5rem;
    }
  }
  @media (max-width: 550px) {
    .welcome_content {
      p {
        font-size: 13px;
        letter-spacing: 4px;
      }
      .flip-text {
        font-size: 40px;
        line-height: 60px;
        letter-spacing: 1.5px;
      }
      img {
        width: 250px;
      }
      .btn2 {
        padding: 0.5rem 1.5rem;
      }
    }
  }
  @media (max-width: 450px) {
    .welcome_content {
      .flip-text {
        font-size: 30px;
        line-height: 50px;
        letter-spacing: 1.5px;
      }
      img {
        width: 200px;
      }
      .btn2 {
        padding: 0.5rem 1.5rem;
      }
    }
  }
`;

export default function WelcomeMobile() {
  return (
    <WelcomeMobileWrapper>
      <div className="banner_img">
        <div className="welcome_content">
          <p>ROYCLAN</p>
          <div className="flip-text">
            <AnimatedTextWord text="WELCOMES YOU" />
            <AnimatedTextWord text="TO THE WORLD " />
            <AnimatedTextWord text="OF" />
          </div>
          <img src={legance} alt="" />
          <a href="/" className="btn2">
            Know More
          </a>
        </div>
      </div>
    </WelcomeMobileWrapper>
  );
}
