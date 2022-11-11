import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Cards";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);
const StudioBanner = React.lazy(() => import("../../commonComponents/studio"));
const StudioProductMaterial = React.lazy(() => import("../studio-material"));

const SecVideoWrapper = styled.div`
  background: #fff;
  .video-type {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 90px;
  }
  .date {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding: 30px 0px;
  }
  .name {
    font-family: "Coral Blush";
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    padding-bottom: 50px;
  }
`;

const StudioSecVideo = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <StudioBanner />
      <SecVideoWrapper>
        <div className="container">
          <div className="video-type">
            <AnimatedTextWord text="15 Second videos" />
          </div>
          <StudioProductMaterial />
          <div className="date">June 02, 2022 /</div>
          <div className="name">
            <AnimatedTextWord text="Rolex — Lady-Date/just" />
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </SecVideoWrapper>
    </>
  );
};

export default StudioSecVideo;
