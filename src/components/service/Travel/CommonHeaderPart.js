import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/travel/banner.svg";
import GetWay from "../../../assets/images/service/travel/getway.svg";
import { motion } from "framer-motion";
import GoBackpart from "../Common/gobachpart";
import Menu from "../../../commonComponents/Menu";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { useMediaQuery } from "react-responsive";

const CommonHeaderPartWrapper = styled.div`
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    object-fit: cover;
    color: white;
    height: 80vh;
    position: relative;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.63)),
      url(${BannerImage});
  }
  .goback-part {
    padding-top: 100px;
  }
  .menu-icon {
    position: absolute;
    right: 80px;
    top: 100px !important;
  }
  .middle-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 80px;
    font-size: 80px;
  }
  .name {
    padding-right: 200px;
  }
  .menu-width {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    .heading-part {
      height: 75vh;
    }
    .middle-name {
      margin-top: 70px;
    }
    .name {
      padding-right: 0px;
    }
    .getway {
      width: 500px;
      position: relative;
      top: -30px;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      height: 60vh;
    }
    .middle-name {
      font-size: 65px;
      margin: 0;
      padding: 30px 0 0 0;
      height: 100%;
    }
    .getway {
      width: 450px;
    }
    .menu-icon {
      position: relative;
      right: unset;
      top: -40px !important;
    }
  }
  @media (max-width: 600px) {
    .getway {
      width: 400px;
    }
    .name {
      font-size: 50px;
    }
  }
  @media (max-width: 450px) {
    .middle-name {
      font-size: 60px;
    }
    .name {
      font-size: 45px;
    }
    .getway {
      width: 350px;
    }
  }
  @media (max-width: 400px) {
    .middle-name {
      font-size: 55px;
    }
    .getway {
      width: 280px;
    }
  }
`;

const CommonHeaderPart = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <CommonHeaderPartWrapper>
      <motion.div
        initial={{ y: "200vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="heading-part"
      >
        {!isResponsive && (
          <div className="goback-part">
            <GoBackpart />
          </div>
        )}

        <div className="middle-name">
          <div className="name">
            <AnimatedTextWord text="READY TO" />
          </div>
          <img src={GetWay} alt="getway" height={200} className="getway" />
        </div>
      </motion.div>
      <div className="menu-width">
        <div
          className={"menu-icon"}
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
    </CommonHeaderPartWrapper>
  );
};

export default CommonHeaderPart;
