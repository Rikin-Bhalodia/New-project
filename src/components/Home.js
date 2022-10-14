import React from "react";
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
import aboutlogo from "./../assets/images/img/about-logo.png";
import aboutSlider from "./../assets/images/img/about-slider.jpg";
import studio2 from "./../assets/images/img/studio-1.jpg";
import studio1 from "./../assets/images/img/studio-2.jpg";
import studio3 from "./../assets/images/img/studio-3.jpg";
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
// import MuteIcon from "/public/img/muteIcon.png";

export default function Home() {
  return (
    <>
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
                <div className="c-about-con d-flex align-items-end ">
                  <h2
                    className="f-heading-m opulence"
                    // style="display: flex; flex-direction: column"
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
                            <div>E</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>L</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>C</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>M</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>E</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="f-line">
                      <div>
                        <div className="perspective">
                          <div className="cube">
                            <div>T</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
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
                        <div className="perspective">
                          <div className="cube">
                            <div>E</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="f-line">
                      <div>
                        <div className="perspective">
                          <div className="cube">
                            <div>W</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>R</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>L</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>D</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>F</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <span>
                    {/* <svg
                      shape-rendering="crispEdges"
                      width="419.02579"
                      height="166.53645"
                      style="width: 100%;height:100%';"
                      viewBox="0 0 419.02579 166.53645"
                      version="1.1"
                      id="demo-1"
                      inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                      sodipodi:docname="Calligraphy.svg"
                      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:svg="http://www.w3.org/2000/svg"
                      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                      xmlns:cc="http://creativecommons.org/ns/"
                      xmlns:dc="http://purl.org/dc/elements/1.1/"
                    >
                      <defs id="defs2">
                        <text
                          xml:space="preserve"
                          style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:200px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;"
                          x="16.5"
                          y="154.35208"
                          id="text3155"
                        >
                          <tspan
                            sodipodi:role="line"
                            id="tspan3153"
                            x="16.5"
                            y="154.35208"
                          >
                            elegance
                          </tspan>
                        </text>
                      </defs>

                      <metadata id="metadata5"></metadata>
                      <g
                        style="display:inline;mix-blend-mode:normal"
                        inkscape:label="Contents"
                        id="layer2"
                        inkscape:groupmode="layer"
                        transform="translate(-16.763577,-29.532352)"
                      >
                        <path
                          className="Elegance"
                          style="fill:none;stroke:/a75b41;stroke-width:6.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                          d="m 16.6875,157.625 c 0.459501,0.10443 0.917833,0.2086 1.927956,-0.0312 1.010123,-0.23982 2.572595,-0.82314 4.0725,-1.52106 1.499904,-0.69791 2.937374,-1.5104 4.176813,-2.41657 1.23944,-0.90618 2.281085,-1.90616 2.947642,-2.71844 0.666556,-0.81227 0.958218,-1.43726 0.927469,-1.99942 -0.03075,-0.56215 -0.384907,-1.06214 -0.863952,-1.33351 -0.479045,-0.27136 -1.083195,-0.31303 -1.729068,-0.3339 -0.645874,-0.0209 -1.33336,-0.0209 -2.312826,0.28112 -0.979466,0.30199 -2.250272,0.90614 -3.719225,1.95831 -1.468954,1.05218 -3.135587,2.55215 -4.604445,4.1877 -1.468857,1.63556 -2.739666,3.40636 -3.395867,4.85467 -0.6562,1.44831 -0.697866,2.57329 -0.499652,3.61509 0.198213,1.0418 0.635707,2.00011 1.302704,2.71859 0.666997,0.71847 1.56281,1.19762 2.698104,1.38477 1.135294,0.18714 2.510266,0.083 4.031017,-0.16708 1.520752,-0.25005 3.187386,-0.64588 4.880019,-1.17194 1.692634,-0.52607 3.411351,-1.18231 5.515481,-2.11461 2.104131,-0.9323 4.593665,-2.14061 6.449397,-3.12495 1.855733,-0.98435 3.077713,-1.74471 4.544961,-2.71967 1.467248,-0.97497 3.179735,-2.1645 4.748579,-3.05779 1.568845,-0.89329 2.993664,-1.49022 4.198051,-2.25736 1.204387,-0.76713 2.188742,-1.70461 3.511606,-3.25924 1.322864,-1.55462 2.984288,-3.72645 4.520759,-5.74991 1.536471,-2.02345 2.9479,-3.89841 4.302079,-5.70051 1.354178,-1.8021 2.651026,-3.53123 3.822909,-5.10416 1.171883,-1.57292 2.218738,-2.98956 3.384924,-4.58608 1.166186,-1.59651 2.451637,-3.37281 3.926713,-5.43214 1.475076,-2.05933 3.139688,-4.40157 4.81907,-6.89117 1.679382,-2.4896 3.373459,-5.12647 5.074951,-7.79287 1.701492,-2.66641 3.410299,-5.3622 5.03075,-8.227417 1.620451,-2.865218 3.152485,-5.899823 4.308904,-8.433572 1.156418,-2.533749 1.937166,-4.56664 2.401247,-6.07647 0.464082,-1.50983 0.611393,-2.496813 0.574862,-3.270029 -0.03653,-0.773217 -0.257497,-1.332998 -0.662261,-1.694359 -0.404765,-0.361362 -0.994009,-0.523404 -1.575942,-0.641347 -0.581933,-0.117944 -1.156446,-0.1916 -1.974404,0.03657 -0.817958,0.228171 -1.878597,0.75849 -3.042542,1.554056 -1.163945,0.795566 -2.430819,1.856205 -4.235527,3.800867 -1.804709,1.944663 -4.146954,4.773034 -6.260957,7.549981 -2.114004,2.776948 -3.999584,5.502201 -6.069383,8.728459 -2.069798,3.22625 -4.323657,6.95322 -7.174226,12.30084 -2.85057,5.34762 -6.297648,12.31543 -9.302875,19.86545 -3.005228,7.55003 -5.568439,15.6816 -7.122562,21.92787 -1.554122,6.24627 -2.099174,10.60668 -2.305299,13.39841 -0.206125,2.79173 -0.07355,4.01441 0.221205,5.39185 0.29475,1.37745 0.751416,2.90949 1.370414,4.14688 0.618997,1.23739 1.399745,2.18018 2.394279,2.92385 0.994535,0.74367 2.202486,1.28872 3.351421,1.53887 1.148935,0.25014 2.239037,0.20594 3.550008,-0.0225 1.310971,-0.22841 2.843004,-0.64088 4.566459,-1.31854 1.723454,-0.67767 3.638497,-1.62045 5.625309,-2.81736 1.986811,-1.19691 4.045485,-2.64793 6.325149,-4.38991 2.279664,-1.74198 4.780265,-3.77488 6.936553,-5.63838 2.156287,-1.86351 3.968214,-3.55759 5.610779,-5.08967 1.642565,-1.53208 3.115676,-2.90207 3.926274,-3.60187 0.810597,-0.6998 0.957896,-0.72927 1.70189,-0.83237 0.743993,-0.1031 2.084524,-0.27988 3.631284,-0.5598 1.54676,-0.27993 3.299762,-0.66294 4.805892,-1.16015 1.50614,-0.49721 2.76565,-1.10855 3.99195,-1.823 1.22629,-0.71446 2.4195,-1.53203 3.34374,-2.37526 0.92424,-0.84323 1.57977,-1.71236 1.88187,-2.43743 0.3021,-0.72506 0.25055,-1.30694 -0.15402,-1.76022 -0.40456,-0.45327 -1.16322,-0.77736 -2.12096,-0.85133 -0.95774,-0.074 -2.11413,0.1028 -3.3703,0.65154 -1.25617,0.54874 -2.61143,1.46943 -3.94475,2.60016 -1.33332,1.13073 -2.644391,2.47126 -3.822986,3.94821 -1.178595,1.47696 -2.224505,3.09002 -2.824787,4.45666 -0.600283,1.36665 -0.75496,2.48622 -0.599892,3.46971 0.155069,0.9835 0.619098,1.83054 1.249147,2.38257 0.630048,0.55203 1.42553,0.80982 2.832265,0.87589 1.406735,0.0661 3.424893,-0.0591 5.306753,-0.31701 1.88185,-0.25785 3.62749,-0.64823 5.47615,-1.29643 1.84866,-0.64821 3.80053,-1.55417 5.6309,-2.4307 1.83038,-0.87652 3.53918,-1.72356 5.41002,-2.78422 1.87084,-1.06066 3.90373,-2.33489 5.31054,-3.25927 1.40681,-0.92439 2.18755,-1.4989 2.61841,-1.81928 0.43086,-0.32039 0.51189,-0.38669 0.63749,-0.31243 0.12561,0.0743 0.29501,0.28785 0.52272,0.46516 0.22771,0.17732 0.51339,0.31885 0.96809,0.004 0.4547,-0.31489 1.07969,-1.08571 1.98618,-1.78379 0.90649,-0.69808 2.09397,-1.32307 3.51076,-1.91682 1.4168,-0.59376 3.0626,-1.15625 4.40661,-1.38526 1.34401,-0.22901 2.38565,-0.12485 3.31279,0.15669 0.92714,0.28153 1.73963,0.73986 2.34377,1.11494 0.60413,0.37508 0.99996,0.66674 0.3854,0.35415 -0.61457,-0.31258 -2.23954,-1.22923 -4.16693,-1.33383 -1.92739,-0.10459 -4.15651,0.60373 -5.91724,1.57258 -1.76073,0.96885 -3.05236,2.19799 -4.45867,3.64596 -1.4063,1.44797 -2.9271,3.1146 -3.85425,4.6462 -0.92715,1.5316 -1.26048,2.92741 -1.4375,3.88586 -0.17701,0.95846 -0.19785,1.47929 0.084,1.81229 0.28187,0.333 0.86519,0.47883 1.77118,0.364 0.90599,-0.11483 2.13513,-0.48982 3.28081,-0.98982 1.14568,-0.5 2.20816,-1.12499 3.7602,-2.17706 1.55204,-1.05208 3.59366,-2.53121 5.41655,-3.94787 1.82289,-1.41665 3.42702,-2.77079 5.47908,-4.73952 2.05205,-1.96873 4.55201,-4.55201 5.93802,-5.75999 1.38601,-1.20798 1.65684,-1.04132 2.20884,-0.53075 0.552,0.51057 1.38531,1.36473 1.50972,2.78123 0.1244,1.41651 -0.45892,3.39563 -1.15574,6.25866 -0.69683,2.86304 -1.50714,6.60969 -2.70047,10.92108 -1.19333,4.31138 -2.76956,9.18738 -4.64047,14.43914 -1.87091,5.25175 -4.03638,10.87903 -6.99299,17.46989 -2.95662,6.59085 -6.69245,14.12136 -9.18203,18.71744 -2.48957,4.59609 -3.72698,6.24597 -5.05283,8.10217 -1.32586,1.8562 -2.74005,3.91856 -4.21311,5.65675 -1.47305,1.7382 -3.00509,3.15238 -4.62556,4.655 -1.62047,1.50262 -3.32928,3.09358 -5.42088,4.30148 -2.0916,1.2079 -4.56643,2.03284 -6.48126,1.94496 -1.91483,-0.0879 -3.27009,-1.0896 -4.00719,-2.53318 -0.7371,-1.44358 -0.85495,-3.32916 -0.26582,-5.92219 0.58913,-2.59302 1.88547,-5.89279 4.16109,-9.95023 2.27562,-4.05743 5.5303,-8.87197 8.99106,-13.68562 3.46077,-4.81365 7.12736,-9.62605 10.40867,-13.61572 3.28132,-3.98966 6.17709,-7.15627 10.02094,-10.91677 3.84384,-3.76051 8.63541,-8.11459 12.28129,-11.34379 3.64588,-3.22921 6.14583,-5.33333 8.98967,-7.50005 2.84383,-2.16672 6.03127,-4.39584 8.22921,-5.91669 2.19795,-1.52085 3.40625,-2.33333 4.83341,-3.19794 1.42716,-0.86461 3.07296,-1.78126 4.53286,-2.6699 1.4599,-0.88863 2.73394,-1.74924 3.66187,-2.41155 0.92794,-0.66232 1.50981,-1.12634 2.44536,-1.73038 0.93556,-0.60403 2.22453,-1.34795 3.38847,-1.88198 1.16395,-0.53402 2.2025,-0.85811 3.13442,-1.04586 0.93192,-0.18776 1.75686,-0.23932 2.46035,-0.254 0.70348,-0.0147 1.28535,0.007 1.91152,0.12176 0.62617,0.11433 1.29643,0.32057 0.98337,0.2616 -0.31306,-0.059 -1.6094,-0.38305 -2.98342,-0.28385 -1.37402,0.0992 -2.82503,0.62214 -4.3241,1.33664 -1.49906,0.71449 -3.04583,1.62045 -4.79531,2.88742 -1.74947,1.26696 -3.70134,2.89475 -5.31089,4.71795 -1.60955,1.82321 -2.87643,3.84137 -3.41751,5.11979 -0.54109,1.27842 -0.35695,1.8161 0.0559,2.15814 0.41287,0.34205 1.05367,0.48936 1.64633,0.47439 0.59267,-0.015 1.13772,-0.19174 1.92203,-0.57476 0.78431,-0.38301 1.80812,-0.97226 3.25173,-1.97397 1.44361,-1.00172 3.3071,-2.4159 4.99013,-3.78222 1.68304,-1.36632 3.18561,-2.68476 5.31431,-4.61459 2.1287,-1.92982 4.88341,-4.47094 6.28663,-5.5347 1.40321,-1.06376 1.45477,-0.65129 1.24099,0.0223 -0.21378,0.67361 -0.69254,1.60903 -1.12343,2.82822 -0.43088,1.2192 -0.81389,2.72177 -1.27709,4.4926 -0.4632,1.77082 -1.00653,3.80976 -0.99132,5.25003 0.0152,1.44027 0.58803,2.2812 1.1656,2.83765 0.57758,0.55645 1.15945,0.82897 1.68603,0.97972 0.52658,0.15075 0.99798,0.18022 1.6903,0.16911 0.69233,-0.0111 1.60566,-0.0627 2.87607,-0.38315 1.2704,-0.32049 2.8982,-0.90973 4.69906,-1.67577 1.80087,-0.76604 3.77483,-1.70883 5.85929,-2.81369 2.08446,-1.10486 4.27939,-2.37173 5.80049,-3.18934 1.52111,-0.81761 2.36815,-1.18588 3.85212,-3.1707 1.48397,-1.98481 3.60539,-5.58647 3.39915,-5.3213 -0.20625,0.26516 -2.74017,4.39719 -4.29442,7.87773 -1.55425,3.48055 -2.12876,6.30892 -2.43809,7.92943 -0.30933,1.62051 -0.35353,2.03298 -0.0369,1.43615 0.31667,-0.59683 0.99431,-2.20252 2.48967,-4.16206 1.49536,-1.95955 3.80814,-4.27233 5.40663,-5.71609 1.59848,-1.44376 2.48236,-2.01828 3.74947,-2.54863 1.26712,-0.53035 2.917,-1.01647 4.22837,-0.97183 1.31137,0.0446 2.28362,0.61916 2.93886,1.2676 0.65524,0.64844 0.99406,1.37027 1.38438,2.36465 0.39031,0.99438 0.83225,2.26125 1.30368,3.55026 0.47143,1.28901 0.97228,2.60008 1.46589,3.6902 0.49361,1.09013 0.97973,1.95926 1.53976,2.63674 0.56002,0.67749 1.19346,1.16361 1.82691,1.44315 0.63346,0.27953 1.26688,0.35319 1.98124,0.33834 0.71437,-0.0148 1.50984,-0.11797 2.31988,-0.35373 0.81003,-0.23575 1.63498,-0.60403 2.38773,-0.97984 0.75274,-0.3758 1.43338,-0.75914 2.44815,-1.40002 1.01477,-0.64088 2.3637,-1.5393 3.58634,-2.39086 1.22264,-0.85156 2.31897,-1.65623 3.4557,-2.49347 1.13673,-0.83725 2.31379,-1.70702 3.43618,-2.5664 1.12239,-0.85937 2.19007,-1.70831 2.94251,-2.69498 0.75244,-0.98668 1.18993,-2.11166 1.98689,-3.34627 0.79695,-1.23462 1.95318,-2.57834 3.1357,-3.57848 1.18251,-1.00015 2.39082,-1.65638 3.55769,-2.1095 1.16687,-0.45311 2.29185,-0.7031 3.17229,-0.65582 0.88044,0.0473 1.51584,0.39102 1.98957,0.81838 0.47373,0.42735 0.78622,0.93775 1.00477,1.42214 0.21855,0.48438 0.34355,0.94271 0.34854,1.55192 0.005,0.6092 -0.1096,1.3696 -0.16159,1.82285 -0.052,0.45325 -0.0416,0.59908 0.33327,-0.40639 0.37486,-1.00547 1.11443,-3.16168 1.35952,-4.1777 0.24509,-1.01602 -0.005,-0.89102 -0.25521,-0.50002 -0.25031,0.391 -0.50031,1.04724 -0.65135,1.44308 -0.15104,0.39583 -0.20312,0.53124 -0.45786,0.24509 -0.25473,-0.28616 -0.71306,-0.99448 -1.69205,-1.46372 -0.97899,-0.46925 -2.47896,-0.69841 -3.76073,-0.38083 -1.28177,0.31759 -2.34425,1.18216 -3.16195,1.83319 -0.81769,0.65104 -1.39059,1.08852 -2.1824,1.96367 -0.79181,0.87514 -1.8022,2.18761 -2.64586,3.12501 -0.84365,0.93739 -1.52072,1.49988 -1.92185,2.58373 -0.40112,1.08385 -0.52612,2.68798 -0.65113,4.16194 -0.12501,1.47397 -0.25,2.81769 -0.036,3.80215 0.21406,0.98446 0.76613,1.60945 1.29228,2.10413 0.52614,0.49467 1.02613,0.85925 1.65115,1.11416 0.62502,0.25491 1.375,0.40074 2.24477,0.52569 0.86977,0.12494 1.85934,0.22911 2.8227,0.16646 0.96336,-0.0627 1.90084,-0.29181 3.36951,-0.81267 1.46867,-0.52085 3.46863,-1.33334 5.44257,-2.19793 1.97394,-0.86459 3.92181,-1.78124 5.74991,-2.70832 1.82811,-0.92709 3.53641,-1.86457 4.71864,-2.55726 1.18223,-0.69269 1.83847,-1.1406 2.42748,-1.31229 0.58901,-0.17168 1.10984,-0.0675 1.75571,0.16703 0.64586,0.23455 1.41668,0.59913 2.35398,0.67689 0.9373,0.0778 2.04144,-0.13056 3.32258,-0.52122 1.28114,-0.39066 2.73944,-0.96357 3.90596,-1.55209 1.16652,-0.58852 2.0415,-1.19267 2.93208,-1.87493 0.89057,-0.68227 1.7968,-1.44267 2.48938,-2.25497 0.69257,-0.8123 1.17172,-1.67687 1.18793,-2.3432 0.0162,-0.66633 -0.4317,-1.13507 -0.98368,-1.47913 -0.55198,-0.34406 -1.20822,-0.56281 -1.97933,-0.54748 -0.77111,0.0153 -1.65651,0.26533 -2.59412,0.61429 -0.93762,0.34895 -1.92718,0.79686 -3.00556,1.62511 -1.07837,0.82825 -2.24501,2.03655 -3.43251,3.23447 -1.1875,1.19791 -2.39581,2.38539 -3.28133,3.88052 -0.88553,1.49513 -1.44802,3.29718 -1.66661,4.82867 -0.2186,1.53149 -0.0936,2.79188 0.38091,3.57281 0.47452,0.78093 1.29742,1.08301 2.30776,1.25989 1.01035,0.17689 2.20824,0.22897 3.54145,0.10387 1.33321,-0.12511 2.80193,-0.42718 4.19259,-0.69801 1.39065,-0.27083 2.70312,-0.51041 3.88527,-0.8542 1.18215,-0.34378 2.23421,-0.79169 3.99461,-1.63545 1.7604,-0.84376 4.2291,-2.08332 6.42178,-3.27082 2.19268,-1.1875 4.1093,-2.32289 5.73945,-3.40099 1.63015,-1.07811 2.97387,-2.09892 4.31747,-3.11964"
                          id="mainPath-1"
                          inkscape:path-effect="/path-effect946"
                          inkscape:original-d="m 16.6875,157.625 c 0.459333,0.10517 0.917667,0.20933 1.375,0.3125 1.563531,-0.58234 3.126,-1.16567 4.6875,-1.75 1.438529,-0.81152 2.876,-1.624 4.3125,-2.4375 1.042688,-0.99902 2.084333,-1.999 3.125,-3 0.292673,-0.62401 0.584333,-1.249 0.875,-1.875 -0.353174,-0.49901 -0.707333,-0.999 -1.0625,-1.5 -0.603179,-0.0407 -1.207333,-0.0823 -1.8125,-0.125 -0.686514,0.001 -1.374,0.001 -2.0625,0 -1.269859,0.60518 -2.540667,1.20933 -3.8125,1.8125 -1.6657,1.50103 -3.332333,3.001 -5,4.5 -1.269859,1.77187 -2.540667,3.54267 -3.8125,5.3125 -0.04067,1.12602 -0.08233,2.251 -0.125,3.375 0.438509,0.95935 0.876,1.91767 1.3125,2.875 0.896851,0.48018 1.792667,0.95933 2.6875,1.4375 1.376028,-0.10317 2.751,-0.20733 4.125,-0.3125 1.6677,-0.39484 3.334333,-0.79067 5,-1.1875 1.719784,-0.65526 3.4385,-1.3115 5.15625,-1.96875 2.490633,-1.20736 4.980167,-2.41567 7.46875,-3.625 1.223027,-0.75939 2.445006,-1.51975 3.666009,-2.28112 1.713558,-1.18859 3.426048,-2.37812 5.137573,-3.56868 1.425876,-0.59595 2.850695,-1.19288 4.274543,-1.79082 0.985395,-0.93652 1.96975,-1.874 2.953125,-2.8125 1.662492,-2.17092 3.323917,-4.34275 4.984375,-6.51563 1.412487,-1.87404 2.823917,-3.749 4.234375,-5.625 1.297901,-1.7282 2.59475,-3.45733 3.890625,-5.1875 1.047896,-1.41569 2.09475,-2.83233 3.140625,-4.25 1.286502,-1.77537 2.571952,-3.55167 3.856428,-5.329 1.665681,-2.34134 3.330295,-4.68358 4.993942,-7.02687 1.695144,-2.63597 3.38922,-5.27284 5.08233,-7.91076 1.709875,-2.6949 3.418683,-5.39069 5.126524,-8.087532 1.533095,-3.033728 3.065129,-6.068333 4.596194,-9.104 0.781779,-2.031973 1.562527,-4.064864 2.342291,-6.098796 0.148317,-0.986023 0.295628,-1.973006 0.441942,-2.96101 -0.219975,-0.558804 -0.440942,-1.118585 -0.662913,-1.679378 -0.588267,-0.161049 -1.177511,-0.323091 -1.767767,-0.486136 -0.573535,-0.07266 -1.148048,-0.146314 -1.723572,-0.220971 -1.059682,0.531341 -2.120321,1.06166 -3.181981,1.59099 -1.265925,1.061682 -2.532799,2.122321 -3.800699,3.181981 -2.341338,2.829483 -4.683582,5.657854 -7.026874,8.485281 -1.884655,2.726362 -3.770236,5.451615 -5.656854,8.175922 -2.252948,3.728119 -4.506806,7.455089 -6.761708,11.181129 -3.446215,6.96908 -6.893292,13.93689 -10.341437,20.90384 -2.562313,8.13289 -5.125524,16.26446 -7.689786,24.39519 -0.544073,4.36157 -1.089123,8.72198 -1.635185,13.08147 0.133585,1.22373 0.266165,2.44641 0.397748,3.66812 0.457682,1.53309 0.914346,3.06513 1.370019,4.59619 0.78178,0.94383 1.562528,1.88662 2.342291,2.82843 1.208999,0.54607 2.416949,1.09112 3.623923,1.63518 1.091144,-0.0432 2.181246,-0.0874 3.270369,-0.13258 1.533095,-0.41149 3.065129,-0.82396 4.596194,-1.23744 1.916119,-0.94182 3.831161,-1.88461 5.745242,-2.82842 2.059753,-1.45007 4.118424,-2.90109 6.176136,-4.35313 2.501704,-2.03197 5.002307,-4.06486 7.501961,-6.0988 1.812997,-1.69314 3.624922,-3.38722 5.435883,-5.08233 1.474169,-1.36904 2.947279,-2.73903 4.419418,-4.11005 0.148317,-0.0285 0.295628,-0.0579 0.441942,-0.0884 1.341583,-0.17578 2.682113,-0.35256 4.021669,-0.53033 1.754071,-0.38203 3.50707,-0.76503 5.25911,-1.14905 1.26056,-0.61037 2.52007,-1.22171 3.7786,-1.83406 1.19427,-0.81661 2.38748,-1.63418 3.57973,-2.45278 0.65656,-0.86817 1.31209,-1.7373 1.96664,-2.60745 -0.0506,-0.5809 -0.10212,-1.16278 -0.15468,-1.74567 -0.75768,-0.3231 -1.51634,-0.64718 -2.276,-0.97227 -1.15544,0.17778 -2.31183,0.35455 -3.46924,0.53033 -1.35432,0.92173 -2.70958,1.84242 -4.06587,2.76213 -1.31012,1.34159 -2.621186,2.68212 -3.93328,4.02167 -1.04495,1.61412 -2.090857,3.22718 -3.137786,4.83926 -0.153683,1.12061 -0.308359,2.24018 -0.464039,3.35876 0.465048,0.84807 0.929078,1.69511 1.392116,2.54117 0.796511,0.2588 1.591991,0.5166 2.386486,0.77339 2.019241,-0.12421 4.037403,-0.24943 6.054603,-0.37565 1.7467,-0.38939 3.49234,-0.77976 5.23701,-1.17114 1.95295,-0.905 3.90482,-1.81096 5.85573,-2.71794 1.70987,-0.84608 3.41868,-1.69311 5.12652,-2.54117 2.03397,-1.27329 4.06686,-2.54753 6.0988,-3.82279 0.78178,-0.57354 1.56252,-1.14805 2.34229,-1.72358 0.082,-0.0653 0.16304,-0.13158 0.24307,-0.19887 0.17041,0.21461 0.33982,0.42821 0.50823,0.64081 0.28668,0.14254 0.57236,0.28407 0.85704,0.4246 0.62601,-0.76985 1.251,-1.54067 1.875,-2.3125 1.18852,-0.62401 2.376,-1.249 3.5625,-1.875 1.64687,-0.56151 3.29267,-1.124 4.9375,-1.6875 1.04269,0.10517 2.08433,0.20933 3.125,0.3125 0.81352,0.45934 1.626,0.91767 2.4375,1.375 0.39684,0.29267 0.79267,0.58433 1.1875,0.875 -1.62403,-0.91568 -3.249,-1.83233 -4.875,-2.75 -2.22821,0.70935 -4.45733,1.41767 -6.6875,2.125 -1.29069,1.23019 -2.58233,2.45933 -3.875,3.6875 -1.51986,1.6677 -3.04067,3.33433 -4.5625,5 -0.33234,1.39686 -0.66567,2.79267 -1,4.1875 -0.0198,0.52184 -0.0407,1.04267 -0.0625,1.5625 0.58435,0.14684 1.16767,0.29267 1.75,0.4375 1.23019,-0.37401 2.45933,-0.749 3.6875,-1.125 1.06352,-0.62401 2.126,-1.249 3.1875,-1.875 2.04271,-1.4782 4.08433,-2.95733 6.125,-4.4375 1.6052,-1.35319 3.20933,-2.70733 4.8125,-4.0625 2.50105,-2.58238 5.001,-5.16567 7.5,-7.75 0.27184,0.16767 0.54267,0.33433 0.8125,0.5 0.83435,0.85518 1.66767,1.70933 2.5,2.5625 -0.58234,1.98021 -1.16567,3.95933 -1.75,5.9375 -0.80935,3.7478 -1.61966,7.49445 -2.43099,11.24018 -1.57529,4.87718 -3.15152,9.75318 -4.72878,14.62827 -2.16455,5.6285 -4.33002,11.25578 -6.49654,16.88217 -3.74085,7.55836 -7.48255,15.08595 -11.22532,22.62742 -1.23646,1.65095 -2.47387,3.30083 -3.71231,4.94975 -1.41324,2.06343 -2.82743,4.12579 -4.24264,6.18718 -1.5311,1.41524 -3.06313,2.82943 -4.59619,4.24264 -1.70788,1.59202 -3.41669,3.18298 -5.12653,4.77297 -2.47392,0.82598 -4.94875,1.65092 -7.42462,2.47488 -1.35431,-1.00076 -2.70958,-2.00247 -4.06586,-3.00521 -0.11686,-1.88465 -0.23471,-3.77023 -0.35356,-5.65685 1.29739,-3.2989 2.59373,-6.59867 3.88909,-9.8995 3.25582,-4.81373 6.5105,-9.62827 9.76425,-14.4439 3.66774,-4.8116 7.33433,-9.624 11,-14.4375 2.89689,-3.16573 5.79267,-6.33233 8.6875,-9.5 4.79276,-4.35325 9.58433,-8.70733 14.375,-13.0625 2.50105,-2.10321 5.001,-4.20733 7.5,-6.3125 3.18856,-2.22821 6.376,-4.45733 9.5625,-6.6875 1.20936,-0.81152 2.41767,-1.624 3.625,-2.4375 1.64687,-0.91568 3.29267,-1.83233 4.9375,-2.75 1.27509,-0.85964 2.54913,-1.72025 3.82219,-2.58188 0.5829,-0.46305 1.16478,-0.92707 1.74567,-1.39211 1.29002,-0.74295 2.57899,-1.48687 3.86699,-2.23181 1.03958,-0.3231 2.07813,-0.64718 3.11569,-0.97227 0.82597,-0.0506 1.65092,-0.10212 2.47487,-0.15468 0.58291,0.0231 1.16478,0.0452 1.74567,0.0663 0.6713,0.20724 1.34156,0.41348 2.01084,0.61872 -1.29539,-0.3231 -2.59173,-0.64718 -3.88909,-0.97227 -1.45007,0.52397 -2.90108,1.04693 -4.35312,1.56889 -1.54583,0.907 -3.0926,1.81296 -4.64039,2.71794 -1.95095,1.62885 -3.90282,3.25664 -5.85573,4.88346 -1.26593,2.01924 -2.5328,4.0374 -3.8007,6.0546 0.18515,0.53871 0.36928,1.07639 0.55243,1.61309 0.64183,0.14831 1.28263,0.29563 1.92244,0.44194 0.54608,-0.17578 1.09113,-0.35255 1.63519,-0.53033 1.02485,-0.58827 2.04866,-1.17751 3.07149,-1.76777 1.86456,-1.41324 3.72805,-2.82742 5.59057,-4.24264 1.50363,-1.31748 3.0062,-2.63592 4.5078,-3.95538 2.75583,-2.54021 5.51054,-5.08133 8.26431,-7.62349 0.0526,0.41349 0.10412,0.82596 0.15468,1.23743 -0.47778,0.93647 -0.95654,1.87189 -1.43631,2.80633 -0.38202,1.50364 -0.76503,3.00621 -1.14905,4.50781 -0.54237,2.04007 -1.08571,4.07901 -1.63009,6.1171 0.57384,0.84198 1.14666,1.68291 1.71848,2.52286 0.5829,0.27354 1.16478,0.54606 1.74567,0.81759 0.47241,0.0305 0.94381,0.0599 1.41421,0.0884 0.91437,-0.0506 1.8277,-0.10212 2.74004,-0.15468 1.62885,-0.58826 3.25664,-1.17751 4.88346,-1.76776 1.97505,-0.94183 3.94901,-1.88462 5.92202,-2.82843 2.19602,-1.26593 4.39095,-2.5328 6.58493,-3.8007 0.84807,-0.36729 1.69511,-0.73557 2.54117,-1.10485 2.12254,-3.60086 4.24396,-7.20251 6.3645,-10.80537 -2.53303,4.13321 -5.06696,8.26524 -7.60194,12.39636 -0.57354,2.82948 -1.14805,5.65785 -1.72357,8.48528 -0.0432,0.41348 -0.0874,0.82595 -0.13259,1.23743 0.67866,-1.60475 1.35629,-3.21044 2.03294,-4.81716 2.31387,-2.31188 4.62665,-4.62466 6.93848,-6.93849 0.8849,-0.57353 1.76877,-1.14805 2.65165,-1.72357 1.65095,-0.48514 3.30083,-0.97127 4.94975,-1.45841 0.97329,0.57554 1.94554,1.15005 2.91681,1.72358 0.33983,0.72285 0.67865,1.44467 1.01647,2.16551 0.44295,1.26793 0.88488,2.5348 1.32583,3.8007 0.50187,1.31212 1.00273,2.62319 1.5026,3.93328 0.48714,0.87017 0.97327,1.7393 1.45841,2.60746 0.63446,0.48714 1.26789,0.97327 1.90034,1.4584 0.63447,0.0747 1.2679,0.14832 1.90035,0.22098 0.79652,-0.10213 1.59199,-0.20524 2.38649,-0.30936 0.82597,-0.3673 1.65092,-0.73557 2.47487,-1.10486 0.68167,-0.38235 1.36231,-0.76568 2.04197,-1.15002 1.34998,-0.89746 2.69891,-1.79588 4.04687,-2.69532 1.09738,-0.8037 2.19371,-1.60837 3.28907,-2.41406 1.1781,-0.86881 2.35516,-1.73858 3.53125,-2.60937 1.06873,-0.84798 2.13641,-1.69692 3.20312,-2.54688 0.43851,-1.12402 0.876,-2.249 1.3125,-3.375 1.15727,-1.34278 2.3135,-2.6865 3.46875,-4.03125 1.20936,-0.65526 2.41767,-1.3115 3.625,-1.96875 1.12602,-0.249 2.251,-0.499 3.375,-0.75 0.63643,0.34476 1.27183,0.6885 1.90625,1.03125 0.31351,0.51143 0.626,1.02183 0.9375,1.53125 0.126,0.45934 0.251,0.91767 0.375,1.375 -0.11359,0.76143 -0.22817,1.52183 -0.34375,2.28125 0.0114,0.14684 0.0218,0.29267 0.0312,0.4375 0.7406,-2.15529 1.48017,-4.3115 2.21875,-6.46875 -0.249,0.126 -0.499,0.251 -0.75,0.375 -0.249,0.65726 -0.499,1.3135 -0.75,1.96875 -0.0511,0.13642 -0.10317,0.27183 -0.15625,0.40625 -0.45734,-0.70735 -0.91567,-1.41567 -1.375,-2.125 -1.49903,-0.22817 -2.999,-0.45733 -4.5,-0.6875 -1.06152,0.8656 -2.124,1.73017 -3.1875,2.59375 -0.57193,0.43851 -1.14483,0.876 -1.71875,1.3125 -1.00944,1.31353 -2.01983,2.626 -3.03125,3.9375 -0.6761,0.56351 -1.35317,1.126 -2.03125,1.6875 -0.124,1.6052 -0.249,3.20933 -0.375,4.8125 -0.124,1.34478 -0.249,2.6885 -0.375,4.03125 0.55309,0.62601 1.10517,1.251 1.65625,1.875 0.50101,0.36559 1.001,0.73017 1.5,1.09375 0.75102,0.14684 1.501,0.29267 2.25,0.4375 0.9906,0.10517 1.98017,0.20933 2.96875,0.3125 0.93852,-0.22817 1.876,-0.45733 2.8125,-0.6875 2.00104,-0.81152 4.001,-1.624 6,-2.4375 1.94896,-0.91568 3.89683,-1.83233 5.84375,-2.75 1.70937,-0.93652 3.41767,-1.874 5.125,-2.8125 0.65726,-0.44693 1.3135,-0.89483 1.96875,-1.34375 0.52184,0.10517 1.04267,0.20933 1.5625,0.3125 0.77185,0.36559 1.54267,0.73017 2.3125,1.09375 1.10519,-0.20734 2.20933,-0.41567 3.3125,-0.625 1.45936,-0.57193 2.91767,-1.14483 4.375,-1.71875 0.87602,-0.60318 1.751,-1.20733 2.625,-1.8125 0.90727,-0.75943 1.8135,-1.51983 2.71875,-2.28125 0.48018,-0.8636 0.95933,-1.72817 1.4375,-2.59375 -0.44693,-0.46776 -0.89483,-0.9365 -1.34375,-1.40625 -0.65526,-0.21775 -1.3115,-0.4365 -1.96875,-0.65625 -0.88443,0.25101 -1.76983,0.501 -2.65625,0.75 -0.9886,0.44893 -1.97817,0.89683 -2.96875,1.34375 -1.16569,1.20936 -2.33233,2.41767 -3.5,3.625 -1.20736,1.18852 -2.41567,2.376 -3.625,3.5625 -0.56151,1.80312 -1.124,3.60517 -1.6875,5.40625 0.126,1.26144 0.251,2.52183 0.375,3.78125 0.82393,0.30309 1.64683,0.60517 2.46875,0.90625 1.19894,0.0531 2.39683,0.10517 3.59375,0.15625 1.46978,-0.30109 2.9385,-0.60317 4.40625,-0.90625 1.31353,-0.23859 2.626,-0.47817 3.9375,-0.71875 1.0531,-0.44693 2.10517,-0.89483 3.15625,-1.34375 2.4698,-1.23861 4.9385,-2.47817 7.40625,-3.71875 1.91771,-1.13444 3.83433,-2.26983 5.75,-3.40625 1.34478,-1.01985 2.6885,-2.04067 4.03125,-3.0625"
                          sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                          clip-path="url(/clipPath3151)"
                          transform="translate(5.6568542,-48.083261)"
                        />
                      </g>
                    </svg> */}
                  </span>
                  <div className="roundBtn text-center mt-2">
                    <a
                      href="/"
                      className="wow zoomIn btnclassNameDesign lightGreyBack coralFont wow fadeInUp"
                    >
                      <span
                        id="roundText9"
                        className="btnText strong colorYellow font-13 letterSpacingmedium"
                      >
                        Explore Now
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="c-about-slider">
                <div className="c-about-slider-in">
                  <div className="c-about-slider-con">
                    <span>
                      <img src={aboutlogo} alt="" className="wow fadeInDown" />
                    </span>
                    <h3 className="wow fadeInDown">
                      EXCEPTIONAL <span>READY-TO-WEAR</span>
                    </h3>
                  </div>
                  <img src="assets/img/about-slider.jpg" alt="img" />
                </div>
                <div className="c-about-slider-in">
                  <img src={aboutSlider} alt="img" />
                </div>
              </div>
            </div>
          </section>

          {/* <!-- third sec --> */}
          <section
            className="paddingSec minHeightSec backgroundSec d-flex align-items-center c-drive-w "
            id="luxary_studio"
          >
            <div className="container">
              <div className="c-drive-con">
                <h4 className="">STUDIO</h4>
                <h2 className="f-heading-m studio">
                  <div className="f-line">
                    <div>
                      <div className="perspective">
                        <div className="cube">
                          <div>D</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>I</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>V</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>E</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>I</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>N</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>T</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>O</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f-line">
                    <div>
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
                      <div className="perspective">
                        <div className="cube">
                          <div>E</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>W</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>O</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>R</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>L</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>D</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f-line">
                    <div>
                      <div className="perspective">
                        <div className="cube">
                          <div>O</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>F</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </h2>

                <span>
                  {/* <svg
                    shape-rendering="crispEdges"
                    width="256.69977"
                    height="164.10138"
                    viewBox="0 0 256.69977 164.10138"
                    version="1.1"
                    id="demo-2"
                    inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                    sodipodi:docname="Calligraphy.svg"
                    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                    xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                    xmlns:cc="http://creativecommons.org/ns/"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                  >
                    <defs id="defs2">
                      <text
                        xml:space="preserve"
                        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:200px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;fill:/000000;fill-opacity:1"
                        x="49.290943"
                        y="103.4806"
                        id="text3845"
                      >
                        <tspan
                          sodipodi:role="line"
                          id="tspan3843"
                          x="49.290943"
                          y="103.4806"
                        >
                          luxury
                        </tspan>
                      </text>
                    </defs>

                    <metadata id="metadata5"></metadata>
                    <g
                      style="display:inline;mix-blend-mode:normal"
                      inkscape:label="Contents"
                      id="layer2"
                      inkscape:groupmode="layer"
                      transform="translate(546.70923,-343.74414)"
                    >
                      <path
                        className="Luxury"
                        style="opacity:1;fill:none;stroke:/ffffff;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                        d="m 52.246,101.73103 c 0.991247,-0.77884 1.982367,-1.55757 3.622333,-3.398129 1.639966,-1.840556 3.928928,-4.743054 6.784315,-8.447975 2.855387,-3.704922 6.27703,-8.212052 8.896425,-11.68098 2.619396,-3.468927 4.436406,-5.899474 6.37145,-8.625046 1.935043,-2.725572 3.988029,-5.746057 5.616292,-8.235637 1.628264,-2.489579 2.831739,-4.448175 4.023452,-6.371438 1.191713,-1.923262 2.37159,-3.811065 3.268322,-5.238758 0.896732,-1.427694 1.510268,-2.395193 2.135611,-3.44528 0.625343,-1.050087 1.262477,-2.18277 1.887821,-3.551367 0.625344,-1.368597 1.23888,-2.97323 1.887833,-4.71949 0.648953,-1.74626 1.333281,-3.634063 1.710905,-4.908202 0.377624,-1.27414 0.448416,-1.934871 0.424991,-2.536486 -0.02343,-0.601614 -0.141413,-1.144358 -0.400565,-1.56928 -0.259152,-0.424923 -0.66031,-0.731691 -1.132242,-0.956146 -0.471933,-0.224454 -1.014675,-0.366039 -1.498764,-0.354496 -0.484088,0.01154 -0.908844,0.176727 -1.498813,0.412709 -0.589968,0.235983 -1.345089,0.542751 -2.065014,0.955767 -0.719924,0.413016 -1.404253,0.932162 -2.277448,1.687349 -0.873196,0.755188 -1.935085,1.746285 -3.04426,2.926261 -1.109174,1.179977 -2.265454,2.548634 -3.410002,4.047181 -1.144548,1.498547 -2.27723,3.126778 -3.527931,4.873033 -1.2507,1.746255 -2.619357,3.610461 -4.495443,6.442307 -1.876087,2.831847 -4.259438,6.631051 -6.53668,10.524805 -2.277242,3.893754 -4.448215,7.881739 -6.159091,11.268135 -1.710876,3.386396 -2.961545,6.170906 -4.08246,8.943755 -1.120914,2.772849 -2.112011,5.533761 -2.890746,7.834618 -0.778736,2.300856 -1.345077,4.141465 -2.237047,7.145376 -0.89197,3.003911 -2.109488,7.170814 -2.876405,10.344904 -0.766917,3.1741 -1.083213,5.35484 -1.312125,7.7786 -0.228911,2.42376 -0.370496,5.09028 -0.346774,6.97824 0.02372,1.88795 0.212501,2.99703 0.472166,4.09437 0.259666,1.09734 0.590027,2.18281 1.050406,3.16213 0.46038,0.97932 1.050305,1.85241 1.758469,2.5011 0.708165,0.64869 1.534075,1.07345 2.477985,1.39183 0.94391,0.31838 2.0058,0.53076 3.0085,0.51875 1.002701,-0.012 1.946604,-0.24798 3.008481,-0.55476 1.061877,-0.30679 2.241754,-0.68435 3.740157,-1.29791 1.498403,-0.61356 3.315413,-1.46307 4.849178,-2.32438 1.533766,-0.8613 2.784436,-1.73441 4.866963,-3.28009 2.082527,-1.54568 4.996823,-3.76385 7.580776,-5.90535 2.583952,-2.1415 4.837521,-4.20629 6.984957,-6.18264 2.147436,-1.97635 4.188625,-3.86416 5.776622,-5.32559 1.587997,-1.46144 2.722712,-2.49643 4.037164,-4.29696 1.314456,-1.80052 2.808756,-4.366754 2.502926,-4.012068 -0.30583,0.354685 -2.411775,3.630298 -3.634545,6.040098 -1.22277,2.40979 -1.562621,3.95484 -1.770372,5.00573 -0.207752,1.05089 -0.28435,1.61185 -0.309323,2.1382 -0.02497,0.52635 0.0015,1.0153 0.215901,1.35248 0.214405,0.33718 0.614265,0.52044 1.231545,0.59524 0.61728,0.0748 1.451576,0.0414 2.327311,-0.22564 0.875733,-0.26706 1.793463,-0.76764 2.894703,-1.46845 1.10123,-0.70081 2.38605,-1.60185 4.14641,-3.05354 1.76036,-1.45168 3.99628,-3.454 5.99854,-5.90675 2.00226,-2.45275 3.77097,-5.35611 4.67203,-6.874359 0.90106,-1.518249 0.93443,-1.65172 1.00141,-1.517996 0.067,0.133724 0.1671,0.534188 -0.0667,1.117714 -0.23382,0.583525 -0.80115,1.351077 -1.54374,2.794619 -0.74259,1.443542 -1.66032,3.562662 -2.26936,5.223072 -0.60903,1.66042 -0.90938,2.86181 -1.14297,3.99655 -0.23358,1.13473 -0.40045,2.20264 -0.35007,3.05384 0.0504,0.8512 0.31736,1.48527 0.67639,2.00241 0.35903,0.51715 0.80955,0.91761 1.25178,1.15084 0.44223,0.23323 0.87607,0.29997 1.51836,0.27479 0.6423,-0.0252 1.49328,-0.14197 2.36915,-0.38397 0.87587,-0.242 1.77691,-0.60909 3.22454,-1.26989 1.44762,-0.6608 3.44182,-1.61525 5.23529,-2.62639 1.79348,-1.01113 3.38631,-2.07891 5.06174,-3.29715 1.67543,-1.21824 3.43345,-2.5869 4.31788,-3.28575 0.88442,-0.69885 0.89561,-0.72866 1.1019,-0.42616 0.20629,0.3025 0.60676,0.93657 -0.0943,1.87036 -0.7011,0.93379 -2.50318,2.16855 -4.87285,4.8636 -2.36966,2.69505 -5.3064,6.84987 -6.58235,9.13631 -1.27595,2.28645 -0.89217,2.7036 -0.53374,2.81145 0.35842,0.10785 0.69214,-0.0924 1.32606,-0.718 0.63391,-0.62563 1.56833,-1.67685 2.44439,-2.61132 0.87607,-0.93447 1.69369,-1.75209 2.57804,-2.70319 0.88435,-0.95109 1.83545,-2.03568 3.43739,-3.70437 1.60194,-1.66869 3.85454,-3.92129 5.85698,-5.74851 2.00244,-1.82721 3.75447,-3.22884 5.86533,-4.85578 2.11086,-1.626945 4.58039,-3.479091 6.60793,-4.780674 2.02754,-1.301582 3.6127,-2.052448 5.49846,-2.636447 1.88575,-0.583998 4.07161,-1.001146 5.12255,-1.45938 1.05095,-0.458234 0.96751,-0.958819 0.14203,-1.526483 -0.82547,-0.567664 -2.39396,-1.201734 -5.01379,-1.777581 -2.61983,-0.575847 -6.29075,-1.093113 -9.70343,-0.726185 -3.41268,0.366928 -6.56633,1.618376 -8.44384,2.594679 -1.87752,0.976302 -2.47821,1.677111 -2.47728,2.628801 9.3e-4,0.95169 0.6028,2.153057 1.67073,4.405761 1.06793,2.252699 2.60185,5.556519 3.90285,8.184629 1.301,2.62811 2.3689,4.58037 3.437,6.09039 1.06811,1.51003 2.13601,2.57794 3.154,3.31189 1.01798,0.73395 1.98576,1.13441 3.17039,1.32604 1.18464,0.19163 2.58626,0.17493 3.77917,0.0246 1.19292,-0.15027 2.1774,-0.43393 3.40376,-0.90116 1.22636,-0.46723 2.69472,-1.11799 3.8877,-1.73537 1.19298,-0.61737 2.11071,-1.20138 3.29961,-1.9773 1.18891,-0.77592 2.64892,-1.74371 4.50528,-3.00771 1.85637,-1.264 4.10898,-2.82414 6.21559,-4.426 2.1066,-1.60187 4.06721,-3.24544 5.28535,-4.24665 1.21814,-1.001197 1.69369,-1.359945 1.98973,-1.935154 0.29604,-0.57521 0.41284,-1.367795 0.35927,-1.810154 -0.0536,-0.44236 -0.27882,-0.534131 -0.62119,-0.509445 -0.34236,0.02469 -0.80122,0.166516 -1.24791,0.466987 -0.4467,0.300471 -0.88053,0.759333 -1.50219,2.123734 -0.62167,1.364402 -1.43094,3.633692 -2.17349,5.626662 -0.74255,1.99296 -1.41832,3.70951 -1.80624,4.92779 -0.38792,1.21827 -0.48803,1.93786 -0.36243,2.56063 0.12559,0.62277 0.476,1.14838 0.93917,1.41478 0.46317,0.26641 1.03884,0.27474 1.86454,0.0327 0.8257,-0.24207 1.90195,-0.73431 3.33273,-1.53525 1.43078,-0.80093 3.21618,-1.91055 5.22679,-3.47902 2.01061,-1.56847 4.24653,-3.59582 6.11947,-5.97762 1.87293,-2.381804 3.38301,-5.118305 4.19232,-6.565909 0.80931,-1.447605 0.91777,-1.606121 0.94279,-1.555799 0.025,0.05032 -0.0334,0.308957 -0.46725,1.276621 -0.43387,0.967664 -1.24315,2.644604 -1.97318,4.471869 -0.73003,1.827268 -1.38078,3.804548 -1.92308,5.640108 -0.5423,1.83556 -0.97614,3.52919 -1.05087,4.70583 -0.0747,1.17665 0.20892,1.83575 0.62633,2.43218 0.41741,0.59643 0.96805,1.13038 1.4685,1.34255 0.50045,0.21217 0.95097,0.10371 1.71856,-0.0673 0.7676,-0.17103 1.85219,-0.40463 3.19947,-0.88857 1.34729,-0.48393 2.95749,-1.21812 4.28819,-1.86888 1.33069,-0.65077 2.38192,-1.21809 3.53322,-1.9189 1.1513,-0.70082 2.40275,-1.53512 3.59165,-2.34441 1.18889,-0.80928 2.3152,-1.59353 3.64658,-2.58984 1.33138,-0.9963 2.86784,-2.20466 4.20232,-3.53438 1.33449,-1.329716 2.46717,-2.780969 3.34028,-3.954939 0.87311,-1.173969 1.48665,-2.070677 1.88782,-3.043815 0.40117,-0.973138 0.58995,-2.023228 0.4844,-2.689872 -0.10556,-0.666645 -0.50671,-0.949811 -1.06152,-0.985704 -0.55482,-0.03589 -1.26274,0.176483 -1.87646,0.436072 -0.61373,0.259588 -1.13287,0.566353 -1.60507,1.050336 -0.47219,0.483982 -0.89695,1.144715 -1.23323,1.669778 -0.33627,0.525063 -0.58404,0.914421 -0.81415,1.380622 -0.2301,0.466201 -0.44248,1.008945 -0.63126,1.421804 -0.18877,0.412859 -0.35395,0.696027 -0.38918,1.156602 -0.0352,0.460575 0.0592,1.097709 0.23661,1.528273 0.17744,0.430563 0.43702,0.654743 0.75559,0.778204 0.31857,0.123461 0.69613,0.147057 1.20348,0.17064 0.50736,0.02358 1.14449,0.04718 1.62243,0.112255 0.47795,0.06508 0.79652,0.171264 1.42778,0.407284 0.63126,0.23602 1.57516,0.60178 2.47778,1.00892 0.90263,0.40715 1.76394,0.8555 2.28288,1.21564 0.51894,0.36015 0.69592,0.63152 0.84915,0.94422 0.15323,0.3127 0.28302,0.66667 0.37137,0.997 0.0884,0.33034 0.13556,0.6371 -0.0121,1.02009 -0.14764,0.383 -0.4898,0.84315 -0.88512,1.65748 -0.39531,0.81433 -0.84366,1.98241 -1.19174,2.89094 -0.34807,0.90853 -0.59631,1.55868 -0.70179,2.11764 -0.10549,0.55897 -0.0694,1.02954 0.0848,1.37819 0.15417,0.34864 0.42336,0.57299 0.68938,0.68572 0.26602,0.11274 0.52467,0.11274 0.90232,0.16005 0.37765,0.0473 0.8732,0.14169 1.52799,0.20059 0.65479,0.0589 1.46891,0.0825 2.73711,-0.189 1.2682,-0.27149 2.99082,-0.83784 4.96119,-1.62838 1.97038,-0.79055 4.18855,-1.80524 5.95836,-2.67837 1.76981,-0.87312 3.09127,-1.60465 4.70184,-2.51908 1.61058,-0.91443 3.51018,-2.01172 5.31537,-3.1916 1.80519,-1.17988 3.51601,-2.44235 4.58954,-3.53349 1.07353,-1.091141 1.51008,-2.011447 1.58126,-2.7839 0.0712,-0.772452 -0.2238,-1.397787 -0.53065,-1.634469 -0.30685,-0.236683 -0.62541,-0.0833 -0.96189,0.164574 -0.33648,0.247875 -0.69044,0.590043 -1.05041,1.534348 -0.35997,0.944305 -0.72603,2.491237 -0.99425,3.561787 -0.26822,1.07055 -0.43932,1.66785 -0.71094,2.44127 -0.27161,0.77342 -0.64281,1.72064 -0.95853,2.70853 -0.31572,0.9879 -0.5752,2.01404 -0.7049,3.03482 -0.1297,1.02077 -0.1297,2.03546 0.042,2.64296 0.17168,0.6075 0.51384,0.80808 1.00941,1.0085 0.49557,0.20043 1.1445,0.401 1.79313,0.37712 0.64863,-0.0239 1.29756,-0.27167 2.02309,-0.63153 0.72553,-0.35986 1.52785,-0.83181 2.77262,-1.62234 1.24478,-0.79054 2.93201,-1.89963 4.48942,-3.05 1.55741,-1.15038 2.98506,-2.34205 4.36553,-3.55144 1.38047,-1.20939 2.71373,-2.43646 4.43045,-4.26527 1.71673,-1.828813 3.81691,-4.259359 4.96791,-5.403501 1.15101,-1.144143 1.35159,-1.002557 1.36272,-0.719529 0.0111,0.283029 -0.16586,0.707783 -0.43721,1.994052 -0.27134,1.286269 -0.63711,3.433648 -1.39228,6.648848 -0.75517,3.21521 -1.89965,7.49817 -3.38474,12.58358 -1.4851,5.0854 -3.31066,10.97287 -4.80326,15.50374 -1.49261,4.53087 -2.6521,7.70474 -4.38228,12.0232 -1.73019,4.31846 -4.03095,9.78129 -5.73711,13.5643 -1.70615,3.783 -2.81762,5.8861 -3.82391,7.80538 -1.00628,1.91929 -1.90733,3.65463 -2.92519,5.42334 -1.01786,1.76871 -2.1525,3.5708 -3.78774,5.77334 -1.63525,2.20254 -3.77106,4.80556 -5.63976,6.60755 -1.8687,1.80199 -3.47056,2.80315 -4.75546,3.65418 -1.2849,0.85103 -2.25269,1.55184 -3.52055,2.03574 -1.26786,0.4839 -2.83634,0.75088 -4.18776,0.75108 -1.35142,2.1e-4 -2.48607,-0.26677 -3.3707,-0.95047 -0.88462,-0.6837 -1.51869,-1.78497 -1.93613,-3.27011 -0.41744,-1.48515 -0.61768,-3.35398 -0.18398,-5.64032 0.43369,-2.28634 1.50159,-4.98947 3.07014,-8.0599 1.56855,-3.07043 3.63761,-6.50774 6.0405,-10.02866 2.40289,-3.52091 5.13939,-7.12508 7.10845,-9.51132 1.96906,-2.38624 3.17045,-3.55426 4.72226,-5.23956 1.5518,-1.68529 3.454,-3.88784 5.27288,-5.80684 1.81888,-1.91899 3.55422,-3.55422 5.32304,-5.07273 1.76881,-1.5185 3.57091,-2.92013 6.02381,-4.87245 2.45291,-1.95231 5.5565,-4.45521 8.66021,-6.87476 3.10371,-2.41955 6.2073,-4.75559 8.54147,-6.52018 2.33418,-1.7646 3.89881,-2.95766 5.50711,-4.15597 1.60829,-1.19831 3.26012,-2.40179 4.72323,-3.42832 1.46312,-1.02654 2.73739,-1.87605 3.98808,-2.73737 1.25068,-0.86133 2.47776,-1.73444 3.51604,-2.51906 1.03828,-0.78462 1.88778,-1.48074 2.73721,-2.1768"
                        id="mainPath-2"
                        inkscape:path-effect="/path-effect3782"
                        inkscape:original-d="m 52.246,101.73103 c 0.992116,-0.77773 1.983233,-1.55647 2.973349,-2.336201 2.290053,-2.901614 4.579015,-5.804112 6.867022,-8.707667 3.42278,-4.506311 6.844423,-9.013441 10.265135,-13.521661 1.818084,-2.429644 3.635094,-4.860191 5.451141,-7.291786 2.054068,-3.019606 4.107054,-6.040091 6.159081,-9.061637 1.204523,-1.957674 2.407998,-3.91627 3.610496,-5.875905 1.180925,-1.886879 2.360802,-3.774682 3.539702,-5.663523 0.614561,-0.966538 1.228097,-1.934037 1.840645,-2.902555 0.638159,-1.131728 1.275293,-2.26441 1.911439,-3.398114 0.614561,-1.603697 1.228097,-3.20833 1.840645,-4.813995 0.685356,-1.886879 1.369685,-3.774682 2.053027,-5.663523 0.0718,-0.659757 0.142588,-1.320489 0.212382,-1.982233 -0.116992,-0.541765 -0.23498,-1.084508 -0.35397,-1.628263 -0.400174,-0.30578 -0.801332,-0.612548 -1.203499,-0.920322 -0.541765,-0.140591 -1.084508,-0.282176 -1.628262,-0.424764 -0.423773,0.166189 -0.848529,0.331372 -1.274293,0.495558 -0.754152,0.30778 -1.509273,0.614548 -2.265409,0.920322 -0.683356,0.520167 -1.367685,1.039313 -2.053027,1.557469 -1.060932,0.992136 -2.122821,1.983233 -3.185732,2.97335 -1.155326,1.369712 -2.311605,2.738369 -3.468908,4.106054 -1.131727,1.629295 -2.264409,3.257526 -3.398114,4.884788 -1.367712,1.865281 -2.736369,3.729486 -4.106054,5.592729 -2.382447,3.800356 -4.765798,7.59956 -7.150198,11.39784 -2.17006,3.989144 -4.341034,7.977129 -6.513051,11.964193 -1.24972,2.785621 -2.500389,5.570131 -3.752084,8.353696 -0.990136,2.762023 -1.981233,5.522935 -2.97335,8.282903 -0.565363,1.841681 -1.131704,3.68229 -1.699056,5.521934 -1.216592,4.168158 -2.434111,8.335063 -3.652703,12.501223 -0.31531,2.18184 -0.631606,4.36258 -0.94891,6.54237 -0.140591,2.66763 -0.282176,5.33415 -0.424764,7.99973 0.189788,1.11013 0.378568,2.21921 0.566352,3.32732 0.331378,1.08652 0.661736,2.17199 0.991117,3.25652 0.590965,0.87415 1.180889,1.74724 1.769851,2.61938 0.826946,0.42578 1.652859,0.85053 2.477791,1.2743 1.062932,0.21338 2.124821,0.42576 3.185732,0.63714 0.944939,-0.23498 1.888841,-0.47096 2.831761,-0.70794 1.180924,-0.37657 2.360801,-0.75413 3.539702,-1.1327 1.818083,-0.84855 3.635094,-1.69806 5.451141,-2.54859 1.25172,-0.87214 2.502389,-1.74525 3.752084,-2.61938 2.915413,-2.21725 5.829709,-4.43542 8.743064,-6.65464 2.254655,-2.06386 4.50822,-4.12865 6.76083,-6.19447 2.042269,-1.88688 4.083456,-3.77469 6.123684,-5.66353 1.13576,-1.03403 2.270475,-2.06902 3.404213,-3.10503 1.495398,-2.56539 2.989698,-5.131625 4.483088,-7.699011 -2.10507,3.276815 -4.211015,6.552431 -6.318092,9.827261 -0.338459,1.54427 -0.678311,3.08932 -1.018356,4.62971 -0.07551,0.56128 -0.152103,1.12224 -0.229793,1.68287 0.02757,0.49187 0.05404,0.98082 0.07962,1.47085 0.40208,0.18483 0.801943,0.36809 1.201415,0.55064 0.835332,-0.0324 1.669631,-0.0657 2.502947,-0.10011 0.918759,-0.4996 1.836489,-1.00018 2.753239,-1.50177 1.28587,-0.90008 2.57069,-1.80112 3.85454,-2.70319 2.23701,-2.00139 4.47293,-4.00371 6.7079,-6.00707 1.76978,-2.90248 3.53849,-5.805836 5.30624,-8.710255 0.0344,-0.132493 0.0677,-0.265981 0.10012,-0.400471 0.10112,0.401479 0.20124,0.801943 0.30036,1.201414 -0.56635,0.768586 -1.13367,1.536141 -1.70201,2.302712 -0.91676,2.120204 -1.83449,4.23932 -2.75324,6.35749 -0.29936,1.20243 -0.59971,2.40382 -0.90106,3.60424 -0.16587,1.06894 -0.33273,2.13685 -0.50059,3.20377 0.26799,0.63509 0.53496,1.26916 0.80094,1.90224 0.45154,0.40148 0.90206,0.80194 1.35159,1.20142 0.43486,0.0677 0.86869,0.13449 1.30154,0.20023 0.85202,-0.1158 1.703,-0.23261 2.553,-0.35041 0.90208,-0.36611 1.80312,-0.7332 2.70319,-1.1013 1.99527,-0.95349 3.98947,-1.90795 5.98271,-2.86343 1.5939,-1.06683 3.18673,-2.13462 4.77859,-3.20343 1.75909,-1.36771 3.51711,-2.73637 5.27416,-4.10605 0.0121,-0.0287 0.0233,-0.0585 0.0335,-0.0892 0.40148,0.63509 0.80194,1.26916 1.20141,1.90224 -1.80116,1.23581 -3.60324,2.47057 -5.40636,3.70436 -2.93585,4.15598 -5.87259,8.31079 -8.81038,12.46468 0.38479,0.41816 0.76857,0.83531 1.15136,1.25147 0.33473,-0.19924 0.66845,-0.39947 1.00118,-0.60071 0.93545,-1.05025 1.86986,-2.10147 2.8033,-3.15371 0.81864,-0.81664 1.63626,-1.63426 2.45288,-2.45289 0.95214,-1.08363 1.90324,-2.16822 2.85336,-3.25383 2.2537,-2.2517 4.50631,-4.5043 6.75796,-6.75796 1.7531,-1.40067 3.50513,-2.8023 5.25619,-4.20495 2.47062,-1.851215 4.94015,-3.703359 7.40872,-5.55654 1.58624,-0.749899 3.1714,-1.500769 4.7556,-2.252653 2.18696,-0.416166 4.37282,-0.833315 6.55773,-1.251473 -0.0824,-0.4996 -0.16587,-1.000179 -0.2503,-1.501769 -1.56754,-0.633092 -3.13603,-1.26716 -4.70554,-1.902239 -3.67006,-0.516287 -7.34098,-1.033552 -11.01297,-1.551828 -3.15277,1.252499 -6.30642,2.503947 -9.46114,3.754421 -0.59972,0.701839 -1.20041,1.40265 -1.80212,2.102476 0.6029,1.202437 1.20477,2.403804 1.80568,3.604244 1.53499,3.304961 3.06891,6.608781 4.60187,9.911671 1.06894,1.95334 2.13684,3.9056 3.20377,5.8569 1.06894,1.06894 2.13685,2.13684 3.20377,3.20377 0.96883,0.40148 1.93661,0.80194 2.90342,1.20141 1.40268,-0.0157 2.8043,-0.0324 4.20495,-0.0501 0.98551,-0.28267 1.96999,-0.56633 2.95348,-0.851 1.46942,-0.64978 2.93779,-1.30053 4.40519,-1.9523 0.91876,-0.58303 1.83649,-1.16704 2.75324,-1.75206 1.46108,-0.96683 2.9211,-1.93461 4.38015,-2.90342 2.2537,-1.5592 4.50631,-3.11934 6.75796,-4.68051 1.96168,-1.64263 3.92229,-3.2862 5.88193,-4.930806 0.47657,-0.357763 0.95212,-0.716511 1.42668,-1.076267 0.1178,-0.791616 0.23461,-1.5842 0.35041,-2.3778 -0.22427,-0.09078 -0.44953,-0.182549 -0.6758,-0.275324 -0.45788,0.142836 -0.91674,0.284667 -1.37662,0.425501 -0.43285,0.459883 -0.86668,0.918747 -1.30153,1.376621 -0.8083,2.270385 -1.61757,4.539675 -2.42786,6.808015 -0.67481,1.71764 -1.35058,3.43419 -2.02739,5.14981 -0.0991,0.72061 -0.19923,1.4402 -0.30035,2.1588 0.35142,0.52663 0.70183,1.05223 1.05124,1.57685 0.57669,0.009 1.15236,0.0177 1.72703,0.025 1.07729,-0.49125 2.15354,-0.98349 3.2288,-1.47674 1.78648,-1.10866 3.57188,-2.21828 5.35631,-3.32892 2.23701,-2.02642 4.47293,-4.05377 6.7079,-6.08216 1.51114,-2.735607 3.02122,-5.472108 4.53033,-8.209664 0.10947,-0.157523 0.21793,-0.31604 0.32539,-0.47556 -0.0574,0.259643 -0.11581,0.518276 -0.17521,0.775914 -0.8083,1.678008 -1.61757,3.354949 -2.42786,5.030924 -0.64978,1.978366 -1.30053,3.955656 -1.9523,5.931986 -0.43285,1.69469 -0.86668,3.38832 -1.30153,5.08098 0.28467,0.66012 0.56834,1.31922 0.851,1.97733 0.55166,0.53497 1.1023,1.06892 1.65195,1.60189 0.45154,-0.10747 0.90206,-0.21593 1.35159,-0.32539 1.08563,-0.23261 2.17022,-0.46621 3.25383,-0.70082 1.61126,-0.73321 3.22146,-1.4674 4.83069,-2.2026 1.05226,-0.56634 2.10348,-1.13367 3.15371,-1.702 1.2525,-0.83333 2.50395,-1.66763 3.75442,-2.50295 1.12735,-0.78327 2.25366,-1.56751 3.37898,-2.35277 1.53751,-1.2074 3.07397,-2.41575 4.60945,-3.62513 1.13372,-1.450305 2.26641,-2.901554 3.39811,-4.353832 0.61456,-0.895742 1.2281,-1.792449 1.84065,-2.690173 0.18978,-1.049133 0.37856,-2.099223 0.56635,-3.150335 -0.40018,-0.282182 -0.80133,-0.565352 -1.2035,-0.849528 -0.70696,0.213386 -1.41488,0.425764 -2.12382,0.637146 -0.51817,0.30778 -1.03731,0.614548 -1.55747,0.920322 -0.42377,0.661758 -0.84853,1.322489 -1.27429,1.982233 -0.24679,0.390375 -0.49456,0.779735 -0.74334,1.168102 -0.21139,0.543765 -0.42377,1.086509 -0.63715,1.628263 -0.16419,0.284182 -0.32937,0.567352 -0.49556,0.849528 0.0954,0.638159 0.18979,1.275293 0.28318,1.911439 0.26058,0.225186 0.52016,0.449363 0.77874,0.672544 0.37857,0.0246 0.75613,0.0482 1.1327,0.07079 0.63816,0.0246 1.27529,0.0482 1.91144,0.07079 0.31958,0.107193 0.63815,0.213381 0.95572,0.318571 0.94494,0.36678 1.88884,0.73254 2.83176,1.09731 0.86234,0.44937 1.72365,0.89772 2.58398,1.34508 0.17799,0.27239 0.35497,0.54376 0.53096,0.81414 0.13079,0.35497 0.26058,0.70894 0.38936,1.06191 0.0482,0.30778 0.0954,0.61454 0.14159,0.92032 -0.34118,0.46117 -0.68334,0.92132 -1.02651,1.38048 -0.44737,1.16913 -0.89573,2.33721 -1.34509,3.50431 -0.24678,0.64996 -0.49502,1.30011 -0.74333,1.94683 0.037,0.47068 0.0732,0.94125 0.10834,1.41171 0.27217,0.227 0.54136,0.45135 0.81198,0.67672 0.2615,0.001 0.52015,0.001 0.77873,0 0.49657,0.0954 0.99212,0.18978 1.48668,0.28317 0.81514,0.0246 1.62926,0.0482 2.44239,0.0708 1.72369,-0.56537 3.44631,-1.13171 5.16797,-1.69906 2.21925,-1.01373 4.43742,-2.02843 6.65464,-3.04414 1.32251,-0.73056 2.64397,-1.46208 3.96446,-2.19462 1.90068,-1.09633 3.80028,-2.19361 5.69892,-3.29192 1.71189,-1.26152 3.42271,-2.52399 5.13257,-3.78748 0.43757,-0.919341 0.87413,-1.839645 1.30969,-2.760967 -0.29398,-0.62436 -0.58895,-1.249695 -0.88493,-1.876042 -0.31758,0.15439 -0.63614,0.307774 -0.95572,0.460161 -0.35297,0.343178 -0.70694,0.685342 -1.06191,1.026514 -0.36477,1.5467 -0.73084,3.093634 -1.0973,4.637004 -0.16996,0.59779 -0.34106,1.19509 -0.51331,1.79189 -0.37096,0.95017 -0.74217,1.89739 -1.11496,2.84512 -0.25867,1.02789 -0.51815,2.05403 -0.77873,3.07954 0.001,1.01574 0.001,2.03043 0,3.04415 0.34318,0.20158 0.68534,0.40216 1.02651,0.60175 0.64996,0.20158 1.29889,0.40216 1.94684,0.60175 0.64996,-0.24679 1.29889,-0.49456 1.94683,-0.74334 0.80335,-0.47097 1.60567,-0.94292 2.407,-1.41588 1.68829,-1.10813 3.37552,-2.21722 5.06177,-3.32732 1.42871,-1.19073 2.85636,-2.3824 4.28304,-3.5751 1.33432,-1.22612 2.66758,-2.45319 3.99987,-3.68129 2.10126,-2.429643 4.20144,-4.86019 6.30067,-7.291785 0.20158,0.142591 0.40216,0.284176 0.60175,0.424764 -0.17599,0.425773 -0.35297,0.850528 -0.53096,1.274293 -0.36478,2.148462 -0.73054,4.295838 -1.09731,6.442258 -1.14352,4.28412 -2.288,8.56708 -3.43351,12.84911 -1.82467,5.88883 -3.65023,11.7763 -5.4769,17.66312 -1.15854,3.17499 -2.31802,6.34886 -3.47854,9.5218 -2.29986,5.46404 -4.60062,10.92688 -6.90242,16.38881 -1.11052,2.1042 -2.22199,4.2073 -3.33448,6.30945 -0.90008,1.73641 -1.80112,3.47175 -2.70318,5.20613 -1.13369,1.80316 -2.26834,3.60524 -3.40401,5.40637 -2.13489,2.60411 -4.2707,5.20713 -6.40754,7.80919 -1.60092,1.0022 -3.20278,2.00336 -4.80566,3.00354 -0.96683,0.70184 -1.93462,1.40265 -2.90342,2.10247 -1.56755,0.26799 -3.13603,0.53496 -4.70554,0.80095 -1.13369,-0.26599 -2.26834,-0.53297 -3.40401,-0.80095 -0.63309,-1.10032 -1.26716,-2.20159 -1.90224,-3.30389 -0.19924,-1.8679 -0.39947,-3.73673 -0.60071,-5.6066 1.06895,-2.70224 2.13685,-5.40537 3.20377,-8.10955 2.07015,-3.43645 4.13921,-6.87376 6.20731,-10.31214 2.73761,-3.60332 5.47411,-7.20749 8.20967,-10.81273 1.20244,-1.16707 2.40383,-2.33509 3.60424,-3.50413 1.90328,-2.20164 3.80548,-4.40419 5.70672,-6.60778 1.73642,-1.63429 3.47176,-3.26952 5.20613,-4.90578 1.80316,-1.40067 3.60525,-2.8023 5.40637,-4.20495 3.10472,-2.50199 6.20831,-5.00489 9.31096,-7.50884 3.10472,-2.33513 6.20831,-4.67117 9.31097,-7.00825 1.5657,-1.19211 3.13033,-2.38518 4.694,-3.57926 1.65289,-1.20252 3.30472,-2.406 4.95558,-3.6105 1.27532,-0.84854 2.54959,-1.69805 3.82288,-2.54858 1.22812,-0.87215 2.45519,-1.74526 3.68129,-2.61938 0.85055,-0.69516 1.70006,-1.39128 2.54859,-2.08843"
                        sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                        clip-path="url(/clipPath3841)"
                        transform="translate(-593.5,317)"
                      />
                    </g>
                  </svg> */}
                </span>
                {/* <!-- <span className="">luxury</span> --> */}
                <div className="roundBtn text-center mt-2">
                  <a
                    href="/"
                    className="wow zoomIn btnclassNameDesign lightGreyBack coralFont wow fadeInUp"
                  >
                    <span
                      id="roundText7"
                      className="btnText strong colorYellow font-12 letterSpacingmedium"
                    >
                      Take The Tour
                    </span>
                  </a>
                </div>
              </div>
              <div className="c-drive-img">
                <div className="row mt-4">
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio1}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio2}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 px-5">
                    <div className="studioImg wow fadeInLeft">
                      <img
                        src={studio3}
                        alt="img"
                        className="img-fluid per_studio_img cursouPointer"
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
                      <span className="">
                        {/* <svg
                          shape-rendering="crispEdges"
                          width="230.20807"
                          height="122.94414"
                          viewBox="0 0 230.20807 122.94414"
                          version="1.1"
                          id="demo-3"
                          inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                          sodipodi:docname="drawing-2.svg"
                          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:svg="http://www.w3.org/2000/svg"
                          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                          xmlns:cc="http://creativecommons.org/ns/"
                          xmlns:dc="http://purl.org/dc/elements/1.1/"
                        >
                          <defs id="defs2">
                            <text
                              xml:space="preserve"
                              style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:142.955px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-east-asian:normal;letter-spacing:0px;word-spacing:0px;fill:/000000;fill-opacity:1;stroke-width:1"
                              x="71.125862"
                              y="260.83368"
                              id="text4707"
                            >
                              <tspan
                                sodipodi:role="line"
                                id="tspan4705"
                                x="71.125862"
                                y="260.83368"
                                style="fill:/000000;fill-opacity:1;stroke-width:1"
                              >
                                Avenue
                              </tspan>
                            </text>
                          </defs>

                          <metadata id="metadata5"></metadata>
                          <g
                            style="display:inline;mix-blend-mode:normal"
                            inkscape:label="Contents"
                            id="layer2"
                            inkscape:groupmode="layer"
                            transform="translate(-54.229301,-191.75853)"
                          >
                            <path
                              style="fill:none;stroke:/a75b41;stroke-width:5;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                              d="m 55.154329,314.70266 c 0,0 7.071068,-11.35385 7.071068,-11.35385 0,0 8.662058,-14.31891 8.662058,-14.31891 3.771236,-5.71578 7.542316,-11.43132 11.202823,-16.99519 3.660507,-5.56387 7.299646,-11.11207 10.144734,-15.41304 2.845087,-4.30097 4.947182,-7.43233 7.467813,-11.04371 2.520635,-3.61137 5.456765,-7.69882 8.819395,-12.38905 3.36264,-4.69022 7.14853,-9.97868 10.49997,-14.44237 3.35144,-4.46368 6.2682,-8.10226 9.21453,-11.54947 2.94634,-3.44721 5.92202,-6.70278 8.28653,-8.97152 2.36452,-2.26874 4.11751,-3.55034 5.48045,-4.30903 1.36293,-0.7587 2.33519,-0.99439 3.13829,-0.94242 0.80311,0.052 1.43654,0.39078 1.81168,0.95082 0.37515,0.56005 0.493,1.3408 0.55921,2.68868 0.0662,1.34788 0.0809,3.26293 0.0441,5.36951 -0.0369,2.10659 -0.12523,4.40464 -0.39782,6.66583 -0.2726,2.26119 -0.72926,4.48559 -1.28169,7.26987 -0.55244,2.78427 -1.20061,6.12823 -2.06979,9.85527 -0.86918,3.72704 -1.95928,7.83701 -3.2483,12.35957 -1.28901,4.52257 -2.77685,9.45748 -3.87948,12.9864 -1.10263,3.52892 -1.82892,5.67815 -3.08991,9.64561 -1.26099,3.96745 -3.05531,9.74751 -4.71998,14.69726 -1.66467,4.94975 -3.1967,9.05972 -5.11917,14.43676 -1.92247,5.37704 -4.23524,12.02076 -5.53161,15.68148 -1.29637,3.66072 -1.57626,4.33835 -1.03051,4.80962 0.54576,0.47127 1.91575,0.73643 2.72436,-0.0442 0.80862,-0.7806 1.06101,-2.63645 1.27466,-5.79633 0.21364,-3.15987 0.39042,-7.63812 0.41992,-11.37989 0.0295,-3.74176 -0.0884,-6.7469 -0.41964,-9.11859 -0.3313,-2.3717 -0.87635,-4.10997 -1.65687,-5.5979 -0.78051,-1.48794 -1.79696,-2.72535 -3.26266,-4.1544 -1.4657,-1.42905 -3.38074,-3.04947 -5.73675,-4.40749 -2.356,-1.35802 -5.12741,-2.44312 -8.2579,-3.26823 -3.130495,-0.8251 -6.607034,-1.38488 -10.384733,-1.81103 -3.7777,-0.42614 -7.919091,-0.72301 -11.336887,-0.73782 -3.417796,-0.0148 -6.143048,0.25035 -9.073541,0.53025 -2.930492,0.2799 -6.066046,0.57452 -2.847252,0.13993 3.218794,-0.43459 12.792027,-1.59837 18.882383,-2.37183 6.090356,-0.77347 8.697761,-1.15659 10.74552,-1.34809 2.04776,-0.1915 3.5356,-0.1915 5.92945,-0.30196 2.39385,-0.11047 5.69362,-0.33132 8.86092,-0.47119 3.16731,-0.13988 6.20191,-0.1988 9.94373,-0.27246 3.74182,-0.0737 8.19061,-0.16204 12.30072,-0.17675 4.11011,-0.0147 7.88128,0.0442 10.87177,0.0958 2.9905,0.0516 5.20017,0.0958 6.28969,0.14007 1.08953,0.0443 1.06008,0.0885 1.19269,-1.377 0.13261,-1.46547 0.42723,-4.44115 0.79601,-5.95161 0.36878,-1.51045 0.81071,-1.55465 1.32641,-1.54718 0.51571,0.007 1.10496,0.0664 1.19269,0.68535 0.0877,0.61897 -0.32473,1.79746 -0.59722,2.83616 -0.2725,1.03869 -0.40507,1.93729 -0.56712,3.02743 -0.16205,1.09013 -0.35355,2.37173 -0.54737,3.85943 -0.19381,1.48769 -0.38993,3.18129 -0.42897,4.60279 -0.039,1.4215 0.0788,2.57051 0.14506,3.52803 0.0662,0.95753 0.081,1.72353 0.86398,0.83211 0.783,-0.89142 2.33438,-3.43946 4.00876,-5.84793 1.67438,-2.40847 3.47157,-4.67705 5.20258,-6.60696 1.73102,-1.9299 3.39564,-3.52086 4.73641,-4.55952 1.34076,-1.03866 2.35721,-1.52479 3.10131,-1.8194 0.7441,-0.29461 1.2155,-0.39772 1.7092,-0.40491 0.49371,-0.007 1.00929,0.0812 1.61324,0.43514 0.60395,0.35393 1.29632,0.97264 1.02321,2.00342 -0.2731,1.03078 -1.51052,2.47443 -2.32079,4.10997 -0.81027,1.63554 -1.19328,3.4622 -0.67709,4.37516 0.51619,0.91297 1.93038,0.91297 3.22673,0.88348 1.29635,-0.0295 2.47483,-0.0884 3.63838,-0.36839 1.16356,-0.27998 2.31258,-0.78084 3.37309,-1.39952 1.06051,-0.61868 2.03277,-1.35523 2.78395,-2.0475 0.75119,-0.69227 1.28151,-1.34044 1.35569,-1.87031 0.0742,-0.52988 -0.30883,-0.94235 -0.83906,-1.23734 -0.53023,-0.29499 -1.20786,-0.47177 -2.03316,-0.3689 -0.8253,0.10287 -1.79755,0.48588 -2.71112,1.04575 -0.91358,0.55987 -1.76798,1.29642 -2.69617,2.32775 -0.92818,1.03132 -1.9299,2.35712 -2.60758,3.63901 -0.67769,1.2819 -1.03123,2.51931 -0.98654,3.44763 0.0447,0.92832 0.48664,1.54703 1.09082,1.9591 0.60418,0.41207 1.37019,0.61831 2.07722,0.72127 0.70702,0.10296 1.35519,0.10296 2.29792,-2.3e-4 0.94272,-0.10319 2.18013,-0.30942 3.78573,-0.81034 1.60559,-0.50091 3.57956,-1.29638 5.25295,-2.05645 1.6734,-0.76007 3.04627,-1.4847 4.56603,-2.35223 1.51976,-0.86753 3.18639,-1.87793 5.13954,-3.04461 1.95316,-1.16668 4.1927,-2.48957 5.39036,-3.3382 1.19767,-0.84862 1.35391,-1.22361 1.03163,-1.74946 -0.32228,-0.52584 -1.12435,-1.20291 -1.64062,-1.29168 -0.51627,-0.0888 -0.74543,0.41123 -1.18292,1.16635 -0.43748,0.75513 -1.0833,1.76552 -1.73437,2.9479 -0.65106,1.18239 -1.3073,2.53653 -1.76562,3.76065 -0.45832,1.22412 -0.71873,2.31785 -0.90622,3.20332 -0.18748,0.88547 -0.30206,1.56254 -0.35929,1.89617 -0.0572,0.33364 -0.0572,0.32284 0.38026,-0.18804 0.43747,-0.51088 1.31245,-1.52127 2.09374,-2.38069 0.78128,-0.85941 1.46877,-1.56773 2.20839,-2.28652 0.73961,-0.71878 1.53126,-1.44793 2.35958,-2.02614 0.82832,-0.57821 1.69289,-1.00529 2.47444,-1.21873 0.78155,-0.21344 1.47945,-0.21344 2.02122,-0.12462 0.54178,0.0888 0.92719,0.2659 1.31769,0.57344 0.3905,0.30755 0.78633,0.74504 1.19234,1.51075 0.406,0.76572 0.82266,1.85944 1.23935,2.92717 0.41668,1.06772 0.83333,2.10936 1.30221,3.05206 0.46888,0.9427 0.9897,1.78643 1.542,2.25991 0.5523,0.47347 1.13562,0.57764 1.95831,0.47848 0.82268,-0.0992 1.88516,-0.40124 2.87459,-0.8127 0.98942,-0.41146 1.90607,-0.93228 2.68207,-1.40102 0.77601,-0.46874 1.41141,-0.8854 2.28118,-1.49998 0.86977,-0.61457 1.97391,-1.42705 3.34373,-2.41145 1.36982,-0.98439 3.00521,-2.14062 4.3906,-3.16665 1.3854,-1.02603 2.52079,-1.92185 3.11963,-2.59846 0.59884,-0.67661 0.66133,-1.13494 0.57324,-1.54104 -0.0881,-0.4061 -0.32768,-0.76026 -0.78119,-0.60979 -0.45352,0.15046 -1.12017,0.8067 -1.71403,1.58812 -0.59385,0.78143 -1.11467,1.68766 -1.71365,2.84919 -0.59897,1.16153 -1.27604,2.57816 -1.7083,3.7971 -0.43227,1.21894 -0.61977,2.23976 -0.52015,2.87516 0.0996,0.6354 0.48502,0.88539 1.02132,0.95787 0.5363,0.0725 1.22379,-0.0317 2.16102,-0.44839 0.93724,-0.41669 2.12472,-1.14584 3.50483,-2.21351 1.38012,-1.06766 2.953,-2.47388 4.16652,-3.59887 1.21353,-1.12498 2.06768,-1.96871 2.82801,-2.95815 0.76033,-0.98944 1.42698,-2.12483 1.328,-1.70807 -0.099,0.41677 -0.96354,2.38548 -1.58333,4.0731 -0.61978,1.68763 -0.99477,3.09384 -1.0883,4.23472 -0.0935,1.14087 0.094,2.01585 0.4694,2.49974 0.37545,0.48389 0.93795,0.57764 1.78673,0.50455 0.84878,-0.0731 1.98417,-0.31268 3.15066,-0.73978 1.1665,-0.42711 2.36439,-1.04168 3.48414,-1.66668 1.11975,-0.62499 2.16139,-1.26039 2.95304,-1.76039 0.79164,-0.49999 1.3333,-0.86457 2.15668,-0.95294 0.82339,-0.0884 1.92753,0.0991 3.26061,-0.0677 1.33308,-0.16686 2.89555,-0.68769 4.06724,-1.21371 1.1717,-0.52602 1.95293,-1.05726 2.68202,-1.62493 0.7291,-0.56766 1.40617,-1.17182 1.85395,-1.75486 0.44779,-0.58305 0.66653,-1.14554 0.65148,-1.56715 -0.0151,-0.42162 -0.26505,-0.70286 -0.69204,-0.89081 -0.42699,-0.18794 -1.03115,-0.28168 -1.81784,-0.20373 -0.78669,0.0779 -1.75541,0.32794 -2.6724,0.83322 -0.91699,0.50527 -1.78156,1.26567 -2.70351,2.20846 -0.92195,0.94279 -1.9011,2.06776 -2.6095,3.26595 -0.70841,1.19819 -1.1459,2.469 -1.2185,3.51618 -0.0726,1.04719 0.21906,1.87009 0.66735,2.46882 0.4483,0.59872 1.05245,0.97371 1.85961,1.10872 0.80717,0.13501 1.81756,0.0308 3.28621,-0.30254 1.46865,-0.33339 3.3957,-0.89588 5.49458,-1.69277 2.09888,-0.7969 4.36967,-1.82813 6.13521,-2.73957 1.76555,-0.91145 3.02594,-1.7031 4.13527,-2.45309 1.10934,-0.74998 2.06766,-1.4583 3.02582,-2.16651"
                              id="mainPath-3"
                              sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                              inkscape:original-d="m 55.154329,314.70266 7.071068,-11.35385 8.662058,-14.31891 c 0,0 7.543472,-11.43056 11.313708,-17.14734 3.536605,-5.42026 7.189919,-10.95916 10.783379,-16.44024 2.089528,-3.12567 4.198805,-6.25221 6.296708,-9.37982 2.96976,-4.07612 5.87947,-8.18255 8.8177,-12.27532 3.78704,-5.28768 7.57293,-10.57614 11.3579,-15.86571 2.91788,-3.63773 5.83463,-7.27631 8.75045,-10.91596 2.9768,-3.2547 5.95248,-6.51027 8.92722,-9.76691 1.75407,-1.28066 3.50707,-2.56226 5.25911,-3.8449 0.97329,-0.2347 1.94554,-0.4704 2.91681,-0.7071 0.63447,0.33983 1.2679,0.67864 1.90035,1.01646 0.11886,0.78178 0.23671,1.56253 0.35356,2.3423 0.0157,1.91611 0.0305,3.83116 0.0442,5.74524 -0.0874,2.29914 -0.17578,4.59719 -0.26516,6.89429 -0.45569,2.22548 -0.91235,4.44988 -1.37002,6.67332 -0.6472,3.34509 -1.29537,6.68905 -1.94455,10.03208 -1.08914,4.11114 -2.17924,8.22111 -3.27037,12.33017 -1.4869,4.93612 -2.97474,9.87103 -4.46361,14.80505 -0.72085,2.12236 -1.44267,4.2731 -2.16551,6.40815 -1.78154,5.80529 -3.59346,11.57988 -5.39169,17.36831 -1.5311,4.11115 -3.06313,8.22112 -4.5962,12.33018 -2.31187,6.64499 -4.62465,13.28871 -6.93848,19.93157 -0.2789,0.67866 -0.55879,1.35629 -0.83969,2.03293 1.37105,0.26617 2.74104,0.53133 4.11006,0.7955 0.25144,-1.82573 0.50187,-3.68185 0.7513,-5.52427 0.17778,-4.47744 0.35455,-8.95569 0.53033,-13.43503 -0.11685,-3.00427 -0.2347,-6.00941 -0.35355,-9.01561 -0.54408,-1.73734 -1.08913,-3.47561 -1.63519,-5.21492 -1.01549,-1.23646 -2.03193,-2.47387 -3.0494,-3.71231 -1.91412,-1.61948 -3.82916,-3.2399 -5.74524,-4.86136 -2.79802,-1.08914 -5.56747,-2.17924 -8.3527,-3.27036 -3.475676,-0.55881 -6.952215,-1.11859 -10.429823,-1.67938 -4.079677,-0.26417 -8.219117,-0.58826 -12.330175,-0.88389 -2.724362,0.26617 -5.449615,0.53133 -8.175922,0.7955 -3.134681,0.29563 -6.270235,0.59025 -9.406854,0.88388 9.574239,-1.16278 19.147472,-2.32656 28.719708,-3.49134 2.608508,-0.38213 5.215912,-0.76525 7.822369,-1.14938 1.488897,10e-4 2.976737,10e-4 4.463607,0 3.3009,-0.21986 6.60067,-0.44072 9.8995,-0.66258 3.03573,-0.0579 6.07033,-0.11685 9.104,-0.17678 4.44997,-0.0874 8.89876,-0.17577 13.34664,-0.26516 3.77231,0.0599 7.54347,0.11885 11.31371,0.17678 2.21075,0.0452 4.42042,0.0894 6.62912,0.13258 -0.0285,0.0452 -0.0579,0.0894 -0.0884,0.13258 0.29563,-2.9748 0.59025,-5.95048 0.88388,-8.92722 0.44295,-0.0432 0.88488,-0.0874 1.32582,-0.13258 0.59027,0.0599 1.17952,0.11885 1.76777,0.17677 -0.41149,1.17954 -0.82396,2.35803 -1.23744,3.53554 -0.13158,0.89963 -0.26416,1.79823 -0.39774,2.69584 -0.19051,1.28266 -0.38202,2.56426 -0.57453,3.84489 -0.19514,1.69472 -0.39126,3.38832 -0.5884,5.08103 0.11886,1.15007 0.2367,2.29908 0.35356,3.44715 0.0157,0.76705 0.0305,1.53305 0.0442,2.2981 1.55245,-2.54716 3.10383,-5.0952 4.65425,-7.6443 1.79827,-2.26768 3.59546,-4.53626 5.39169,-6.8059 1.66568,-1.59002 3.3303,-3.18098 4.99395,-4.77297 1.01748,-0.48514 2.03393,-0.97127 3.04939,-1.45841 0.47242,-0.10212 0.94381,-0.20524 1.41422,-0.30936 0.51661,0.0894 1.03219,0.17778 1.54679,0.26517 0.69339,0.61973 1.38575,1.23844 2.07713,1.85615 -1.23646,1.44471 -2.47387,2.88836 -3.71231,4.33103 -0.38203,1.82773 -0.76503,3.65439 -1.14905,5.48008 1.41524,10e-4 2.82943,10e-4 4.24264,0 1.17954,-0.0579 2.35802,-0.11685 3.53553,-0.17678 1.15008,-0.49987 2.2991,-1.00073 3.44715,-1.5026 0.97329,-0.73558 1.94554,-1.47214 2.91682,-2.20971 0.53134,-0.64719 1.06166,-1.29536 1.59099,-1.94454 -0.38203,-0.41149 -0.76504,-0.82396 -1.14905,-1.23744 -0.67666,-0.17578 -1.35429,-0.35255 -2.03293,-0.53033 -0.9713,0.38403 -1.94355,0.76704 -2.91682,1.14905 -0.85344,0.73759 -1.70784,1.47414 -2.56326,2.20971 -1.00076,1.32685 -2.00247,2.65265 -3.00521,3.97748 -0.35256,1.23846 -0.7061,2.47587 -1.06066,3.71231 0.44295,0.61973 0.88489,1.23843 1.32583,1.85615 0.76705,0.20725 1.53306,0.41348 2.2981,0.61872 0.64919,0.001 1.29736,0.001 1.94454,0 1.23846,-0.20524 2.47587,-0.41148 3.71231,-0.61872 1.97505,-0.79451 3.94901,-1.58999 5.92202,-2.38648 1.37393,-0.72366 2.7468,-1.44829 4.1187,-2.17393 1.6677,-1.00944 3.33433,-2.01983 5,-3.03125 2.24063,-1.32194 4.48017,-2.64483 6.71875,-3.96875 0.15725,-0.37401 0.3135,-0.749 0.46875,-1.125 -0.8011,-0.6761 -1.60317,-1.35317 -2.40625,-2.03125 -0.22817,0.50101 -0.45733,1.001 -0.6875,1.5 -0.64485,1.01144 -1.29067,2.02183 -1.9375,3.03125 -0.65526,1.35519 -1.3115,2.70933 -1.96875,4.0625 -0.25942,1.09477 -0.51983,2.1885 -0.78125,3.28125 -0.11359,0.6781 -0.22817,1.35517 -0.34375,2.03125 0.001,-0.009 0.001,-0.0198 0,-0.0312 0.87602,-1.00944 1.751,-2.01983 2.625,-3.03125 0.68851,-0.70735 1.376,-1.41567 2.0625,-2.125 0.79268,-0.72818 1.58433,-1.45733 2.375,-2.1875 0.8656,-0.42609 1.73017,-0.85317 2.59375,-1.28125 0.69893,0.001 1.39683,0.001 2.09375,0 0.38642,0.17809 0.77183,0.35517 1.15625,0.53125 0.39684,0.43851 0.79267,0.876 1.1875,1.3125 0.41768,1.09477 0.83433,2.1885 1.25,3.28125 0.41768,1.04269 0.83433,2.08433 1.25,3.125 0.52184,0.84477 1.04267,1.6885 1.5625,2.53125 0.58435,0.10517 1.16767,0.20933 1.75,0.3125 1.06352,-0.30109 2.126,-0.60317 3.1875,-0.90625 0.91769,-0.51984 1.83433,-1.04067 2.75,-1.5625 0.63643,-0.41567 1.27183,-0.83233 1.90625,-1.25 1.10519,-0.81152 2.20933,-1.624 3.3125,-2.4375 1.63645,-1.15527 3.27183,-2.3115 4.90625,-3.46875 1.13644,-0.89485 2.27183,-1.79067 3.40625,-2.6875 0.0635,-0.45734 0.126,-0.91567 0.1875,-1.375 -0.23859,-0.35317 -0.47817,-0.70733 -0.71875,-1.0625 -0.66568,0.65726 -1.33233,1.3135 -2,1.96875 -0.51984,0.90727 -1.04067,1.8135 -1.5625,2.71875 -0.6761,1.4177 -1.35317,2.83433 -2.03125,4.25 -0.1865,1.02185 -0.374,2.04267 -0.5625,3.0625 0.38642,0.25101 0.77183,0.501 1.15625,0.75 0.68851,-0.10317 1.376,-0.20733 2.0625,-0.3125 1.18852,-0.72818 2.376,-1.45733 3.5625,-2.1875 1.57395,-1.40528 3.14683,-2.8115 4.71875,-4.21875 0.85518,-0.84277 1.70933,-1.6865 2.5625,-2.53125 0.66768,-1.13444 1.33433,-2.26983 2,-3.40625 -0.8636,1.96979 -1.72817,3.9385 -2.59375,5.90625 -0.37401,1.40728 -0.749,2.8135 -1.125,4.21875 0.1885,0.87602 0.376,1.751 0.5625,2.625 0.56351,0.0947 1.126,0.1885 1.6875,0.28125 1.13644,-0.23859 2.27183,-0.47817 3.40625,-0.71875 1.19894,-0.6136 2.39683,-1.22817 3.59375,-1.84375 1.04269,-0.63443 2.08433,-1.26983 3.125,-1.90625 0.54268,-0.36359 1.08433,-0.72817 1.625,-1.09375 1.10519,0.1885 2.20933,0.376 3.3125,0.5625 1.56353,-0.51984 3.126,-1.04067 4.6875,-1.5625 0.78227,-0.53026 1.5635,-1.0615 2.34375,-1.59375 0.6781,-0.60318 1.35517,-1.20733 2.03125,-1.8125 0.21975,-0.56151 0.4385,-1.124 0.65625,-1.6875 -0.249,-0.28026 -0.499,-0.5615 -0.75,-0.84375 -0.60318,-0.0927 -1.20733,-0.1865 -1.8125,-0.28125 -0.96777,0.25101 -1.9365,0.501 -2.90625,0.75 -0.8636,0.76143 -1.72817,1.52183 -2.59375,2.28125 -0.97819,1.12602 -1.95733,2.251 -2.9375,3.375 -0.43651,1.27186 -0.874,2.54267 -1.3125,3.8125 0.29267,0.82393 0.58433,1.64683 0.875,2.46875 0.60518,0.37601 1.20933,0.751 1.8125,1.125 1.01144,-0.10317 2.02183,-0.20733 3.03125,-0.3125 1.92812,-0.56151 3.85517,-1.124 5.78125,-1.6875 2.27188,-1.03027 4.54267,-2.0615 6.8125,-3.09375 1.26144,-0.79068 2.52183,-1.58233 3.78125,-2.375 0.95935,-0.70735 1.91767,-1.41567 2.875,-2.125"
                              inkscape:path-effect="/path-effect4675"
                              clip-path="url(/clipPath4703)"
                            />
                          </g>
                        </svg> */}
                      </span>
                    </h2>
                    <div className="roundBtn rightDestinationbtn mb-3">
                      <a
                        href="/"
                        className="wow zoomIn btnclassNameDesign lightGreyBack coralFont wow fadeInUp"
                      >
                        <span
                          id="roundText2"
                          className="btnText strong colorYellow font-13 letterSpacingmedium"
                        >
                          Explore Now
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="owl-carousel owl-theme" id="avenueImage">
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue1} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue2} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="item">
                          <img src={avenue1} className="img-fluid" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-7">
                  <div className="row">
                    <div className="owl-carousel owl-theme" id="services">
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue1} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue2} className="img-fluid" alt="img" />
                        </div>
                      </div>
                      <div className="item">
                        <div className="avenueSliderImageSec">
                          <img src={avenue1} className="img-fluid" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <span className="">
                    {/* <!-- <?xml version="1.0" encoding="UTF-8" standalone="no"?> --> */}
                    {/* <svg
                      shape-rendering="crispEdges"
                      width="286.55719"
                      height="163.88498"
                      viewBox="0 0 286.55719 163.88498"
                      version="1.1"
                      id="demo-5"
                      inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                      sodipodi:docname="Calligraphy.svg"
                      xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                      xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:svg="http://www.w3.org/2000/svg"
                      xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                      xmlns:cc="http://creativecommons.org/ns/"
                      xmlns:dc="http://purl.org/dc/elements/1.1/"
                    >
                      <defs id="defs2">
                        <text
                          xml:space="preserve"
                          style="font-size:200px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';letter-spacing:0px;word-spacing:0px"
                          x="34.648235"
                          y="148.49242"
                          id="text4108"
                        >
                          <tspan
                            sodipodi:role="line"
                            id="tspan4106"
                            x="34.648235"
                            y="148.49242"
                            style="fill:/000000;fill-opacity:1;stroke-width:1"
                          >
                            Service
                          </tspan>
                        </text>
                      </defs>

                      <metadata id="metadata5"></metadata>
                      <g
                        style="display:inline;mix-blend-mode:normal"
                        inkscape:label="Contents"
                        id="layer2"
                        inkscape:groupmode="layer"
                        transform="translate(390.94211,46.707581)"
                      >
                        <path
                          style="fill:none;stroke:/a75b41;stroke-width:6.5;stroke-linecap:round;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                          d="m 135.94128,58.336309 c -3.65359,10.8429 -7.30697,21.685202 -9.25151,27.548349 -1.94454,5.863147 -2.18023,6.747015 -2.00343,5.68637 0.17679,-1.060645 0.76603,-4.06579 1.208,-6.687961 0.44196,-2.62217 0.73659,-4.861296 0.82506,-7.188784 0.0885,-2.327488 -0.0294,-4.743388 -0.27972,-6.80574 -0.25033,-2.062351 -0.63334,-3.77116 -1.36969,-5.52421 -0.73635,-1.75305 -1.82646,-3.550242 -3.2552,-5.023604 -1.42874,-1.473362 -3.19647,-2.622387 -5.06735,-3.53591 -1.87089,-0.913523 -3.84486,-1.591155 -6.143,-2.20996 -2.29814,-0.618805 -4.92028,-1.178587 -7.42477,-1.355524 -2.50448,-0.176938 -4.890921,0.0293 -7.557407,0.441742 -2.666486,0.412445 -5.612706,1.031151 -8.131867,1.679319 -2.519161,0.648168 -4.610977,1.325799 -7.277532,2.577991 -2.666554,1.252193 -5.907396,3.078849 -8.588651,4.890884 -2.681256,1.812034 -4.802533,3.609228 -6.806105,5.627534 -2.003571,2.018307 -3.889152,4.257435 -5.52441,6.747218 -1.635259,2.489783 -3.019982,5.229767 -4.095377,7.911036 -1.075395,2.681268 -1.841412,5.303403 -2.239072,7.601687 -0.397661,2.298283 -0.42714,4.273367 -0.4124,6.614351 0.01474,2.340984 0.07366,5.051563 0.471799,7.660583 0.398135,2.60901 1.134271,5.11187 2.79905,9.25149 1.664779,4.13962 4.258901,9.91744 6.12103,13.74209 1.862129,3.82466 2.995575,5.70357 4.514743,8.64035 1.519168,2.93679 3.421073,6.92517 5.595823,11.39649 2.174749,4.47131 4.619682,9.42009 6.342121,13.61505 1.722438,4.19495 2.722056,7.63487 3.251186,10.17977 0.529129,2.54489 0.588053,4.19477 0.558545,6.0951 -0.02951,1.90032 -0.147356,4.05106 -0.383115,5.9808 -0.235758,1.92974 -0.589305,3.63855 -1.222788,5.5093 -0.633482,1.87076 -1.546813,3.90366 -2.489592,5.58291 -0.942778,1.67924 -1.915032,3.00504 -3.226039,4.37495 -1.311007,1.36991 -2.960887,2.7841 -4.507587,3.91837 -1.5467,1.13427 -2.990348,1.98868 -4.49291,2.7989 -1.502562,0.81022 -3.06406,1.57624 -4.58133,2.22442 -1.51727,0.64819 -2.99038,1.17851 -4.846504,1.75305 -1.856125,0.57454 -4.095253,1.19324 -6.378579,1.70887 -2.283326,0.51563 -4.610839,0.9281 -6.938315,1.11968 -2.327476,0.19159 -4.654988,0.16212 -6.835177,-0.0882 -2.180189,-0.25032 -4.213078,-0.72171 -6.098714,-1.50226 -1.885635,-0.78054 -3.623903,-1.87064 -4.655482,-2.88688 -1.031578,-1.01624 -1.355663,-1.95903 -1.517916,-3.03453 -0.162252,-1.07551 -0.162252,-2.28346 -2.96e-4,-3.46215 0.161955,-1.17869 0.486038,-2.32771 0.98693,-3.40334 0.500892,-1.07562 1.178525,-2.07734 2.315097,-3.52439 1.136572,-1.44706 2.73194,-3.33924 4.633896,-5.2646 1.901956,-1.92537 4.110249,-3.88366 6.266547,-5.70662 2.156298,-1.82295 4.260424,-3.51042 7.328227,-5.69797 3.067803,-2.18756 7.098974,-4.875 10.630283,-7.14066 3.531308,-2.26565 6.562496,-4.10936 10.062567,-6.1146 3.500072,-2.00524 7.468741,-4.17186 10.661552,-5.75001 3.192811,-1.57814 5.609431,-2.5677 7.718789,-3.48438 2.109358,-0.91667 3.911405,-1.7604 5.911462,-2.63021 2.000058,-0.8698 4.197932,-1.76561 6.427125,-2.66666 2.229194,-0.90106 4.489563,-1.80729 5.974073,-2.32809 1.48452,-0.52081 2.19284,-0.65622 2.73446,-0.77603 0.54161,-0.11982 0.9166,-0.22398 1.02035,0.13588 0.10376,0.35986 -0.0629,1.18276 -0.021,1.99548 0.0419,0.81272 0.29193,1.6148 0.86003,2.08825 0.56809,0.47345 1.45349,0.61928 2.37521,0.6087 0.92172,-0.0106 1.88004,-0.17724 3.10911,-0.52103 1.22907,-0.34379 2.72904,-0.86461 4.1248,-1.44795 1.39575,-0.58334 2.68739,-1.22916 3.77057,-1.93222 1.08318,-0.70307 1.95816,-1.46347 2.64036,-2.1769 0.6822,-0.71343 1.17177,-1.38008 1.45301,-1.90582 0.28124,-0.52573 0.35415,-0.91115 0.32839,-1.28594 -0.0258,-0.3748 -0.15076,-0.73938 -0.57224,-1.09386 -0.42149,-0.35448 -1.14023,-0.69822 -1.96329,-0.83396 -0.82307,-0.13574 -1.75014,-0.0628 -2.56299,0.20797 -0.81285,0.2708 -1.51075,0.73954 -2.27637,1.23433 -0.76561,0.49478 -1.59893,1.01561 -2.62512,1.89592 -1.02619,0.88031 -2.24492,2.11987 -3.24501,3.35438 -1.00008,1.23451 -1.78131,2.46365 -2.39592,3.54708 -0.61461,1.08343 -1.06252,2.0209 -1.39583,3.05234 -0.3333,1.03144 -0.55205,2.15642 -0.36394,2.97941 0.18811,0.823 0.78185,1.34383 1.44338,1.80724 0.66153,0.46341 1.39068,0.86965 2.19788,1.07245 0.80721,0.20279 1.69261,0.20279 2.6769,0.10897 0.98428,-0.0938 2.0676,-0.28132 3.15611,-0.5053 1.08851,-0.22397 2.18224,-0.48438 3.59886,-0.9167 1.41661,-0.43231 3.15616,-1.03647 4.77072,-1.64585 1.61455,-0.60938 3.10411,-1.22396 4.53632,-1.93228 1.43221,-0.70833 2.80718,-1.5104 4.11967,-2.30727 1.31248,-0.79688 2.56246,-1.58853 4.10413,-2.58854 1.54168,-1 3.37498,-2.20832 4.55755,-2.85935 1.18257,-0.65103 1.71382,-0.74478 2.17169,-1.06233 0.45787,-0.31755 0.84327,-0.8592 1.28713,-1.35921 0.44386,-0.5 0.94594,-0.95809 1.47679,-1.58845 0.53086,-0.63037 1.09064,-1.43321 1.65779,-2.34283 0.56714,-0.90961 1.14165,-1.92605 1.46578,-2.70288 0.32412,-0.77683 0.39778,-1.31451 0.35386,-1.80784 -0.0439,-0.49333 -0.20597,-0.94262 -0.4008,-1.24116 -0.19483,-0.29854 -0.42316,-0.44585 -0.78436,-0.43896 -0.3612,0.007 -0.85469,0.16893 -1.41462,0.42306 -0.55994,0.25413 -1.18601,0.6003 -1.64664,1.06833 -0.46063,0.46802 -0.75525,1.05726 -1.0828,1.46946 -0.32756,0.4122 -0.68847,0.6479 -0.97595,1.09023 -0.28749,0.44233 -0.50109,1.0905 -0.74048,1.67229 -0.23939,0.58178 -0.50455,1.09737 -0.69973,1.58366 -0.19519,0.48628 -0.3204,0.94295 -0.29415,1.30779 0.0263,0.36485 0.20302,0.63737 0.36524,0.83242 0.16222,0.19506 0.30953,0.3129 0.53415,0.37509 0.22461,0.0622 0.5266,0.0695 0.80657,0.10281 0.27997,0.0333 0.53778,0.0922 1.05708,0.23218 0.5193,0.13998 1.30004,0.36095 2.06602,0.50446 0.76599,0.14352 1.51728,0.20981 2.23182,0.42737 0.71453,0.21757 1.39216,0.58585 1.9372,0.81029 0.54505,0.22444 0.95752,0.30546 1.27047,0.46055 0.31295,0.15508 0.52655,0.38342 0.83961,0.71119 0.31305,0.32777 0.72552,0.75497 0.9719,1.16752 0.24638,0.41255 0.3274,0.8103 0.0694,1.45065 -0.25799,0.64036 -0.8546,1.52422 -1.43652,2.52974 -0.58192,1.00552 -1.14907,2.13245 -1.451,2.97609 -0.30192,0.84364 -0.33875,1.40343 -0.27593,1.94494 0.0628,0.54152 0.22487,1.06447 0.43888,1.35495 0.214,0.29047 0.47916,0.3494 0.86951,0.40088 0.39034,0.0515 0.90593,0.0957 1.93332,-0.0149 1.02739,-0.11061 2.56679,-0.37577 4.09505,-0.81407 1.52825,-0.4383 3.04555,-1.04964 4.58865,-1.71992 1.54309,-0.67028 3.11195,-1.39947 4.62556,-2.18024 1.5136,-0.78076 2.97198,-1.61307 4.25362,-2.34228 1.28165,-0.72921 2.38648,-1.35528 3.37714,-1.94821 0.99066,-0.59294 1.86715,-1.15272 3.55389,-2.30594 1.68673,-1.15323 4.18363,-2.89984 6.01529,-4.53345 1.83167,-1.6336 2.99831,-3.15441 3.65453,-4.1854 0.65621,-1.03099 0.80204,-1.57264 -0.0619,-2.45803 -0.86393,-0.88539 -2.73889,-2.11453 -3.91666,-2.22927 -1.17777,-0.11474 -1.65693,0.88523 -2.15693,2.03112 -0.50001,1.14589 -1.02083,2.43753 -1.42703,4.35441 -0.4062,1.91687 -0.69786,4.45848 -0.92703,6.43766 -0.22917,1.97918 -0.39584,3.39582 -0.40618,6.40637 -0.0103,3.01054 0.13548,7.61461 0.28162,10.0522 0.14614,2.43758 0.29197,2.70841 0.31252,2.17709 0.0206,-0.53133 -0.0836,-1.86464 0.21836,-3.0734 0.30197,-1.20876 1.01029,-2.29207 1.85404,-3.67746 0.84374,-1.3854 1.82289,-3.07286 2.97919,-4.76047 1.15631,-1.68761 2.48962,-3.37508 3.84787,-5.1287 1.35824,-1.75362 2.74136,-3.5733 3.94122,-5.04301 1.19985,-1.46972 2.21629,-2.58928 3.26967,-3.60583 1.05338,-1.01654 2.14347,-1.92986 3.18211,-2.7254 1.03863,-0.79554 2.02561,-1.47317 2.9833,-2.01089 0.95768,-0.53773 1.88575,-0.93547 2.6814,-1.19324 0.79566,-0.25777 1.45856,-0.37562 2.09957,-0.35329 0.64102,0.0223 1.25972,0.18436 1.68694,0.33186 0.42721,0.14749 0.66291,0.28007 2.6001,0.6776 1.93719,0.39752 5.57577,1.06042 7.4093,1.62801 1.83352,0.56759 1.86299,1.03898 1.81869,1.56917 -0.0443,0.53019 -0.16216,1.11944 -0.58935,1.87042 -0.42719,0.75098 -1.16375,1.66431 -1.88565,2.8872 -0.7219,1.22288 -1.42899,2.75491 -1.95931,4.12505 -0.53033,1.37014 -0.88388,2.57809 -1.13427,3.78618 -0.25039,1.20809 -0.3977,2.41604 -0.45654,3.30003 -0.0589,0.88398 -0.0294,1.44376 0.26563,2.12145 0.295,0.6777 0.85479,1.47318 1.38519,1.8556 0.53041,0.38242 1.03126,0.35295 1.85619,0.26453 0.82493,-0.0884 1.97396,-0.23573 3.21127,-0.54514 1.2373,-0.30941 2.5631,-0.78081 3.92568,-1.3627 1.36259,-0.5819 2.76205,-1.27426 4.2057,-2.04029 1.44365,-0.76603 2.93149,-1.60571 4.66241,-2.659 1.73092,-1.0533 3.70488,-2.32017 5.08241,-3.10833 1.37753,-0.78815 2.15828,-1.09751 3.07129,-2.11374 0.91301,-1.01624 1.95891,-2.73977 3.226,-4.16157 1.26708,-1.4218 2.75492,-2.54136 3.86732,-3.24851 1.11241,-0.70715 1.84897,-1.00178 2.4826,-1.1785 0.63364,-0.17672 1.16396,-0.23564 1.65752,-0.26506 0.49357,-0.0294 0.95023,-0.0294 1.34071,0.0519 0.39049,0.0813 0.71458,0.24337 1.03856,0.49401 0.32398,0.25065 0.64807,0.58947 0.86135,0.94311 0.21328,0.35364 0.3164,0.72192 0.37517,1.2669 0.0588,0.54498 0.0735,1.26681 0.0809,1.90762 0.007,0.64081 0.007,1.20059 0.35346,0.29441 0.3461,-0.90618 1.03846,-3.27788 1.32643,-4.49324 0.28796,-1.21537 0.1701,-1.2743 0.081,-1.14162 -0.0891,0.13268 -0.14799,0.45677 -0.2806,0.97231 -0.1326,0.51553 -0.33884,1.22262 -0.48594,1.60524 -0.1471,0.38261 -0.2355,0.44154 -0.45613,0.25801 -0.22064,-0.18353 -0.57419,-0.61074 -1.15596,-1.08232 -0.58176,-0.47158 -1.39197,-0.98716 -2.38657,-1.11283 -0.99459,-0.12567 -2.17308,0.13949 -3.28555,0.60354 -1.11247,0.46404 -2.15838,1.12695 -3.27071,1.98143 -1.11233,0.85449 -2.29082,1.9004 -3.44736,3.4032 -1.15655,1.50281 -2.29085,3.46204 -2.90952,4.95021 -0.61867,1.48817 -0.72179,2.50461 -0.75856,3.53589 -0.0368,1.03128 -0.007,2.07719 0.21405,2.90958 0.22135,0.83239 0.63382,1.45109 1.07586,2.01083 0.44205,0.55974 0.91345,1.0606 1.50283,1.44333 0.58937,0.38272 1.29646,0.64788 2.09179,0.72126 0.79533,0.0734 1.6792,-0.0445 2.61474,-0.0886 0.93554,-0.0441 1.92253,-0.0147 3.48382,-0.41989 1.5613,-0.40524 3.69731,-1.24491 5.86283,-2.12143 2.16553,-0.87653 4.36046,-1.78986 6.1797,-2.6811 1.81923,-0.89124 3.26288,-1.76038 4.47823,-2.49696 1.21534,-0.73657 2.20232,-1.34054 3.23399,-1.45073 1.03167,-0.11018 2.10704,0.27283 3.11608,0.49362 1.00904,0.22079 1.95183,0.27972 3.49836,-0.14027 1.54654,-0.41999 3.69728,-1.31859 5.33964,-2.23925 1.64237,-0.92066 2.77666,-1.86345 3.58676,-2.7177 0.8101,-0.85426 1.29623,-1.62028 1.6203,-2.2462 0.32408,-0.62592 0.48612,-1.11205 0.16272,-1.54664 -0.3234,-0.4346 -1.13361,-0.8176 -2.03233,-1.0094 -0.89873,-0.19179 -1.88571,-0.19179 -2.75526,0.0586 -0.86954,0.25036 -1.62083,0.75122 -2.53413,1.30363 -0.91331,0.55242 -1.98868,1.1564 -3.03484,2.10675 -1.04615,0.95034 -2.0626,2.24669 -3.03491,3.62415 -0.97232,1.37746 -1.90038,2.83584 -2.44543,4.00725 -0.54505,1.17142 -0.70709,2.05529 -0.75116,2.91723 -0.0441,0.86194 0.0296,1.70161 0.58251,2.55595 0.55293,0.85435 1.5841,1.72348 2.5562,2.04703 0.97211,0.32355 1.88543,0.10259 2.99778,-0.0373 1.11235,-0.13988 2.42342,-0.19881 3.97007,-0.50825 1.54666,-0.30944 3.32912,-0.86922 5.47248,-1.68683 2.14337,-0.81761 4.64766,-1.89298 7.01935,-3.09358 2.37169,-1.20061 4.61087,-2.52645 6.64371,-3.85491 2.03284,-1.32845 3.85995,-2.65993 5.31688,-3.7942 1.45692,-1.13426 2.54468,-2.07208 1.69516,-3.70833 -0.84951,-1.63626 -3.63566,-3.97034 -16.40661,-6.20073 -12.77096,-2.23038 -35.48827,-4.35094 -47.48522,-5.47076 -11.99696,-1.11982 -13.22098,-1.23399 -14.47121,-1.04502 -1.25024,0.18896 -2.5161,0.67957 -4.26738,1.47239 -1.75127,0.79281 -3.97748,1.88339 -6.20003,2.97218"
                          id="mainPath-5"
                          inkscape:path-effect="/path-effect4042"
                          inkscape:original-d="m 135.94128,58.336309 c -3.65239,10.843304 -7.30577,21.685608 -10.96016,32.526912 -0.2347,0.884901 -0.4704,1.768767 -0.7071,2.651651 0.59026,-3.004264 1.17951,-6.009408 1.76776,-9.015612 0.29564,-2.238216 0.59026,-4.477343 0.88389,-6.717514 -0.11686,-2.414997 -0.23471,-4.830897 -0.35356,-7.247845 -0.38202,-1.707875 -0.76503,-3.416683 -1.14904,-5.126524 -1.08915,-1.796266 -2.17925,-3.593459 -3.27037,-5.391689 -1.76681,-1.148072 -3.53454,-2.297097 -5.3033,-3.447146 -1.97305,-0.676657 -3.94702,-1.354288 -5.92202,-2.032932 -2.62124,-0.558804 -5.24338,-1.118585 -7.86657,-1.679378 -2.38553,0.207243 -4.771968,0.413479 -7.159453,0.618718 -2.945337,0.619731 -5.891557,1.238437 -8.838835,1.856155 -2.090899,0.678658 -4.182715,1.356288 -6.275572,2.032932 -3.239971,1.82773 -6.480813,3.654386 -9.722719,5.480078 -2.120362,1.798266 -4.24164,3.595459 -6.363961,5.391689 -1.884655,2.240216 -3.770236,4.479343 -5.656854,6.717515 -1.383778,2.741093 -2.768501,5.481077 -4.154252,8.220116 -0.765048,2.62324 -1.531065,5.245375 -2.298097,7.866563 -0.02846,1.975046 -0.05794,3.95013 -0.08839,5.922019 0.05989,2.710043 0.118813,5.420623 0.17677,8.131733 0.737986,2.50675 1.474123,5.00961 2.209708,7.513 2.59378,5.77583 5.187902,11.55365 7.778175,17.32412 1.133818,1.87887 2.267264,3.75778 3.400354,5.63676 1.905382,3.99457 3.807286,7.98295 5.709928,11.97397 2.446838,4.95161 4.891772,9.90039 7.336233,14.84924 1.000661,3.44107 2.00028,6.88099 2.998922,10.31999 0.05993,1.65095 0.118851,3.30083 0.176776,4.94975 -0.116853,2.15182 -0.234702,4.30256 -0.353553,6.45235 -0.35256,1.70987 -0.706107,3.41868 -1.06066,5.12652 -0.912365,2.03397 -1.825693,4.06687 -2.740039,6.0988 -0.971291,1.32685 -1.943544,2.65265 -2.916815,3.97747 -1.648949,1.41525 -3.298832,2.82943 -4.949748,4.24264 -1.442705,0.85544 -2.886352,1.70985 -4.331029,2.56327 -1.560559,0.76704 -3.122055,1.53306 -4.684582,2.29809 -1.472169,0.53134 -2.945278,1.06166 -4.419418,1.59099 -2.238216,0.61973 -4.477343,1.23844 -6.717514,1.85616 -2.326606,0.41349 -4.65412,0.82596 -6.982679,1.23744 -2.326607,-0.0285 -4.65412,-0.0579 -6.98268,-0.0884 -2.031973,-0.47042 -4.064864,-0.94181 -6.098796,-1.41422 -1.737339,-1.08914 -3.475608,-2.17924 -5.214912,-3.27037 -0.323097,-0.94182 -0.647182,-1.88461 -0.972272,-2.82842 0.001,-1.207 0.001,-2.41495 0,-3.62392 0.325097,-1.14808 0.649181,-2.2971 0.972272,-3.44715 0.678657,-1.00075 1.356288,-2.00247 2.032932,-3.0052 1.596429,-1.89125 3.191795,-3.78343 4.786192,-5.67664 2.209377,-1.95737 4.417667,-3.91567 6.625,-5.875 2.105209,-1.68653 4.209333,-3.374 6.3125,-5.0625 4.032331,-2.68655 8.0635,-5.374 12.09375,-8.0625 3.032311,-1.84279 6.0635,-3.6865 9.09375,-5.53125 3.969829,-2.16571 7.9385,-4.33233 11.90625,-6.5 2.417715,-0.9886 4.834333,-1.97817 7.25,-2.96875 1.803119,-0.84277 3.605167,-1.6865 5.40625,-2.53125 2.19896,-0.89485 4.396833,-1.79067 6.59375,-2.6875 2.261462,-0.90527 4.521828,-1.8115 6.781248,-2.71875 0.70935,-0.13442 1.41767,-0.26983 2.125,-0.40625 0.37601,-0.10317 0.751,-0.20733 1.125,-0.3125 -0.16567,0.82393 -0.33233,1.64683 -0.5,2.46875 0.251,0.8031 0.501,1.60517 0.75,2.40625 0.88643,0.14684 1.77183,0.29267 2.65625,0.4375 0.95935,-0.16567 1.91767,-0.33233 2.875,-0.5 1.50103,-0.51984 3.001,-1.04067 4.5,-1.5625 1.29269,-0.64485 2.58433,-1.29067 3.875,-1.9375 0.87602,-0.75943 1.751,-1.51983 2.625,-2.28125 0.49059,-0.66568 0.98017,-1.33233 1.46875,-2 0.0739,-0.38442 0.14683,-0.76983 0.21875,-1.15625 -0.124,-0.36359 -0.249,-0.72817 -0.375,-1.09375 -0.71776,-0.34276 -1.4365,-0.6865 -2.15625,-1.03125 -0.9261,0.0739 -1.85317,0.14683 -2.78125,0.21875 -0.69693,0.46976 -1.39483,0.9385 -2.09375,1.40625 -0.83235,0.52184 -1.66567,1.04267 -2.5,1.5625 -1.21777,1.24061 -2.4365,2.48017 -3.65625,3.71875 -0.78027,1.23019 -1.5615,2.45933 -2.34375,3.6875 -0.44693,0.93852 -0.89483,1.876 -1.34375,2.8125 -0.21775,1.12602 -0.4365,2.251 -0.65625,3.375 0.59476,0.52184 1.1885,1.04267 1.78125,1.5625 0.73018,0.40726 1.45933,0.8135 2.1875,1.21875 0.88643,0.001 1.77183,0.001 2.65625,0 1.08435,-0.1865 2.16767,-0.374 3.25,-0.5625 1.09477,-0.25942 2.1885,-0.51983 3.28125,-0.78125 1.74062,-0.60318 3.48017,-1.20733 5.21875,-1.8125 1.49061,-0.6136 2.98017,-1.22817 4.46875,-1.84375 1.37603,-0.8011 2.751,-1.60317 4.125,-2.40625 1.25102,-0.79068 2.501,-1.58233 3.75,-2.375 1.83437,-1.20736 3.66767,-2.41567 5.5,-3.625 0.53226,-0.0927 1.0635,-0.1865 1.59375,-0.28125 0.38642,-0.54068 0.77183,-1.08233 1.15625,-1.625 0.50311,-0.45711 1.00519,-0.9152 1.50629,-1.3743 0.5608,-0.80187 1.12058,-1.60472 1.67938,-2.40858 0.57553,-1.01549 1.15005,-2.03193 1.72357,-3.0494 0.0747,-0.5367 0.14831,-1.07439 0.22097,-1.61308 -0.16105,-0.44832 -0.32309,-0.89762 -0.48614,-1.34793 -0.22734,-0.14631 -0.45567,-0.29362 -0.68501,-0.44194 -0.49251,0.16305 -0.986,0.32509 -1.4805,0.48614 -0.6251,0.34719 -1.25117,0.69337 -1.87825,1.03856 -0.29364,0.59027 -0.58826,1.17951 -0.88389,1.76777 -0.35992,0.2367 -0.72083,0.4724 -1.08275,0.7071 -0.21261,0.6492 -0.42621,1.29737 -0.64082,1.94455 -0.26417,0.51661 -0.52933,1.0322 -0.79549,1.54679 -0.12422,0.45769 -0.24944,0.91435 -0.37565,1.37002 0.17778,0.27354 0.35455,0.54606 0.53033,0.8176 0.14831,0.11885 0.29562,0.2367 0.44194,0.35355 0.303,0.008 0.60498,0.0157 0.90598,0.0221 0.2588,0.0599 0.5166,0.11885 0.7734,0.17677 0.78178,0.22198 1.56252,0.44294 2.34229,0.66292 0.75231,0.0673 1.5036,0.13358 2.2539,0.19887 0.67866,0.36929 1.35629,0.73757 2.03293,1.10485 0.41349,0.082 0.82596,0.16305 1.23744,0.24307 0.21461,0.22934 0.42821,0.45767 0.64081,0.68501 0.41349,0.42822 0.82596,0.85542 1.23744,1.28163 0.082,0.39876 0.16305,0.7965 0.24307,1.19324 -0.59563,0.88491 -1.19224,1.76877 -1.78986,2.65166 -0.56617,1.12797 -1.13332,2.2549 -1.70148,3.38085 -0.0358,0.5608 -0.0727,1.12059 -0.11049,1.67938 0.16305,0.52397 0.32509,1.04693 0.48614,1.56889 0.26617,0.0599 0.53133,0.11885 0.7955,0.17678 0.5166,0.0452 1.03219,0.0894 1.54679,0.13258 1.54046,-0.26417 3.07986,-0.52933 4.61829,-0.79549 1.51837,-0.61037 3.03567,-1.22171 4.552,-1.83406 1.56993,-0.72822 3.13879,-1.45741 4.70668,-2.18761 1.45944,-0.83134 2.91782,-1.66365 4.37522,-2.49698 1.10588,-0.62509 2.21071,-1.25116 3.31457,-1.87825 0.87753,-0.5588 1.75403,-1.11858 2.62955,-1.67938 2.498,-1.74568 4.9949,-3.49229 7.49085,-5.23993 1.16769,-1.51986 2.33433,-3.04067 3.5,-4.5625 0.14684,-0.54068 0.29267,-1.08233 0.4375,-1.625 -1.87404,-1.22819 -3.749,-2.45733 -5.625,-3.6875 -0.47818,1.00102 -0.95733,2.001 -1.4375,3 -0.51984,1.29269 -1.04067,2.58433 -1.5625,3.875 -0.29067,2.54272 -0.58233,5.08433 -0.875,7.625 -0.16567,1.41769 -0.33233,2.83433 -0.5,4.25 0.14684,4.60526 0.29267,9.20933 0.4375,13.8125 0.14684,0.27184 0.29267,0.54267 0.4375,0.8125 -0.10317,-1.33236 -0.20733,-2.66567 -0.3125,-4 0.70935,-1.08236 1.41767,-2.16567 2.125,-3.25 0.98019,-1.68653 1.95933,-3.374 2.9375,-5.0625 1.33436,-1.68653 2.66767,-3.374 4,-5.0625 1.38418,-1.81876 2.7673,-3.63844 4.14945,-5.45916 1.01748,-1.11861 2.03393,-2.23817 3.04939,-3.35876 1.09115,-0.91237 2.18125,-1.82569 3.27037,-2.74004 0.98803,-0.67666 1.97501,-1.35429 2.96101,-2.03293 0.9291,-0.39676 1.85716,-0.7945 2.78424,-1.19324 0.66392,-0.11686 1.32682,-0.23471 1.98873,-0.35356 0.61974,0.16305 1.23844,0.32509 1.85616,0.48614 0.23671,0.13358 0.4724,0.26616 0.70711,0.39775 3.63972,0.66392 7.2783,1.32682 10.91596,1.98873 0.0305,0.47242 0.0599,0.94381 0.0884,1.41422 -0.11686,0.59026 -0.23471,1.17951 -0.35356,1.76776 -0.73558,0.91437 -1.47214,1.8277 -2.20971,2.74004 -0.70612,1.5331 -1.41321,3.06513 -2.12132,4.5962 -0.35256,1.209 -0.7061,2.41695 -1.06066,3.62392 -0.14631,1.209 -0.29362,2.41695 -0.44194,3.62392 0.0305,0.56081 0.0599,1.12059 0.0884,1.67938 0.5608,0.79651 1.12059,1.59199 1.67938,2.38649 0.50188,-0.0285 1.00273,-0.0579 1.5026,-0.0884 1.15007,-0.14632 2.2991,-0.29363 3.44715,-0.44194 1.32685,-0.47042 2.65265,-0.94181 3.97747,-1.41422 1.40051,-0.69139 2.79997,-1.38375 4.19845,-2.07712 1.4889,-0.83871 2.97674,-1.67838 4.46361,-2.51907 1.97505,-1.26593 3.94901,-2.5328 5.92202,-3.8007 0.78178,-0.30837 1.56253,-0.61772 2.34229,-0.92808 1.04695,-1.72261 2.09286,-3.44614 3.13779,-5.17072 1.4889,-1.11861 2.97674,-2.23817 4.46361,-3.35875 0.73758,-0.29364 1.47414,-0.58826 2.20971,-0.88389 0.53134,-0.0579 1.06166,-0.11685 1.59099,-0.17677 0.45768,0.001 0.91434,0.001 1.37002,0 0.32509,0.16304 0.64918,0.32509 0.97227,0.48613 0.32509,0.33983 0.64918,0.67865 0.97227,1.01647 0.10412,0.36929 0.20724,0.73757 0.30936,1.10485 0.0157,0.72285 0.0305,1.44468 0.0442,2.16552 10e-4,0.5608 10e-4,1.12058 0,1.67937 0.69339,-2.3708 1.38575,-4.7425 2.07713,-7.11526 -0.11685,-0.0579 -0.2347,-0.11685 -0.35355,-0.17677 -0.0579,0.32509 -0.11686,0.64918 -0.17678,0.97227 -0.20524,0.70812 -0.41148,1.41521 -0.61872,2.12132 -0.0874,0.0599 -0.17578,0.11885 -0.26516,0.17678 -0.35256,-0.42622 -0.70611,-0.85343 -1.06066,-1.28164 -0.80925,-0.5146 -1.61946,-1.03019 -2.43068,-1.54679 -1.17754,0.26617 -2.35603,0.53133 -3.53554,0.79549 -1.04495,0.66393 -2.09086,1.32683 -3.13778,1.98874 -1.17754,1.04695 -2.35603,2.09286 -3.53554,3.13779 -1.13334,1.96031 -2.26763,3.91955 -3.40295,5.87782 -0.10212,1.01749 -0.20524,2.03393 -0.30936,3.0494 0.0305,1.04695 0.0599,2.09286 0.0884,3.13779 0.41349,0.61973 0.82596,1.23843 1.23744,1.85615 0.47241,0.50188 0.94381,1.00274 1.41421,1.5026 0.70812,0.26617 1.41521,0.53133 2.12132,0.7955 0.8849,-0.11685 1.76877,-0.2347 2.65165,-0.35355 0.98802,0.0305 1.97501,0.0599 2.96101,0.0884 2.13709,-0.8387 4.2731,-1.67837 6.40816,-2.51906 2.19602,-0.91237 4.39095,-1.8257 6.58493,-2.74004 1.4447,-0.86817 2.88835,-1.73731 4.33103,-2.60746 0.98802,-0.603 1.975,-1.20697 2.96101,-1.81196 1.07641,0.38402 2.15178,0.76703 3.22617,1.14905 0.94383,0.0599 1.88662,0.11885 2.82843,0.17678 2.15182,-0.89764 4.30256,-1.79623 6.45235,-2.69585 1.13534,-0.94183 2.26963,-1.88462 3.40295,-2.82843 0.48714,-0.76504 0.97327,-1.53106 1.45841,-2.29809 0.16304,-0.48515 0.32509,-0.97128 0.48613,-1.45841 -0.80924,-0.38203 -1.61945,-0.76503 -2.43068,-1.14905 -0.98602,0.001 -1.973,0.001 -2.96101,0 -0.75031,0.50188 -1.5016,1.00273 -2.2539,1.5026 -1.07441,0.605 -2.14978,1.20898 -3.22617,1.81196 -1.01549,1.29739 -2.03194,2.59373 -3.0494,3.88909 -0.9271,1.45944 -1.85516,2.91782 -2.78424,4.37522 -0.16104,0.8849 -0.32309,1.76877 -0.48613,2.65165 0.0747,0.84071 0.14831,1.68038 0.22097,2.51907 1.03222,0.87017 2.06339,1.73931 3.09359,2.60746 0.91437,-0.21998 1.82769,-0.44094 2.74004,-0.66291 1.31212,-0.0579 2.62319,-0.11686 3.93328,-0.17678 1.78354,-0.55881 3.566,-1.11859 5.3475,-1.67938 2.50538,-1.07441 5.00967,-2.14978 7.51301,-3.22617 2.24021,-1.32486 4.4794,-2.65069 6.71751,-3.97748 1.82769,-1.33018 3.6548,-2.66166 5.48022,-3.99363 1.08853,-0.93662 2.17629,-1.87443 3.26318,-2.81335 -2.78692,-2.33457 -5.57307,-4.66865 -8.36255,-7.00568 -22.75243,-2.12293 -45.46974,-4.24349 -68.23681,-6.3696 -1.22684,-0.11353 -2.45086,-0.2277 -3.68023,-0.34328 -1.27055,0.49382 -2.53641,0.98443 -3.80959,1.47649 -2.22925,1.09357 -4.45546,2.18415 -6.6786,3.27173"
                          sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                          clip-path="url(/clipPath4104)"
                          transform="translate(-412.86501,-97.999998)"
                        />
                      </g>
                    </svg> */}
                  </span>
                  <div className="roundBtn rightDestinationbtn text-right">
                    <a
                      href="/"
                      className="wow zoomIn btnclassNameDesign mainColorBack coralFont wow fadeInUp"
                    >
                      <span
                        id="roundText3"
                        className="btnText strong colorYellow font-13 letterSpacingmedium"
                      >
                        Shop Now
                      </span>
                    </a>
                  </div>
                  {/* <!-- <div className="headerAvenueSec pt-3 text-right">
							<h2 className="brwonColor font-100 ParisienneFont wow"></h2>
						</div> --> */}
                </div>
              </div>
            </div>
          </section>

          {/* <!-- rent and resale sec --> */}
          <section className="c-rent-w minHeightSec minBannerHeight d-flex align-items-center ">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <div className="c-rent-hading">
                    <h2 className="f-heading-m rent">
                      <div className="f-line">
                        <div>
                          <div className="perspective">
                            <div className="cube">
                              <div>R</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>E</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>N</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>T</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </h2>

                    <div className="roundBtn">
                      <a
                        href="/"
                        className="wow zoomIn btnclassNameDesign brwonBack coralFont"
                      >
                        <span
                          id="roundText5"
                          className="btnText strong colorYellow font-13 letterSpacingmedium"
                        >
                          Explore Now
                        </span>
                      </a>
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
                      <a
                        href="/"
                        className="wow zoomIn btnclassNameDesign brwonBack coralFont"
                      >
                        <span
                          id="roundText4"
                          className="btnText strong colorYellow font-13 letterSpacingmedium"
                        >
                          Explore Now
                        </span>
                      </a>
                    </div>
                    <h2 className="f-heading-m resale">
                      <div className="f-line">
                        <div>
                          <div className="perspective">
                            <div className="cube">
                              <div>R</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>E</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>S</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>A</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>L</div>
                            </div>
                          </div>
                          <div className="perspective">
                            <div className="cube">
                              <div>E</div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                    <span>
                      {/* <svg
                        style="max-width: 200px; max-height:120px;"
                        shape-rendering="crispEdges"
                        width="379.30359"
                        height="168.63196"
                        viewBox="0 0 379.30359 168.63196"
                        version="1.1"
                        id="demo-4"
                        inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                        sodipodi:docname="Calligraphy.svg"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                        xmlns:cc="http://creativecommons.org/ns/"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                      >
                        <defs id="defs2">
                          <text
                            xml:space="preserve"
                            style="font-size:200px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';letter-spacing:0px;word-spacing:0px;fill:/ffffff;fill-opacity:1"
                            x="406.58636"
                            y="92.630981"
                            id="text1497"
                          >
                            <tspan
                              sodipodi:role="line"
                              id="tspan1495"
                              x="406.58636"
                              y="92.630981"
                            >
                              Live TV
                            </tspan>
                          </text>
                        </defs>

                        <metadata id="metadata5"></metadata>
                        <g
                          style="display:inline;mix-blend-mode:normal"
                          inkscape:label="Contents"
                          id="layer2"
                          inkscape:groupmode="layer"
                          transform="translate(-383.74664,5.7867584)"
                        >
                          <path
                            style="opacity:1;fill:none;stroke:/a75b41;stroke-width:7;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                            d="m 467.9279,-0.70710676 c -3.29993,4.12491146 -6.59976,8.24970096 -9.66395,12.61031776 -3.0642,4.360617 -5.89257,8.956718 -8.07285,12.816438 -2.18027,3.859721 -3.71231,6.982712 -5.7158,10.989692 -2.00349,4.006979 -4.47832,8.897705 -7.12999,14.112669 -2.65168,5.214964 -5.48005,10.753856 -8.22012,16.234 -2.74006,5.480144 -5.39166,10.901188 -8.57368,17.825055 -3.18202,6.923867 -6.89426,15.350052 -9.75217,22.214975 -2.85791,6.86491 -4.86134,12.16811 -6.21661,16.32248 -1.35528,4.15437 -2.06237,7.15952 -2.79896,10.04687 -0.73658,2.88735 -1.5026,5.6568 -2.53355,7.39468 -1.03094,1.73788 -2.32727,2.44497 -4.59581,3.32886 -2.26854,0.88389 -5.50938,1.94453 -7.14534,2.68262 -1.63595,0.7381 -1.66628,1.15248 -1.67098,1.69307 -0.005,0.54059 0.0161,1.20724 0.30838,1.68621 0.29226,0.47896 0.85475,0.77062 1.28179,0.93706 0.42705,0.16644 0.71871,0.2081 1.04098,-0.0783 0.32227,-0.28639 0.67643,-0.90096 0.81718,-1.71831 0.14076,-0.81734 0.0678,-1.83815 0.50023,-2.65648 0.43238,-0.81833 1.36986,-1.4329 3.37011,-2.15687 2.00025,-0.72398 5.06269,-1.5573 7.90645,-2.3594 2.84376,-0.80209 5.46871,-1.57291 8.38025,-2.29165 2.91155,-0.71874 6.1094,-1.38539 9.20838,-2.04686 3.09899,-0.66147 6.09893,-1.3177 10.27089,-2.09374 4.17196,-0.77604 9.5156,-1.67185 14.40107,-2.44789 4.88547,-0.77605 9.31247,-1.43228 15.23442,-2.30209 5.92195,-0.8698 13.33847,-1.95311 17.85936,-2.54683 4.5209,-0.59372 6.14587,-0.69788 7.71831,-1.6145 1.57243,-0.91662 3.09324,-2.64576 1.81256,-4.71838 -1.28067,-2.07263 -5.36392,-4.48925 -10.34315,-6.38531 -4.97923,-1.89605 -10.85411,-3.27103 -14.52112,-5.70809 -3.66702,-2.43707 -5.12532,-5.937 -5.334,-9.208178 -0.20867,-3.271174 0.83297,-6.312778 2.39554,-9.146368 1.56257,-2.83359 3.64586,-5.458536 5.66702,-7.167045 2.02116,-1.70851 3.97945,-2.500159 5.79232,-2.54146 1.81287,-0.0413 3.4795,0.667017 4.37515,1.104823 0.89565,0.437805 1.02065,0.604469 0.91596,1.104176 -0.1047,0.499707 -0.43802,1.333025 -0.85463,2.041146 -0.4166,0.708121 -0.91659,1.291443 -1.31248,1.822799 -0.39589,0.531355 -0.68755,1.010517 -1.07299,1.791867 -0.38543,0.781351 -0.86459,1.864659 -1.26042,2.93768 -0.39583,1.07302 -0.70832,2.135498 -0.99999,3.156352 -0.29166,1.020854 -0.56249,2.000002 -0.70825,2.906411 -0.14575,0.906409 -0.16658,1.739726 -0.0309,2.489847 0.1357,0.75013 0.42736,1.41678 0.89644,1.93735 0.46908,0.52058 1.11491,0.89558 1.71899,1.08273 0.60408,0.18716 1.16657,0.18716 2.02058,0.0308 0.85402,-0.15635 1.99983,-0.46884 3.31227,-0.90636 1.31245,-0.43751 2.79159,-1 4.15612,-1.59376 1.36452,-0.59375 2.6145,-1.218741 3.8228,-1.874988 1.20829,-0.656247 2.37494,-1.343732 4.10412,-2.38541 1.72918,-1.041678 4.0208,-2.437483 5.57275,-3.53116 1.55196,-1.093676 2.36444,-1.88533 3.26019,-3.99961 0.89574,-2.11428 1.87488,-5.551712 1.97974,-7.437202 0.10486,-1.885491 -0.66596,-2.218818 -1.17708,-2.145968 -0.51112,0.07285 -0.76112,0.552005 -1.06317,1.916835 -0.30205,1.364829 -0.65621,3.614784 -0.86449,5.9378 -0.20829,2.323015 -0.27079,4.7188 -0.32286,8.489695 -0.0521,3.770894 -0.0937,8.916618 -0.17716,11.718548 -0.0834,2.80194 -0.20842,3.26026 -0.0827,3.53089 0.12568,0.27062 0.50067,0.35396 0.55228,-0.34354 0.0516,-0.69749 -0.21923,-2.17663 0.30143,-3.9375 0.52066,-1.76088 1.83314,-3.80252 4.2082,-7.000536 2.37507,-3.19802 5.8125,-7.5521 8.55216,-10.708443 2.73967,-3.156342 4.78129,-5.114639 6.5002,-6.500144 1.71891,-1.385506 3.11471,-2.197988 4.13574,-2.687572 1.02104,-0.489585 1.66686,-0.656248 2.31288,-0.718625 0.64602,-0.06238 1.29184,-0.02071 1.88565,0.177553 0.5938,0.198263 1.13546,0.552424 1.67023,1.843693 0.53478,1.291268 1.06352,3.519134 1.14352,4.927272 0.08,1.408138 -0.28827,1.997383 -0.68971,2.999314 -0.40145,1.00193 -0.83602,2.416113 -0.79867,3.462292 0.0374,1.046179 0.54558,1.723813 1.08342,2.272416 0.53784,0.548603 1.10499,0.96844 1.77881,1.118957 0.67382,0.150518 1.45457,0.03267 2.45618,-0.254639 1.00161,-0.287307 2.22429,-0.743971 3.57217,-1.318502 1.34787,-0.57453 2.82098,-1.266891 4.0288,-2.003409 1.20782,-0.736518 2.15061,-1.517265 2.9018,-2.312621 0.75118,-0.795355 1.31096,-1.605565 1.45127,-2.297452 0.14031,-0.691888 -0.13958,-1.266401 -0.60332,-1.716012 -0.46374,-0.449611 -1.11191,-0.773695 -1.90759,-0.869806 -0.79569,-0.09611 -1.73848,0.03647 -2.93192,0.419449 -1.19344,0.382978 -2.63709,1.016416 -4.22099,2.283463 -1.5839,1.267047 -3.30743,3.167359 -4.58178,4.90584 -1.27435,1.738482 -2.0993,3.314707 -2.42323,4.964999 -0.32394,1.650291 -0.14716,3.373833 0.39106,4.552203 0.53822,1.17838 1.43681,1.81181 2.51952,2.13551 1.0827,0.3237 2.34958,0.33843 3.82256,0.10999 1.47299,-0.22844 3.15234,-0.69984 4.77274,-1.23755 1.62039,-0.5377 3.1819,-1.14168 4.89074,-1.8267 1.70884,-0.68502 3.56496,-1.45104 5.16327,-2.180242 1.59831,-0.729207 2.93884,-1.421568 4.08782,-2.091828 1.14897,-0.67026 2.10649,-1.318428 3.25556,-2.084474 1.14908,-0.766046 2.48961,-1.649912 3.53554,-2.34229 1.04593,-0.692378 1.79721,-1.193231 4.16406,-3.180753 2.36684,-1.987521 6.34922,-5.461645 2.88257,-8.969385 -3.46665,-3.50774 -14.3831,-7.049336 -24.11238,-9.63277 -9.72927,-2.583434 -18.27077,-4.208403 -25.54192,-4.104423 -7.27114,0.103979 -13.27102,1.937276 -18.62525,3.624789 -5.35423,1.687513 -10.06247,3.229149 -13.85424,4.645826 -3.79177,1.416676 -6.66671,2.708315 -8.37478,3.354252 -1.70807,0.645936 -2.24973,0.645936 -1.33355,-0.604076 0.91618,-1.250013 3.29114,-3.749962 10.97912,-6.729267 7.68799,-2.979306 20.68773,-6.43757 30.9795,-8.958406 10.29178,-2.520837 17.87496,-4.104138 23.38174,-11.975987 5.50679,-7.871849 8.93781,-22.032521 17.01772,-32.472278 8.07991,-10.4397573 20.80758,-17.15713762 34.83224,-21.7533238 14.02466,-4.5961862 29.345,-7.0710102 40.95354,-7.9547722 11.60855,-0.883763 19.50442,-0.17667 23.12853,0.781394 3.62411,0.958065 2.97761,2.1667538 2.11818,3.8459372 -0.85943,1.6791834 -1.93167,3.8286103 -4.0022,7.74653896 -2.07053,3.91792864 -5.13913,9.60393984 -8.80098,16.45640684 -3.66185,6.852467 -7.9166,14.870719 -11.33571,21.900879 -3.41912,7.03016 -6.0024,13.071706 -9.10661,20.467635 -3.1042,7.395929 -6.72913,16.145755 -10.18749,24.812526 -3.45837,8.666771 -6.74997,17.249931 -10,26.500061 -3.25002,9.25014 -6.45829,19.16661 -9.10414,28.25007 -2.64584,9.08346 -4.72913,17.3333 -6.52068,22.10376 -1.79155,4.77046 -3.29152,6.0621 -4.22903,3.33343 -0.93752,-2.72868 -1.31251,-9.47854 -1.83334,-16.85361 -0.52082,-7.37506 -1.18747,-15.3749 -0.68758,-23.47931 0.49989,-8.1044 2.16653,-16.31257 2.72912,-29.166783 0.56258,-12.854209 0.0209,-30.353859 -2.41168,-41.194841 -2.43261,-10.840982 -6.75689,-15.022642 -8.35064,-18.231915 -1.59376,-3.209274 -0.45559,-5.44518 0.81106,-7.000404 1.26665,-1.555224 2.66119,-2.429051 5.46284,-3.574336 2.80166,-1.145285 7.00991,-2.561924 12.78247,-4.362956 5.77257,-1.801032 13.10902,-3.986353 22.58167,-6.228086 9.47265,-2.241733 21.08075,-4.5397832 33.1901,-6.7789695 12.10934,-2.2391864 24.71916,-4.4193891 39.77473,-6.1237639 15.05557,-1.70437479 32.55547,-2.9328795 32.14297,-2.7561058 -0.4125,0.1767737 -18.73769,1.75884906 -28.04833,2.815281 -9.31064,1.056432 -9.60526,1.5867511 -9.98827,2.9422659 -0.383,1.3555148 -0.8544,3.5357183 -2.29812,8.4560163 -1.44371,4.920298 -3.85962,12.580468 -5.8631,19.121273 -2.00348,6.540805 -3.59444,11.961849 -5.65686,19.180329 -2.06242,7.218479 -4.59617,16.23391 -7.71925,28.225433 -3.12309,11.991522 -6.83533,26.958322 -9.25127,37.270382 -2.41595,10.31206 -3.53552,15.9688 -4.27206,20.71241 -0.73653,4.74361 -1.09008,8.5737 -1.031,11.78529 0.0591,3.21158 0.53047,5.80426 1.06107,7.57205 0.5306,1.76779 1.11984,2.71058 2.47509,2.82774 1.35524,0.11716 3.47652,-0.58993 5.62696,-2.38701 2.15045,-1.79709 4.33065,-4.68438 7.51269,-8.66194 3.18203,-3.97755 7.36567,-9.04504 11.81456,-14.99654 4.4489,-5.9515 9.16285,-12.78673 13.28767,-18.91502 4.12482,-6.1283 7.66028,-11.54934 12.8458,-19.533856 5.18552,-7.98452 12.02075,-18.531986 18.09012,-28.254768 6.06938,-9.722782 11.37257,-18.620363 16.88217,-27.695004 5.5096,-9.074641 11.22527,-18.325767 15.93935,-26.133452 4.71407,-7.8076848 8.42631,-14.1715159 12.1388,-20.5357877"
                            id="mainPath-4"
                            inkscape:path-effect="/path-effect775"
                            inkscape:original-d="m 467.9279,-0.70710676 c -3.29883,4.12578946 -6.59866,8.25057886 -9.89949,12.37436876 -2.82749,4.597285 -5.65586,9.193388 -8.48529,13.788581 -1.53109,3.124118 -3.06312,6.24711 -4.59619,9.369165 -2.47392,4.89192 -4.94875,9.782644 -7.42462,14.672465 -2.82748,5.540114 -5.65585,11.079006 -8.48528,16.617009 -2.6507,5.422261 -5.3023,10.843304 -7.95495,16.263456 -3.71139,8.427524 -7.42362,16.853711 -11.13693,25.279062 -2.00251,5.30441 -4.00594,10.60761 -6.01041,15.90991 -0.70612,3.00626 -1.41322,6.0114 -2.12132,9.01561 -0.76505,2.77055 -1.53107,5.54 -2.2981,8.3085 -1.29539,0.70812 -2.59172,1.41522 -3.88909,2.12132 -3.23997,1.06168 -6.48081,2.12232 -9.72271,3.18198 -0.0294,0.4154 -0.0597,0.82979 -0.091,1.24318 0.0218,0.66768 0.0427,1.33433 0.0625,2 0.56351,0.29267 1.126,0.58433 1.6875,0.875 0.29267,0.0427 0.58433,0.0843 0.875,0.125 0.35517,-0.6136 0.70933,-1.22817 1.0625,-1.84375 -0.0719,-1.01986 -0.14483,-2.04067 -0.21875,-3.0625 0.93852,-0.6136 1.876,-1.22817 2.8125,-1.84375 3.06356,-0.83235 6.126,-1.66567 9.1875,-2.5 2.62605,-0.76985 5.251,-1.54067 7.875,-2.3125 3.19898,-0.66568 6.39683,-1.33234 9.59375,-2 3.00106,-0.65527 6.001,-1.3115 9,-1.96875 5.34486,-0.89485 10.6885,-1.79067 16.03125,-2.6875 4.42817,-0.65527 8.85517,-1.3115 13.28125,-1.96875 7.41781,-1.08236 14.83433,-2.16567 22.25,-3.25 1.62603,-0.10317 3.251,-0.20734 4.875,-0.3125 1.52186,-1.7282 3.04266,-3.45734 4.5625,-5.1875 -4.08242,-2.41572 -8.16567,-4.83234 -12.25,-7.25 -5.87412,-1.37403 -11.749,-2.749 -17.625,-4.125 -1.45736,-3.49907 -2.91567,-6.999 -4.375,-10.500003 1.04269,-3.040727 2.08433,-6.082333 3.125,-9.124999 2.08437,-2.624053 4.16766,-5.249 6.25,-7.875 1.95937,-0.790683 3.91766,-1.582333 5.875,-2.375 1.6677,0.709347 3.33433,1.417667 5,2.125 0.126,0.16767 0.251,0.334333 0.375,0.5 -0.33234,0.83435 -0.66567,1.667667 -1,2.5 -0.49901,0.584345 -0.999,1.167666 -1.5,1.75 -0.29067,0.480176 -0.58234,0.959333 -0.875,1.4375 -0.47818,1.084355 -0.95733,2.167666 -1.4375,3.25 -0.31151,1.063521 -0.624,2.126 -0.9375,3.1875 -0.26984,0.980186 -0.54067,1.959333 -0.8125,2.9375 -0.0198,0.83435 -0.0407,1.667666 -0.0625,2.500002 0.29267,0.66768 0.58433,1.33433 0.875,2 0.64684,0.376 1.29267,0.751 1.9375,1.125 0.56351,0.001 1.126,0.001 1.6875,0 1.14685,-0.31151 2.29266,-0.624 3.4375,-0.9375 1.48019,-0.56151 2.95933,-1.124 4.4375,-1.6875 1.25102,-0.62401 2.501,-1.249002 3.75,-1.875002 1.16769,-0.686514 2.33433,-1.374 3.5,-2.0625 2.29271,-1.394862 4.58433,-2.790667 6.875,-4.1875 0.81351,-0.790683 1.626,-1.582334 2.4375,-2.375 0.98018,-3.436569 1.95933,-6.874 2.9375,-10.3125 -0.76985,-0.33234 -1.54067,-0.665667 -2.3125,-1 -0.24901,0.480176 -0.499,0.959333 -0.75,1.4375 -0.35318,2.251045 -0.70734,4.501 -1.0625,6.75 -0.0615,2.396881 -0.124,4.792666 -0.1875,7.1875 -0.0407,5.146936 -0.0823,10.292662 -0.125,15.437502 -0.124,0.45934 -0.249,0.91766 -0.375,1.375 0.37601,0.0843 0.751,0.16766 1.125,0.25 -0.26984,-1.4782 -0.54067,-2.95734 -0.8125,-4.4375 1.31352,-2.04071 2.626,-4.08234 3.9375,-6.125 3.43857,-4.353256 6.876,-8.707336 10.3125,-13.062502 2.0427,-1.957373 4.08433,-3.915667 6.125,-5.875 1.39686,-0.811516 2.79266,-1.624 4.1875,-2.4375 0.64684,-0.16567 1.29266,-0.332333 1.9375,-0.5 0.64684,0.04267 1.29266,0.08433 1.9375,0.125 0.54267,0.355174 1.08433,0.709333 1.625,1.0625 0.52976,2.228955 1.0585,4.456821 1.58625,6.683731 -0.36729,0.590268 -0.73557,1.179511 -1.10485,1.767767 -0.43359,1.415242 -0.86815,2.829427 -1.30373,4.242641 0.50924,0.678657 1.01747,1.356288 1.5247,2.032932 0.56817,0.420853 1.13532,0.840689 1.70148,1.259533 0.78177,-0.116853 1.56252,-0.234702 2.34229,-0.353553 1.22373,-0.455682 2.44641,-0.912346 3.66811,-1.370019 1.47417,-0.69139 2.94728,-1.383751 4.41942,-2.077126 0.94383,-0.77978 1.88662,-1.560528 2.82843,-2.342292 0.5608,-0.809242 1.12058,-1.619453 1.67938,-2.430679 -0.27891,-0.573536 -0.5588,-1.148049 -0.83969,-1.723573 -0.6472,-0.323097 -1.29537,-0.647181 -1.94455,-0.972272 -0.94183,0.133586 -1.88462,0.266165 -2.82842,0.397748 -1.44271,0.634462 -2.88636,1.2679 -4.33103,1.900349 -1.72261,1.901388 -3.44615,3.801699 -5.17072,5.701049 -0.82398,1.57729 -1.64892,3.153517 -2.47488,4.728776 0.17778,1.724607 0.35456,3.44815 0.53033,5.17072 0.89964,0.63446 1.79823,1.2679 2.69585,1.90035 1.26792,0.0157 2.5348,0.0305 3.8007,0.0442 1.68041,-0.47041 3.35976,-0.94181 5.03813,-1.41421 1.56256,-0.603 3.12406,-1.20698 4.68459,-1.81196 1.85719,-0.76505 3.71331,-1.53107 5.56846,-2.2981 1.34159,-0.691389 2.68212,-1.38375 4.02167,-2.077126 0.95856,-0.647194 1.91608,-1.295362 2.87262,-1.944543 1.34159,-0.882902 2.68212,-1.766767 4.02167,-2.651651 0.75232,-0.499877 1.5036,-1.000734 2.25391,-1.502602 3.98354,-3.473263 7.96592,-6.947387 11.94738,-10.42258 -10.91589,-3.540737 -21.83234,-7.082333 -32.75,-10.625 -8.54084,-1.624032 -17.08234,-3.249 -25.625,-4.875 -5.99912,1.83437 -11.999,3.667667 -18,5.5 -4.70743,1.542698 -9.41567,3.084333 -14.125,4.625 -2.87406,1.292693 -5.749,2.584333 -8.625,3.875 -0.54068,0.001 -1.08234,0.001 -1.625,0 2.37605,-2.49905 4.751,-4.999 7.125,-7.5 13.00126,-3.457402 26.001,-6.915666 39,-10.375 7.58448,-1.582365 15.16766,-3.165666 22.75,-4.749999 3.43216,-14.160238 6.86319,-28.320909 10.29328,-42.482864 12.72918,-6.7166483 25.45685,-13.43402824 38.18377,-20.1525425 15.32195,-2.4739232 30.64229,-4.9487475 45.96194,-7.4246205 7.89718,0.70812 15.79305,1.415213 23.68808,2.12132 -0.64554,1.209756 -1.29204,2.4184459 -1.93958,3.6262082 -1.07131,2.150564 -2.14355,4.2999903 -3.21685,6.4485483 -3.06777,5.6873472 -6.13636,11.3733595 -9.20614,17.0587085 -4.25392,8.019573 -8.50867,16.037826 -12.76451,24.055242 -2.58238,6.042787 -5.16566,12.084333 -7.75,18.125 -3.62407,8.751174 -7.249,17.500999 -10.875,26.249999 -3.29073,8.584505 -6.58233,17.167662 -9.875,25.750002 -3.20739,9.91786 -6.41566,19.83433 -9.625,29.75 -2.08237,8.25116 -4.16566,16.501 -6.24999,24.75 -1.49903,1.29269 -2.999,2.58433 -4.5,3.875 -0.37401,-6.74914 -0.749,-13.499 -1.125,-20.25 -0.66568,-7.99916 -1.33234,-15.999 -2,-24 1.6677,-8.2075 3.33433,-16.41567 5,-24.625003 -0.54068,-17.499349 -1.08234,-34.998999 -1.625,-52.499998 -4.32354,-4.180917 -8.64781,-8.36258 -12.97335,-12.545495 1.13924,-2.235035 2.27741,-4.470942 3.41464,-6.707971 1.3956,-0.87286 2.79014,-1.746688 4.18371,-2.621534 4.20941,-1.415695 8.41766,-2.832333 12.625,-4.25 7.33774,-2.184406 14.6742,-4.369725 22.0098,-6.556087 11.60957,-2.297143 23.21767,-4.595194 34.82501,-6.894291 12.61132,-2.1792894 25.22114,-4.3594917 37.83021,-6.54073755 17.50194,-1.22757758 35.00184,-2.45608215 52.50178,-3.68566005 -18.32492,1.5831384 -36.65011,3.16521346 -54.97666,4.7463202 -0.29363,0.5313407 -0.58825,1.0616601 -0.88388,1.5909902 -0.47041,2.1812895 -0.94181,4.3614917 -1.41421,6.5407372 -2.415,7.661477 -4.8309,15.321647 -7.24785,22.98097 -1.59002,5.42226 -3.18098,10.843304 -4.77297,16.263456 -2.53285,9.016791 -5.0666,18.032222 -7.6014,27.046833 -3.71138,14.968393 -7.42362,29.93519 -11.13693,44.90128 -1.11861,5.65797 -2.23817,11.31471 -3.35876,16.97056 -0.35256,3.83124 -0.7061,7.66133 -1.06066,11.49049 0.47242,2.59377 0.94381,5.18645 1.41422,7.77817 0.59027,0.94383 1.17951,1.88662 1.76777,2.82843 2.12236,-0.70612 4.24364,-1.41321 6.36396,-2.12132 2.18129,-2.88641 4.36149,-5.77371 6.54073,-8.66206 4.1848,-5.0667 8.36843,-10.1342 12.55115,-15.2028 4.71514,-6.8345 9.42909,-13.66973 14.14213,-20.50609 3.53661,-5.42026 7.07207,-10.8413 10.60661,-16.263457 6.8365,-10.546887 13.67173,-21.094351 20.50609,-31.643027 5.30441,-8.896938 10.6076,-17.794521 15.9099,-26.693281 5.7169,-9.250498 11.43256,-18.501627 17.14734,-27.75394 3.71339,-6.3630882 7.42562,-12.7269218 11.13693,-19.0918827"
                            sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                            clip-path="url(/clipPath1493)"
                          />
                        </g>
                      </svg> */}
                    </span>
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
                        <a
                          href="/"
                          className="wow zoomIn btnclassNameDesign mainColorBack coralFont"
                        >
                          <span
                            id="roundText6"
                            className="btnText strong colorYellow font-13 letterSpacingmedium"
                          >
                            Explore Now
                          </span>
                        </a>
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
                  <a
                    href="/"
                    className="wow zoomIn btnclassNameDesign mainColorBack coralFont"
                  >
                    <span
                      id="roundText10"
                      className="btnText strong colorYellow font-13 letterSpacingmedium"
                    >
                      Explore Now
                    </span>
                  </a>
                </div>
                <h2 className="f-heading-m season brwonColor coralFont">
                  <div className="f-line">
                    <div>
                      <div className="perspective">
                        <div className="cube">
                          <div>S</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>E</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>A</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>S</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>O</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>N</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>'</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>P</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>I</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>C</div>
                        </div>
                      </div>
                      <div className="perspective">
                        <div className="cube">
                          <div>K</div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <h2 className="f-heading-m follow brwonColor coralFont">
                    <div className="f-line">
                      <div>
                        <div className="perspective">
                          <div className="cube">
                            <div>F</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>L</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>L</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>O</div>
                          </div>
                        </div>
                        <div className="perspective">
                          <div className="cube">
                            <div>W</div>
                          </div>
                        </div>
                        <div className="perspective">
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
                  <div className="row align-items-end ">
                    <div className="col text-left">
                      <div className="roundBtn rightDestinationbtn mt-5">
                        <a
                          href="/"
                          className="wow zoomIn btnclassNameDesign mainColorBack coralFont"
                        >
                          <span
                            id="roundText8"
                            className="btnText strong colorYellow font-13 letterSpacingmedium"
                          >
                            Follow Us
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="col innerContainer">
                      <div className="wow fadeIn float-right">
                        <img
                          alt="img"
                          src={follow1}
                          className="img-fluid w-100"
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
          <section className="c-member-w paddingSec d-flex align-items-center ">
            <div className="container">
              <h2 className="f-heading-m membership">
                <div className="f-line">
                  <div>
                    <div className="perspective">
                      <div className="cube">
                        <div>M</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>E</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>M</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>B</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>E</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>R</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>S</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>H</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>I</div>
                      </div>
                    </div>
                    <div className="perspective">
                      <div className="cube">
                        <div>P</div>
                      </div>
                    </div>
                  </div>
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

          {/* <!-- Follow us sec --> */}
          <footer className="c-footer-w minHeightSec minBannerHeight d-flex align-items-center ">
            <div className="container">
              <h4>GET IN TOUCH</h4>
              <div className="footer-in">
                <div className="c-footer-box">
                  <h2>
                    <span>
                      {/* <svg
                        shape-rendering="crispEdges"
                        width="366.76736"
                        height="148.88821"
                        viewBox="0 0 366.76736 148.88821"
                        version="1.1"
                        id="demo-6"
                        inkscape:version="1.2 (dc2aedaf03, 2022-05-15)"
                        sodipodi:docname="Calligraphy.svg"
                        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:svg="http://www.w3.org/2000/svg"
                        xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns/"
                        xmlns:cc="http://creativecommons.org/ns/"
                        xmlns:dc="http://purl.org/dc/elements/1.1/"
                      >
                        <defs id="defs2">
                          <text
                            xml:space="preserve"
                            style="font-size:200px;line-height:1.25;font-family:Beatlys;-inkscape-font-specification:'Beatlys, Normal';letter-spacing:0px;word-spacing:0px;fill:/ffffff;fill-opacity:1"
                            x="416.25"
                            y="97"
                            id="text2316"
                          >
                            <tspan
                              sodipodi:role="line"
                              id="tspan2314"
                              x="416.25"
                              y="97"
                            >
                              Connect
                            </tspan>
                          </text>
                        </defs>

                        <metadata id="metadata5"></metadata>
                        <g
                          style="display:inline;mix-blend-mode:normal"
                          inkscape:label="Contents"
                          id="layer2"
                          inkscape:groupmode="layer"
                          transform="translate(-367.1702,-7.7073593)"
                        >
                          <path
                            style="opacity:1;fill:none;stroke:/a75b41;stroke-width:6;stroke-linecap:butt;stroke-linejoin:miter;stroke-dasharray:none;stroke-opacity:1"
                            d="m 482.49999,62.124999 c 1.20815,-2.041363 2.41649,-4.083032 4.18733,-8.374629 1.77085,-4.291597 4.10413,-10.833134 5.66666,-15.749759 1.56252,-4.916625 2.35417,-8.208226 2.8542,-10.645674 0.50004,-2.437449 0.70836,-4.020751 0.56278,-5.583094 -0.14559,-1.562343 -0.64558,-3.103979 -1.20795,-4.437327 -0.56237,-1.333349 -1.18736,-2.458327 -2.333,-3.104702 -1.14563,-0.646375 -2.81226,-0.813038 -4.12486,-0.854798 -1.3126,-0.04176 -2.27092,0.04157 -5.16706,1.31237 -2.89614,1.270798 -7.72938,3.729083 -12.66705,6.916668 -4.93768,3.187584 -9.97924,7.104169 -15.64606,12.395971 -5.66681,5.291803 -11.95835,11.958336 -17.72929,18.937652 -5.77094,6.979316 -11.02083,14.27084 -14.79172,20.145983 -3.77089,5.875144 -6.06251,10.333388 -8.72921,16.020999 -2.6667,5.687611 -5.70831,12.604141 -7.72913,18.437661 -2.02082,5.83353 -3.0208,10.58344 -3.7291,15.29189 -0.7083,4.70845 -1.12495,9.37502 -1.04148,13.47934 0.0835,4.10431 0.66679,7.64591 1.70876,10.54178 1.04198,2.89587 2.54195,5.14582 4.56302,6.99977 2.02106,1.85394 4.56268,3.31225 7.35434,4.22865 2.79166,0.91639 5.83327,1.29139 8.77058,1.10372 2.93732,-0.18767 5.7706,-0.93765 10.06221,-2.60436 4.29161,-1.6667 10.04149,-4.24998 15.10391,-7.04165 5.06242,-2.79167 9.43733,-5.79161 14.02957,-9.16847 4.59224,-3.37686 9.4016,-7.13048 14.72316,-11.57061 5.32157,-4.44014 11.15508,-9.56656 16.48786,-14.5016 5.33279,-4.93504 10.16458,-9.67845 13.04618,-12.49878 2.8816,-2.820317 3.81285,-3.717409 4.90343,-4.983607 1.09058,-1.266198 2.34056,-2.901579 4.07528,-4.141349 1.73473,-1.239771 3.95343,-2.083502 5.43812,-2.437461 1.48468,-0.353958 2.23466,-0.218545 2.87532,-0.0048 0.64065,0.213768 1.17189,0.505429 1.49438,0.854659 0.32249,0.349231 0.43707,0.755471 0.47333,1.224092 0.0362,0.46862 -0.005,0.999854 0.0362,0.8748 0.0416,-0.125055 0.16664,-0.90629 -0.10357,-1.536505 -0.27021,-0.630216 -0.93686,-1.109371 -1.90044,-1.401402 -0.96358,-0.292032 -2.22397,-0.396196 -3.54722,-0.130713 -1.32324,0.265484 -2.70863,0.900888 -3.9744,1.630098 -1.26577,0.72921 -2.41158,1.552115 -3.27111,2.328296 -0.85952,0.776182 -1.43243,1.505332 -1.89081,2.323255 -0.45839,0.817924 -0.80214,1.724155 -1.04166,2.896223 -0.23952,1.172071 -0.37494,2.609541 -0.10367,3.838841 0.27126,1.22931 0.94833,2.25012 1.6621,2.93212 0.71378,0.68199 1.46376,1.02573 2.37509,1.16084 0.91133,0.13511 1.98422,0.0622 3.30168,-0.35976 1.31747,-0.42195 2.87994,-1.19277 4.09857,-1.91148 1.21863,-0.71872 2.09361,-1.38537 2.78615,-2.20285 0.69254,-0.81747 1.20295,-1.7862 1.61962,-2.786082 0.41667,-0.999884 0.73958,-2.031114 0.85954,-2.853789 0.11997,-0.822676 0.0366,-1.437252 -0.25451,-1.875001 -0.29115,-0.437749 -0.79114,-0.69816 -1.34869,-0.750643 -0.55754,-0.05248 -1.17212,0.103766 -1.64132,0.536378 -0.46921,0.432612 -0.79212,1.140931 -0.91175,1.870427 -0.11962,0.729497 -0.0363,1.479486 0.25572,2.213891 0.292,0.734405 0.792,1.453139 1.57866,1.968369 0.78667,0.51523 1.85956,0.82773 2.85947,0.9786 0.9999,0.15087 1.92698,0.14047 3.06753,0.0258 1.14055,-0.11464 2.49469,-0.33338 3.77058,-0.6928 1.2759,-0.35942 2.47379,-0.85941 3.98414,-1.630239 1.51034,-0.770833 3.33322,-1.812479 4.43231,-2.401033 1.09908,-0.588554 1.47408,-0.723967 2.54664,-2.239378 1.07257,-1.515411 2.84336,-4.411187 3.28152,-5.942472 0.43815,-1.531285 -0.45767,-1.69795 -1.04688,-1.265417 -0.58921,0.432534 -0.87045,1.463764 -1.64652,3.432441 -0.77607,1.968678 -2.04687,4.87487 -3.23438,8.119775 -1.1875,3.244903 -2.29165,6.828163 -2.74933,8.692863 -0.45768,1.8647 -0.27019,2.01054 0.0573,1.4687 0.32747,-0.54184 0.79622,-1.77099 1.46818,-2.86499 0.67196,-1.094 1.54695,-2.05232 2.47927,-3.02111 0.93233,-0.96878 1.9219,-1.94793 3.23443,-3.17713 1.31254,-1.229205 2.94792,-2.708341 4.44802,-3.916733 1.50009,-1.208393 2.86465,-2.145877 4.07809,-2.859344 1.21343,-0.713468 2.27637,-1.203256 3.07362,-1.374865 0.79726,-0.171609 1.3285,-0.02578 1.86996,0.459018 0.54147,0.484796 1.09354,1.3077 1.23371,2.573175 0.14017,1.265476 -0.13066,2.973775 -0.23473,4.463485 -0.10408,1.489714 -0.0416,2.760514 0.094,3.823084 0.13553,1.06257 0.34386,1.91673 0.74536,2.50501 0.4015,0.58828 0.99524,0.91119 1.86483,0.95245 0.86959,0.0413 2.0154,-0.19832 3.12466,-0.53689 1.10926,-0.33857 2.18215,-0.77606 3.82793,-1.58856 1.64578,-0.81251 3.86449,-1.99998 6.43736,-3.59373 2.57288,-1.593748 5.49991,-3.593711 7.71878,-4.942705 2.21888,-1.348994 3.72926,-2.046894 5.13003,-3.296716 1.40077,-1.249822 2.69241,-3.051868 3.00555,-4.030994 0.31315,-0.979125 -0.3535,-1.135371 -0.98438,-0.776015 -0.63087,0.359355 -1.22461,1.234338 -2.05798,2.838641 -0.83337,1.604304 -1.90627,3.937589 -3.06773,7.010622 -1.16147,3.073037 -2.41145,6.885467 -3.03635,8.791407 -0.6249,1.90595 -0.15615,2.3747 0.0208,1.96868 0.17699,-0.40602 0.53115,-1.2185 1.16138,-2.35404 0.63024,-1.13553 1.53647,-2.59384 2.63553,-3.95336 1.09906,-1.35953 2.39071,-2.61993 3.69291,-3.687716 1.30221,-1.067789 2.61468,-1.94277 4.04713,-2.687593 1.43245,-0.744824 2.98451,-1.359397 4.30251,-1.609235 1.318,-0.249837 2.40132,-0.135255 3.30737,0.568418 0.90604,0.703673 1.63542,1.995712 2.29634,3.552964 0.66093,1.557252 1.2543,3.381022 1.7003,4.601872 0.446,1.22086 0.74349,1.83665 1.13506,2.59803 0.39156,0.76138 0.87414,1.66254 1.5068,2.26985 0.63266,0.60732 1.4139,0.91981 2.34089,1.07582 0.92699,0.15601 1.99988,0.15601 3.42149,-0.27118 1.4216,-0.4272 3.1924,-1.28135 4.87981,-2.27091 1.6874,-0.98956 3.29153,-2.11454 4.84362,-3.22392 1.55209,-1.10938 3.05206,-2.20311 4.29202,-2.78641 1.23997,-0.58331 2.21911,-0.65622 3.09416,-0.69265 0.87505,-0.0364 1.64587,-0.0364 2.78113,-0.250061 1.13526,-0.21364 2.63523,-0.640715 4.01531,-1.177185 1.38009,-0.536469 2.64048,-1.182289 3.8799,-2.057224 1.23943,-0.874935 2.45816,-1.979082 3.22887,-2.864273 0.77071,-0.88519 1.09362,-1.551843 1.05768,-2.14525 -0.0359,-0.593406 -0.43176,-1.114231 -1.19203,-1.48447 -0.76028,-0.370239 -1.88526,-0.588985 -3.13569,-0.302722 -1.25043,0.286263 -2.6254,1.077913 -4.26096,2.286319 -1.63555,1.208406 -3.53135,2.833375 -4.83358,4.422192 -1.30223,1.588818 -2.01055,3.14087 -2.52285,4.562884 -0.5123,1.42202 -0.82858,2.71364 -0.74482,3.78161 0.0838,1.06796 0.56671,1.91169 1.36575,2.55197 0.79905,0.64027 1.91362,1.07776 3.39266,1.23374 1.47905,0.15598 3.32276,0.031 5.26531,-0.39097 1.94256,-0.42195 3.98418,-1.14068 6.26018,-2.08861 2.276,-0.94793 4.78636,-2.12499 7.69778,-3.71875 2.91142,-1.59375 6.22385,-3.604129 8.21345,-4.802054 1.98961,-1.197925 2.65626,-1.583333 3.40082,-2.390431 0.74457,-0.807098 1.56747,-2.03624 2.72385,-3.286403 1.15639,-1.250163 2.64594,-2.520974 3.8962,-3.333542 1.25026,-0.812568 2.26065,-1.166726 3.1203,-1.296759 0.85965,-0.130033 1.56797,-0.03628 2.10967,0.130683 0.54169,0.166968 0.91668,0.406545 1.19768,0.698438 0.28099,0.291893 0.46849,0.635638 0.60889,1.073113 0.1404,0.437476 0.23415,0.968724 0.22359,1.775898 -0.0106,0.807175 -0.12515,1.890487 0.27585,1.129891 0.40099,-0.760596 1.31764,-3.364711 1.65686,-4.692999 0.33922,-1.328288 0.0996,-1.380371 -0.0729,-1.088417 -0.17252,0.291954 -0.27669,0.927358 -0.43298,1.489699 -0.15628,0.562342 -0.36461,1.051916 -0.61392,1.260152 -0.24931,0.208235 -0.54097,0.135321 -0.78605,-0.0934 -0.24508,-0.228719 -0.44299,-0.614127 -0.89583,-0.999823 -0.45285,-0.385696 -1.16117,-0.771106 -2.50526,-0.59444 -1.34409,0.176665 -3.32321,0.916231 -4.76613,1.635036 -1.44293,0.718805 -2.34916,1.416706 -3.17221,2.255392 -0.82306,0.838685 -1.56263,1.817833 -2.30226,3.067978 -0.73963,1.250144 -1.47947,2.771508 -1.91869,4.142095 -0.43922,1.370587 -0.5785,2.591451 -0.68265,3.502761 -0.10415,0.9113 -0.1732,1.51332 0.14731,2.32073 0.32051,0.80741 1.02791,1.8165 1.7677,2.51937 0.7398,0.70287 1.51061,1.09869 2.34393,1.37974 0.83332,0.28105 1.72914,0.44772 2.77066,0.44755 1.04152,-1.7e-4 2.229,-0.16683 3.94765,-0.63042 1.71864,-0.46359 3.96861,-1.22399 6.15083,-2.10942 2.18223,-0.88543 4.29678,-1.89583 6.98944,-3.43229 2.69265,-1.53646 5.96342,-3.598915 8.36443,-5.182244 2.40102,-1.583329 3.93224,-2.687474 5.17685,-4.551736 1.24461,-1.864263 2.20292,-4.48921 3.93212,-7.989373 1.72921,-3.500163 4.22916,-7.875075 6.72922,-11.687697 2.50006,-3.812621 5.00001,-7.062556 7.125,-10.083355 2.12499,-3.020799 3.87495,-5.812411 5.77081,-8.770786 1.89586,-2.958376 3.93748,-6.083316 5.83334,-8.895861 1.89586,-2.812545 3.64583,-5.312498 5.33331,-8.270751 1.68749,-2.958254 3.31246,-6.374853 4.16669,-8.64545 0.85424,-2.270597 0.93757,-3.395576 0.68806,-3.937735 -0.24952,-0.54216 -0.83284,-0.500494 -1.64576,-0.04216 -0.81292,0.458336 -1.85457,1.33332 -3.31304,3.104318 -1.45847,1.770997 -3.33343,4.43761 -4.9168,6.958545 -1.58338,2.520935 -2.87502,4.895887 -5.31256,9.625145 -2.43754,4.729257 -6.0208,11.812449 -8.64581,16.99998 -2.62502,5.187532 -4.29165,8.479136 -6.125,11.812456 -1.83334,3.33332 -3.8333,6.708253 -6.62502,12.729273 -2.79171,6.02102 -6.37497,14.687509 -8.74998,20.645909 -2.37501,5.9584 -3.54166,9.20834 -4.29162,11.95849 -0.74996,2.75015 -1.08329,5.00011 -1.29158,7.47938 -0.20828,2.47926 -0.29162,5.18753 0.16707,7.45849 0.45868,2.27097 1.45866,4.10426 2.33381,4.99948 0.87515,0.89521 1.62514,0.85354 2.79168,0.60347 1.16654,-0.25007 2.74984,-0.70839 5.16635,-1.91674 2.41652,-1.20835 5.66646,-3.16664 8.41645,-4.91664 2.74998,-1.75 4.99994,-3.29164 7.927,-5.56247 2.92706,-2.27083 6.53115,-5.27077 9.83324,-8.15619 3.30208,-2.88543 6.30202,-5.65621 9.2291,-8.55204 2.92708,-2.89583 5.78119,-5.9166 8.02077,-8.3541 2.23958,-2.437494 3.86455,-4.291625 11.96883,-15.145938 8.10428,-10.854312 22.68732,-30.708081 30.14569,-43.551507 7.45838,-12.843426 7.7917,-18.676642 4.70891,-23.801766 -3.0828,-5.125123 -9.58267,-9.5417017 -18.58285,-11.9170805 -9.00017,-2.3753788 -20.49994,-2.7087055 -33.95868,0.2078948 -13.45874,2.9166007 -28.87511,9.0831297 -40.58384,17.4167377 -11.70872,8.333609 -19.70856,18.833399 -22.33307,25.958923 -2.6245,7.125525 0.12545,10.875452 2.66732,13.375221 2.54187,2.499768 4.87515,3.74974 7.70299,3.156845 2.82783,-0.592895 6.15105,-3.027821 9.53648,-4.908276 3.38543,-1.880455 6.83251,-3.206256 9.97042,-4.193247 3.13791,-0.986991 5.96628,-1.635159 9.97328,-2.519051 4.007,-0.883891 9.19234,-2.003453 14.70197,-3.034645 5.50964,-1.031192 11.34316,-1.973983 18.13444,-2.843122 6.79128,-0.869139 14.53984,-1.664618 22.28766,-2.460022"
                            id="mainPath-6"
                            inkscape:path-effect="/path-effect2310"
                            inkscape:original-d="m 482.49999,62.124999 c 1.20933,-2.040667 2.41767,-4.082333 3.625,-6.125 2.33438,-6.540797 4.66767,-13.082333 7,-19.625 0.79268,-3.290732 1.58433,-6.582333 2.375,-9.874999 0.20934,-1.582365 0.41767,-3.165667 0.625,-4.75 -0.49901,-1.540698 -0.999,-3.082334 -1.5,-4.625 -0.62401,-1.124023 -1.249,-2.249 -1.875,-3.375 -1.6657,-0.16567 -3.33233,-0.332334 -5,-0.5 -0.95735,0.08433 -1.91567,0.167666 -2.875,0.25 -4.83243,2.459382 -9.66567,4.917666 -14.5,7.375 -5.04077,3.917745 -10.08233,7.834333 -15.125,11.749999 -6.29079,6.6678 -12.58233,13.334334 -18.875,20 -5.2491,7.292812 -10.499,14.584333 -15.75,21.875 -2.29071,4.459422 -4.58233,8.917666 -6.875,13.374999 -3.04072,6.917805 -6.08233,13.834332 -9.125,20.750002 -0.99902,4.75109 -1.999,9.501 -3,14.25 -0.41567,4.66776 -0.83233,9.33433 -1.25,14 0.58435,3.54273 1.16767,7.08433 1.75,10.625 1.50103,2.25104 3.001,4.501 4.5,6.75 2.54272,1.45936 5.08434,2.91766 7.625,4.375 3.04273,0.376 6.08434,0.751 9.125,1.125 2.83439,-0.74902 5.66767,-1.499 8.5,-2.25 5.75112,-2.58239 11.501,-5.16567 17.25,-7.75 4.37609,-2.99906 8.751,-5.999 13.125,-9 4.81055,-3.75277 9.61991,-7.50638 14.42836,-11.26107 5.83475,-5.12563 11.66826,-10.25205 17.50089,-15.37958 4.833,-4.7426 9.6648,-9.48601 14.49569,-14.230519 0.93229,-0.896129 1.86354,-1.793222 2.79381,-2.691333 1.25103,-1.634449 2.501,-3.269833 3.75,-4.90625 2.2198,-0.842766 4.4385,-1.6865 6.65625,-2.53125 0.75102,0.13642 1.501,0.271834 2.25,0.40625 0.53226,0.292673 1.0635,0.584334 1.59375,0.875 0.11559,0.407259 0.23017,0.8135 0.34375,1.21875 -0.0407,0.532261 -0.0823,1.0635 -0.125,1.59375 0.126,-0.780265 0.251,-1.5615 0.375,-2.34375 -0.66568,-0.478176 -1.33233,-0.957333 -2,-1.4375 -1.25944,-0.103168 -2.51983,-0.207333 -3.78125,-0.3125 -1.38444,0.63643 -2.76983,1.271834 -4.15625,1.90625 -1.14485,0.823934 -2.29067,1.646834 -3.4375,2.46875 -0.57193,0.730182 -1.14483,1.459334 -1.71875,2.1875 -0.34276,0.907268 -0.6865,1.8135 -1.03125,2.71875 -0.13442,1.438532 -0.26983,2.876002 -0.40625,4.312502 0.6781,1.02185 1.35517,2.04266 2.03125,3.0625 0.75102,0.34476 1.501,0.6885 2.25,1.03125 1.07394,-0.0719 2.14683,-0.14484 3.21875,-0.21875 1.56353,-0.76985 3.126,-1.54067 4.6875,-2.3125 0.87602,-0.66568 1.751,-1.33234 2.625,-2 0.51143,-0.96777 1.02183,-1.9365 1.53125,-2.906252 0.32392,-1.03027 0.64683,-2.0615 0.96875,-3.09375 -0.0823,-0.613595 -0.16567,-1.228166 -0.25,-1.84375 -0.49901,-0.259421 -0.999,-0.519833 -1.5,-0.78125 -0.61359,0.157254 -1.22817,0.3135 -1.84375,0.46875 -0.32192,0.709348 -0.64483,1.417667 -0.96875,2.125 0.0843,0.751015 0.16767,1.501 0.25,2.25 0.50101,0.719765 1.001,1.438502 1.5,2.156252 1.07394,0.3135 2.14683,0.626 3.21875,0.9375 0.9281,-0.009 1.85517,-0.0198 2.78125,-0.0312 1.35519,-0.21776 2.70933,-0.4365 4.0625,-0.65625 1.19894,-0.49901 2.39683,-0.999 3.59375,-1.5 1.82395,-1.040689 3.64683,-2.082335 5.46875,-3.125002 0.37601,-0.134419 0.751,-0.269833 1.125,-0.40625 1.77187,-2.894891 3.54267,-5.790666 5.3125,-8.687499 -0.89485,-0.16567 -1.79067,-0.332334 -2.6875,-0.5 -0.28025,1.03227 -0.5615,2.063499 -0.84375,3.093749 -1.26986,2.907309 -2.54067,5.8135 -3.8125,8.71875 -1.10319,3.584402 -2.20733,7.167662 -3.3125,10.750002 0.1885,0.14683 0.376,0.29266 0.5625,0.4375 0.46976,-1.22819 0.9385,-2.45734 1.40625,-3.6875 0.87602,-0.95735 1.751,-1.91567 2.625,-2.875 0.9906,-0.97819 1.98017,-1.95734 2.96875,-2.9375 1.63645,-1.478198 3.27183,-2.957335 4.90625,-4.437502 1.36561,-0.936518 2.73017,-1.874 4.09375,-2.8125 1.0625,-0.489583 2.126,-0.978166 3.1875,-1.46875 0.53226,0.146837 1.0635,0.292667 1.59375,0.4375 0.55309,0.823934 1.10517,1.646834 1.65625,2.46875 -0.26984,1.709368 -0.54067,3.417667 -0.8125,5.125002 0.0635,1.27186 0.126,2.54266 0.1875,3.8125 0.20934,0.85518 0.41767,1.70933 0.625,2.5625 0.59476,0.32392 1.1885,0.64683 1.78125,0.96875 1.14686,-0.23859 2.29267,-0.47817 3.4375,-0.71875 1.07394,-0.43651 2.14683,-0.874 3.21875,-1.3125 2.21979,-1.18653 4.4385,-2.374 6.65625,-3.5625 2.92814,-1.999042 5.85517,-3.999002 8.78125,-6.000002 1.51145,-0.69693 3.02183,-1.394833 4.53125,-2.09375 1.29269,-1.801119 2.58433,-3.603166 3.875,-5.406249 -0.66568,-0.155254 -1.33233,-0.3115 -2,-0.46875 -0.59276,0.876017 -1.1865,1.750999 -1.78125,2.624999 -1.07194,2.33438 -2.14483,4.667667 -3.21875,7 -1.24902,3.813572 -2.499,7.626002 -3.75,11.437502 l 0.46875,0.46875 c 0.35517,-0.81152 0.70933,-1.624 1.0625,-2.4375 0.90727,-1.45736 1.8135,-2.91567 2.71875,-4.375 1.29269,-1.25944 2.58433,-2.51984 3.875,-3.781252 1.31353,-0.874017 2.626,-1.749 3.9375,-2.625 1.55311,-0.613595 3.10517,-1.228166 4.65625,-1.84375 1.08435,0.115586 2.16767,0.230167 3.25,0.34375 0.73018,1.292693 1.45956,2.584731 2.1875,3.875 0.59419,1.824222 1.18756,3.647992 1.78012,5.471362 0.29924,0.61834 0.59674,1.23413 0.89444,1.8514 0.48537,0.9055 0.96796,1.80665 1.45044,2.70849 0.78227,0.3135 1.5635,0.626 2.34375,0.9375 1.07394,0.001 2.14683,0.001 3.21875,0 1.77187,-0.85319 3.54267,-1.70734 5.3125,-2.5625 1.6052,-1.12402 3.20933,-2.249 4.8125,-3.375 1.50103,-1.09277 3.001,-2.1865 4.5,-3.28125 0.98019,-0.0719 1.95933,-0.14484 2.9375,-0.21875 0.77185,0.001 1.54267,0.001 2.3125,0 1.50103,-0.426094 3.001,-0.853168 4.5,-1.281252 1.26144,-0.644846 2.52183,-1.290666 3.78125,-1.9375 1.21977,-1.103188 2.4385,-2.207333 3.65625,-3.3125 0.32392,-0.66568 0.64683,-1.332333 0.96875,-2 -0.39484,-0.519843 -0.79067,-1.040666 -1.1875,-1.5625 -1.12402,-0.217754 -2.249,-0.4365 -3.375,-0.65625 -1.37403,0.792683 -2.749,1.584334 -4.125,2.375 -1.89487,1.626033 -3.79067,3.251 -5.6875,4.875 -0.70735,1.553115 -1.41567,3.105167 -2.125,4.656252 -0.3153,1.29269 -0.63158,2.58431 -0.94887,3.875 0.48396,0.84477 0.96691,1.6885 1.44887,2.53125 1.1156,0.43851 2.23017,0.876 3.34375,1.3125 1.84479,-0.124 3.6885,-0.249 5.53125,-0.375 2.04271,-0.71777 4.08433,-1.4365 6.125,-2.15625 2.51147,-1.17611 5.02183,-2.35317 7.53125,-3.53125 3.31357,-2.00946 6.626,-4.019835 9.9375,-6.031252 0.66768,-0.384424 1.33433,-0.769833 2,-1.15625 0.82393,-1.228191 1.64683,-2.457333 2.46875,-3.6875 1.49061,-1.269858 2.98017,-2.540666 4.46875,-3.812499 1.01144,-0.353174 2.02183,-0.707334 3.03125,-1.0625 0.70935,0.09475 1.41767,0.1885 2.125,0.28125 0.37601,0.240588 0.751,0.480166 1.125,0.71875 0.1885,0.344756 0.376,0.6885 0.5625,1.031249 0.0947,0.532261 0.1885,1.0635 0.28125,1.59375 -0.11359,1.084355 -0.22817,2.167667 -0.34375,3.25 0.91768,-2.603218 1.83433,-5.207333 2.75,-7.812499 -0.23859,-0.05109 -0.47817,-0.103167 -0.71875,-0.15625 -0.10317,0.636429 -0.20733,1.271833 -0.3125,1.90625 -0.20734,0.490593 -0.41567,0.980166 -0.625,1.468749 -0.29067,-0.07192 -0.58233,-0.144833 -0.875,-0.21875 -0.19692,-0.384424 -0.39483,-0.769833 -0.59375,-1.156249 -0.70735,-0.384425 -1.41567,-0.769834 -2.125,-1.15625 -1.97821,0.740598 -3.95733,1.480166 -5.9375,2.218749 -0.90527,0.698931 -1.8115,1.396834 -2.71875,2.09375 -0.7386,0.980187 -1.47817,1.959334 -2.21875,2.9375 -0.7386,1.521864 -1.47844,3.043228 -2.21875,4.5625 -0.13823,1.221444 -0.27812,2.442242 -0.41785,3.662682 -0.0689,0.60213 -0.13701,1.20426 -0.20715,1.80607 0.71026,1.01274 1.41766,2.02183 2.125,3.03125 0.77185,0.39684 1.54267,0.79266 2.3125,1.1875 0.89685,0.16767 1.79267,0.33433 2.6875,0.5 1.18852,-0.16567 2.376,-0.33234 3.5625,-0.5 2.25104,-0.75943 4.501,-1.51984 6.75,-2.28125 2.11562,-1.00944 4.23017,-2.01984 6.34375,-3.03125 3.2719,-2.06154 6.54266,-4.124002 9.8125,-6.187502 1.53228,-1.103188 3.0635,-2.207333 4.59375,-3.3125 0.95935,-2.624052 1.91766,-5.249 2.875,-7.875 2.50105,-4.374087 5.001,-8.748999 7.5,-13.124999 2.50105,-3.249065 5.001,-6.499 7.5,-9.75 1.75103,-2.790723 3.501,-5.582333 5.25,-8.375 2.0427,-3.124062 4.08433,-6.249 6.125,-9.375 1.75103,-2.49905 3.501,-4.999 5.25,-7.5 1.62603,-3.415735 3.251,-6.832333 4.875,-10.249999 0.0843,-1.124023 0.16766,-2.249 0.25,-3.375 -0.58235,0.04267 -1.16567,0.08433 -1.75,0.125 -1.04069,0.876017 -2.08234,1.751 -3.125,2.625 -1.87404,2.667719 -3.749,5.334333 -5.625,7.999999 -1.2907,2.376048 -2.58234,4.751 -3.875,7.125 -3.58241,7.084475 -7.16567,14.167667 -10.75,21.25 -1.6657,3.292732 -3.33234,6.584333 -5,9.875 -1.99904,3.376067 -3.999,6.751 -6,10.125 -3.58241,8.667839 -7.16567,17.334331 -10.75,26.000001 -1.16569,3.25106 -2.33234,6.501 -3.5,9.75 -0.33234,2.25104 -0.66567,4.501 -1,6.75 -0.0823,2.70939 -0.16567,5.41766 -0.25,8.125 1.00102,1.83437 2.001,3.66766 3,5.5 0.75101,-0.0407 1.501,-0.0823 2.25,-0.125 1.58436,-0.45734 3.16766,-0.91567 4.75,-1.375 3.25106,-1.95737 6.501,-3.91567 9.75,-5.875 2.25104,-1.5407 4.501,-3.08234 6.75,-4.625 3.60524,-2.99906 7.20933,-5.999 10.8125,-9 3.00106,-2.76989 6.001,-5.54067 9,-8.3125 2.85522,-3.0199 5.70933,-6.04067 8.5625,-9.0625 1.62603,-1.853205 3.251,-3.707335 4.875,-5.562502 14.58462,-19.853563 29.16766,-39.707332 43.75,-59.562499 0.33434,-5.83245 0.66766,-11.665666 1,-17.499999 -6.49913,-4.415755 -12.999,-8.8323335 -19.5,-13.2500001 -11.49923,-0.33234 -22.999,-0.6656666 -34.5,-1 C 725.58401,10.16779 710.16765,16.334333 694.74999,22.5 c -7.99916,10.501209 -15.999,21.000999 -24,31.499999 2.75105,3.751075 5.501,7.501 8.25,11.25 2.33438,1.251025 4.66766,2.501 7,3.75 3.32435,-2.434027 6.64756,-4.868956 9.96985,-7.304933 3.44821,-1.324852 6.89529,-2.650651 10.34143,-3.977476 2.82949,-0.647194 5.65786,-1.295362 8.48528,-1.944544 5.18656,-1.118608 10.3719,-2.238171 15.55635,-3.358757 5.83475,-0.941828 11.66827,-1.884618 17.5009,-2.828427 7.74986,-0.794511 15.49842,-1.58999 23.24613,-2.386485"
                            sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
                            clip-path="url(/clipPath2312)"
                            transform="translate(-31.112698,-4.2426406)"
                          />
                        </g>
                      </svg> */}
                    </span>
                  </h2>
                  <h2 className="f-heading-m contact">
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
                        <div className="perspective">
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
                      <a href="/">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="c-footer-info">
                    <li>
                      <a href="/"> SEND US A MESSAGE </a>
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
                        <a href="/">abcd@royclan.com </a>
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
                        <a href="/">TERMS & CONDITIONS </a>
                      </li>
                      <li>
                        <a href="/">FAQs </a>
                      </li>
                      <li>
                        <a href="/">NEWSLETTER </a>
                      </li>
                      <li>
                        <a href="/">SHIPPING & RETURNS </a>
                      </li>
                      <li>
                        <a href="/">ABOUT US </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
