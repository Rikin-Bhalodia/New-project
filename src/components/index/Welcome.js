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
`;

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <section className="ss c-about-w minHeightSec minBannerHeight d-flex align-items-center ">
        <div className="container-fluid">
          <div className="container-fluid">
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
