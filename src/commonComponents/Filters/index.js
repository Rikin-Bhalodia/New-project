import { Slider } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import DownArrow from "../../assets/images/product/down-arrow.svg";
import Search from "../../assets/images/service/gift-for-him/seach-icon.svg";

const FiltersWrapper = styled.div`
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
    height: 30px;
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
    position: absolute;
    z-index: 99;
    background: #fff;
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
    width: 100%;
    justify-content: space-between;
    padding: 0 50px 0 70px;
  }
  .mood {
    border: 1px solid #d0d0d0;
    border-radius: 33px;
    width: 156px;
    height: 52px;
    font-size: 14px;
    padding-left: 15px;
    display: flex;
    align-items: center;
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
    row-gap: 30px;
    border: 1px solid #000000;
    border-radius: 50px;
    padding: 20px 20px;
    background: #fff;
    z-index: 99;
    margin-left: -71px;
    position: absolute;
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
    flex-wrap: wrap;
    position: relative;
    float: right;
    justify-content: center;
  }
  .range {
    display: flex;
    flex-direction: column;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    margin-top: -15px;
    letter-spacing: -0.408px;
  }
  .range-shower {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
  .options {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    row-gap: 10px;
  }
  .options::-webkit-scrollbar {
    width: 5px;
    border-radius: 35px;
  }

  .options::-webkit-scrollbar-track {
    background: #e7eef5;
  }

  .options::-webkit-scrollbar-thumb {
    background: #665e2f;
    border-radius: 35px;
  }

  .options::-webkit-scrollbar-thumb:hover {
    background: #0b5494a9;
  }
  .sort-by-drop {
    position: relative;
  }
  @media screen and (max-width: 670px) {
    .filter {
      padding: 20px;
    }
    .drop-down-right {
      justify-content: end;
      margin: 0;
    }
    .drop-down {
      width: 150px;
    }
  }
  @media screen and (max-width: 550px) {
    .drop-down {
      width: 110px;
    }
    .sort-by {
      font-size: 12px;
    }
    .mood {
      height: 40px;
      font-size: 10px;
    }
  }
`;

const options = [
  "Featured",
  "Bestsellers",
  "Price : Low to High",
  "Price : High to Low",
];

const Filters = ({ FiltersName }) => {
  const [id, setId] = useState("");
  const [flag, setFlag] = useState(false);

  return (
    <FiltersWrapper>
      <div className="filter">
        <div className="sort-by-drop">
          <div className="drop-down" onClick={() => setFlag(!flag)}>
            <div className="sort-by">Sort By</div>
            <img
              src={DownArrow}
              alt="arrow"
              className="arrow"
              style={id ? { fill: " #a75b41" } : { fill: "white" }}
            />
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
          {FiltersName.map((data, i) => {
            return (
              <div>
                <div
                  className="drop-down right"
                  onClick={() => setId(id === i ? "" : i)}
                >
                  <div
                    className="mood"
                    style={
                      i === id
                        ? { background: "#a75b41", color: "#fff" }
                        : { background: "white", color: "#989898" }
                    }
                  >
                    {data.name}
                  </div>
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
                    <div className="options">
                      {data.option.map((option) => {
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
                    <div>
                      {i === id && data.range && (
                        <div className="range">
                          <div>{data.range}</div>
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </FiltersWrapper>
  );
};

export default Filters;
