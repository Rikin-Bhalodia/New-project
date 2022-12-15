import React, { useState } from "react";
import styled from "styled-components";
import about_shoes from "./../../assets/images/aboutpage/aboutpage_shoes.svg";
import bg2022 from "./../../assets/images/aboutpage/2022bg.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";

const LaunchWrapper = styled.div`
  .launch-description {
    padding-right: 55px;
  }
  .launch-container {
    background: url(${bg2022}) no-repeat;
    background-position-y: 10%;
    margin-left: 50px;
  }
`;

export default function Launch() {
  const [isInView, setIsInView] = useState(false);

  return (
    <LaunchWrapper>
      <div className="launch-container company-container">
        <div className="company-title d-flex">
          <AnimatedTextWord text="our first " />
          <span className="span">
            <AnimatedTextWord text="big launch" />
          </span>
        </div>
        <div className="d-flex">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "30vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 1,
                },
              }
            }
            className="launch-description company-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.div>
          <motion.img loading="lazy" src={about_shoes} alt="" />
        </div>
      </div>
    </LaunchWrapper>
  );
}
