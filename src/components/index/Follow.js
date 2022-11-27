import React, { useState } from "react";
import styled from "styled-components";
import follow1 from "./../../assets/images/img/follow1.png";
import follow2 from "./../../assets/images/img/follow2.png";
import follow3 from "./../../assets/images/img/follow3.png";
import follow4 from "./../../assets/images/img/follow4.png";
import follow5 from "./../../assets/images/img/follow5.png";
import follow6 from "./../../assets/images/img/follow6.png";
import follow7 from "./../../assets/images/img/follow7.png";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect } from "react";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);

const FollowWrapper = styled.div`
  .mx-50 {
    /* margin: 0 100px; */
  }
`;

export default function Follow() {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    let delSections = document.querySelectorAll(".delayed-section");

    delSections.forEach((section) => {
      let imageAnim = gsap.to(section.querySelector("img"), {
        y: "-30vh",
        ease: "none",
        paused: true,
      });

      let progressTo = gsap.quickTo(imageAnim, "progress", {
        ease: "power3",
        duration: parseFloat(section.dataset.scrub) || 0.1,
      });
      console.log(delSections, progressTo, "delSections");

      gsap.to(section.querySelector(".innerContainer"), {
        y: "30vh",
        ease: "none",
        scrollTrigger: {
          scrub: true,
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => progressTo(self.progress),
        },
      });
    });
  }, []);

  return (
    <FollowWrapper>
      <section className="paddingSec mx-50 minHeightSec  minBannerHeight d-flex align-items-center followSec ">
        <div className="container">
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "35vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 1.3,
                },
              }
            }
          >
            <div className="row align-items-end">
              <div className="col-md-6 position-relative">
                <h2 className="">
                  <div className="membership-title">
                    <AnimatedTextWord text="FOLLOW US" />
                  </div>
                </h2>
                <div className="row align-items-end ">
                  <div className="col text-left">
                    <div className="roundBtn rightDestinationbtn mt-5">
                      <span
                        id="roundText8"
                        className="btnText strong colorYellow font-13 letterSpacingmedium"
                      >
                        <img
                          src={ExploreNow}
                          loading="lazy"
                          alt="explore-now"
                          className="explore-now"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col innerContainer">
                    <div
                      className="wow fadeIn float-right"
                      style={{ maxWidth: "170px" }}
                    >
                      <img
                        loading="lazy"
                        alt="img"
                        src={follow1}
                        className="img-fluid w-60 first-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 fadeIn delayed-section" data-scrub="0.5">
                <div className="wow fadeIn innerContainer delayed-section">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow2}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-md-3 fadeIn delayed-section" data-scrub="0.5">
                <div className="wow fadeIn innerContainer ">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow3}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "60vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 2,
                },
              }
            }
          >
            <div className="row align-items-top">
              <div className="width20 px-3 mt-3 wow fadeInUp delayed-section">
                <div className="innerContainer">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow4}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="width30 px-3 mt-3 wow fadeInUp  delayed-section">
                <div className="innerContainer">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow5}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="width20 px-3 mt-3 wow fadeInUp  delayed-section">
                <div className="innerContainer">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow6}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="width30 px-3 mt-3 wow fadeInUp  delayed-section">
                <div className="innerContainer">
                  <img
                    loading="lazy"
                    alt="img"
                    src={follow7}
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </FollowWrapper>
  );
}
