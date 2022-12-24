import React, { useState } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
import BenefitsImage from "../../../assets/images/service/travel/benefits.svg";
import BenefitsRightImage from "../../../assets/images/service/travel/benefits-right.svg";
import Royclan from "../../../assets/images/service/travel/royclan.svg";
import { useMediaQuery } from "react-responsive";
const BenefitsWrapper = styled.div``;

export default function Benefits() {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 850px)" });
  return (
    <BenefitsWrapper>
      <div className="benefits-royclan">
        <img src={BenefitsImage} alt="BenefitsImage" className="left-image" />
        <div>
          <div className="benefits">
            <AnimatedTextWord text="benefits at" />
          </div>
          <img src={Royclan} alt="BenefitsImage" className="text-image" />
          {!isResponsive && (
            <img
              src={BenefitsRightImage}
              alt="BenefitsImage"
              className="right-image"
            />
          )}
        </div>
        <div>
          <ul>
            <motion.li
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.li>
            <motion.li
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.li>
            <motion.li
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "2vh", rotateX: "-90deg", opacity: 0 }}
              animate={
                isInView && {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                  },
                }
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.li>
          </ul>
        </div>
      </div>
    </BenefitsWrapper>
  );
}
