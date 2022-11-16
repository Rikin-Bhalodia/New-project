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

const Headerwrapper = styled.div`
  .sinkHeader {
    background-color: rgb(102 94 47);
    padding: 10px 0px !important;
  }

  .topHeaderPart {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1;
    transition: all 0.4s linear;
    padding: 10px 0;
  }

  .menuleftIcon ul li {
    display: inline-block;
    list-style: none;
    margin-right: 15px;
  }

  .menuleftIcon ul li a {
    font-size: 20px;
    color: var(--white-color);
    font-size: 25px;
  }

  .logoImage {
    max-width: 70px;
    margin: 0.5rem auto;
  }

  .smallHeaderIcon {
    max-width: 25px;
  }

  .menuleftIcon ul li:last-child {
    margin: 0px;
  }

  .scroll-effect {
    background: rgb(102 94 47);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 999999;
    max-width: 100%;
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
  }
  .main-logo {
    height: 40px;
    position: relative;
    right: 90px;
  }
  ul {
    margin: 0px !important;
  }
`;

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
      <motion.section
        initial={{ y: "100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`topHeaderPart ${scrollHeader ? "scroll-effect" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="menuleftIcon">
              <ul>
                <li>
                  <span>
                    <input placeholder="Search Items" className="search" />
                    <img src={Search} alt="search" className="search-icon" />
                  </span>
                </li>
                <li>
                  <span>
                    <img src={Mic} className="mic-icon" alt="" />
                  </span>
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
                  <span>
                    <img
                      src={Profile}
                      className="img-fluid smallHeaderIcon"
                      alt=""
                    />
                  </span>
                </li>
                <li>
                  <span>
                    <img
                      src={Heart}
                      className="img-fluid smallHeaderIcon"
                      alt=""
                    />
                  </span>
                </li>
                <li>
                  <span onClick={showModal}>
                    <img
                      src={Cart}
                      className="img-fluid smallHeaderIcon"
                      alt=""
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="modal--content d-flex">
            <div className="modal-left--container d-flex">
              <div className="img1">
                <img src={productCartImg} alt="" />
              </div>
              <div className="img2">
                <img src={modalText} alt="" />
              </div>
            </div>
            <div className="modal-right--container">
              <div className="title">VERSACE DRESS</div>
              <div className="detail">
                <div>Size: M</div>
                <div>Color: Gold</div>
                <div>Quantity: 01</div>
              </div>
              <div className="price-btn--container">
                <div className="price">
                  subtotal : <span>₹3,56,367.34</span>
                </div>
                <div className="btn--container d-flex">
                  <div>view bag</div>
                  <div>checkout</div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </motion.section>
    </Headerwrapper>
  );
};

export default Header;
