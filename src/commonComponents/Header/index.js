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
    border-bottom: 0.5px solid white;
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
  .block {
    display: none;
  }
  @media (max-width: 800px) {
    .none {
      display: none;
    }
    .main-logo {
      right: 0px;
    }
    .block {
      display: block;
    }
    .search-icon-1,
    .menu-icon-1 {
      font-size: 20px;
      a {
        color: #fff;
      }
    }
    .p20 {
      padding: 0 20px;
    }
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
        className={`topHeaderPart ${scrollHeader ? "scroll-effect" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between p20">
            <div className="menuleftIcon none">
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
            <div className="search-icon-1 block">
              <a href="#">
                {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.48298 0C3.04069 0 0.236755 2.80393 0.236755 6.24623C0.236755 9.68853 3.04069 12.4925 6.48298 12.4925C7.9799 12.4925 9.35461 11.9609 10.432 11.0785L14.1615 14.808C14.219 14.8679 14.2879 14.9158 14.3642 14.9487C14.4405 14.9817 14.5226 14.9991 14.6057 15C14.6888 15.0008 14.7712 14.9851 14.8482 14.9537C14.9251 14.9222 14.995 14.8758 15.0538 14.817C15.1126 14.7583 15.159 14.6884 15.1904 14.6114C15.2218 14.5345 15.2376 14.4521 15.2367 14.369C15.2359 14.2859 15.2185 14.2038 15.1855 14.1275C15.1525 14.0512 15.1047 13.9823 15.0447 13.9247L11.3153 10.1953C12.1976 9.11786 12.7292 7.74314 12.7292 6.24623C12.7292 2.80393 9.92528 0 6.48298 0ZM6.48298 1.24925C9.25014 1.24925 11.48 3.47907 11.48 6.24623C11.48 9.01338 9.25014 11.2432 6.48298 11.2432C3.71583 11.2432 1.486 9.01338 1.486 6.24623C1.486 3.47907 3.71583 1.24925 6.48298 1.24925Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>

            <div className="logoImage text-center">
              <a href="">
                <img src={MainLogo} className="main-logo" />
              </a>
            </div>

            <div className="menu-icon-1 block">
              <a href="#">
                {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.48438 14.4219C0.76563 15.2813 1.51563 15.8438 2.42188 15.8438H17.5938C18.5 15.8438 19.25 15.2813 19.5313 14.4219C19.8125 13.5626 19.5 12.6719 18.7656 12.1407L12.1719 7.48443C11.9531 7.32818 11.6719 7.39068 11.5156 7.59381C11.3594 7.81256 11.4219 8.09381 11.625 8.25006L18.2188 12.9219C18.7031 13.2657 18.75 13.7813 18.625 14.1407C18.5 14.5157 18.1719 14.9063 17.5781 14.9063H2.40626C1.81251 14.9063 1.48438 14.5157 1.35938 14.1407C1.23438 13.7657 1.28126 13.2501 1.76563 12.9219L11.6094 5.95318C12.4375 5.35943 12.875 4.40631 12.7813 3.40631C12.6563 2.06256 11.6094 1.00006 10.2656 0.859434C8.82813 0.718809 7.51563 1.67193 7.23438 3.09381C7.18751 3.34381 7.34376 3.59381 7.59376 3.64068C7.84376 3.68756 8.09376 3.53131 8.14063 3.28131C8.32813 2.34381 9.20313 1.70318 10.1719 1.79693C11.0469 1.87506 11.7656 2.60943 11.8438 3.48443C11.9063 4.15631 11.6094 4.79693 11.0625 5.18756L1.21876 12.1563C0.500005 12.6719 0.20313 13.5626 0.48438 14.4219Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className="menuleftIcon text-right none">
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
