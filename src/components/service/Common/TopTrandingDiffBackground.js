import React from "react";
import styled from "styled-components";
import { TopTrandingSlider } from "../../../slider";
import EditIcon from "../../../assets/images/service/travel/edit.svg";
import BackImage from "../../../assets/images/service/travel/backImage.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";

const TopTrandingDiffBackgroundWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #a75b41;
  position: relative;

  .top {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    width: 100%;
    text-transform: uppercase;
    color: white;
    padding: 30px 0 0 60px;
  }
  .back-image {
    position: absolute;
    height: 900px;
    left: 0;
    width: 100vw;
  }
  @media screen and (max-width: 450px) {
    height: 600px;
    .top {
      padding: 30px 20px;
      font-size: 32px;
    }
  }
`;

const TopTrandingDiffBackground = ({ name }) => {
  return (
    <TopTrandingDiffBackgroundWrapper>
      <div className="top">
        <div>
          <AnimatedTextWord text={name} />
        </div>
        <div style={{ display: "flex", columnGap: "20px" }}>
          <div
            style={{
              borderBottom: "2px solid white",
              width: "fit-content",
            }}
          >
            1/07/2022
          </div>
          <img src={EditIcon} alt="edit-icon" />
        </div>
      </div>
      <img
        src={BackImage}
        alt="BackImage"
        className="back-image"
        loading="lazy"
      />
      <TopTrandingSlider />
    </TopTrandingDiffBackgroundWrapper>
  );
};

export default TopTrandingDiffBackground;
