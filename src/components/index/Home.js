import React, { useRef, useState } from "react";
import studioInner5 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner1 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner2 from "./../../assets/images/img/studioInner-2.jpg";
import studioInner3 from "./../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "./../../assets/images/img/studioInner-4.jpg";
import liveTv from "./../../assets/images/homepage/live_tv.png";
import liveTvMobile from "./../../assets/images/homepage/live_tv-mobile.png";
import ProductReview from "./../../assets/images/homepage/product_review_mobile.svg";
import TvHead from "./../../assets/images/homepage/live_tv_head.svg";
import Membership from "./../../assets/images/img/watch-bg.jpg";
import Rent from "./../../assets/images/img/rent-bg.jpg";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";
import styled from "styled-components";
import MenuIcon from "../../assets/images/studio/menu.svg";
import { motion } from "framer-motion";
import { InstaLike } from "../../commonComponents/Animation/heart";
const FollowMobile = React.lazy(() => import("./Follow_Mobile"));
const MobileBanner = React.lazy(() => import("./Mobile-banner"));
const WelcomeMobile = React.lazy(() => import("./WelcomeMobile"));
const DiveInto = React.lazy(() => import("./DiveInto"));
const Rent_Resell = React.lazy(() => import("./Rent_Resell"));
const SeasonMobile = React.lazy(() => import("./Season_Mobile"));
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
    font-size: 90px;
    display: flex;
    justify-content: center;
  }
  .membership {
    background-image: url(${Membership});
  }
  .membership-title {
    font-family: "Coral Blush";
    letter-spacing: 3px;
    font-style: normal;
    font-size: 70px;
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
    font-size: 50px;
    line-height: 80px;
  }
  .about {
    /* flex-direction: column; */
    justify-content: space-between;
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
  .bannerSection {
    padding-top: 40px;
  }
  .c-drive-con h2 span {
    font-size: 85px;
  }
  .luxury {
    width: 300px;
    position: absolute;
    left: 100px;
    top: -135px;
  }
  .c-drive-img img {
    height: 280px;
    object-fit: cover;
    width: 300px;
  }
  .px5 {
    padding: 0 3rem;
  }

  @media (max-width: 1200px) {
    .leftSideImg img {
      width: 290px !important;
      height: 330px !important;
    }
    .rightSideImg img {
      width: 290px !important;
      height: 330px !important;
    }
    .c-drive-con h2 span {
      font-size: 77px;
    }
    .studio-title {
      letter-spacing: 4px;
      line-height: 77px;
    }
    .luxury {
      width: 250px;
      top: -120px;
    }
    .c-drive-img img {
      height: 250px;
      width: 280px;
    }
    .px5 {
      padding: 0 2.5rem;
    }
  }

  @media (max-width: 1100px) {
    .leftSideImg img {
      width: 270px !important;
      height: 310px !important;
    }
    .rightSideImg img {
      width: 270px !important;
      height: 310px !important;
    }
    .menuLink {
      font-size: 38px !important;
    }
    .rent-now {
      width: 80px;
      margin: 0;
    }
    .c-drive-con h2 span {
      font-size: 71px;
    }
    .studio-title {
      letter-spacing: 3px;
      line-height: 71px;
    }
    .luxury {
      width: 230px;
      top: -110px;
    }
    .c-drive-img img {
      height: 220px;
      width: 250px;
    }
    .px5 {
      padding: 0 2rem;
    }
  }

  @media (max-width: 1000px) {
    .leftSideImg img {
      width: 250px !important;
      height: 280px !important;
    }
    .rightSideImg img {
      width: 250px !important;
      height: 280px !important;
    }
    .menuLink {
      font-size: 34px !important;
      line-height: 52px !important;
    }
    .c-drive-con h2 span {
      font-size: 65px;
    }
    .studio-title {
      letter-spacing: 3px;
      line-height: 65px;
    }
    .luxury {
      width: 210px;
      top: -100px;
      left: 90px;
    }
    .c-drive-img img {
      height: 200px;
      width: 230px;
    }
    .px5 {
      padding: 0 1.5rem;
    }
    .membership-title {
      letter-spacing: 3px;
      font-size: 60px;
    }
    .explore-now {
      width: 80px;
    }
    .explore-title {
      font-size: 77px;
    }
  }
  @media (max-width: 850px) {
    .explore-title {
      font-size: 60px;
    }
    .c-member-w a {
      padding: 12px 25px;
    }
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
      padding: 8px 20px;
      font-size: 11px;
    }
  }

  .content {
    font-size: 46px;
  }
  .shadowText {
    font-family: Beatlys;
  }
  #tv-image {
    width: 350px;
  }
  .none {
    display: none;
  }
  .block {
    display: block;
  }
  @media (max-width: 850px) {
    .none {
      display: block;
    }
    .block {
      display: none;
    }
  }
  .livetv_banner_section {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${liveTvMobile});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
  }
  .live_tv_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    p {
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 46px;
      letter-spacing: 3px;
      color: #ffffff;
    }
    h3 {
      font-family: "Coral Blush";
      font-style: normal;
      font-weight: 400;
      font-size: 60px;
      line-height: 70px;
      letter-spacing: 3px;
      color: #ffffff;
    }
    img {
      width: 200px;
      margin-bottom: 80px;
    }
    a {
      background: white;
      padding: 9px 30px;
      border-radius: 25px;
      color: black;
      font-size: 17px;
      font-weight: 500;
    }
  }
  @media (max-width: 650px) {
    .live_tv_content {
      p {
        font-size: 12px;
        line-height: 26px;
        letter-spacing: 3px;
      }
      h3 {
        font-size: 50px;
        line-height: 60px;
        letter-spacing: 3px;
      }
      img {
        width: 150px;
        margin-bottom: 50px;
      }
      a {
        padding: 8px 30px;
        font-size: 15px;
      }
    }
  }
  @media (max-width: 450px) {
    .live_tv_content {
      p {
        font-size: 11px;
        line-height: 20px;
        letter-spacing: 3px;
      }
      h3 {
        font-size: 40px;
        line-height: 50px;
        letter-spacing: 3px;
      }
      img {
        width: 120px;
        margin-bottom: 40px;
      }
      a {
        padding: 8px 30px;
        font-size: 12px;
      }
    }
  }
`;

export default function Home() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const wrapper = useRef();

  return (
    <HomeWrapper>
      <motion.div
      // whileInView={() => {
      //   setIsInView(true);
      // }}
      // initial={{ y: "90vh" }}
      // animate={
      //   isInView && {
      //     y: 0,
      //     transition: {
      //       duration: 1,
      //     },
      //   }
      // }
      >
        <div>
          <div ref={wrapper}>
            {/* <!-- home page banner part --> */}
            <section className="homeBanner overflow-hidden minHeightSec minBannerHeight block">
              <div className="">
                <div className="row">
                  <div className="col-12 px-0">
                    <div className="homePageBanerImageSec position-relative">
                      {/* <!-- <img src="assets/img/home-page.gif" className="img-fluid bannerImage" alt="home Page Banner"> --> */}
                      <div className="bannerSection paddingSec minBannerHeight d-flex  align-items-center">
                        <div className="bannerMenus">
                          <ul>
                            <li className="menuItem">
                              <div className="leftSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInLeft"
                                    src={studioInner1}
                                    alt="studioInner"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "35vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.4 }}
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
                                    alt="studioInner"
                                    loading="lazy"
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
                                    alt="studioInner"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "35vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.6 }}
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
                                    alt="studioInner"
                                    loading="lazy"
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
                                    alt="studioInner"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "35vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.8 }}
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
                                    alt="studioInner"
                                    loading="lazy"
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
                                    alt="studioInner"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <motion.a
                                initial={{ y: "35vh", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
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
                                    alt="studioInner"
                                    loading="lazy"
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
                                    alt="studioInner"
                                    loading="lazy"
                                  />
                                </div>
                              </div>

                              <div className="rightSideImg">
                                <div className="imgWrap">
                                  <img
                                    className="wow backInUp"
                                    src={studioInner5}
                                    alt="studioInner"
                                    loading="lazy"
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
                            loading="lazy"
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
                          <img
                            src={MenuIcon}
                            alt="menu"
                            height={45}
                            loading="lazy"
                          />
                        ) : (
                          <img
                            src={MenuIcon}
                            alt="menu"
                            height={45}
                            loading="lazy"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="none" style={{ position: "relative" }}>
              <MobileBanner />
            </div>
            {/* <!-- about --> */}
            <div className="none">
              <WelcomeMobile />
            </div>
            <div className="block">
              <Welcome />
            </div>
            {/* <!-- third sec --> */}
            <div className="none">
              <DiveInto />
            </div>

            <div className="block">
              <StudioImg />
            </div>
            <AvenuSlider />
            {/* <!-- rent and resale sec --> */}
            <div className="block">
              <RentResale />
            </div>

            <div className="none">
              <Rent_Resell />
            </div>

            {/* <!-- live tv sec --> */}
            <div className="block">
              <section className="c-live-tv minHeightSec minBannerHeight d-flex align-items-center ">
                <div className="container-fluid ">
                  <div className="row">
                    <div className="col-md-12">
                      <h2>
                        <span></span>
                      </h2>
                    </div>
                    <div className="col-md-7 mx-auto">
                      <div className="live-tv-in">
                        <img src={TvHead} alt="" />

                        <div className="live-tv-box" id="live-tv">
                          <img
                            id="tv-image"
                            src={liveTv}
                            alt=""
                            height="auto"
                            width="500"
                            loading="lazy"
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
                                loading="lazy"
                              />
                            </span>
                          </div>
                          <InstaLike />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="none">
              <section className="livetv_banner_section">
                <div className="live_tv_content">
                  <p>LIVE TV</p>
                  <h3>
                    <AnimatedTextWord text="WATCH" />
                  </h3>
                  <img src={ProductReview} alt="" />
                  <a href="">WATCH LIFESTYLE & FASHION VIDEOS</a>
                </div>
              </section>
            </div>

            {/* <!-- season sec --> */}
            <div className="block">
              <Season />
            </div>
            <div className="none">
              <SeasonMobile />
            </div>

            {/* <!-- Follow us sec --> */}
            <div className="block">
              <Follow />
            </div>
            <div className="none">
              <FollowMobile />
            </div>

            {/* <!-- Membership --> */}
            <section className="c-member-w paddingSec d-flex align-items-center membership justify-content-center">
              <div className="container-fluid">
                <h2 className="text-center">
                  <div className="explore-title ">
                    <AnimatedTextWord
                      text="MEMBERSHIP"
                      style="font-size:10px"
                    />
                  </div>
                </h2>

                <p className="wow flipInX" data-wow-delay="0.8s">
                  Only on Invitation Basis
                </p>
                <motion.a
                  whileInView={() => {
                    setIsInView(true);
                  }}
                  initial={{ y: "10vh" }}
                  animate={
                    isInView && {
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    }
                  }
                  className="wow fadeInUp"
                  data-wow-delay="1.2s"
                  href="/"
                >
                  KNOW MORE
                </motion.a>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </HomeWrapper>
  );
}
