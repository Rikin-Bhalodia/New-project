import React from "react";
import styled from "styled-components";
import { MainSlider } from "../../slider";
import DarkLeafExploreNow from "../../assets/images/homepage/dark-explorenow.svg";
import Elegance from "../../elegance";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const WelcomeWrapper = styled.div`
  .about-title {
    font-family: "Coral Blush";
    letter-spacing: 8px;
    font-style: normal;
    font-size: 100px;
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
                <span style={{ position: "relative" }}>
                  <Elegance />
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
