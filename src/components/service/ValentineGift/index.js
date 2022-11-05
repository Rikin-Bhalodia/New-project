import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/valentine-gift/banner.svg";
import Menu from "../../../commonComponents/Menu";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import WannaShop from "../../../commonComponents/WannaShop";
import { valentineGiftsIcons } from "../../../utils";
import ShoppingListCard from "../ShopingListCard";
import YellowBarContent from "../Common/YellowBarContent";
import MiddlePart from "../MiddlePart";
import LeftMiddle from "../../../assets/images/service/valentine-gift/left-middle.svg";
import RightMiddle from "../../../assets/images/service/valentine-gift/right-middle.svg";
import Gift from "../../../assets/images/service/valentine-gift/gift.svg";
import Filters from "../../../commonComponents/Filters";

const ValentineGiftWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: url(${BannerImage});
  }

  .line {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
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
`;

const FiltersName = [
  { name: "PRICE RANGE", option: [], range: "SET RANGE" },
  {
    name: "BRANDS",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "COLOR", option: ["Puppy", "Adult Dog", "Senior Dog"] },
];

const ValentineGift = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);
  const [id, setId] = useState("");

  return (
    <ValentineGiftWrapper>
      <div className="heading-part">VALENTINE GIFTS</div>
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
        Text={Gift}
        first="GIVE YOUR"
        second="LOVED ONES"
        third="THE BEST"
      />

      <WannaShop />
      <div className="icons">
        {valentineGiftsIcons.map((data) => {
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
      <Filters FiltersName={FiltersName} />
      <ShoppingListCard />
      <YellowBarContent requiredPersonalAssistance={false} />
    </ValentineGiftWrapper>
  );
};

export default ValentineGift;
