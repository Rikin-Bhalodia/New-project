import React, { useState } from "react";
import styled from "styled-components";
import whotext from "./../../assets/images/aboutpage/whotext.svg";
import about_group1 from "./../../assets/images/aboutpage/aboutpage_people.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
const WhoWrapper = styled.div`
  .who-we-container {
    justify-content: space-between;
  }
  .we-are-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    display: flex;
    /* justify-content: center; */
  }
  .whoareleftsection {
    padding-left: 122px;
    padding-right: 143px;
    /* align-self: center;
    text-align-last: center; */
  }
  .whotext {
    left: -25px;
  }
  .we-are-description {
    text-align: justify;
  }
`;

export default function Who() {
  const [isInView, setIsInView] = useState(false);

  return (
    <WhoWrapper>
      <div className="who-we-container d-flex">
        <div className="whoareleftsection">
          <img
            loading="lazy"
            src={whotext}
            alt=""
            className="position-relative whotext"
          />
          <div className="we-are-text">
            <AnimatedTextWord text="WE ARE" />
          </div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "50vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 2,
                },
              }
            }
            className="we-are-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.div>
        </div>
        <div>
          <motion.img
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "30vh" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.5,
                },
              }
            }
            loading="lazy"
            src={about_group1}
            alt=""
          />
        </div>
      </div>
    </WhoWrapper>
  );
}
