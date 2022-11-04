import React, { useState } from "react";
import styled from "styled-components";
import BannerImage from "../../../assets/images/service/valentine-gift/banner.svg";
import DownArrow from "../../../assets/images/product/down-arrow.svg";
import Search from "../../../assets/images/service/gift-for-him/seach-icon.svg";
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
  .arrow {
    position: relative;
    right: 35px;
  }
  .drop-down {
    display: flex;
  }
  .option-box {
    margin-top: 20px;
    height: 130px;
    border: 1px solid #000000;
    border-radius: 0px 40px 40px 40px;
    width: 230px;
  }
  .sort-by {
    background: #a75b41;
    border: 1px solid #a75b41;
    border-radius: 50px;
    width: 160px;
    font-size: 14px;
    height: 23px;
    color: #fff;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }
  .single-option {
    border-bottom: 1px solid #000000;
    width: 100%;
    height: 25px;
    padding-left: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;

    font-size: 13px;
  }
  .sort-by-drop-down {
    margin-left: 30px;
  }
  .filter {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  .mood {
    border: 1px solid #d0d0d0;
    border-radius: 33px;
    width: 156px;
    height: 52px;
    font-size: 14px;
    color: #fff;
    padding-left: 15px;
    display: flex;
    align-items: center;
    background: #a75b41;
  }
  .single-option-right {
    width: 100%;
    height: fit-content;
    padding-left: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  .option-box-right {
    margin-top: 20px;
    width: 330px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #000000;
    border-radius: 50px 0px 50px 50px;
    padding: 0px 30px;
    background: #fff;
    z-index: 99;
    position: relative;
    right: 90px;
  }
  .search-bar {
    display: flex;
    align-items: center;
    letter-spacing: -0.408px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #000000;
    opacity: 0.4;
    height: 46px;
    border: none;
    margin-left: 20px;
    width: 270px;
  }
  .search-bar:focus {
    outline: none;
  }
  .search-part {
    display: flex;
  }
  .drop-down-right {
    margin-left: 30px;
    display: flex;
  }
`;

const options = [
  "Featured",
  "Bestsellers",
  "Price : Low to High",
  "Price : High to Low",
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
      <div className="filter">
        <div className="sort-by-drop-down">
          <div className="drop-down">
            <div className="sort-by">Sort By</div>
            <img loading="lazy" src={DownArrow} alt="arrow" className="arrow" />
          </div>
          <div className="option-box">
            {options.map((option) => {
              return <div className="single-option">{option}</div>;
            })}
          </div>
        </div>
        <div className="drop-down-right">
          {[1, 2, 3].map((_, i) => {
            return (
              <div>
                <div className="drop-down right" onClick={() => setId(i)}>
                  <div className="mood">FRAGRANCE</div>
                  <img
                    loading="lazy"
                    src={DownArrow}
                    alt="arrow"
                    className="arrow"
                  />
                </div>
                {i === id && (
                  <div className="option-box-right">
                    <div className="search-part">
                      <img
                        loading="lazy"
                        src={Search}
                        alt="search"
                        className="search-img"
                      />
                      <input
                        placeholder="Search Categories"
                        className="search-bar"
                      />
                    </div>
                    {options.map((option) => {
                      return (
                        <>
                          <div style={{ display: "flex" }}>
                            <input
                              type="checkbox"
                              id={option}
                              name="vehicle1"
                              value="Bike"
                            ></input>
                            <div className="single-option-right" for={option}>
                              {option}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <ShoppingListCard />
      <YellowBarContent requiredPersonalAssistance={false} />
    </ValentineGiftWrapper>
  );
};

export default ValentineGift;
