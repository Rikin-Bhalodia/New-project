import React, { useState } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { TopTrandingSlider } from "../../../slider";
import { motion } from "framer-motion";

const TopTrandingWrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    text-align: center;
    text-transform: uppercase;
  }
  @media (max-width: 1000px) {
    height: 600px;
    .top {
      font-size: 45px;
    }
  }
  @media (max-width: 600px) {
    height: 550px;
  }
  @media (max-width: 500px) {
    .top {
      font-size: 40px;
    }
  }
  @media (max-width: 375px) {
    .top {
      font-size: 36px;
    }
  }
`;
const TopTranding = ({ name, isRequiredBackground }) => {
  const [isInView, setIsInView] = useState(false);
  return (
    <TopTrandingWrapper
      style={
        isRequiredBackground
          ? {
              background: "#665e2f",
            }
          : {}
      }
    >
      <div
        className="top"
        style={isRequiredBackground ? { color: "#fff" } : { color: "#000" }}
      >
        <AnimatedTextWord text={name} />
      </div>
      <TopTrandingSlider />
      <button className="btn" style={{ marginBottom: "20px" }}>
        KNOW MORE
      </button>
    </TopTrandingWrapper>
  );
};

export default TopTranding;
