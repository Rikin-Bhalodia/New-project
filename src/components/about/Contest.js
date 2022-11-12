import React, { useState } from "react";
import styled from "styled-components";
import about_group2 from "./../../assets/images/aboutpage/aboutpage_people2.svg";
import bg2021 from "./../../assets/images/aboutpage/2021bg.svg";
import { motion } from "framer-motion";

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
`;

export default function Contest() {
  const [isInView, setIsInView] = useState(false);

  return (
    <ContestWrapper>
      <div className="contest-container">
        <div className="d-flex justify-content-end">
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
            className="contest-title company-title"
          >
            we win the itb uni <br /> young <span>talent contest</span>
          </motion.div>
        </div>
        <div className="d-flex">
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
            src={about_group2}
            alt=""
            className="contest-image position-relative"
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
                  duration: 0.5,
                },
              }
            }
            className="contest-description position-relative"
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
