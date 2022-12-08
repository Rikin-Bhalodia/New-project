import React, { useState } from "react";
import styled from "styled-components";
import aboutMainBg from "./../assets/images/aboutpage/aboutmain.svg";
import storytext from "./../assets/images/aboutpage/storytext.svg";
// import abouttext from "./../assets/images/aboutpage/abouttext.svg";
import nexttext from "./../assets/images/aboutpage/nexttext.svg";
// import iconhome from "./../assets/images/aboutpage/icon_home.svg";
// import iconlocation from "./../assets/images/aboutpage/icon_location.svg";
// import iconchat from "./../assets/images/aboutpage/icon_chat.svg";
// import iconstar from "./../assets/images/aboutpage/icon_star.svg";

import bg2022_2 from "./../assets/images/aboutpage/2022bg2.svg";
import buttonArrow from "./../assets/images/aboutpage/buttonArrow.svg";

import mission from "./../assets/images/aboutpage/mission.svg";
import LeftFilter from "./../assets/images/aboutpage/left-filter.svg";
import RightFilter from "./../assets/images/aboutpage/right-filter.svg";
import { motion } from "framer-motion";

const AnimatedTextWord = React.lazy(() =>
  import("../commonComponents/Animation/FlipAnimation")
);
const Who = React.lazy(() => import("./about/Who"));
const Company = React.lazy(() => import("./about/Company"));
const Contest = React.lazy(() => import("./about/Contest"));
const Launch = React.lazy(() => import("./about/Launch"));
const Founder = React.lazy(() => import("./about/Founder"));

const AboutWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  .aboutus-header {
    background: url(${aboutMainBg}) no-repeat;
    height: 1000px;
  }
  .about-title {
    font-family: "Coral Blush";
    font-size: 220px;
    color: #fff;
    line-height: 246px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    padding-top: 100px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .aboutus-container {
    position: relative;
    top: -218px;
    margin-left: 218px;
    background: #ffffff;
    box-shadow: -38px 40px 250px rgba(0, 0, 0, 0.25);
  }
  .story-container {
    padding: 92px 150px 0 146px;
  }
  .story-line {
    width: 0px;
    height: 322.42px;
    border: 1px solid #000000;
    margin-left: 87px;
    margin-right: 62px;
  }
  .story-text {
    top: -35px;
    left: 19px;
  }
  .self-center {
    align-self: center;
  }
  .icon-container {
    margin: 137px 167px 137px 181px;
  }
  .company-title {
    text-transform: uppercase;
    padding-top: 150px;
    font-family: "Coral Blush";
    font-size: 48px;
    line-height: 54px;
    padding-bottom: 40px;
  }
  .company-title span {
    color: #a75b41;
  }

  .whatsnext-container {
    position: relative;
    margin-top: 172px;
    background-color: #665e2f;
    left: -218px;
    width: calc(100% + 218px);
  }
  .container-bg {
    background: url(${bg2022_2}) no-repeat;
    background-position: bottom;
    background-position-x: right;
  }
  .whats-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 150px;
    line-height: 168px;
    padding-left: 143px;
    padding-top: 157px;
    text-transform: uppercase;
  }
  .next-text-image {
    position: relative;
    bottom: 52px;
    left: 315px;
  }
  .joinus-button {
    padding-top: 28px;
    padding-bottom: 151px;
    text-align: center;
  }
  .joinus-button button {
    font-family: "Mulish";
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    padding: 30px 62px;
  }

  .mission-container {
    height: calc(909.96px - 442px);
  }
  .mission-bg-container {
    position: relative;
    top: -442px;
    background: url(${mission}) no-repeat;
    height: 909.96px;
    /* background-size: 100vw; */
  }
  .dark-bg {
    background: rgba(0, 0, 0, 0.6);
    height: 909.96px;
  }
  .center-element {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .mission-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 96px;
    text-align: center;
    text-transform: uppercase;
  }
  .mission-description {
    font-family: "Arial";
    padding-top: 26px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    width: 534.23px;
    margin: 0 auto;
  }
  .filter-section {
    position: relative;
    width: 100%;
    background: #ffe600;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .image {
    position: absolute;
    left: 0;
  }
  .image2 {
    position: absolute;
    right: 0;
  }
  .subscribe-text {
    font-family: "Arial";
    font-weight: 700;
    font-size: 48px;
    padding-left: 78px;
    text-transform: uppercase;
    color: #000;
  }
  .submit-btn {
    border: 2px solid #000000;
    border-radius: 61px;
    background: transparent;
    font-family: "Arial";
    width: 141.16px;
    height: 55.27px;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
    margin-right: 114px;
    color: #000;
  }
  .subscribe-container {
    display: flex;
    justify-content: space-between;
    z-index: 999;
    width: 100%;
  }
  .subscribe-container input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000000;
    font-family: "Arial";
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    width: 646.75px;
  }
  .subscribe-container input:focus {
    outline: none;
  }
  .subscribe-container input::placeholder {
    font-family: "Arial";
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.715em;
    color: #000000;
    opacity: 0.5;
  }
  .founder-back-img {
    width: 721.03px;
    height: 806.47px;
    top: 17px;
    left: -204px;
    background: #fff;
    z-index: 9;
  }
  .our-text {
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 96px;
    line-height: 107px;
    color: #000000;
  }
`;

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const [svgInView, setSvgInView] = useState(false);
  const svgVariants = {
    hidden: {
      rotate: "-180deg",
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <AboutWrapper>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <section className="aboutus-header">
          <div className="about-title">
            <AnimatedTextWord text="About" />
            <AnimatedTextWord text="us" />
          </div>
        </section>
        <motion.section
          whileInView={() => {
            setIsInView(true);
          }}
          initial={{ x: "60vw" }}
          animate={
            isInView && {
              x: 0,
              transition: {
                duration: 0.7,
              },
            }
          }
          className="aboutus-container"
        >
          <div className="story-container d-flex">
            <div className="aboutstory-text self-center">
              <div>
                <div className="our-text">
                  <AnimatedTextWord text="OUR" />
                </div>
                <img
                  loading="lazy"
                  src={storytext}
                  alt=""
                  className="position-relative story-text"
                />
              </div>
            </div>
            <div className="story-line"></div>
            <motion.div
              whileInView={() => {
                setSvgInView(true);
              }}
              initial={{ y: "60vh" }}
              animate={
                isInView && {
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
              className="self-center story-description"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </motion.div>
          </div>
          <div className="icon-container d-flex justify-content-between">
            {/* <img loading="lazy" src={iconhome} alt="" /> */}
            <motion.svg
              width="125"
              height="124"
              viewBox="0 0 125 124"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              whileInView={() => {
                setSvgInView(true);
              }}
            >
              <motion.path
                d="M70.4542 69.4082C70.5949 69.5489 70.674 69.7396 70.674 69.9386V87.5827V87.5835C70.6737 87.839 70.7238 88.092 70.8214 88.3281C70.919 88.5643 71.0622 88.7788 71.2428 88.9596L70.7122 89.4897L71.2428 88.9596C71.4234 89.1403 71.6378 89.2837 71.8739 89.3816C72.1099 89.4794 72.3629 89.5297 72.6184 89.5297H84.7988H84.7995C85.0552 89.53 85.3084 89.4798 85.5446 89.3821L85.8313 90.0751L85.5446 89.3821C85.7809 89.2844 85.9955 89.141 86.1763 88.9602C86.3571 88.7795 86.5004 88.5648 86.5981 88.3286C86.6959 88.0923 86.746 87.8391 86.7458 87.5835V87.5827V65.5857C86.7458 65.1714 87.0816 64.8357 87.4958 64.8357H91.0295C91.0296 64.8357 91.0297 64.8357 91.0298 64.8357C91.7064 64.8353 92.3667 64.6275 92.9216 64.2402C93.4766 63.8529 93.8994 63.3047 94.1331 62.6696C94.3668 62.0344 94.4 61.3429 94.2284 60.6883L94.9539 60.4981L94.2284 60.6883C94.0568 60.0336 93.6885 59.4474 93.1733 59.0085L65.5369 35.4745C64.7744 34.8253 63.8057 34.4687 62.8043 34.4687C61.8029 34.4687 60.8342 34.8252 60.0717 35.4744C60.0717 35.4744 60.0717 35.4744 60.0717 35.4745L32.4352 59.0086L32.4343 59.0094C31.9179 59.4476 31.5487 60.0338 31.3764 60.6887C31.2041 61.3437 31.2371 62.0357 31.4709 62.6713C31.7047 63.3068 32.1281 63.8553 32.6838 64.2424C33.2394 64.6295 33.9006 64.8366 34.5778 64.8357H34.5788H38.1128C38.527 64.8357 38.8628 65.1714 38.8628 65.5857L38.8628 87.5846L38.8628 87.5853M70.4542 69.4082L55.682 87.5853C55.682 88.2999 55.3982 88.9853 54.8929 89.4906C54.3876 89.9959 53.7022 90.2797 52.9876 90.2797H40.8098C40.095 90.2797 39.4094 89.996 38.9036 89.4907C38.3979 88.9855 38.1135 88.3002 38.1128 87.5853H38.8628M70.4542 69.4082C70.3136 69.2675 70.1228 69.1885 69.9238 69.1886L55.6819 69.1912C55.2677 69.1912 54.932 69.527 54.932 69.9412V87.5853C54.932 88.101 54.7272 88.5956 54.3625 88.9602C53.9979 89.3249 53.5033 89.5297 52.9876 89.5297H40.8098C40.2937 89.5297 39.7988 89.3249 39.4337 88.9601C39.0688 88.5956 38.8635 88.1011 38.8628 87.5853M70.4542 69.4082L38.8628 87.5853"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : " hidden"}
              />
              <motion.path
                d="M74.2237 14.2083H20.1803C18.8101 14.2083 17.4959 14.7527 16.527 15.7216C15.558 16.6906 15.0137 18.0047 15.0137 19.375V104.625C15.0137 105.995 15.558 107.309 16.527 108.278C17.4959 109.247 18.8101 109.792 20.1803 109.792H105.43C106.801 109.792 108.115 109.247 109.084 108.278C110.053 107.309 110.597 105.995 110.597 104.625V50.5817"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
            </motion.svg>
            <motion.svg
              width="99"
              height="99"
              viewBox="0 0 99 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              whileInView={() => {
                setSvgInView(true);
              }}
            >
              <motion.path
                d="M47.9955 56.0541C49.7337 56.0541 51.4008 55.3635 52.6299 54.1344C53.859 52.9053 54.5495 51.2383 54.5495 49.5C54.5495 47.7618 53.859 46.0947 52.6299 44.8656C51.4008 43.6365 49.7337 42.946 47.9955 42.946C46.2572 42.946 44.5902 43.6365 43.361 44.8656C42.1319 46.0947 41.4414 47.7618 41.4414 49.5C41.4414 51.2383 42.1319 52.9053 43.361 54.1344C44.5902 55.3635 46.2572 56.0541 47.9955 56.0541Z"
                fill="black"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
              <motion.path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M66.5317 29.6517C56.2942 19.4143 39.6941 19.4143 29.4593 29.6517C19.2219 39.8891 19.2219 56.4892 29.4593 66.7267L29.5327 66.8001L43.6239 80.8913C44.7837 82.051 46.3567 82.7025 47.9968 82.7025C49.6369 82.7025 51.2099 82.051 52.3697 80.8913L66.5343 66.7267C76.7717 56.4892 76.7717 39.8891 66.5343 29.6517H66.5317ZM32.2382 32.4306C36.4277 28.3018 42.0797 25.9968 47.9617 26.0184C53.8437 26.0399 59.4787 28.3862 63.6377 32.5456C67.7968 36.7051 70.1427 42.3402 70.1637 48.2222C70.1848 54.1043 67.8793 59.756 63.7501 63.9451L49.5855 78.1124C49.1633 78.5341 48.5909 78.7709 47.9942 78.7709C47.3974 78.7709 46.8251 78.5341 46.4029 78.1124L32.3038 64.0133L32.2985 64.0081L32.2382 63.9451C28.0599 59.7662 25.7125 54.0987 25.7125 48.1892C25.7125 42.2797 28.0599 36.6122 32.2382 32.4332V32.4306Z"
                fill="black"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
              <motion.path
                d="M60.8923 1H6.04793C4.65734 1 3.3237 1.55241 2.3404 2.53571C1.3571 3.51901 0.804688 4.85265 0.804688 6.24324V92.7568C0.804688 94.1474 1.3571 95.481 2.3404 96.4643C3.3237 97.4476 4.65734 98 6.04793 98H92.5614C93.952 98 95.2857 97.4476 96.269 96.4643C97.2523 95.481 97.8047 94.1474 97.8047 92.7568V37.9124"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
            </motion.svg>
            <motion.svg
              width="98"
              height="98"
              viewBox="0 0 98 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M60.7728 1H6.49388C5.11762 1 3.79773 1.54672 2.82457 2.51988C1.8514 3.49304 1.30469 4.81293 1.30469 6.18919V91.8108C1.30469 93.1871 1.8514 94.507 2.82457 95.4801C3.79773 96.4533 5.11762 97 6.49388 97H92.1155C93.4918 97 94.8116 96.4533 95.7848 95.4801C96.758 94.507 97.3047 93.1871 97.3047 91.8108V37.5319"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
              <motion.path
                d="M37.6309 46.4054L45.4146 54.1892L58.3876 41.2162"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
              <motion.path
                d="M48.0084 72.3514C62.3384 72.3514 73.9544 60.7354 73.9544 46.4055C73.9544 32.0755 62.3384 20.4595 48.0084 20.4595C33.6785 20.4595 22.0625 32.0755 22.0625 46.4055C22.0625 51.1302 23.3261 55.5644 25.5341 59.3784L23.3598 71.0541L35.0355 68.8798C38.9781 71.1606 43.4537 72.3583 48.0084 72.3514V72.3514Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : "hidden"}
              />
            </motion.svg>
            <motion.svg
              width="98"
              height="98"
              viewBox="0 0 98 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={svgVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M60.7728 1H6.49388C5.11762 1 3.79773 1.54672 2.82457 2.51988C1.8514 3.49304 1.30469 4.81293 1.30469 6.18919V91.8108C1.30469 93.1871 1.8514 94.507 2.82457 95.4801C3.79773 96.4533 5.11762 97 6.49388 97H92.1155C93.4918 97 94.8116 96.4533 95.7848 95.4801C96.758 94.507 97.3047 93.1871 97.3047 91.8108V37.5319"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
                variants={pathVariants}
                animate={svgInView ? "visible" : " hidden"}
              />
              <motion.path
                d="M49.3052 21.7442L56.4305 41.8012H75.5625L59.9513 53.5812L65.534 74.2528L49.3052 61.8582L33.0794 74.2528L38.6591 53.5812L23.0449 41.8012H42.1769L49.3052 21.7442Z"
                fill="black"
                variants={pathVariants}
                animate={svgInView ? "visible" : " hidden"}
              />
            </motion.svg>
          </div>
          <Who />
          <Company />
          <Contest />
          <Launch />
          <section className="whatsnext-container">
            <div className="container-bg">
              <div className="whats-text">
                <AnimatedTextWord text=" What's" />
              </div>
              <img
                loading="lazy"
                src={nexttext}
                alt=""
                className="next-text-image"
              />
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ x: "-100vw" }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="joinus-button"
              >
                <button className="">
                  JOIN US ON THIS JOUNEY{" "}
                  <img loading="lazy" src={buttonArrow} alt="" />
                </button>
              </motion.div>
            </div>
          </section>
          <Founder />
        </motion.section>
        <section className="mission-container">
          <section className="mission-bg-container">
            <div className="dark-bg position-relative">
              <div className="center-element">
                <div className="mission-text colorWhite">
                  <AnimatedTextWord text="our mission" />
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
                        duration: 0.5,
                      },
                    }
                  }
                  className="mission-description colorWhite"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </motion.div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="filter-section">
            <img loading="lazy" src={LeftFilter} alt="left" className="image" />
            <div className="subscribe-container">
              <div className="subscribe-text">Subscribe</div>
              <input placeholder="ENTER YOUR EMAIL ADDRESS" />
              <button className="submit-btn">submit</button>
            </div>
            <img
              loading="lazy"
              src={RightFilter}
              alt="right"
              className="image2"
            />
          </div>
        </section>
      </motion.div>
    </AboutWrapper>
  );
};

export default About;
