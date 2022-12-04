import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import studio from "./../../assets/images/img/Studio-bg.png";
import studio2 from "./../../assets/images/img/studio-1.jpg";
import studio1 from "./../../assets/images/img/studio-2.jpg";
import studio3 from "./../../assets/images/img/studio-3.jpg";
import TakeTour from "../../assets/images/homepage/take-tour.svg";
import Icon from "../../Luxury";
import { motion } from "framer-motion";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const StudioImgWrapper = styled.div``;

export default function StudioImg() {
  const [image, setImage] = useState(studio);
  const [isInView, setIsInView] = useState(false);

  const handleImage = (studioImage) => {
    setImage(studioImage);
  };
  return (
    <StudioImgWrapper>
      <section
        className="paddingSec minHeightSec backgroundSec d-flex align-items-center c-drive-w "
        id="luxary_studio"
        style={
          image !== studio
            ? {
                backgroundSize: "cover",
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                background: "#665E2F",
              }
            : {
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                background: "#665E2F",
              }
        }
      >
        <div className="container-fluid">
          <div className="c-drive-con">
            <h4 className="">STUDIO</h4>
            <h2 className="">
              <div className="studio-title">
                <AnimatedTextWord text="DIVEINTO" />
              </div>
            </h2>
            <h2 className="">
              <div className="studio-title">
                <AnimatedTextWord text="THE WORLD" />
              </div>
            </h2>
            <h2 className="">
              <div className="studio-title">
                <AnimatedTextWord text="OF" />
              </div>
            </h2>

            <span style={{ position: "relative" }}>
              <Icon />
            </span>
            {/* <!-- <span className="">luxury</span> --> */}
            <div className="roundBtn text-center mt-2">
              <span
                id="roundText8"
                className="btnText strong colorYellow font-13 letterSpacingmedium"
              >
                <img
                  src={TakeTour}
                  alt="explore-now"
                  className="rent-now"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
          <div className="c-drive-img">
            <div className="row mt-4 mx-5">
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ x: "-100vh" }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 2,
                    },
                  }
                }
                className="col-sm-4 px5"
              >
                <div className="studioImg wow fadeInLeft">
                  <img
                    src={studio1}
                    alt="img"
                    className="img-fluid per_studio_img cursouPointer"
                    onMouseEnter={() => handleImage(studio1)}
                    onMouseLeave={() => handleImage(studio)}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ x: "-100vh" }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 1.7,
                    },
                  }
                }
                className="col-sm-4 px5"
              >
                <div className="studioImg wow fadeInLeft">
                  <img
                    src={studio2}
                    alt="img"
                    className="img-fluid per_studio_img cursouPointer"
                    onMouseEnter={() => handleImage(studio2)}
                    onMouseLeave={() => handleImage(studio)}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ x: "-100vh" }}
                animate={
                  isInView && {
                    x: 0,
                    transition: {
                      duration: 1.4,
                    },
                  }
                }
                className="col-sm-4 px5"
              >
                <div className="studioImg wow fadeInLeft">
                  <img
                    src={studio3}
                    alt="img"
                    className="img-fluid per_studio_img cursouPointer"
                    onMouseEnter={() => handleImage(studio3)}
                    onMouseLeave={() => handleImage(studio)}
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </StudioImgWrapper>
  );
}
