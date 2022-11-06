import React, { useState } from "react";
import styled from "styled-components";
import LeftFilter from "../../assets/images/product/left-filter.svg";
import RightFilter from "../../assets/images/product/right-filter.svg";
import SearchFilters from "./SearchFilters";

const WannaShopWrapper = styled.div`
  .middle-part {
    display: flex;
    width: 100%;
    gap: 30px;
    align-items: center;
    justify-content: center;
  }

  .search-part {
    position: relative;
    top: -80px;
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
  .head {
    text-transform: uppercase;
    align-self: flex-start;
    font-size: 16px;
  }
  .search-logo {
    display: flex;
    margin-right: 20px;
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

  input:focus {
    outline-offset: 0px;
    outline: none;
  }

  .filter-part {
    display: flex;
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
  const [searchBackground, setSearchBackground] = useState(false);

  return (
    <WannaShopWrapper>
      <div className="middle-part">
        <div className="heading">I WANNA SHOP</div>
        <div className={searchBackground && "search-part"}>
          <div className={searchBackground && "search-box"}>
            {searchBackground && <div className="head">search</div>}
            <div className="search-logo">
              <input
                placeholder="search here"
                alt="search"
                type="text"
                className="search-input"
                onClick={() => setSearchBackground(true)}
              />
              {searchBackground && (
                <div
                  className="close"
                  onClick={() => setSearchBackground(false)}
                >
                  X
                </div>
              )}
            </div>
            {searchBackground && (
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
          <SearchFilters
            type="Brand"
            setBackground={setBackground}
            background={background}
            css="search-box"
            data={data}
          />

          <span style={{ margin: "0 0 0 20px" }}>with</span>
          <SearchFilters
            type="Him/Her"
            setBackground={setBackground}
            background={background}
            css="search-box"
            data={data}
          />

          <span style={{ padding: "0 0 0 20px" }}>of</span>
          <SearchFilters
            type="Color"
            setBackground={setBackground}
            background={background}
            css="search-box"
            data={data}
          />
        </div>
        <div style={{ display: "flex" }}>
          <span>with a</span>
          <SearchFilters
            type="Price Range"
            setBackground={setBackground}
            background={background}
            css="range-box"
            data={data}
          />
        </div>
        <img src={RightFilter} alt="right" className="image2" />
      </div>
    </WannaShopWrapper>
  );
};

export default WannaShop;
