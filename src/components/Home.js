import React, { useState } from "react";
import MuteIcon from "./../assets/images/img/muteIcon.png";
import SearchIconFill from "./../assets/images/img/searchIconFill.png";
import RoyClanLogoWhite from "./../assets/images/img/roy clan logo white.png";
import Profile from "./../assets/images/img/profile.png";
import CartIcon from "./../assets/images/img/cartIcon.png";
import HeartIcon from "./../assets/images/img/heartIcon.png";
import studioInner5 from "./../assets/images/img/studioInner-1.jpg";
import studioInner1 from "./../assets/images/img/studioInner-1.jpg";
import studioInner2 from "./../assets/images/img/studioInner-2.jpg";
import studioInner3 from "./../assets/images/img/studioInner-3.jpg";
import studioInner4 from "./../assets/images/img/studioInner-4.jpg";
import aboutSlider from "./../assets/images/img/about-slider.jpg";
import studio2 from "./../assets/images/img/studio-1.jpg";
import studio1 from "./../assets/images/img/studio-2.jpg";
import studio3 from "./../assets/images/img/studio-3.jpg";
import studio from "./../assets/images/img/Studio-bg.png";
import { MainSlider } from "../slider";
import avenue1 from "./../assets/images/img/avenue1.png";
import avenue from "./../assets/images/img/avenue.png";
import avenue2 from "./../assets/images/img/avenue2.png";
import liveTv from "./../assets/images/img/live-tv.png";
import secain1 from "./../assets/images/img/secain-1.jpg";
import secain2 from "./../assets/images/img/secain-2.jpg";
import secain3 from "./../assets/images/img/secain-3.png";
import secain4 from "./../assets/images/img/secain-4.png";
import secain5 from "./../assets/images/img/secain-5.jpg";
import secain6 from "./../assets/images/img/secain-6.jpg";
import follow1 from "./../assets/images/img/follow1.png";
import follow2 from "./../assets/images/img/follow2.png";
import follow3 from "./../assets/images/img/follow3.png";
import follow4 from "./../assets/images/img/follow4.png";
import follow5 from "./../assets/images/img/follow5.png";
import follow6 from "./../assets/images/img/follow6.png";
import follow7 from "./../assets/images/img/follow7.png";
import Membership from "./../assets/images/img/watch-bg.jpg";
import Rent from "./../assets/images/img/rent-bg.jpg";
import { RentSlider, ServiceSlider } from "../slider";
import ExploreNow from "../assets/images/homepage/explorenow.svg";
import DarkExploreNow from "../assets/images/homepage/DarkExploreNow.png";
import DarkLeafExploreNow from "../assets/images/homepage/dark-explorenow.svg";
import TakeTour from "../assets/images/homepage/take-tour.svg";

import ShopNow from "../assets/images/homepage/dark-shownow.svg";

import Connect from "../assets/images/studio/connect.svg";
import WithusText from "../assets/images/studio/withus.svg";
import A from "../assets/images/studio/royclan/A.svg";
import R from "../assets/images/studio/royclan/R.svg";
import O from "../assets/images/studio/royclan/O.svg";
import Y from "../assets/images/studio/royclan/Y.svg";
import N from "../assets/images/studio/royclan/N.svg";
import L from "../assets/images/studio/royclan/L.svg";
import C from "../assets/images/studio/royclan/C.svg";
import Leaf from "../assets/images/studio/royclan/leaf.svg";
import styled from "styled-components";

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
    font-size: 50px;
  }
  .about-title {
    font-family: "Coral Blush";
    letter-spacing: 8px;
    font-style: normal;
    font-size: 80px;
  }
  .about {
    flex-direction: column;
  }
`;

export default function Home() {
  const [image, setImage] = useState(studio);
  // console.log(image, "image");
  const handleImage = (studioImage) => {
    setImage(studioImage);
  };
  return (
    <HomeWrapper>
      <section className="topHeaderPart py-2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-4">
              <div className="menuleftIcon">
                <ul>
                  <li>
                    <a href="/">
                      <span>
                        <img
                          src={MuteIcon}
                          className=" smallHeaderIcon"
                          alt="img"
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="c-search-w">
                      <form>
                        <input type="text" name="" placeholder="Search Items" />
                        <button>
                          <span>
                            <img
                              src={SearchIconFill}
                              className="img-fluid smallHeaderIcon"
                              alt=""
                            />
                          </span>
                        </button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="logoImage text-center">
                <a href="/">
                  <img src={RoyClanLogoWhite} className="img-fluid" alt="img" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="menuleftIcon text-right">
                <ul>
                  <li>
                    <a href="/">
                      <span>
                        <img
                          src={Profile}
                          className="img-fluid smallHeaderIcon"
                          alt=""
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <img
                          src={CartIcon}
                          className="img-fluid smallHeaderIcon"
                          alt=""
                        />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>
                        <img
                          src={HeartIcon}
                          className="img-fluid smallHeaderIcon"
                          alt=""
                        />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* <!-- home page banner part --> */}
          <section className="homeBanner overflow-hidden minHeightSec minBannerHeight ">
            <div className="container-fluid">
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
                                  src={studioInner5}
                                  alt=""
                                />
                              </div>
                            </div>
                            <a
                              href="/luxary_studio"
                              className="menuLink coralFont wow fadeInUp"
                            >
                              Studio
                              <p id="typewriter"></p>
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
                              <span className="bannertyping d-block">
                                Studio Content
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
                              <span className="bannertyping d-block">
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
                              <span className="bannertyping d-block">
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
                              <span className="bannertyping d-block">
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
                              <span className="bannertyping d-block">
                                Lorem ipsum dolor sit amet.
                              </span>
                            </h3>
                          </li>
                        </ul>
                        <h3
                          id="a"
                          className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-two-line shadowText"
                        >
                          <span className="bannertyping d-block">elegance</span>
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

                    <div className="homePageButtonSection">
                      <div className="inenFixedBtn">
                        <a
                          href="/"
                          //   style="z-index: 99999;"
                          className="homeMenuDesign d-inline-block colorWhite text-center pt-3 coralScript font-60 position-absolute"
                        >
                          Menu
                        </a>
                        {/* <!-- menu close icon --> */}
                        <div className="menuCloseSec"></div>
                        {/* <!-- display menu sec --> */}
                        <div
                          className="centerMenu c-menu-w home d-flex align-items-center flex-column justify-content-between"
                          //   style="z-index: 999999;"
                        >
                          <div className="searchSecbanner position-relative w-100">
                            <form className="d-flex w-100 align-items-center my-4 menuSearch">
                              <a href="/" className="menurightBtn colorWhite">
                                <i className="fa fa-microphone"></i>
                              </a>
                              <input
                                type="text"
                                className="w-100 coralFont brightMainColor font-13"
                                placeholder="Search for products..."
                              />
                              <a href="/" className="menuleftBtn colorWhite">
                                <i className="fa fa-search"></i>
                              </a>
                            </form>
                          </div>
                          {/* <!-- inner menu design --> */}
                          <div className="dragbale-menu">
                            <ul className="list-unstyled text-center w-100 menuListBaner">
                              <li className="wow fadeInUp">
                                <a href="/">Our story </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Studio </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Avenue </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Services </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Rent </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Preowned </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Live </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">BLOG </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Log in/Profile </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Home </a>
                              </li>
                              <li className="wow fadeInUp">
                                <a href="/">Contact </a>
                              </li>
                            </ul>
                            <ul className="c-social-w">
                              <li>
                                <a href="/">
                                  <i
                                    className="fa fa-pinterest"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <i
                                    className="fa fa-linkedin-square"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- about --> */}
          <section className="ss c-about-w minHeightSec minBannerHeight d-flex align-items-center ">
            <div className="container-fluid">
              <div className="container">
                <h4 className="">OPULENCE</h4>
                <div className="c-about-con d-flex about">
                  <h2 className="">
                    <div className="about-title">WELCOME</div>
                  </h2>
                  <h2 className="">
                    <div className="about-title"> TO THE </div>
                  </h2>
                  <h2 className="">
                    <div className="about-title">WORLD OF</div>
                  </h2>
                  <span></span>
                  <div className="roundBtn text-center mt-2">
                    <span
                      id="roundText8"
                      className="btnText strong colorYellow font-13 letterSpacingmedium"
                    >
                      <img
                        src={DarkLeafExploreNow}
                        alt="explore-now"
                        className="rent-now"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <MainSlider />
            </div>
          </section>

          {/* <!-- third sec --> */}
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
            <div className="container">
              <div className="c-drive-con">
                <h4 className="">STUDIO</h4>
                <h2 className="">
                  <div className="studio-title">DIVEINTO</div>
                </h2>
                <h2 className="">
                  <div className="studio-title">THE WORLD</div>
                </h2>
                <h2 className="">
                  <div className="studio-title">OF</div>
                </h2>

                <span></span>
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
                    />
                  </span>
                </div>
              </div>
              <div className="c-drive-img ">
                <div className="row mt-4">
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio1}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
                        onMouseEnter={() => handleImage(studio1)}
                        onMouseLeave={() => handleImage(studio)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio2}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
                        onMouseEnter={() => handleImage(studio2)}
                        onMouseLeave={() => handleImage(studio)}
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio3}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
                        onMouseEnter={() => handleImage(studio3)}
                        onMouseLeave={() => handleImage(studio)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="paddingSec minHeightSec d-flex align-items-center c-service-w pt-5 pb-3 "
            id="avenue"
          >
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-md-5">
                  <div className="headerAvenueSec">
                    <h2 className="brwonColor font-100 ParisienneFont wow text-center">
                      <span className=""></span>
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
                  <span className=""></span>
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
            <div className="container">
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
                    <img src={studio1} alt="" />
                  </div>
                </div>
                <div className="col-md-7 ml-auto">
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
            <div className="container">
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
            <div className="container">
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
            <div className="container">
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
                    <img alt="img" src={follow2} className="img-fluid w-100" />
                  </div>
                </div>
                <div
                  className="col-md-3 fadeIn delayed-section"
                  data-scrub="0.5"
                >
                  <div className="wow fadeIn innerContainer ">
                    <img alt="img" src={follow3} className="img-fluid w-100" />
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
            <div className="container">
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

          {/* <!-- Follow us sec --> */}
          <footer
            className="c-footer-w minHeightSec minBannerHeight d-flex align-items-center"
            style={{ backgroundColor: "#fff", position: "relative" }}
          >
            <div className="container">
              <h5>GET IN TOUCH</h5>
              <div className="footer-in">
                <div className="c-footer-box">
                  <h2>
                    <span>
                      <img
                        src={Connect}
                        alt="footer-image"
                        className="connect-image"
                      />
                      <img src={WithusText} className="with-us" />
                    </span>
                  </h2>
                  <h2
                    className="f-heading-m contact"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <div className="f-line">
                      <div>
                        <div className="perspective">
                          <div className="cube">
                            <div>W</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>I</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>T</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>H</div>
                          </div>
                        </div>
                        <div
                          className="perspective"
                          style={{ marginLeft: "1rem" }}
                        >
                          <div className="cube">
                            <div>U</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>S</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <ul className="c-footer-social-w">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="c-footer-info">
                    <li>
                      <a href="#"> SEND US A MESSAGE </a>
                    </li>
                    <li>
                      <a href="tel:+91 9876543210">CALL +91 9876543210</a>
                    </li>
                    <li>
                      FIND US AT :
                      <span>ABC StressT 981 Building Delhi-110088</span>
                    </li>
                    <li>
                      MAIL US AT :{" "}
                      <span>
                        <a href="#">abcd@royclan.com </a>
                      </span>
                    </li>
                  </ul>
                  <div className="c-footer-info-other">
                    <p>
                      KNOW THE WORLD OF LUXURY
                      <span>
                        ROYCLAN IS THE PLACE WHERE YOU CAN BUY/RENT LUXURY
                        PRODUCTS.
                      </span>
                    </p>
                    <ul>
                      <li>
                        <a href="#">TERMS & CONDITIONS </a>
                      </li>
                      <li>
                        <a href="#">FAQs </a>
                      </li>
                      <li>
                        <a href="#">NEWSLETTER </a>
                      </li>
                      <li>
                        <a href="#">SHIPPING & RETURNS </a>
                      </li>
                      <li>
                        <a href="#">ABOUT US </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="royclan">
              <div>
                <img src={R} />
                <img src={O} />
                <img src={Y} />
                <img src={Leaf} />
              </div>
              <div>
                <img src={C} />
                <img src={L} />
                <img src={A} />
                <img src={N} />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </HomeWrapper>
  );
}
