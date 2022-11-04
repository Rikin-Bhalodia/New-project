import React, { useRef, useState } from "react";
import studioInner5 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner1 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner2 from "./../../assets/images/img/studioInner-2.jpg";
import studioInner3 from "./../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "./../../assets/images/img/studioInner-4.jpg";
import liveTv from "./../../assets/images/img/live-tv.png";
import Membership from "./../../assets/images/img/watch-bg.jpg";
import Rent from "./../../assets/images/img/rent-bg.jpg";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MenuIcon from "../../assets/images/studio/menu.svg";
import { motion } from "framer-motion";
const AnimatedTextWord = React.lazy(() =>
  import("../../commonComponents/Animation/FlipAnimation")
);
const Menu = React.lazy(() => import("../../commonComponents/Menu"));
const Welcome = React.lazy(() => import("./Welcome"));
const StudioImg = React.lazy(() => import("./StudioImg"));
const AvenuSlider = React.lazy(() => import("./Slider"));
const RentResale = React.lazy(() => import("./RentResale"));
const Season = React.lazy(() => import("./Season"));
const Follow = React.lazy(() => import("./Follow"));

const HomeWrapper = styled.div`
  scroll-behavior: smooth;
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
  .explore-title {
    font-family: "Coral Blush";
    letter-spacing: 8px;
    font-style: normal;
    font-size: 110px;
  }
  .membership {
    background-image: url(${Membership});
  }
  .membership-title {
    font-family: "Coral Blush";
    letter-spacing: 3px;
    font-style: normal;
    font-size: 90px;
    color: #a65a40;
  }
  .first-image {
    width: 180px !important;
  }
  .explore-now {
    width: 100px;
    /* margin: 0 0 30px 60px; */
  }
  .resale-now {
    width: 90px;
    margin: 0 0 20px 50px;
  }
  .rent-now {
    width: 90px;
    margin: 0 0 20px 0;
  }
  .resale-title {
    font-family: "Coral Blush";
    letter-spacing: 3px;
    font-style: normal;
    font-size: 80px;
    color: white;
    opacity: 0.5;
  }
  .rent-resale {
    background-image: url(${Rent});
  }
  .studio-title {
    font-family: "Coral Blush";
    letter-spacing: 4px;
    font-style: normal;
    font-size: 80px;
    line-height: 100px;
  }
  .about {
    flex-direction: column;
  }
  .about-title {
    font-family: "Coral Blush";
    letter-spacing: 8px;
    font-style: normal;
    font-size: 100px;
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
    top: 2px;
    opacity: 0.5;
  }
  .mic-icon {
    position: relative;
    right: 20px;
    height: 18px;
    top: 2px;
  }
  .main-logo {
    height: 40px;
    position: relative;
    right: 90px;
  }

  @media (max-width: 767px) {
    .studioImg.wow.fadeInLeft {
      margin-bottom: 57px;
    }
    .membership-title {
      font-size: 45px;
    }
    .explore-title {
      font-size: 35px;
    }
    .c-member-w a {
      padding: 12px 25px;
    }
  }
  .c-drive-img img {
    height: 300px;
    object-fit: cover;
    width: 100%;
  }
  .content {
    font-size: 46px;
  }
`;

export default function Home() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  const wrapper = useRef();
  gsap.registerPlugin(ScrollTrigger);

  // useLayoutEffect(() => {
  //   let smoother = ScrollTrigger.create({
  //     smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //   });
  //   return () => {
  //     smoother.kill();
  //   };
  // }, []);

  return (
    <HomeWrapper>
      <div>
        <div id="smooth-wrapper">
          <div id="smooth-content" ref={wrapper}>
            {/* <!-- home page banner part --> */}
            <section className="homeBanner overflow-hidden minHeightSec minBannerHeight ">
              <div className="">
                <div className="row">
                  <div className="col-12 px-0">
                    <div className="homePageBanerImageSec position-relative">
                      {/* <!-- <img src="assets/img/home-page.gif" className="img-fluid bannerImage" alt="home Page Banner"> --> */}
                      <div className="bannerSection paddingSec minBannerHeight d-flex justify-content-center align-items-center">
                        <div className="bannerMenus">
                          <ul>
                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner1}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "20vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                href="/avenue"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".1s"
                              >
                                Studio
                              </motion.a>
                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUp"
                                    src={studioInner2}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                                <span className="bannertyping d-block content">
                                  Lorem ipsum dolor sit amet.
                                </span>
                              </h3>
                            </li>

                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner1}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "20vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                href="/avenue"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".1s"
                              >
                                Avenue <br />& services
                              </motion.a>
                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUp"
                                    src={studioInner2}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                                <span className="bannertyping d-block content">
                                  Lorem ipsum dolor sit amet.
                                </span>
                              </h3>
                            </li>

                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner3}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "20vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                href="/rent"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                Rent & <br />
                                Resell
                              </motion.a>
                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUpt"
                                    src={studioInner2}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                                <span className="bannertyping d-block content">
                                  Know the world of luxary
                                </span>
                              </h3>
                            </li>

                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner4}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "20vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2 }}
                                href="/liveShop"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                Live Shop
                              </motion.a>
                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUp"
                                    src={studioInner5}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                                <span className="bannertyping d-block content">
                                  Lorem ipsum dolor sit amet.
                                </span>
                              </h3>
                            </li>

                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner4}
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUp"
                                    src={studioInner5}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                                <span className="bannertyping d-block content">
                                  Lorem ipsum dolor sit amet.
                                </span>
                              </h3>
                            </li>
                          </ul>
                          <h3
                            id="a"
                            className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-two-line shadowText"
                          >
                            <span className="bannertyping d-block">
                              elegance
                            </span>
                          </h3>
                          <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-show-one-line shadowText AppendTextH3">
                            <span className="bannertyping d-block"></span>
                          </h3>
                        </div>
                      </div>
                      <div className="mobile-video">
                        <video controls autoplay loop>
                          <source
                            src="assets/img/mob banner.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>

                      <div
                        className="menu-icon"
                        onClick={() => setMenuOpenModal(!menuOpenModal)}
                      >
                        <Menu
                          menuOpenModal={menuOpenModal}
                          onClick={(e) => e.stopPropagation()}
                        />
                        {menuOpenModal ? (
                          <img src={MenuIcon} alt="menu" height={45} />
                        ) : (
                          <img src={MenuIcon} alt="menu" height={45} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- about --> */}
            <Welcome />
            {/* <!-- third sec --> */}
            <StudioImg />
            <AvenuSlider />
            {/* <!-- rent and resale sec --> */}
            <RentResale />
            {/* <!-- live tv sec --> */}
            <section className="c-live-tv minHeightSec minBannerHeight d-flex align-items-center ">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <h2>
                      <span></span>
                    </h2>
                  </div>
                  <div className="col-md-7 mx-auto">
                    <div className="live-tv-in">
                      <div className="live-tv-box" id="live-tv">
                        <img
                          id="tv-image"
                          src={liveTv}
                          alt=""
                          height="auto"
                          width="500"
                        />
                        <div className="roundBtn rightDestinationbtn mt-5">
                          <span
                            id="roundText8"
                            className="btnText strong colorYellow font-13 letterSpacingmedium"
                          >
                            <img
                              src={ExploreNow}
                              alt="explore-now"
                              className="explore-now"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- season sec --> */}
            <Season />

            {/* <!-- Follow us sec --> */}
            <Follow />

            {/* <!-- Membership --> */}
            <section className="c-member-w paddingSec d-flex align-items-center membership justify-content-center">
              <div className="container-fluid">
                <h2 className="text-center">
                  <div className="explore-title ">
                    <AnimatedTextWord text="MEMBERSHIP" />
                  </div>
                </h2>

                <p className="wow flipInX" data-wow-delay="0.8s">
                  Only on Invitation Basis
                </p>
                <a className="wow fadeInUp" data-wow-delay="1.2s" href="/">
                  KNOW MORE
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}