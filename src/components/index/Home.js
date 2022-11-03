import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import studioInner5 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner1 from "./../../assets/images/img/studioInner-1.jpg";
import studioInner2 from "./../../assets/images/img/studioInner-2.jpg";
import studioInner3 from "./../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "./../../assets/images/img/studioInner-4.jpg";
import studio2 from "./../../assets/images/img/studio-1.jpg";
import studio3 from "./../../assets/images/img/studio-3.jpg";
import liveTv from "./../../assets/images/img/live-tv.png";
import secain1 from "./../../assets/images/img/secain-1.jpg";
import secain2 from "./../../assets/images/img/secain-2.jpg";
import secain3 from "./../../assets/images/img/secain-3.png";
import secain4 from "./../../assets/images/img/secain-4.png";
import secain5 from "./../../assets/images/img/secain-5.jpg";
import secain6 from "./../../assets/images/img/secain-6.jpg";
import follow1 from "./../../assets/images/img/follow1.png";
import follow2 from "./../../assets/images/img/follow2.png";
import follow3 from "./../../assets/images/img/follow3.png";
import follow4 from "./../../assets/images/img/follow4.png";
import follow5 from "./../../assets/images/img/follow5.png";
import follow6 from "./../../assets/images/img/follow6.png";
import follow7 from "./../../assets/images/img/follow7.png";
import Membership from "./../../assets/images/img/watch-bg.jpg";
import Rent from "./../../assets/images/img/rent-bg.jpg";
import { RentSlider, ServiceSlider } from "../../slider";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";
import DarkExploreNow from "../../assets/images/homepage/DarkExploreNow.png";
import ShopNow from "../../assets/images/homepage/dark-shownow.svg";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Avenue from "../../avenue";
import Service from "../../service";
import Menu from "../../commonComponents/Menu";
import MenuIcon from "../../assets/images/studio/menu.svg";
import Welcome from "./Welcome";
import StudioImg from "./StudioImg";

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
    margin: 0 0 30px 60px;
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
                              <a
                                href="/avenue"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".1s"
                              >
                                Studio
                              </a>
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
                              <a
                                href="/avenue"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".1s"
                              >
                                Avenue <br />& services
                              </a>
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
                              <a
                                href="/rent"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".2s"
                              >
                                Rent & <br />
                                Resell
                              </a>
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
                              <a
                                href="/liveShop"
                                className="menuLink coralFont wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                Live Shop
                              </a>
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
            <section
              className="paddingSec minHeightSec d-flex align-items-center c-service-w pt-5 pb-3 "
              id="avenue"
            >
              <div className="container-fluid px-5">
                <div className="row">
                  <div className="col-md-5">
                    <div className="headerAvenueSec">
                      <h2 className="brwonColor font-100 ParisienneFont wow text-center">
                        <span className="">
                          <Avenue />
                        </span>
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
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <RentSlider />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-7">
                    <ServiceSlider />
                  </div>
                  <div className="col-md-5 text-center">
                    <span className="relative">
                      <Service />
                    </span>
                    <div className="roundBtn rightDestinationbtn text-right">
                      <span
                        id="roundText8"
                        className="btnText strong colorYellow font-13 letterSpacingmedium"
                      >
                        <img
                          src={ShopNow}
                          alt="explore-now"
                          className="rent-now"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- rent and resale sec --> */}
            <section className="c-rent-w minHeightSec minBannerHeight d-flex align-items-center rent-resale">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5">
                    <div className="c-rent-hading">
                      <h2 className="">
                        <div className="resale-title">RENT</div>
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
                          />
                        </span>
                      </div>
                    </div>
                    <div
                      className="c-rent-img-1 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <img src={studio2} alt="" />
                    </div>
                  </div>
                  <div className="col-md-7 ml-auto mt-4">
                    <div
                      className="c-rent-img-2 wow fadeIn "
                      data-wow-delay="1.5s"
                    >
                      <img src={studio3} alt="" />
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
                          />
                        </span>
                      </div>
                      <h2 className="">
                        <div className="resale-title">RESALE</div>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>

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
            <section className="c-secian-w minHeightSec minBannerHeight d-flex align-items-center delayed-section">
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
                      />
                    </span>
                  </div>
                  <h2 className="f-heading-m season brwonColor coralFont">
                    <div className="membership-title">SEASON’S PICK</div>
                  </h2>
                </div>
                <div className="c-secian-con">
                  <div className="row">
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain1} />
                        </div>
                        <h3>GUCCI</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain2} />
                        </div>
                        <h3>louis vuitton</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain3} />
                        </div>
                        <h3>CHANEL</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain4} />
                        </div>
                        <h3>CHRISTIAN DIOR</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain5} />
                        </div>
                        <h3>VERSACE</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                    <div className="col-md-4 wow fadeInUp">
                      <div className="c-secian-box">
                        <div className="c-secian-img innerContainer">
                          <img alt="img" src={secain6} />
                        </div>
                        <h3>SAINT LAURENT</h3>
                        {/* <a href="/"></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Follow us sec --> */}
            <section className="paddingSec minHeightSec minBannerHeight d-flex align-items-center followSec ">
              <div className="container-fluid">
                <div className="row align-items-end">
                  <div className="col-md-6 position-relative">
                    <h2 className="">
                      <div className="membership-title">FOLLOW US</div>
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
                              alt="explore-now"
                              className="explore-now"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="col innerContainer">
                        <div className="wow fadeIn float-right">
                          <img
                            alt="img"
                            src={follow1}
                            className="img-fluid w-60 first-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-3 fadeIn delayed-section"
                    data-scrub="0.5"
                  >
                    <div className="wow fadeIn innerContainer delayed-section">
                      <img
                        alt="img"
                        src={follow2}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div
                    className="col-md-3 fadeIn delayed-section"
                    data-scrub="0.5"
                  >
                    <div className="wow fadeIn innerContainer ">
                      <img
                        alt="img"
                        src={follow3}
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                </div>
                <div className="row align-items-top">
                  <div className="width20 px-3 mt-3 wow fadeInUp delayed-section">
                    <img alt="img" src={follow4} className="img-fluid w-100" />
                  </div>
                  <div className="width30 px-3 mt-3 wow fadeInUp  delayed-section">
                    <img alt="img" src={follow5} className="img-fluid w-100" />
                  </div>
                  <div className="width20 px-3 mt-3 wow fadeInUp  delayed-section">
                    <img alt="img" src={follow6} className="img-fluid w-100" />
                  </div>
                  <div className="width30 px-3 mt-3 wow fadeInUp  delayed-section">
                    <img alt="img" src={follow7} className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Membership --> */}
            <section className="c-member-w paddingSec d-flex align-items-center membership">
              <div className="container-fluid">
                <h2 className="">
                  <div className="explore-title">MEMBERSHIP</div>
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
