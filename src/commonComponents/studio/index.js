import React, { useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import BannerImage from "../../assets/images/studio/banner.png";
import Atilier from "../../assets/images/studio/Atilier.svg";
import CommonContent from "./commonContent";

// const Atilier = React.lazy(() => import("../../atilier"));
const Menu = React.lazy(() => import("../Menu"));
const AnimatedTextWord = React.lazy(() => import("../Animation/FlipAnimation"));

const StudioBannerWrapper = styled.div`
  overflow: hidden;
  scroll-behavior: smooth;
  .mainImage {
    background-image: linear-gradient(
        135.17deg,
        #a65a40 1.41%,
        rgba(167, 149, 134, 0) 90.8%
      ),
      url(${BannerImage});
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    height: 1000px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center right;
    position: fixed;
    width: 100%;
    z-index: -1;
  }
  .explore-title {
    font-family: "Coral Blush";
    letter-spacing: 3px;
    font-style: normal;
    font-size: 110px;
  }
  .connect-image {
    width: 500px;
    position: relative;
    right: 50px;
    top: 40px;
  }
  .with-us {
    width: 400px;
    position: relative;
    left: -400px;
    top: 130px;
  }
  .royclan {
    opacity: 0.1;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 50px;
    bottom: 0;
    div {
      display: flex;
    }
    img {
      height: 200px;
      margin-left: 40px;
      margin-top: 20px;
    }
  }
  .scroll-effect {
    background: rgb(102 94 47);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999999;
    justify-content: center;
    max-width: 100%;
    padding-top: 0px !important;
  }
  .container {
    padding-top: 20px;
  }
  .main-logo {
    height: 35px;
    position: relative;
    right: 90px;
  }
  .data {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    position: relative;
    letter-spacing: 3px !important;
    font-size: 80px !important;
    display: contents;
  }
  .atilier {
    position: relative;
    top: -50px;
  }
  .search {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 136px;
    height: 30px;
    width: 200px;
    padding: 0 20px;
    font-size: 15px;
  }
  .search-icon {
    position: relative;
    right: 25px;
    height: 15px;
    top: -2px;
    opacity: 0.5;
  }
  .mic-icon {
    position: relative;
    right: 20px;
    height: 18px;
    top: 2px;
  }
  .image h4 {
    position: absolute;
    top: 50%;
    left: 20%;
    color: white;
    display: none;
    opacity: 0;
  }
  .image:hover h4 {
    display: block;
    .f-line .cube.flip {
      transform: rotate3d(0, 1, 0, 0.01deg);
      transition-delay: calc(0.1s * var(--i));
    }
    .f-heading-m > div div {
      position: relative;
      display: inline-block;
    }
    .perspective {
      perspective: 15vw;
      text-transform: uppercase;
    }
  }

  .cube {
    position: relative;
    display: inline-block;
    will-change: transform;
    transform-style: preserve-3d;
    transform: rotate3d(0, 1, 0, 90deg);
    padding-right: 15px;
    transition: transform 1400ms cubic-bezier(0.425, 0.005, 0, 1);
  }

  .cube div {
    opacity: 0;
    width: 100%;
    display: flex;
    backface-visibility: hidden;
    transform: rotateY(0deg) translateZ(3vw);
    transition: opacity 1300ms cubic-bezier(0.425, 0.005, 0, 1);
    font-weight: 400;
    font-size: 75px;
    line-height: 112px !important;
  }
  .para {
    max-width: 400px;
    margin: 30px auto;
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
  }

  .menu-icon {
    top: 40px !important;
  }
  .cube.flip div {
    opacity: 1;
  }
  @media screen and (max-width: 1000px) {
    .data {
      font-size: 70px !important;
    }
  }
  @media screen and (max-width: 800px) {
    .data {
      font-size: 60px !important;
    }
    .para {
      font-size: 1rem;
      margin: 20px auto;
    }
    .Atilier {
      width: 350px !important;
    }
  }
  @media screen and (max-width: 700px) {
  }
  @media screen and (max-width: 670px) {
    .data {
      font-size: 55px !important;
    }
    .Atilier {
      width: 300px !important;
    }
  }
  @media screen and (max-width: 500px) {
    .data {
      font-size: 50px !important;
    }
    .para {
      font-size: 0.81rem;
      margin: 10px auto;
      padding: 0 15px;
    }
    .Atilier {
      width: 250px !important;
    }
  }
  @media screen and (max-width: 400px) {
    .data {
      font-size: 40px !important;
    }
    .para {
      margin: 0 auto;
      font-size: 0.7rem;
      padding: 0 20px;
    }
  }
  .Atilier {
    width: 450px;
  }
  .menu-icon {
    top: 0;
    z-index: 1001;
  }
`;

const StudioBanner = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <>
      <StudioBannerWrapper>
        <div className="mainImage"></div>
        <section className="studio-s1">
          <div className="sc">
            <p className="text-light">STUDIO</p>
            <motion.h1 style={{ y }} className="f-heading-m studio data">
              <AnimatedTextWord text="STYLE" />
              <AnimatedTextWord text="OPULENCE" />
              <AnimatedTextWord text="GRANDEUR" />
            </motion.h1>
            <div className="atiliers">
              {/* <Atilier /> */}
              <img src={Atilier} alt="" className="Atilier" />
            </div>
            <motion.p
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "-2vh", rotateX: "-90deg", opacity: 0 }}
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
              className="para"
            >
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </motion.p>
          </div>
        </section>
        <CommonContent />
      </StudioBannerWrapper>
    </>
  );
};

export default StudioBanner;
