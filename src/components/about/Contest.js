import React, { useState } from "react";
import styled from "styled-components";
import about_group2 from "./../../assets/images/aboutpage/aboutpage_people2.svg";
import bg2021 from "./../../assets/images/aboutpage/2021bg.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";

const ContestWrapper = styled.div`
  .contest-container {
    background: url(${bg2021}) no-repeat;
    margin-right: -93px;
    background-position: center;
    background-position-y: 35%;
  }
  .contest-title {
    padding-top: 120px;
    margin-right: 200px;
  }
  .contest-image {
    left: -222px;
  }
  .contest-description {
    font-size: 16px;
    text-align: justify;
    line-height: 18px;
    width: 364.48px;
    left: -180px;
  }
  .box {
    position: relative;
    left: -200px;
    gap: 40px;
  }
`;

export default function Contest() {
  const [isInView, setIsInView] = useState(false);

  return (
    <ContestWrapper>
      <div className="contest-container">
        <div className="d-flex justify-content-end">
          <motion.div className="contest-title company-title">
            <AnimatedTextWord text="we win the itb uni" />
            <div className="d-flex">
              <AnimatedTextWord text="young " />
              <span className="span">
                <AnimatedTextWord text="talent contest" />
              </span>
            </div>
          </motion.div>
        </div>
        <div className="d-flex box">
          <img
            loading="lazy"
            src={about_group2}
            alt=""
            className="contest-image "
          />
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
            className="contest-description "
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
    </ContestWrapper>
  );
}
