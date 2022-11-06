import React, { useState } from "react";
import styled from "styled-components";
import studioInner5 from "../../assets/images/img/studioInner-1.jpg";
import studioInner1 from "../../assets/images/img/studioInner-1.jpg";
import studioInner2 from "../../assets/images/img/studioInner-2.jpg";
import studioInner3 from "../../assets/images/img/studioInner-3.jpg";
import studioInner4 from "../../assets/images/img/studioInner-4.jpg";
import Menu from "../../commonComponents/Menu";
import MenuIcon from "../../assets/images/studio/menu.svg";
import img1 from "../../assets/images/shop-hover/img1.svg";
import img2 from "../../assets/images/shop-hover/img2.svg";
import { motion } from "framer-motion";

const ShopHoverWrapper = styled.div`
  .menuItem {
    justify-content: center;
  }
  .backInLeft,
  .backInUp {
    border-radius: 50%;
  }
  .bannerSection .bannerMenus .menuItem .leftSideImg img {
    width: 225px;
    height: 280px;
    object-fit: cover;
  }
  .bannerSection .bannerMenus .menuItem .rightSideImg img {
    width: 225px;
    height: 280px;
    object-fit: cover;
  }
  .menuLink {
    font-size: 20px;
  }
  .bannerSection .bannerMenus .menuItem .menuLink {
    font-size: 30px;
    color: black;
  }
  .bannerSection .bannerMenus .menuItem:nth-child(even) {
    margin-left: 0px;
  }
  .bannerSection .bannerMenus .menuItem + .menuItem {
    margin-top: 8px;
  }
  .bannerSection .bannerMenus .menuItem .leftSideImg {
    top: 300px;
  }
  .bannerSection .bannerMenus .menuItem .rightSideImg {
    top: 330px;
  }
  .bannerSection {
    background: white;
  }
  .contact {
    text-align: center;
  }
`;

export default function ShopHover() {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <ShopHoverWrapper>
      <motion.section
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="homeBanner overflow-hidden minHeightSec minBannerHeight "
      >
        <div className="">
          <div className="row">
            <div className="col-12 px-0">
              <div className="homePageBanerImageSec position-relative">
                {/* <!-- <img loading="lazy" src="assets/img/home-page.gif" className="img-fluid bannerImage" alt="home Page Banner"> --> */}
                <div className="bannerSection paddingSec minBannerHeight d-flex justify-content-center align-items-center">
                  <div className="bannerMenus">
                    <ul>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
                              src={img1}
                              alt=""
                            />
                          </div>
                        </div>
                        <a
                          href="/avenue"
                          className="menuLink coralFont wow fadeInUp"
                          data-wow-delay=".1s"
                        >
                          ACCESSORIES
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={img2}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          BEAUTY & FREGRANCE
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner2}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                          <span className="bannertyping d-block content">
                            Lorem ipsum dolor sit amet.
                          </span>
                        </h3> */}
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Fashion
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner2}
                              alt=""
                            />
                          </div>
                        </div>
                        {/* <h3 className="mb-2 coralScript mainColor text-center font-80 font-weight-bold minWidth600 letterSpacingBig banner-one-line shadowText textH3">
                          <span className="bannertyping d-block content">
                            Know the world of luxary
                          </span>
                        </h3> */}
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Foods & Drinks (FMCG)
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Footwear
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Fragrance
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>

                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Handbags & Travel Bags
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner2}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          HOME
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner2}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Jewelry
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>

                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Kids
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Luxury Games
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Luxury Gifting
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Pets (Shop)
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Sports
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                      <li className="menuItem">
                        <div className="leftSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInLeft"
                              loading="lazy"
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
                          Tech & Electronics
                        </a>
                        <div className="rightSideImg">
                          <div className="imgWrap">
                            <img
                              className="wow backInUp"
                              loading="lazy"
                              src={studioInner5}
                              alt=""
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="contact">
                    <h6>NEED HELP?</h6>
                    <p>customercare@royclan.in</p>
                    <p>+91 987654321</p>
                  </div>
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
                    <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
                  ) : (
                    <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </ShopHoverWrapper>
  );
}
