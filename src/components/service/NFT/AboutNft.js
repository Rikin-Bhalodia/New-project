import React, { useState } from "react";
import styled from "styled-components";
import Hammer from "../../../assets/images/nfts/hammer.svg";
import Cat from "../../../assets/images/nfts/cat.svg";
import Heart from "../../../assets/images/nfts/heart.svg";
import About from "../../../assets/images/nfts/about.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";

const AboutNftWrapper = styled.div``;

export default function AboutNft() {
  const [isInView, setIsInView] = useState(false);

  return (
    <AboutNftWrapper>
      <div className="nft-part">
        <div className="heading-nft-part">
          <img src={About} alt="about" className="about" />
          <div className="nft">
            <AnimatedTextWord text="NFT" />
          </div>
        </div>
        <div className="des-nft-part">
          <div className="icons-nft">
            <img src={Hammer} alt="about" />
            <img src={Cat} alt="about" />
            <img src={Heart} alt="about" />
          </div>
          <div className="des-para-nft">
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "30vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              <div className="nft-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco
              </div>
            </motion.div>
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ x: "30vw" }}
              animate={
                isInView && {
                  x: 0,
                  transition: {
                    duration: 1.3,
                  },
                }
              }
              className="nft-para"
            >
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </motion.div>
          </div>
        </div>
      </div>
    </AboutNftWrapper>
  );
}
