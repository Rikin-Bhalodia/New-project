import React from "react";
import styled from "styled-components";
import aboutMainBg from "./../assets/images/aboutpage/aboutmain.svg";
import storytext from "./../assets/images/aboutpage/storytext.svg";
import abouttext from "./../assets/images/aboutpage/abouttext.svg";
import whotext from "./../assets/images/aboutpage/whotext.svg";
import nexttext from "./../assets/images/aboutpage/nexttext.svg";
import desktext from "./../assets/images/aboutpage/desktext.svg";
import iconhome from "./../assets/images/aboutpage/icon_home.svg";
import iconlocation from "./../assets/images/aboutpage/icon_location.svg";
import iconchat from "./../assets/images/aboutpage/icon_chat.svg";
import iconstar from "./../assets/images/aboutpage/icon_star.svg";
import about_group1 from "./../assets/images/aboutpage/aboutpage_people.svg";
import about_group2 from "./../assets/images/aboutpage/aboutpage_people2.svg";
import about_shoes from "./../assets/images/aboutpage/aboutpage_shoes.svg";
import bg2020 from "./../assets/images/aboutpage/2020bg.svg";
import bg2021 from "./../assets/images/aboutpage/2021bg.svg";
import bg2022 from "./../assets/images/aboutpage/2022bg.svg";
import bg2022_2 from "./../assets/images/aboutpage/2022bg2.svg";
import buttonArrow from "./../assets/images/aboutpage/buttonArrow.svg";
import founder from "./../assets/images/aboutpage/founder.svg";
import mission from "./../assets/images/aboutpage/mission.svg";
import LeftFilter from "./../assets/images/aboutpage/left-filter.svg";
import RightFilter from "./../assets/images/aboutpage/right-filter.svg";

const AboutWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  .aboutus-header {
    background: url(${aboutMainBg}) no-repeat;
    height: 1720px;
  }
  .about-title {
    font-family: "Coral Blush";
    font-size: 318px;
    color: #fff;
    line-height: 346px;
    font-weight: 400;
    text-transform: uppercase;
    text-align-last: center;
    padding-top: 500px;
  }
  .aboutus-container {
    position: relative;
    top: -218px;
    margin-left: 218px;
    background: #ffffff;
    box-shadow: -38px 40px 250px rgba(0, 0, 0, 0.25);
  }
  .story-container {
    padding: 92px 150px 0 146px;
  }
  .story-line {
    width: 0px;
    height: 322.42px;
    border: 1px solid #000000;
    margin-left: 87px;
    margin-right: 62px;
  }
  .story-text {
    top: -18px;
    left: 19px;
  }
  .self-center {
    align-self: center;
  }
  .icon-container {
    margin: 137px 167px 137px 181px;
  }
  .we-are-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
  }
  .whoareleftsection {
    padding-left: 122px;
    padding-right: 143px;
    align-self: center;
    text-align-last: center;
  }
  .whotext {
    left: -25px;
  }
  .we-are-description {
    text-align: justify;
  }
  .company-container {
    margin-left: 133px;
    background: url(${bg2020}) no-repeat;
    background-position: right;
    background-position-y: 138px;
  }
  .company-title {
    text-transform: uppercase;
    padding-top: 299px;
    font-family: "Coral Blush";
    font-size: 48px;
    line-height: 54px;
    padding-bottom: 40px;
  }
  .company-title span {
    color: #a75b41;
  }
  .company-description {
    width: 488.81px;
    text-align: justify;
    padding-bottom: 66px;
    font-size: 16px;
  }
  .contest-container {
    background: url(${bg2021}) no-repeat;
    margin-right: 93px;
    background-position: center;
    background-position-y: 35%;
  }
  .contest-title {
    padding-top: 197px;
  }
  .contest-image {
    left: -222px;
  }
  .contest-description {
    font-size: 16px;
    text-align: justify;
    line-height: 18px;
    width: 364.48px;
    left: -180px;
  }
  .launch-description {
    padding-right: 55px;
  }
  .launch-container {
    background: url(${bg2022}) no-repeat;
    background-position-y: 10%;
  }
  .whatsnext-container {
    position: relative;
    margin-top: 172px;
    background-color: #665e2f;
    left: -218px;
    width: calc(100% + 218px);
  }
  .container-bg {
    background: url(${bg2022_2}) no-repeat;
    background-position: bottom;
    background-position-x: right;
  }
  .whats-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 150px;
    line-height: 168px;
    padding-left: 143px;
    padding-top: 157px;
    text-transform: uppercase;
  }
  .next-text-image {
    position: relative;
    bottom: 52px;
    left: 315px;
  }
  .joinus-button {
    padding-top: 28px;
    padding-bottom: 151px;
    text-align: center;
  }
  .joinus-button button {
    font-family: "Mulish";
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    padding: 30px 62px;
  }
  .founder-container {
    margin-top: 148px;
  }
  .founder-image {
    left: -218px;
    z-index: 9;
  }
  .founder-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 75px;
    text-transform: uppercase;
  }
  .desktext-image {
    bottom: 60px;
    left: 89px;
  }
  .founder-text-container {
    left: -117px;
  }
  .founder-words {
    font-family: "Mulish";
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 35px;
  }
  .founder-words span {
    font-weight: 700;
  }
  .founder-description {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    width: 534.23px;
    text-align: justify;
  }
  .mission-container {
    height: calc(909.96px - 442px);
  }
  .mission-bg-container {
    position: relative;
    top: -442px;
    background: url(${mission}) no-repeat;
    height: 909.96px;
    background-size: 100vw;
  }
  .dark-bg {
    background: rgba(0, 0, 0, 0.6);
    height: 909.96px;
  }
  .center-element {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .mission-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 96px;
    text-align: center;
    text-transform: uppercase;
  }
  .mission-description {
    font-family: "Arial";
    padding-top: 26px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    width: 534.23px;
    margin: 0 auto;
  }
  .filter-section {
    position: relative;
    width: 100%;
    background: #ffe600;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image {
    position: absolute;
    left: 0;
  }
  .image2 {
    position: absolute;
    right: 0;
  }
  .subscribe-text {
    font-family: "Arial";
    font-weight: 700;
    font-size: 48px;
    padding-left: 78px;
    text-transform: uppercase;
    color: #000;
  }
  .submit-btn {
    border: 2px solid #000000;
    border-radius: 61px;
    background: transparent;
    font-family: "Arial";
    width: 141.16px;
    height: 55.27px;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    margin-right: 114px;
    color: #000;
  }
  .subscribe-container {
    display: flex;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
  }
  .subscribe-container input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    width: 646.75px;
  }
  .subscribe-container input:focus {
    outline: none;
  }
  .subscribe-container input::placeholder {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.715em;
    color: #000000;
    opacity: 0.5;
  }
  .founder-back-img {
    width: 721.03px;
    height: 806.47px;
    top: 17px;
    left: -204px;
    background: #fff;
    z-index: 9;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <div>
        <section className="aboutus-header">
          <div className="about-title">
            About <br /> us
          </div>
        </section>
        <section className="aboutus-container">
          <div className="story-container d-flex">
            <div className="aboutstory-text self-center">
              <div>
                <img src={abouttext} alt="" />
                <img
                  src={storytext}
                  alt=""
                  className="position-relative story-text"
                />
              </div>
            </div>
            <div className="story-line"></div>
            <div className="self-center story-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
          <div className="icon-container d-flex justify-content-between">
            <img src={iconhome} alt="" />
            <img src={iconlocation} alt="" />
            <img src={iconchat} alt="" />
            <img src={iconstar} alt="" />
          </div>
          <div className="who-we-container d-flex">
            <div className="whoareleftsection">
              <img src={whotext} alt="" className="position-relative whotext" />
              <div className="we-are-text">WE ARE</div>
              <div className="we-are-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
            <div>
              <img src={about_group1} alt="" />
            </div>
          </div>
          <div className="company-container">
            <div className="company-title">
              we created the team <br /> & start <span>the company</span>
            </div>
            <div className="company-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
          <div className="contest-container">
            <div className="d-flex justify-content-end">
              <div className="contest-title company-title">
                we win the itb uni <br /> young <span>talent contest</span>
              </div>
            </div>
            <div className="d-flex">
              <img
                src={about_group2}
                alt=""
                className="contest-image position-relative"
              />
              <div className="contest-description position-relative">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
          <div className="launch-container company-container">
            <div className="company-title">
              our first <span> big launch</span>
            </div>
            <div className="d-flex">
              <div className="launch-description company-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
              <img src={about_shoes} alt="" />
            </div>
          </div>
          <section className="whatsnext-container">
            <div className="container-bg">
              <div className="whats-text">What's</div>
              <img src={nexttext} alt="" className="next-text-image" />
              <div className="joinus-button">
                <button className="">
                  JOIN US ON THIS JOUNEY <img src={buttonArrow} alt="" />
                </button>
              </div>
            </div>
          </section>
          <div className="founder-container position-relative d-flex">
            <div className="position-absolute founder-back-img" />
            <div className="founder-image position-relative">
              <img src={founder} alt="" />
            </div>
            <div className="founder-text-container position-relative ">
              <div className="founder-text">founder's</div>
              <img
                src={desktext}
                alt=""
                className="position-relative desktext-image"
              />
              <div className="founder-words">
                SOME WORDS BY OUR FOUNDER <span>HARSH MANN</span>
              </div>
              <div className="founder-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
        </section>
        <section className="mission-container">
          <section className="mission-bg-container">
            <div className="dark-bg position-relative">
              <div className="center-element">
                <div className="mission-text colorWhite">our mission</div>
                <div className="mission-description colorWhite">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="filter-section">
            <img src={LeftFilter} alt="left" className="image" />
            <div className="subscribe-container">
              <div className="subscribe-text">Subscribe</div>
              <input placeholder="ENTER YOUR EMAIL ADDRESS" />
              <button className="submit-btn">submit</button>
            </div>
            <img src={RightFilter} alt="right" className="image2" />
          </div>
        </section>
      </div>
    </AboutWrapper>
  );
};

export default About;
