import React, { useState } from "react";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { motion } from "framer-motion";
import styled from "styled-components";
import About from "../../../assets/images/nfts/about.svg";
import Earth from "../../../assets/images/nfts/earth.svg";

const AboutMetaverseWrapper = styled.div``;

export default function AboutMetaverse() {
  const [isInView, setIsInView] = useState(false);

  return (
    <AboutMetaverseWrapper>
      <div className="metaverse-part">
        <div className="desc-meta">
          <img
            src={Earth}
            alt="about"
            className="earth"
            height={90}
            width={130}
          />
        </div>
        <div className="heading-meta-part">
          <img
            src={About}
            alt="about"
            className="meta-about"
            height={70}
            width={120}
          />
          <div className="meta">
            <AnimatedTextWord text="METAVERSE" />
          </div>
        </div>
      </div>
      <div className="des-metas">
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "-40vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 1,
              },
            }
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </motion.div>
        <motion.div
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "-40vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 1.3,
              },
            }
          }
        >
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </motion.div>
      </div>
    </AboutMetaverseWrapper>
  );
}
