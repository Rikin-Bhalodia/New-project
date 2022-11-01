import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "antd";

import Mic from "../../assets/images/studio/header/mic.svg";
import Search from "../../assets/images/studio/header/search.svg";
import MainLogo from "../../assets/images/studio/header/main-logo.svg";
import Heart from "../../assets/images/studio/header/heart.svg";
import Cart from "../../assets/images/studio/header/cart.svg";
import Profile from "../../assets/images/studio/header/profile.svg";
import productCartImg from "../../assets/images/product-section/modal-img1.svg";
import modalText from "../../assets/images/product-section/modal--text.svg";
import { motion } from "framer-motion";

const Headerwrapper = styled.div``;

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeader(window.scrollY > 0);
      // setTransitionText(window.scrollY === 0 || window.scrollY > 0);
      // setTransitionForLuxury(window.scrollY > 1600);
      // setTransitionForBlogs(window.scrollY > 2800);
      // setTransitionForMore(window.scrollY > 3900);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Headerwrapper>
      {" "}
      <motion.section
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
        className={`topHeaderPart py-3 ${scrollHeader ? "scroll-effect" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="menuleftIcon">
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <span>
                      <input placeholder="Search Items" className="search" />
                      <img src={Search} alt="search" className="search-icon" />
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
                  {/* <a href=""> */}
                  <span onClick={showModal}>
                    <img
                      src={Cart}
                      className="img-fluid smallHeaderIcon"
                      alt=""
                    />
                  </span>
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Headerwrapper>
  );
};

export default Header;
