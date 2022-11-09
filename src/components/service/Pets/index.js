import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/pets/banner.svg";
import Menu from "../../../commonComponents/Menu";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import MiddlePart from "../MiddlePart";
import LeftMiddle from "../../../assets/images/service/pets/left-middle.svg";
import RightMiddle from "../../../assets/images/service/pets/right-middle.svg";
import LuxuryLife from "../../../assets/images/service/pets/luxury-life.svg";
import WannaShop from "../../../commonComponents/WannaShop";
import { ExploreMoreIcons, PetsIcons } from "../../../utils";

const TopTranding = React.lazy(() => import("../Common/TopTranding"));
const ExploreShop = React.lazy(() => import("../Common/ExploreShop"));
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));

const PetsWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: url(${BannerImage});
  }
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 90px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    justify-content: center;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 5px;
  }
  .line {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
  .explore-mores {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin-top: 50px;
  }
  .explore-more-icons {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 50px;
    margin-top: 60px;
  }
  .image-name {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    text-align: center;
    color: #fff;
    height: 220px;
    width: 220px;
    border-radius: 50%;
    position: relative;
    top: 130px;
  }
`;
const Pets = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <PetsWrapper>
      <div className="heading-part">PETS</div>
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
      <MiddlePart
        LeftMiddle={LeftMiddle}
        RightMiddle={RightMiddle}
        Text={LuxuryLife}
        first="GIVE YOUR"
        second="FURRY FRIENDS"
        third="THE BEST"
      />
      <WannaShop />
      <div className="icons">
        {PetsIcons.map((data) => {
          return (
            <div className="icon">
              <img
                loading="lazy"
                src={data.img}
                alt="img"
                height={40}
                width={60}
              />
              <div className="icon-name">{data.name}</div>
            </div>
          );
        })}
      </div>
      <div className="line">
        <div className="border-line"></div>
      </div>
      <div className="explore-mores">EXPLORE MORE</div>
      <div className="explore-more-icons">
        {ExploreMoreIcons.map((data) => {
          return (
            <div
              style={{
                backgroundImage: `url(${data.img})`,
                backgroundSize: "auto",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            >
              <div className="image-name">{data.name}</div>
            </div>
          );
        })}
      </div>
      <TopTranding name="top tranding" isRequiredBackground={true} />
      <ExploreShop />
      <YellowBarContent requiredPersonalAssistance={false} />
    </PetsWrapper>
  );
};

export default Pets;
