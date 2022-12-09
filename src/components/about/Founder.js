import React, { useState } from "react";
import styled from "styled-components";
import desktext from "./../../assets/images/aboutpage/desktext.svg";
import founder from "./../../assets/images/aboutpage/founder.png";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";

const FounderWrapper = styled.div`
  .founder-container {
    margin-top: 148px;
  }
  .founder-image {
    left: -218px;
    z-index: 9;
  }
  .founder-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 75px;
    text-transform: uppercase;
  }
  .desktext-image {
    bottom: 60px;
    left: 89px;
  }
  .founder-text-container {
    left: -117px;
  }
  .founder-words {
    font-family: "Mulish";
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    padding-bottom: 35px;
  }
  .founder-words span {
    font-weight: 700;
  }
  .founder-description {
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    width: 534.23px;
    text-align: justify;
  }
`;

export default function Founder() {
  const [isInView, setIsInView] = useState(false);

  return (
    <FounderWrapper>
      <div className="founder-container position-relative d-flex">
        <div className="position-absolute founder-back-img" />
        <div className="founder-image position-relative">
          <motion.img
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "-50vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1,
                },
              }
            }
            loading="lazy"
            src={founder}
            alt=""
          />
        </div>
        <div className="founder-text-container position-relative ">
          <div className="founder-text">
            <AnimatedTextWord text="founder's" />
          </div>
          <img
            loading="lazy"
            src={desktext}
            alt=""
            className="position-relative desktext-image"
          />
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ x: "100vw" }}
            animate={
              isInView && {
                x: 0,
                transition: {
                  duration: 1.5,
                },
              }
            }
            className="founder-words"
          >
            SOME WORDS BY OUR FOUNDER <span>HARSH MANN</span>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "30vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }
            }
            className="founder-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </motion.div>
        </div>
      </div>
    </FounderWrapper>
  );
}
