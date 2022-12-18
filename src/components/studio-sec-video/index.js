import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Card = React.lazy(() => import("./Cards"));
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
    padding-left: 45px;
  }
  .date {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding: 30px 0px 20px 20px;
  }
  .name {
    font-family: "Coral Blush";
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    padding-bottom: 50px;
    padding-left: 20px;
  }
  @media (max-width: 1200px) {
    .video-type {
      font-size: 80px;
    }
  }
  @media (max-width: 1000px) {
    .video-type {
      font-size: 70px;
    }
    .name {
      font-size: 40px;
    }
  }
  @media (max-width: 850px) {
    .video-type {
      font-size: 60px;
    }
  }
  @media (max-width: 600px) {
    .video-type {
      font-size: 50px;
    }
    .name {
      font-size: 35px;
    }
  }
  @media (max-width: 500px) {
    .video-type {
      font-size: 45px;
    }
    .name {
      font-size: 30px;
    }
    .date {
      padding: 15px 15px;
    }
  }
  @media (max-width: 400px) {
    .video-type {
      font-size: 36px;
    }
    .name {
      font-size: 25px;
    }
  }
`;

const StudioSecVideo = () => {
  const [isInView, setIsInView] = useState(false);

  return (
    <>
      <StudioBanner />
      <SecVideoWrapper>
        <div className="">
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
