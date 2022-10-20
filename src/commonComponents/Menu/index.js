import React from "react";
import styled from "styled-components";
import { Button, Popover } from "antd";
import Mic from "../../assets/images/studio/header/mic.svg";
import Search from "../../assets/images/studio/header/search.svg";
import TopLeft from "../../assets/images/studio/top-left.svg";
import Center from "../../assets/images/studio/center.svg";
import BottomRight from "../../assets/images/studio/bottom-right.svg";
import Instagram from "../../assets/images/studio/vector/instagram.svg";
import Linkedin from "../../assets/images/studio/vector/linkdin.svg";
import PicsArt from "../../assets/images/studio/vector/pics-art.svg";

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 650px;
  position: relative;
  width: 600px;
  .background {
    background: #fcf9f2;
    width: 100%;
    height: 100%;
  }
  .search-input {
    height: 45px;
    background: #a75b41;
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 136px;
    width: 370px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
  }
  .top-left {
    width: 300px;
    position: absolute;
    left: 0;
  }
  .search-part {
    position: relative;
    margin-top: 30px;
  }
  .mic {
    position: absolute;
    left: 15px;
    top: 12px;
  }
  .search {
    position: absolute;
    right: 15px;
    top: 12px;
  }
  .center {
    width: 600px;
    position: absolute;
    left: 0;
  }
  .bottom-right {
    width: 300px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .menu-parts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    font-size: 25px;
    gap: 10px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
  }
  .info-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    font-size: 16px;
    gap: 5px;
    letter-spacing: -0.408px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
  }
  .social-part {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 30px;
  }
  .icon {
    width: 30px;
  }
`;

const data = [
  "OUR STORY",
  "STUDIO",
  "AVENUE",
  "SERVICE",
  "RENT",
  "PREOWED",
  "LIVE",
  "BLOG",
];

const InfoData = ["LOG IN/PROFILE", "HOME", "CONTACT"];

const content = (
  <MenuWrapper>
    <img src={TopLeft} alt="top-left" className="top-left" />
    <div className="search-part">
      <img src={Mic} alt="mic" height={20} className="mic" />
      <input placeholder="Search Menu" className="search-input" />
      <img src={Search} alt="search" height={20} className="search" />
      <div className="menu-parts">
        {data.map((ele) => {
          return <div>{ele}</div>;
        })}
      </div>
      <div className="info-part">
        {InfoData.map((ele) => {
          return <div>{ele}</div>;
        })}
      </div>
      <div className="social-part">
        <img src={PicsArt} alt="center" className="icon" />
        <img src={Instagram} alt="center" className="icon" />
        <img src={Linkedin} alt="center" className="icon" />
      </div>
    </div>
    <img src={Center} alt="center" className="center" />
    <img src={BottomRight} alt="bottom-right" className="bottom-right" />
  </MenuWrapper>
);

const Menu = ({ menuOpenModal }) => {
  return (
    <>
      <Popover
        style={{
          whiteSpace: "nowrap",
          margin: "auto",
          borderRadius: "30px",
          width: "100%",
        }}
        placement="top"
        content={content}
        open={menuOpenModal}
      />
    </>
  );
};

export default Menu;
