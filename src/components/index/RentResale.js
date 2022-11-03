import React, { useState } from "react";
import styled from "styled-components";
import studio2 from "./../../assets/images/img/studio-1.jpg";
import studio3 from "./../../assets/images/img/studio-3.jpg";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";
import { motion } from "framer-motion";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const RantResaleWrapper = styled.div``;

export default function RantResale() {
  const [isInView, setIsInView] = useState(false);
  return (
    <RantResaleWrapper>
      <section className="c-rent-w minHeightSec minBannerHeight d-flex align-items-center rent-resale">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="c-rent-hading">
                <h2 className="">
                  <div className="resale-title">
                    <AnimatedTextWord text="RENT" />
                  </div>
                </h2>
                <div className="roundBtn">
                  <span
                    id="roundText8"
                    className="btnText strong colorYellow font-13 letterSpacingmedium"
                  >
                    <img
                      src={ExploreNow}
                      alt="explore-now"
                      className="rent-now"
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>
              <div className="c-rent-img-1 wow fadeIn" data-wow-delay="0.5s">
                <motion.img
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                      },
                    }
                  }
                  src={studio2}
                  alt="studio2"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-md-7 ml-auto mt-4">
              <div className="c-rent-img-2 wow fadeIn " data-wow-delay="1.5s">
                <motion.img
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: 0, opacity: 0 }}
                  animate={
                    isInView && {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 1.5,
                      },
                    }
                  }
                  src={studio3}
                  alt="studio3"
                  loading="lazy"
                />
              </div>
              <div className="c-rent-hading c-rent-hading-2">
                <div className="roundBtn">
                  <span
                    id="roundText8"
                    className="btnText strong colorYellow font-13 letterSpacingmedium"
                  >
                    <img
                      src={ExploreNow}
                      alt="explore-now"
                      className="resale-now"
                      loading="lazy"
                    />
                  </span>
                </div>
                <h2 className="">
                  <div className="resale-title">
                    <AnimatedTextWord text="RESALE" />
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RantResaleWrapper>
  );
}
