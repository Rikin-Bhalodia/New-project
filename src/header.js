import React from "react";
import styled from "styled-components";
import Mic from "./assets/images/studio/header/mic.svg";
import Search from "./assets/images/studio/header/search.svg";
import MainLogo from "./assets/images/studio/header/main-logo.svg";
import Heart from "./assets/images/studio/header/heart.svg";
import Cart from "./assets/images/studio/header/cart.svg";
import Profile from "./assets/images/studio/header/profile.svg";

const HeaderWrapper = styled.div`
  background: rgb(102 94 47);
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .search {
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 136px;
    height: 30px;
    width: 200px;
    padding: 0 20px;
  }
  .search-icon {
    position: relative;
    right: 25px;
    height: 15px;
    top: 2px;
    opacity: 0.5;
  }
  .mic {
    height: 20px;
    width: 20px;
    position: relative;
    top: 5px;
  }
  .left-part {
    width: 350px;
  }
  .center-part {
    width: 350px;
  }
  .right-part {
    width: 350px;
    display: flex;
    justify-content: space-evenly;
  }
  .right-image {
    height: 15px;
    width: 15px;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="left-part">
        <input placeholder="Search Items" className="search" />
        <img src={Search} alt="search" className="search-icon" />
        <img src={Mic} alt="mic" className="mic" />
      </div>
      <div className="center-part">
        <img src={MainLogo} alt="search" />
      </div>
      <div className="right-part">
        <img src={Profile} alt="mic" className="right-image" />
        <img src={Heart} alt="search" className="right-image" />
        <img src={Cart} alt="search" className="right-image" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
