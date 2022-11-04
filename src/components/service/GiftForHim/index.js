import React, { useState } from "react";
import styled from "styled-components";
import GoBackpart from "../Common/gobachpart";
import Price from "../../../assets/images/service/gift-for-him/price.svg";
import YellowBarContent from "../Common/YellowBarContent";
import DownArrow from "../../../assets/images/product/down-arrow.svg";
import Search from "../../../assets/images/service/gift-for-him/seach-icon.svg";

const GiftForHimWrapper = styled.div`
  margin: 100px 150px 0px 150px;
  .heading {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    padding-top: 40px;
  }
  button {
    background: #ffffff;
    border: 1px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
    color: #a75b41;
    width: 220px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    height: 50px;
    font-size: 20px;
  }
  .price {
    letter-spacing: -0.408px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15px;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    column-gap: 180px;
    row-gap: 50px;
    margin: 80px 50px;
  }
  .drop-down {
    display: flex;
    margin-top: 20px;
  }
  .right {
    justify-content: center;
  }

  .sort-by {
    background: #a75b41;
    border: 1px solid #a75b41;
    border-radius: 50px;
    width: 160px;
    font-size: 14px;
    height: 25px;
    color: #fff;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }
  .arrow {
    position: relative;
    right: 35px;
  }
  .option-box {
    margin-top: 20px;
    height: 130px;
    border: 1px solid #000000;
    border-radius: 0px 40px 40px 40px;
    width: 230px;
  }
  .single-option {
    border-bottom: 1px solid #000000;
    width: 100%;
    height: 25px;
    padding-left: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    padding-top: 3px;
    font-size: 13px;
  }
  .filter {
    display: flex;
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
    border-radius: 50px;
    padding: 0px 30px;
    background: #fff;
    z-index: 99;
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

const FullScreenWrapper = styled.div`
  width: 100%;
  .load-more {
    display: flex;
    width: 100%;
    margin-top: 120px;
  }
  .line {
    border-bottom: 2px solid #000000;
    width: 40%;
    margin-bottom: 35px;
  }
  .text {
    width: 20%;
    display: flex;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    justify-content: space-around;
    margin: 0px 10px;
  }
  .plus {
    height: 60px;
    width: 60px;
    border: 1px solid #000000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: 700;
    position: relative;
    top: -5px;
  }
`;

const options = [
  "Featured",
  "Bestsellers",
  "Price : Low to High",
  "Price : High to Low",
];

const GiftForHim = () => {
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false);
  return (
    <>
      <GiftForHimWrapper>
        <GoBackpart />
        <div className="heading">GIFTS FOR HIM</div>
        <div className="filter">
          <div>
            <div className="drop-down" onClick={() => setFlag(!flag)}>
              <div className="sort-by">Sort By</div>
              <img src={DownArrow} alt="arrow" className="arrow" />
            </div>
            {flag && (
              <div className="option-box">
                {options.map((option) => {
                  return <div className="single-option">{option}</div>;
                })}
              </div>
            )}
          </div>
          <div className="drop-down-right">
            {[1, 2, 3, 4, 5].map((_, i) => {
              return (
                <div>
                  <div className="drop-down right" onClick={() => setId(i)}>
                    <div className="mood">FRAGRANCE</div>
                    <img src={DownArrow} alt="arrow" className="arrow" />
                  </div>
                  {i === id && (
                    <div className="option-box-right">
                      <div className="search-part">
                        <img src={Search} alt="search" className="search-img" />
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
        <div className="products">
          {[1, 1, 11, 1, 11, 1, 1, 1, 1].map((_) => {
            return (
              <div className="product">
                <img src={Price} alt="price" height={250} />
                <div className="price">Price</div>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </GiftForHimWrapper>
      <FullScreenWrapper>
        <div className="load-more">
          <div className="line"></div>
          <div className="text">
            <div>LOAD</div>
            <div className="plus">+</div>
            <div>MORE</div>
          </div>
          <div className="line"></div>
        </div>
        <YellowBarContent requiredPersonalAssistance={true} />
      </FullScreenWrapper>
    </>
  );
};

export default GiftForHim;
