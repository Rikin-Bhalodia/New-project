import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import Header from "./header";
import BannerImage from "./assets/images/studio/banner.svg";

import Mic from "./assets/images/studio/header/mic.svg";
import Search from "./assets/images/studio/header/search.svg";
import MainLogo from "./assets/images/studio/header/main-logo.svg";
import Heart from "./assets/images/studio/header/heart.svg";
import Cart from "./assets/images/studio/header/cart.svg";
import Profile from "./assets/images/studio/header/profile.svg";
import Atilier from "./assets/images/studio/atilier.svg";
import LeftCorner from "./assets/images/studio/left-corner.svg";
import RightCenter from "./assets/images/studio/right-corner.svg";
import CenterLeft from "./assets/images/studio/center-left.svg";
import CenterRight from "./assets/images/studio/center-right.svg";
import CenterImage from "./assets/images/studio/center-image.svg";
import Connect from "./assets/images/studio/connect.svg";
import WithusText from "./assets/images/studio/withus.svg";
import A from "./assets/images/studio/royclan/A.svg";
import R from "./assets/images/studio/royclan/R.svg";
import O from "./assets/images/studio/royclan/O.svg";
import Y from "./assets/images/studio/royclan/Y.svg";
import N from "./assets/images/studio/royclan/N.svg";
import L from "./assets/images/studio/royclan/L.svg";
import C from "./assets/images/studio/royclan/C.svg";
import Leaf from "./assets/images/studio/royclan/leaf.svg";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import ScrollSmoother from "gsap-trial/ScrollSmoother";

import FirstImage from "./assets/images/studio/blog/first.svg";
import Slider from "./slider";

const StudioWrapper = styled.div`
  overflow: hidden;
  .studioBlogMenu {
    display: flex;
    text-transform: uppercase;
    align-items: center;
    height: 56px;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
  }
  .item {
    padding-right: 30px;
  }
  .explore-title {
    font-family: "Coral Blush";
    letter-spacing: 3px;
    font-style: normal;
    font-size: 110px;
  }
  .MainImage {
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
    height: 200vh;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center right;
    position: relative;
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
    height: 40px;
    position: relative;
    right: 90px;
  }
  .data {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    position: relative;
    letter-spacing: 3px !important;
    font-size: 70px !important;
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
    top: 2px;
    opacity: 0.5;
  }
  .mic-icon {
    position: relative;
    right: 20px;
    height: 18px;
    top: 2px;
  }
`;

const Studio = () => {
  const wrapper = useRef();
  const [scrollHeader, setScrollHeader] = useState(false);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    let smoother = ScrollSmoother.create({
      smooth: 3, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
    });
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <StudioWrapper id="smooth-wrapper">
      <div ref={wrapper} id="smooth-content">
        <div className="MainImage">
          <section
            className={`topHeaderPart py-3 ${
              scrollHeader ? "scroll-effect" : ""
            }`}
          >
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="menuleftIcon">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        <span>
                          <input
                            placeholder="Search Items"
                            className="search"
                          />
                          <img
                            src={Search}
                            alt="search"
                            className="search-icon"
                          />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span>
                          <img src={Mic} className="mic-icon" alt="" />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="logoImage text-center">
                  <a href="">
                    <img src={MainLogo} className="main-logo" />
                  </a>
                </div>

                <div className="menuleftIcon text-right">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
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
                      <a href="javascript:void(0)">
                        <span>
                          <img
                            src={Heart}
                            className="img-fluid smallHeaderIcon"
                            alt=""
                          />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span>
                          <img
                            src={Cart}
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
          </section>
          <section className="studio-s1">
            <div className="sc">
              <p className="text-light">STUDIO</p>
              <h1 className="f-heading-m studio data">
                <div className="f-line">STYLE</div>
                <div className="f-line">OPULENCE</div>
                <div className="f-line">
                  <div>GRANDEUR</div>
                </div>
              </h1>
              <img src={Atilier} alt="atilier" className="atilier" />
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries.
              </p>
              <a
                style={{ zIndex: 99999 }}
                className="homeMenuDesign d-inline-block colorWhite text-center pt-3 coralScript font-40 position-absolute"
              >
                Menu
              </a>
            </div>
          </section>
        </div>
        <section className="studio-s2">
          <div className="row" id="bannerSliderProduct">
            <div className="col-md-2 level1 wow fadeInUp">
              <div className="image">
                <img src={LeftCorner} alt="studiob-01" />
              </div>
            </div>
            <div className="col-md-2 level3 wow fadeInUp" data-wow-delay="0.5">
              <div className="image">
                <img src={CenterLeft} alt="studiob-02" />
              </div>
            </div>
            <div className="col-md-4 level5 wow fadeInUp" data-wow-delay="0.5">
              <div className="image">
                <img src={CenterImage} alt="studiob-03" />
                <div className="info">
                  <span className="mt-5">
                    <svg
                      width="169.421"
                      height="74.49"
                      viewBox="0 0 169.421 74.49"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        id="svgGroup"
                        stroke-linecap="round"
                        fill-rule="evenodd"
                        font-size="9pt"
                        stroke="#fcfcfc"
                        stroke-width="0.25mm"
                        fill="#ffffff"
                        //   style="stroke:#fcfcfc;stroke-width:0.25mm;fill:#ffffff"
                      >
                        <path
                          d="M 55.857 43.236 A 0.482 0.482 0 0 0 55.785 43.178 A 0.954 0.954 0 0 0 55.763 43.156 Q 55.519 42.928 55.343 43.105 A 0.482 0.482 0 0 0 55.285 43.178 Q 47.385 51.278 38.985 58.078 Q 32.094 63.59 26.323 67.036 A 58.99 58.99 0 0 1 20.585 70.078 A 36.595 36.595 0 0 1 17.754 71.239 Q 13.997 72.592 10.985 72.592 A 12.929 12.929 0 0 1 10.385 72.578 Q 7.785 72.378 5.785 70.828 Q 3.785 69.278 2.985 66.878 Q 1.883 63.73 2.329 59.097 A 35.68 35.68 0 0 1 2.685 56.478 A 39.047 39.047 0 0 1 2.869 55.475 Q 3.302 53.279 4.028 50.874 A 67.461 67.461 0 0 1 5.685 46.078 A 110.994 110.994 0 0 1 10.189 36.287 A 90.517 90.517 0 0 1 30.185 10.278 A 53.319 53.319 0 0 1 33.499 7.564 A 42.891 42.891 0 0 1 39.085 3.978 Q 41.685 2.478 43.885 1.878 A 8.171 8.171 0 0 1 44.106 1.829 Q 46.911 1.256 47.585 3.278 A 6.653 6.653 0 0 1 47.781 4.289 Q 48.075 6.757 47.039 10.899 A 50.425 50.425 0 0 1 46.285 13.578 A 22.732 22.732 0 0 1 46.235 13.734 Q 45.477 16.087 43.921 19.194 A 78.626 78.626 0 0 1 42.285 22.278 A 1.508 1.508 0 0 0 42.227 22.694 Q 42.227 23.041 42.374 23.429 A 3.4 3.4 0 0 0 42.585 23.878 A 4.712 4.712 0 0 0 42.67 23.998 Q 43.411 24.998 43.794 24.285 A 1.583 1.583 0 0 0 43.885 24.078 Q 45.885 19.678 47.685 14.078 A 0.149 0.149 0 0 1 47.685 14.074 Q 47.69 13.861 48.285 11.978 A 133.826 133.826 0 0 0 48.36 11.739 Q 48.785 10.385 48.93 9.814 A 4.894 4.894 0 0 0 48.985 9.578 A 17.385 17.385 0 0 0 49.026 9.361 Q 49.103 8.953 49.232 8.186 A 223.93 223.93 0 0 0 49.335 7.578 A 16.198 16.198 0 0 0 49.358 7.436 Q 49.53 6.343 49.511 5.468 A 7.056 7.056 0 0 0 49.485 4.978 A 13.536 13.536 0 0 0 49.397 4.245 A 16.029 16.029 0 0 0 49.085 2.678 A 4.496 4.496 0 0 0 48.843 2.066 A 3.265 3.265 0 0 0 46.685 0.278 Q 45.799 -0.017 44.879 0.001 A 5.805 5.805 0 0 0 43.585 0.178 Q 41.085 0.678 38.185 2.278 A 45.936 45.936 0 0 0 35.056 4.069 A 53.87 53.87 0 0 0 28.785 8.678 Q 11.485 23.678 3.385 45.178 Q 2.216 48.365 1.442 51.242 A 49.208 49.208 0 0 0 0.385 56.078 Q -0.293 60.823 0.224 64.419 A 16.364 16.364 0 0 0 0.985 67.578 A 9.296 9.296 0 0 0 1.881 69.639 A 9.703 9.703 0 0 0 4.535 72.528 A 11.619 11.619 0 0 0 4.742 72.677 A 9.452 9.452 0 0 0 10.285 74.478 Q 13.467 74.61 17.266 73.336 A 34.342 34.342 0 0 0 21.285 71.678 Q 26.647 69.065 33.333 64.042 A 150.576 150.576 0 0 0 39.685 58.978 Q 47.985 51.978 55.785 43.678 A 0.954 0.954 0 0 0 55.806 43.656 Q 56.034 43.412 55.857 43.236 Z M 82.385 42.578 L 82.785 42.878 Q 69.885 54.878 67.985 48.878 Q 67.585 47.478 67.885 44.878 A 6004.169 6004.169 0 0 0 68.049 43.4 Q 68.505 39.285 68.573 38.609 A 3.098 3.098 0 0 0 68.585 38.478 A 1.731 1.731 0 0 0 68.196 38.609 Q 67.86 38.765 67.485 39.078 Q 66.685 39.578 64.635 41.828 Q 62.585 44.078 60.685 46.578 A 109.367 109.367 0 0 0 57.224 51.409 Q 55.344 54.181 53.385 57.378 L 52.185 57.678 Q 51.815 57.493 51.872 57.137 A 0.716 0.716 0 0 1 51.885 57.078 L 51.885 56.878 Q 53.285 50.278 54.885 44.978 Q 56.685 38.978 58.885 33.378 A 192.508 192.508 0 0 1 62.293 25.223 Q 66.01 16.909 69.585 11.478 Q 71.718 8.51 73.335 6.918 A 15.517 15.517 0 0 1 73.585 6.678 A 11.058 11.058 0 0 1 74.065 6.279 Q 74.572 5.884 74.985 5.678 Q 75.485 5.378 76.085 5.378 Q 76.885 5.278 77.385 5.978 A 2.172 2.172 0 0 1 77.598 6.519 Q 77.734 7.049 77.697 7.786 A 7.11 7.11 0 0 1 77.685 7.978 A 3.251 3.251 0 0 1 77.655 8.392 Q 77.6 8.82 77.44 9.388 A 11.838 11.838 0 0 1 77.385 9.578 A 14.395 14.395 0 0 1 76.646 11.664 A 17.228 17.228 0 0 1 76.185 12.628 Q 75.404 14.14 74.814 15.129 A 24.846 24.846 0 0 1 74.785 15.178 Q 74.325 15.943 73.543 17.119 A 113.71 113.71 0 0 1 73.035 17.878 A 199.965 199.965 0 0 0 72.5 18.672 Q 71.797 19.723 71.423 20.317 A 25.522 25.522 0 0 0 71.385 20.378 Q 61.381 35.572 59.571 38.297 A 190.724 190.724 0 0 1 59.385 38.578 A 678.281 678.281 0 0 0 58.691 40.564 Q 57.31 44.54 56.985 45.678 Q 56.616 46.599 55.951 48.792 A 132.526 132.526 0 0 0 55.835 49.178 Q 55.085 51.678 54.585 52.978 Q 55.345 51.648 56.602 49.685 A 144.465 144.465 0 0 1 56.735 49.478 Q 58.06 47.416 61.121 43.378 A 274.931 274.931 0 0 1 61.235 43.228 Q 63.682 40.003 65.435 38.439 A 10.417 10.417 0 0 1 66.385 37.678 A 13.695 13.695 0 0 1 67.191 37.188 Q 68.714 36.339 69.526 36.528 A 1.099 1.099 0 0 1 69.685 36.578 Q 70.885 37.378 71.085 38.178 A 2.641 2.641 0 0 1 71.153 38.534 Q 71.306 39.722 70.835 42.378 A 49.993 49.993 0 0 0 70.631 43.609 Q 70.306 45.753 70.385 46.778 Q 70.583 51.84 79.254 45.08 A 59.653 59.653 0 0 0 79.385 44.978 L 82.385 42.578 Z M 145.585 56.878 A 4.276 4.276 0 0 0 145.845 57.005 Q 152.127 59.821 168.385 42.878 Q 168.247 42.534 168.11 42.427 A 0.203 0.203 0 0 0 167.985 42.378 A 149.055 149.055 0 0 1 164.581 45.68 Q 153.924 55.679 148.969 55.679 A 4.838 4.838 0 0 1 148.885 55.678 Q 142.985 55.678 146.385 42.378 Q 154.86 31.578 160.072 24.097 A 163.727 163.727 0 0 0 163.185 19.478 A 89.174 89.174 0 0 0 165.485 15.738 Q 168.848 9.931 169.385 6.478 A 3.308 3.308 0 0 0 169.404 6.332 Q 169.433 6.06 169.412 5.817 A 1.828 1.828 0 0 0 168.685 4.478 Q 166.385 2.878 161.885 7.778 A 55.173 55.173 0 0 0 160.922 8.874 Q 158.337 11.898 155.887 15.621 A 93.583 93.583 0 0 0 151.485 23.078 A 96.525 96.525 0 0 0 149.707 26.612 A 84.097 84.097 0 0 0 144.485 40.478 L 143.885 42.478 Q 141.971 50.61 143.467 54.352 A 4.797 4.797 0 0 0 145.585 56.878 Z M 128.285 42.378 Q 128.485 42.278 128.585 42.578 A 1.809 1.809 0 0 1 128.627 42.621 Q 128.773 42.778 128.685 42.778 A 75.293 75.293 0 0 1 127.33 43.893 Q 126.795 44.323 126.308 44.694 A 36.536 36.536 0 0 1 125.385 45.378 Q 123.985 46.378 122.635 47.328 A 25.467 25.467 0 0 1 121.83 47.873 Q 121.409 48.146 121.035 48.359 A 10.325 10.325 0 0 1 120.335 48.728 A 11.09 11.09 0 0 1 118.687 49.358 A 10.084 10.084 0 0 1 118.435 49.428 Q 117.485 49.678 116.835 49.528 A 2.771 2.771 0 0 1 116.008 49.183 A 3.602 3.602 0 0 1 115.585 48.878 Q 114.985 48.378 114.535 47.528 A 8.993 8.993 0 0 1 114.204 46.827 Q 114.036 46.429 113.875 45.962 A 18.415 18.415 0 0 1 113.685 45.378 A 14.944 14.944 0 0 0 113.27 44.187 Q 112.343 41.875 111.165 41.875 A 1.214 1.214 0 0 0 111.085 41.878 Q 109.273 41.878 105.833 46.423 A 57.661 57.661 0 0 0 104.285 48.578 L 103.985 48.578 A 0.456 0.456 0 0 1 103.855 48.556 Q 103.729 48.519 103.564 48.415 A 2.643 2.643 0 0 1 103.435 48.328 A 0.904 0.904 0 0 1 103.221 48.119 A 0.74 0.74 0 0 1 103.085 47.678 Q 103.173 45.993 104.127 43.206 A 40.875 40.875 0 0 1 104.385 42.478 A 33.677 33.677 0 0 1 104.821 41.339 Q 105.523 39.606 106.07 38.965 A 1.423 1.423 0 0 1 106.385 38.678 Q 107.179 38.201 107.777 38.201 A 1.237 1.237 0 0 1 108.685 38.578 A 0.768 0.768 0 0 1 108.737 38.669 Q 108.853 38.909 108.685 39.078 Q 108.085 39.678 106.985 41.578 Q 106.086 43.13 105.788 44.148 A 4.232 4.232 0 0 0 105.685 44.578 Q 107.985 42.178 109.835 41.128 A 9.141 9.141 0 0 1 110.608 40.733 Q 111.842 40.181 112.674 40.351 A 1.779 1.779 0 0 1 112.785 40.378 A 4.749 4.749 0 0 1 113.633 40.693 Q 114.142 40.944 114.511 41.304 A 2.988 2.988 0 0 1 114.535 41.328 A 4.424 4.424 0 0 1 115.249 42.277 A 5.703 5.703 0 0 1 115.585 42.978 Q 115.738 43.437 115.979 44.19 A 261.231 261.231 0 0 1 116.135 44.678 A 97.571 97.571 0 0 0 116.288 45.155 Q 116.465 45.704 116.574 46.012 A 9.506 9.506 0 0 0 116.635 46.178 Q 116.785 46.578 117.185 47.278 Q 117.464 47.767 117.72 47.939 A 0.519 0.519 0 0 0 117.935 48.028 Q 118.285 48.078 118.935 48.178 Q 119.585 48.278 120.385 47.878 Q 121.175 47.483 122.308 46.843 A 77.034 77.034 0 0 0 122.335 46.828 A 14.965 14.965 0 0 0 123.239 46.27 Q 124.028 45.747 124.935 45.028 Q 126.385 43.878 128.285 42.378 Z M 162.785 8.678 A 65.894 65.894 0 0 0 160.297 12.131 Q 157.438 16.359 154.035 22.478 A 81.939 81.939 0 0 0 149.336 32.364 A 65.574 65.574 0 0 0 146.885 39.878 Q 152.385 32.678 156.035 27.728 A 136.965 136.965 0 0 0 159.544 22.725 Q 161.328 20.064 163.198 17.047 A 224.993 224.993 0 0 0 163.735 16.178 Q 166.74 11.279 167.846 8.199 A 12.28 12.28 0 0 0 168.385 6.278 A 2.139 2.139 0 0 0 168.394 6.15 Q 168.425 5.362 167.795 5.166 A 1.301 1.301 0 0 0 167.635 5.128 Q 166.811 4.982 166.034 5.636 A 3.285 3.285 0 0 0 165.985 5.678 A 6.899 6.899 0 0 0 165.071 6.314 Q 164.17 7.046 163.129 8.265 A 26.144 26.144 0 0 0 162.785 8.678 Z M 105.303 42.363 A 0.107 0.107 0 0 0 105.285 42.378 Q 99.282 45.995 96.3 46.828 A 5.797 5.797 0 0 1 94.785 47.078 Q 91.751 47.167 94.051 40.967 A 38.167 38.167 0 0 1 94.685 39.378 A 0.083 0.083 0 0 0 94.693 39.34 Q 94.693 39.15 94.001 38.615 A 13.188 13.188 0 0 0 93.685 38.378 A 1.137 1.137 0 0 0 93.61 38.309 Q 93.147 37.923 92.685 38.478 L 92.385 38.778 L 92.085 39.078 Q 90.085 38.278 88.185 38.728 Q 86.285 39.178 84.485 40.578 Q 82.785 41.878 81.485 43.578 Q 80.908 44.218 80.578 44.777 A 3.832 3.832 0 0 0 80.285 45.378 Q 79.485 47.378 80.235 48.078 Q 80.985 48.778 82.585 48.278 A 7.842 7.842 0 0 0 83.126 48.057 Q 84.508 47.434 86.212 46.095 A 32.129 32.129 0 0 0 87.885 44.678 A 21.572 21.572 0 0 0 87.985 44.592 Q 88.784 43.898 91.685 41.278 A 25.625 25.625 0 0 0 91.433 41.879 Q 90.477 44.247 90.477 45.728 A 4.25 4.25 0 0 0 90.485 45.978 Q 90.785 51.978 105.485 42.778 A 0.081 0.081 0 0 0 105.498 42.777 Q 105.577 42.764 105.485 42.578 A 1.243 1.243 0 0 0 105.459 42.507 Q 105.381 42.314 105.303 42.363 Z M 144.11 41.827 A 0.203 0.203 0 0 0 143.985 41.778 A 14.073 14.073 0 0 1 143.192 42.439 A 16.999 16.999 0 0 1 141.685 43.478 Q 135.185 47.578 130.585 47.778 Q 127.479 47.869 128.378 45.291 A 6.253 6.253 0 0 1 128.585 44.778 A 32.114 32.114 0 0 0 128.911 44.692 Q 131.253 44.065 132.842 43.25 A 9.448 9.448 0 0 0 134.385 42.278 A 9.822 9.822 0 0 0 134.813 41.916 Q 135.493 41.304 135.8 40.762 A 1.899 1.899 0 0 0 136.035 40.128 A 2.915 2.915 0 0 0 136.035 40.124 Q 136.112 39.633 136.015 39.303 A 0.852 0.852 0 0 0 135.685 38.828 A 10.518 10.518 0 0 0 135.503 38.703 Q 135.306 38.572 135.126 38.465 A 5.503 5.503 0 0 0 134.785 38.278 A 4.383 4.383 0 0 0 133.718 38.144 A 4.296 4.296 0 0 0 133.185 38.178 A 4.389 4.389 0 0 0 132.93 38.205 Q 131.748 38.365 130.485 39.178 A 10.61 10.61 0 0 0 128.998 40.27 A 11.733 11.733 0 0 0 126.685 43.078 Q 126.075 44.114 125.819 45.001 A 4.508 4.508 0 0 0 125.635 46.078 Q 125.606 46.815 125.787 47.327 A 1.707 1.707 0 0 0 126.185 47.978 A 4.343 4.343 0 0 0 126.719 48.436 A 3.189 3.189 0 0 0 127.435 48.828 A 4.067 4.067 0 0 0 127.895 48.975 A 3.207 3.207 0 0 0 128.685 49.078 Q 134.685 49.378 144.385 42.278 Q 144.247 41.934 144.11 41.827 Z M 76.085 6.878 L 76.085 6.978 A 0.851 0.851 0 0 0 75.778 7.036 A 1.045 1.045 0 0 0 75.685 7.078 A 2.103 2.103 0 0 0 75.429 7.232 Q 75.178 7.406 74.868 7.7 A 9.032 9.032 0 0 0 74.685 7.878 A 14.33 14.33 0 0 0 73.646 8.972 Q 72.617 10.164 71.447 11.925 A 48.32 48.32 0 0 0 71.085 12.478 A 76.588 76.588 0 0 0 67.68 18.549 Q 64.397 25.022 60.985 34.078 Q 62.785 31.278 66.035 26.278 A 1121.662 1121.662 0 0 1 67.354 24.253 Q 69.525 20.928 70.385 19.678 A 3.497 3.497 0 0 1 70.489 19.487 Q 70.781 18.987 71.635 17.728 Q 72.602 16.3 73.017 15.636 A 16.808 16.808 0 0 0 73.085 15.528 A 26.918 26.918 0 0 0 73.303 15.165 Q 73.548 14.753 73.873 14.181 A 110.277 110.277 0 0 0 74.185 13.628 A 21.535 21.535 0 0 0 74.74 12.572 Q 75 12.041 75.197 11.551 A 12.58 12.58 0 0 0 75.285 11.328 Q 75.685 10.278 75.985 9.178 A 9.503 9.503 0 0 0 76.119 8.673 Q 76.422 7.384 76.085 6.878 Z M 87.085 43.778 A 52.278 52.278 0 0 0 89.961 41.284 A 42.232 42.232 0 0 0 91.685 39.578 Q 89.353 39.256 86.892 41.132 A 13.609 13.609 0 0 0 85.685 42.178 Q 84.385 43.378 83.385 44.878 A 45.549 45.549 0 0 0 83.015 45.441 Q 82.828 45.731 82.623 46.057 A 79.844 79.844 0 0 0 82.485 46.278 Q 82.408 46.431 82.331 46.643 A 5.681 5.681 0 0 0 82.285 46.778 L 82.385 46.778 A 8.623 8.623 0 0 0 82.678 46.653 Q 83.131 46.452 83.899 46.07 A 74.857 74.857 0 0 0 84.085 45.978 Q 85.185 45.278 87.085 43.778 Z M 134.385 39.578 L 133.485 39.778 Q 132.641 40.059 131.797 40.78 A 7.562 7.562 0 0 0 131.685 40.878 A 9.283 9.283 0 0 0 130.628 41.839 Q 130.146 42.346 129.664 42.976 A 18.705 18.705 0 0 0 129.085 43.778 A 18.922 18.922 0 0 0 130.908 43.171 Q 132.72 42.455 133.75 41.51 A 5.558 5.558 0 0 0 133.785 41.478 A 11.383 11.383 0 0 0 134.177 41.109 Q 135.519 39.78 134.564 39.6 A 1.581 1.581 0 0 0 134.385 39.578 Z"
                          vector-effect="non-scaling-stroke"
                        />
                      </g>
                    </svg>
                  </span>
                  <h3>Most Expensive Products</h3>
                  <a href="#">
                    Watch Now <i className="fa fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2 level4 wow fadeInUp" data-wow-delay="0.5">
              <div className="image">
                <img src={CenterRight} alt="studiob-4" />
              </div>
            </div>
            <div className="col-md-2 level2 wow fadeInUp">
              <div className="image">
                <img src={RightCenter} alt="studiob-05" />
              </div>
            </div>
          </div>
        </section>
        <section className="studio-s3">
          <div className="container">
            <p>STUDIO</p>
            <h2
              className="f-heading-m explore"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem 0",
              }}
            >
              <div className="explore-title">EXPLORE</div>
            </h2>

            <div className="studioBlogMenu">
              <div className="list-unstyled d-flex mb-5 " id="blogSlider">
                <div className="item">lifestyle</div>
                <div className="item">jewellery</div>
                <div className="item">beauty</div>
                <div className="item">vacation</div>
                <div className="item">new in</div>
                <div className="item">lifestyle</div>
                <div className="item">jewellery</div>
                <div className="item">beauty</div>
                <div className="item">vacation</div>
              </div>
            </div>
            <div className="blogDetailsMenu">
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22 mainColor  wow fadeIn">
                      15 second videos
                    </h3>
                  </div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeIn">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22 mainColor  wow fadeInUp">
                      60 second videos
                    </h3>
                  </div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeInUp">
                  <a href="#">View More</a>
                </div>
              </div>
              <div>
                <div>
                  <div className="sliderInerDetials">
                    <h3 className=" brwonColor font-22  wow fadeInUp mainColor">
                      behind the scenes
                    </h3>
                  </div>
                  <Slider />
                </div>
                <div className="viewmore  wow fadeInUp">
                  <a href="#">View More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="studio-s4">
          <div className="container">
            <h2
              className="f-heading-m explore"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2rem 0",
              }}
            >
              <div className="explore-title">BLOGS</div>
            </h2>

            <div className="studioBlogMenu">
              <div className="list-unstyled d-flex mb-5 " id="blogSlider">
                <div className="item">lifestyle</div>
                <div className="item">jewellery</div>
                <div className="item">beauty</div>
                <div className="item">vacation</div>
                <div className="item">new in</div>
                <div className="item">lifestyle</div>
                <div className="item">jewellery</div>
                <div className="item">beauty</div>
                <div className="item">vacation</div>
              </div>
            </div>
          </div>
          <div className="container blogs">
            <div className="row">
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} alt="first-image" />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>

              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
              <div className="col-md-4  wow fadeInUp">
                <div className="image">
                  <img src={FirstImage} />
                </div>
                <div className="info">
                  <h3>LOREM IPSUM SET</h3>
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever... <a href="#">Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-more container">
            <a href="#">
              <h3
                className="f-heading-m explore-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "1rem 0",
                }}
              >
                <div className="explore-title">EXPLORE MORE</div>
                {/* <i class="fa fa-chevron-right  wow fadeIn"></i> */}
              </h3>
            </a>
          </div>
        </section>
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
    </StudioWrapper>
  );
};

export default Studio;
