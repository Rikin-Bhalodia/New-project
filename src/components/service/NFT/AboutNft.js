import React, { useState } from "react";
import styled from "styled-components";
import Hammer from "../../../assets/images/nfts/hammer.svg";
import Cat from "../../../assets/images/nfts/cat.svg";
import Heart from "../../../assets/images/nfts/heart.svg";
import About from "../../../assets/images/nfts/about.svg";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";

const AboutNftWrapper = styled.div`
  @media (max-width: 1200px) {
    .nft-icon {
      height: 60px;
    }
  }
  @media (max-width: 850px) {
    .nft-icon {
      height: 45px;
    }
  }
  @media (max-width: 600px) {
    .nft-icon {
      height: 40px;
    }
    .des-nft-part {
      width: 100% !important;
    }
  }
  @media (max-width: 450px) {
    .nft-icon {
      height: 35px;
    }
  }
`;

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
            <img src={Hammer} alt="about" className="nft-icon" />
            <img src={Cat} alt="about" className="nft-icon" />
            <img src={Heart} alt="about" className="nft-icon" />
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
