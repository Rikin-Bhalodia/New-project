import React, { useState } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { TopTrandingSlider } from "../../../slider";
import { motion } from "framer-motion";

const TopTrandingWrapper = styled.div`
  width: 100%;
  height: fit-content;
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
  .btn {
    background: #a75b41;
    height: 40px;
    width: 150px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: white;
    margin-bottom: 20px;
  }
  @media (max-width: 1000px) {
    height: 600px;
    padding-top: 15px;
    .top {
      font-size: 45px;
    }
  }
  @media (max-width: 500px) {
    .top {
      font-size: 35px;
      margin-bottom: 15px;
    }
    .btn {
      margin: 0;
      margin-top: 0px !important;
    }
  }
  @media (max-width: 375px) {
    .top {
      font-size: 36px;
    }
  }
`;
const TopTranding = ({ name, isRequiredBackground }) => {
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
      <button className="btn">
        KNOW MORE
      </button>
    </TopTrandingWrapper>
  );
};

export default TopTranding;
