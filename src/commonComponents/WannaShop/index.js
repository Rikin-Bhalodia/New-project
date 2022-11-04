import { Slider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import LeftFilter from "../../assets/images/product/left-filter.svg";
import RightFilter from "../../assets/images/product/right-filter.svg";

const WannaShopWrapper = styled.div`
  .middle-part {
    display: flex;
    width: 100%;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }
  .search-input {
    border: none;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    color: #a75b41;
    width: 340px;
    padding-bottom: 10px;
    border-bottom: 1px solid #a75b41 !important;
    background: transparent;
  }
  .search-input-brand {
    width: 340px;
    background: transparent;
    padding-bottom: 10px;
    border-bottom: 1px solid white !important;
    font-style: italic;
    border: none;
    color: #a75b41;
    font-size: 33px !important;
  }
  .des {
    text-align: center;
    font-family: "Arial";
    font-style: italic;
    font-weight: 400;
    font-size: 22px;
    padding-top: 10px;
  }
  .filter-section {
    position: relative;
    width: 100%;
    background: #665e2f;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Arial";
    font-style: italic;
    font-weight: 400;
    font-size: 35px;
    margin-top: 30px;
    color: #fff;
  }
  .image {
    position: absolute;
    left: 0;
  }
  .image2 {
    position: absolute;
    right: 0;
  }
  .product {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .product-image1 {
    width: 50%;
    margin-top: 30px;
  }
  .product-image {
    width: 33.3%;
    margin-top: 30px;
  }
  .footer {
    margin-top: 50px;
  }
  .menu-icon {
    position: relative;
    left: 550px;
    margin-bottom: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .contents {
    margin-top: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
  }
  .head {
    text-transform: uppercase;
    align-self: flex-start;
    font-size: 16px;
  }
  .search-part {
    position: relative;
    top: -80px;
  }
  .search-box {
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 400px;
    width: 380px;
    padding: 15px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    color: black;
  }
  .range-box {
    position: absolute;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 300px;
    width: 380px;
    padding: 15px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    color: black;
  }
  input:focus {
    outline-offset: 0px;
    outline: none;
  }
  .close {
    position: relative;
    right: 15px;
    top: 35px;
    color: white;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
  }
  .close-color {
    color: "white";
  }
  .search-logo {
    display: flex;
    margin-right: 20px;
  }
  .input {
    width: 210px !important;
    z-index: 9999;
    margin-left: 15px;
    color: white;
    ::placeholder {
      color: white;
      opacity: 1;
    }
  }
  .maintain-width {
    width: 210px;
  }
  .filter-part {
    display: flex;
  }
  .range {
    display: flex;
    flex-direction: column;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: -0.408px;
    margin-top: 40px;
  }
  .range-shower {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .color-input {
    width: 345px;
    font-size: 20px;
    padding: 0 20px;
    margin-top: 25px;
  }
  .color-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 20px;
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
  select:focus {
    outline-offset: 0px;
    outline: none;
  }
  .select-items {
    border: 1px solid #000000;
    border-radius: 0px 50px 50px 50px;
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
  .option-box-right {
    margin-top: 20px;
    width: 270px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #000000;
    border-radius: 50px 0px 50px 50px;
    padding: 20px;
    position: absolute;
    right: 420px;
    background: #fff;
    z-index: 99;
  }
  .option-box-right2 {
    margin-top: 20px;
    width: 350px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid #000000;
    border-radius: 50px 0px 50px 50px;
    padding: 20px;
    position: absolute;
    right: 40px;
    background: #fff;
    z-index: 99;
  }
  .filter {
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
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
    height: 25px;
    padding-left: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  .heading {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
  }
`;

const data = ["halter dress", "strapless dress", "versace dress"];

const WannaShop = () => {
  const [background, setBackground] = useState(false);
  const [backgroundBrand, setBackgroundBrand] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [backgroundPriceRange, setBackgroundPriceRange] = useState(false);

  return (
    <WannaShopWrapper>
      <div className="middle-part">
        <div className="heading">I WANNA SHOP</div>
        <div className={background && "search-part"}>
          <div className={background && "search-box"}>
            {background && <div className="head">search</div>}
            <div className="search-logo">
              <input
                placeholder="search here"
                alt="search"
                type="text"
                className="search-input"
                onClick={() => setBackground(true)}
              />
              <div className="close" onClick={() => setBackground(false)}>
                X
              </div>
            </div>
            {background && (
              <div className="contents">
                {data.map((data) => (
                  <div className="content"> {data}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="des">OR If you know what you want to shop</div>
      <div className="filter-section">
        <img src={LeftFilter} alt="left" className="image" />
        <div className="filter-part">
          <span>I’m looking for</span>
          <div
            className={` ${backgroundBrand ? "search-part" : "maintain-width"}`}
          >
            <div className={backgroundBrand && "search-box"}>
              {backgroundBrand && <div className="head">search</div>}
              <div className="search-logo">
                <input
                  placeholder="Brand"
                  alt="search"
                  type="text"
                  className={`search-input-brand ${
                    !backgroundBrand && "input"
                  }`}
                  onClick={() => setBackgroundBrand(true)}
                />
                <div
                  className="close"
                  onClick={() => setBackgroundBrand(false)}
                >
                  X
                </div>
              </div>
              {backgroundBrand && (
                <div className="contents">
                  {data.map((data) => (
                    <div className="content"> {data}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span style={{ margin: "0 0 0 20px" }}>with</span>
          <div
            className={` ${backgroundBrand ? "search-part" : "maintain-width"}`}
          >
            <div className={backgroundBrand && "search-box"}>
              {backgroundBrand && <div className="head">search</div>}
              <div className="search-logo">
                <input
                  placeholder="Him/Her"
                  alt="search"
                  type="text"
                  className={`search-input-brand ${
                    !backgroundBrand && "input"
                  }`}
                  onClick={() => setBackgroundBrand(true)}
                />
                <div
                  className="close"
                  onClick={() => setBackgroundBrand(false)}
                >
                  X
                </div>
              </div>
              {backgroundBrand && (
                <div className="contents">
                  {data.map((data) => (
                    <div className="content"> {data}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <span style={{ padding: "0 0 0 20px" }}>of</span>
          <div
            className={` ${backgroundColor ? "search-part" : "maintain-width"}`}
          >
            <div className={backgroundColor && "search-box"}>
              {backgroundColor && <div className="head">search</div>}
              <div className="search-logo">
                <input
                  placeholder="Color"
                  alt="search"
                  type="text"
                  className={`search-input-brand ${
                    !backgroundColor && "input"
                  }`}
                  onClick={() => setBackgroundColor(true)}
                />
                <div
                  className="close"
                  onClick={() => setBackgroundColor(false)}
                >
                  X
                </div>
              </div>
              {backgroundColor && (
                <div>
                  <input
                    placeholder="Enter HEX Code            #000000"
                    type="text"
                    className="color-input"
                  />
                  <div className="color-collection">
                    {[1, 2, 3, 3, 4, , 5, 6, 7, 7, 8, 8, 9, 9, , 0, 0].map(
                      (_) => {
                        return (
                          <div
                            style={{
                              background: "black",
                              height: "20px",
                              width: "20px",
                            }}
                          ></div>
                        );
                      }
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <span>with a</span>
          <div
            className={` ${
              backgroundPriceRange ? "search-part" : "maintain-width"
            }`}
          >
            <div className={backgroundPriceRange && "range-box"}>
              {backgroundPriceRange && <div className="head">set</div>}
              <div className="search-logo">
                <input
                  placeholder="Price Range"
                  alt="search"
                  type="text"
                  className={`search-input-brand ${
                    !backgroundPriceRange && "input"
                  }`}
                  onClick={() => setBackgroundPriceRange(true)}
                />
                <div
                  className="close"
                  onClick={() => setBackgroundPriceRange(false)}
                >
                  X
                </div>
              </div>
              {backgroundPriceRange && (
                <div className="range">
                  <div>SET RANGE</div>
                  <div className="range-shower">
                    <div>Rs. 100</div>
                    <div>Rs. 10,00,000</div>
                  </div>
                  <div>
                    <Slider defaultValue={30} min={100} max={10000} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <img src={RightFilter} alt="right" className="image2" />
      </div>
    </WannaShopWrapper>
  );
};

export default WannaShop;
