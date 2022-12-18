import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/valentine-gift/banner.svg";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import { valentineGiftsIcons } from "../../../utils";
import { motion } from "framer-motion";
import LeftMiddle from "../../../assets/images/service/valentine-gift/left-middle.png";
import ValentineGiftImg from "../../../assets/images/service/valentine-gift/valentine-gift-res.png";
import RightMiddle from "../../../assets/images/service/valentine-gift/right-middle.png";
import Gift from "../../../assets/images/service/valentine-gift/gift.svg";
import TopProduct from "../../brand/TopProduct";

const WannaShop = React.lazy(() =>
  import("../../../commonComponents/WannaShop")
);
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));
const Menu = React.lazy(() => import("../../../commonComponents/Menu"));
const ShoppingListCard = React.lazy(() => import("../ShopingListCard"));
const MiddlePart = React.lazy(() => import("../MiddlePart"));
const Filters = React.lazy(() => import("../../../commonComponents/Filters"));
const AnimatedTextWord = React.lazy(() =>
  import("../../../commonComponents/Animation/FlipAnimation")
);

const ValentineGiftWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    color: white;
    height: 90vh;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${BannerImage});
    background-repeat: no-repeat;
    background-size: cover;
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
  .menu-icon {
    top: -40px !important;
  }
  @media (max-width: 1000px) {
    .heading-part {
      font-size: 90px;
    }
    .icons {
      margin: 30px 0;
      word-break: break-word;
    }
  }
  @media (max-width: 800px) {
    .heading-part {
      font-size: 70px;
    }
    .icons {
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 15px;
    }

    .icon-name {
      font-size: 12px;
    }
  }
  @media (max-width: 700px) {
    .icon-name {
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .heading-part {
      font-size: 55px;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url(${ValentineGiftImg});
      object-fit: cover;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: bottom;
      height: 50vh;
    }
  }
  @media (max-width: 500px) {
    .heading-part {
      font-size: 45px;
    }
    .icon-name {
      font-size: 9px;
    }
  }
  @media (max-width: 450px) {
    .heading-part {
      font-size: 35px;
      height: 42vh;
    }
  }
  @media (max-width: 400px) {
    .icons {
      padding: 0 10px;
      row-gap: 10px;
      column-gap: 6px;
      margin-top: 20px;
    }
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
      <div>
        <div className="heading-part">
          <AnimatedTextWord text="VALENTINE GIFTS" />
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
                  className="size-icon"
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
        <TopProduct />
        <TopProduct />
        <YellowBarContent requiredPersonalAssistance={false} />
      </div>
    </ValentineGiftWrapper>
  );
};

export default ValentineGift;
