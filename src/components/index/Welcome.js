import React from "react";
import styled from "styled-components";
import { MainSlider } from "../../slider";
import DarkLeafExploreNow from "../../assets/images/homepage/dark-explorenow.svg";
import legance from "../../assets/images/homepage/elegance.svg";
// import Elegance from "../../elegance";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const WelcomeWrapper = styled.div`
  padding: 0 50px;
  .about-title {
    font-family: "Coral Blush";
    letter-spacing: 8px;
    font-style: normal;
    font-size: 70px;
    line-height: 1;
  }
  .roundBtn {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .legence img {
    width: 400px;
    position: absolute;
    right: 0;
  }
  .main_slider {
    height: 300px;
  }
  .c-about-slider-con h3 {
    font-size: 30px;
    line-height: 40px;
  }
  .c-about-slider-con span img {
    height: 70px;
    width: auto;
    border-radius: 0;
    margin: 0 auto 30px;
  }
  @media (max-width: 1300px) {
    .about-title {
      letter-spacing: 6px;
      font-size: 65px;
    }
    .legence img {
      width: 350px;
    }
    .main_slider {
      height: 280px;
    }
    .c-about-slider-con h3 {
      font-size: 28px;
      line-height: 37px;
      margin-bottom: 10px !important;
    }
    .c-about-slider-con span img {
      height: 60px;
    }
  }
  @media (max-width: 1200px) {
    .about-title {
      letter-spacing: 5px;
      font-size: 60px;
    }
    .legence img {
      width: 300px;
    }
    .main_slider {
      height: 260px;
    }
    .c-about-slider-con h3 {
      font-size: 26px;
      line-height: 35px;
      margin-bottom: 15px !important;
    }
    .c-about-slider-con span img {
      height: 55px;
    }
  }
  @media (max-width: 1080px) {
    .about-title {
      letter-spacing: 4px;
      font-size: 55px;
    }
    .legence img {
      width: 250px;
      top: 20px;
    }
    .main_slider {
      height: 240px;
    }
    .c-about-slider-con h3 {
      font-size: 23px;
      line-height: 33px;
      margin-bottom: 20px !important;
    }
    .c-about-slider-con span img {
      height: 50px;
    }
  }
  @media (max-width: 950px) {
    .about-title {
      letter-spacing: 3px;
      font-size: 50px;
    }
    .legence img {
      width: 220px;
      top: 25px;
    }
    .main_slider {
      height: 220px;
    }
    .c-about-slider-con h3 {
      font-size: 22px;
      line-height: 30px;
      margin-bottom: 35px !important;
    }
    .c-about-slider-con span img {
      height: 48px;
    }
  }
`;

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <section className="ss c-about-w minHeightSec minBannerHeight d-flex align-items-center ">
        <div className="container-fluid">
          <div className="container-fluid mb-3">
            <h4 className="">OPULENCE</h4>
            <div className="c-about-con d-flex about">
              <div className="">
                <h2 className="">
                  <div className="about-title">
                    <AnimatedTextWord text="WELCOME" />
                  </div>
                </h2>
                <h2 className="">
                  <div className="about-title">
                    <AnimatedTextWord text="TO THE" />
                  </div>
                </h2>
                <h2 className="">
                  <div className="about-title">
                    <AnimatedTextWord text="WORLD OF" />
                  </div>
                </h2>
              </div>
              <div className="legence">
                <span style={{ position: "relative" }}>
                  <img src={legance} alt="" />
                </span>
              </div>
              <div className="roundBtn text-center mt-2">
                <span
                  id="roundText8"
                  className="btnText strong colorYellow font-13 letterSpacingmedium"
                >
                  <img
                    src={DarkLeafExploreNow}
                    alt="explore-now"
                    className="rent-now"
                  />
                </span>
              </div>
            </div>
          </div>
          <MainSlider />
        </div>
      </section>
    </WelcomeWrapper>
  );
}
