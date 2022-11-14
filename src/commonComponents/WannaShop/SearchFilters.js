import { Slider } from "antd";
import React from "react";
import styled from "styled-components";

const SearchFiltersWrapper = styled.div`
  .input {
    width: 210px !important;
    z-index: 9999;
    margin-left: 15px;
    position: relative;
    color: white;
    ::placeholder {
      color: white;
      opacity: 1;
    }
  }
  .search-input-brand {
    width: 340px;
    background: transparent;
    padding-bottom: 10px;
    border-bottom: 1px solid white !important;
    font-style: italic;
    border: none;
    color: #a75b41;
    z-index: 99;
    font-size: 33px;
  }
  .contents {
    margin-top: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
  }
  .maintain-width {
    width: 210px;
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
  .close {
    position: relative;
    top: 18px;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
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
  @media screen and (max-width: 800px) {
    .search-input-brand {
      font-size: 31px;
      width: 280px;
    }
  }
  @media screen and (max-width: 670px) {
    .search-input-brand {
      font-size: 31px;
      width: 200px;
    }
  }
  @media screen and (max-width: 500px) {
    .search-input-brand {
      font-size: 28px;
    }
  }
`;

const SearchFilters = ({ background, setBackground, type, data }) => {
  return (
    <SearchFiltersWrapper>
      <div
        className={` ${background === type ? "search-part" : "maintain-width"}`}
      >
        <div className={background === type && "search-box"}>
          {background === type && <div className="head">search</div>}
          <div className="search-logo">
            <input
              placeholder={type}
              alt="search"
              type="text"
              className={`search-input-brand ${
                !(background === type) && "input"
              }`}
              onClick={() => setBackground(type)}
            />
            {background === type && (
              <div className="close" onClick={() => setBackground("")}>
                X
              </div>
            )}
          </div>
          {background === type && type !== "Color" && type !== "Price Range" && (
            <div className="contents">
              {data.map((data) => (
                <div className="content"> {data}</div>
              ))}
            </div>
          )}
          {background === type && type === "Color" && (
            <div>
              <input
                placeholder="Enter HEX Code            #000000"
                type="text"
                className="color-input"
              />
              <div className="color-collection">
                {[1, 2, 3, 3, 4, , 5, 6, 7, 7, 8, 8, 9, 9, , 0, 0].map((_) => {
                  return (
                    <div
                      style={{
                        background: "black",
                        height: "20px",
                        width: "20px",
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
          {background === type && type === "Price Range" && (
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
    </SearchFiltersWrapper>
  );
};

export default SearchFilters;
