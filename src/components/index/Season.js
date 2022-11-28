import React, { useState } from "react";
import styled from "styled-components";
import secain1 from "./../../assets/images/img/secain-1.jpg";
import secain2 from "./../../assets/images/img/secain-2.jpg";
import secain3 from "./../../assets/images/img/secain-3.png";
import secain4 from "./../../assets/images/img/secain-4.png";
import secain5 from "./../../assets/images/img/secain-5.jpg";
import secain6 from "./../../assets/images/img/secain-6.jpg";
import DarkExploreNow from "../../assets/images/homepage/DarkExploreNow.png";
import { motion } from "framer-motion";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const SeasonWrapper = styled.div`
  .mx-100 {
    margin: 0 100px;
  }
  .c-secian-img {
    overflow: hidden;
  }
`;

export default function Season() {
  const [isInView, setIsInView] = useState(false);

  return (
    <SeasonWrapper>
      {" "}
      <section className="c-secian-w minHeightSec minBannerHeight d-flex align-items-center">
        <div className="container-fluid">
          <div className="c-secian-heading">
            <div className="roundBtn rightDestinationbtn">
              <span
                id="roundText8"
                className="btnText strong colorYellow font-13 letterSpacingmedium"
              >
                <img
                  src={DarkExploreNow}
                  alt="explore-now"
                  className="explore-now"
                  loading="lazy"
                />
              </span>
            </div>
            <h2 className="f-heading-m season brwonColor coralFont">
              <div className="membership-title">
                <AnimatedTextWord text="SEASON’S PICK " />
              </div>
            </h2>
          </div>
          <div className="c-secian-con">
            <motion.div
              whileInView={() => {
                setIsInView(true);
              }}
              initial={{ y: "20vh" }}
              animate={
                isInView && {
                  y: 0,
                  transition: {
                    duration: 1,
                  },
                }
              }
            >
              <div className="row mx-100">
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain1}
                      />
                    </div>
                    <h3>GUCCI</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain2}
                      />
                    </div>
                    <h3>louis vuitton</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain3}
                      />
                    </div>
                    <h3>CHANEL</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
              </div>
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
                    duration: 2,
                  },
                }
              }
            >
              <div className="row mx-100">
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain4}
                      />
                    </div>
                    <h3>CHRISTIAN DIOR</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain5}
                      />
                    </div>
                    <h3>VERSACE</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
                <div className="col-md-4 wow fadeInUp">
                  <div className="c-secian-box">
                    <div className="c-secian-img innerContainer">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        loading="lazy"
                        alt="img"
                        src={secain6}
                      />
                    </div>
                    <h3>SAINT LAURENT</h3>
                    {/* <a href="/"></a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SeasonWrapper>
  );
}
