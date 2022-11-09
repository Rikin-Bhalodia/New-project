import React, { useState } from "react";
import styled from "styled-components";
import GoBackpart from "../Common/gobachpart";
import BannerImage from "../../../assets/images/service/travel/banner.svg";
import GetWay from "../../../assets/images/service/travel/getway.svg";

import Menu from "../../../commonComponents/Menu";
import MenuIcon from "../../../assets/images/studio/menu.svg";

const CommonHeaderPartWrapper = styled.div`
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    object-fit: cover;
    color: white;
    height: 90vh;
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
    top: 100px;
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
`;

const CommonHeaderPart = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <CommonHeaderPartWrapper>
      {" "}
      <div className="heading-part">
        <div className="goback-part">
          <GoBackpart />
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
        <div className="middle-name">
          <div className="name">READY TO</div>
          <img src={GetWay} alt="getway" height={200} />
        </div>
      </div>
    </CommonHeaderPartWrapper>
  );
};

export default CommonHeaderPart;
