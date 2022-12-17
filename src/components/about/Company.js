import React, { useState } from "react";
import styled from "styled-components";
import bg2020 from "./../../assets/images/aboutpage/2020bg.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";

const CompanyWrapper = styled.div`
  .company-container {
    margin-left: 133px;
    background: url(${bg2020}) no-repeat;
    background-position: right;
    background-position-y: 138px;
  }

  .company-description {
    width: 488.81px;
    text-align: justify;
    padding-bottom: 66px;
    font-size: 16px;
  }
`;

export default function Company() {
  const [isInView, setIsInView] = useState(false);

  return (
    <CompanyWrapper>
      <div className="company-container">
        <div className="company-title">
          <AnimatedTextWord text="we created the team" />
          <div className="d-flex">
            <AnimatedTextWord text="& start " />
            <span className="span">
              <AnimatedTextWord text="the company" />
            </span>
          </div>
        </div>
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
          className="company-description"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </motion.div>
      </div>
    </CompanyWrapper>
  );
}
