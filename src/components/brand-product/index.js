import React from "react";
import styled from "styled-components";
import DownArrow from "../../assets/images/product/down-arrow.svg";
import Banner1 from "../../assets/images/brand-product/banner1.svg";
import Banner2 from "../../assets/images/brand-product/banner2.svg";
import ProductImg from "../../assets/images/brand/productImg.svg";
import FooterImage from "../../assets/images/product/footer.svg";

const BrandProductWrapper = styled.div`
  background: #fcf9f2;
  padding: 0 0 50px;
  input:focus {
    outline-offset: 0px;
    outline: none;
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
  .banner-section {
    .banner {
      width: 100%;
    }
    .img {
      position: relative;
      .inside-data {
        position: absolute;
        top: 0;
        .body {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 98vw;
          position: relative;
          padding-top: 80px;
          a {
            position: absolute;
            left: 50px;
            font-family: "Arial";
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-decoration: underline;
            color: #ffffff;
          }
          h2 {
            margin: auto;
            width: 50%;
            text-align: center;
            color: white;
            font-family: Coral-Blush;
            font-weight: 400;
            font-size: 160px;
            line-height: 179px;
            text-align: center;
            color: #ffffff;
          }
        }
        .footer {
          position: absolute;
          bottom: -100px;
          width: 98vw;
        }
      }
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin: 50px 100px;
    .body {
      .cad {
        padding: 20px 30px;
        background: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;
        .cad-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .new {
            background: #a75b41;
            border-radius: 0px 74px 74px 0px;
            font-family: "Arial";
            font-weight: 700;
            font-size: 20px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #ffffff;
            padding: 8px 20px;
            position: relative;
            left: -30px;
          }
          a {
            i {
              font-size: 20px;
            }
          }
        }
        .cad-body {
        }
        .cad-footer {
          h6 {
            padding: 10px 0 15px;
            font-family: "Arial";
            font-weight: 700;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.408px;
            text-transform: uppercase;
            color: #000000;
          }
          small {
            font-family: "Arial";
            font-weight: 400;
            font-size: 9px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #b0b0b0;
          }
          p {
            font-family: "Arial";
            font-weight: 700;
            font-size: 11px;
            line-height: 22px;
            letter-spacing: -0.408px;
            color: #000000;
          }
        }
      }
    }
  }
`;
const options = [
  "Featured",
  "Bestsellers",
  "Price : Low to High",
  "Price : High to Low",
];
const BrandProduct = () => {
  return (
    <BrandProductWrapper>
      <div className="banner-section">
        <img src={Banner1} alt="" className="banner" />
        <div className="img">
          <img src={Banner2} alt="" className="banner" />
          <div className="inside-data">
            <div className="body">
              <a href="">Go Back</a>
              <h2>FENDI</h2>
            </div>
            <div className="footer">
              <div className="filter">
                <div>
                  <div className="drop-down">
                    <div className="sort-by">Sort By</div>
                    <img src={DownArrow} alt="arrow" className="arrow" />
                  </div>
                  <div className="option-box">
                    {options.map((option) => {
                      return <div className="single-option">{option}</div>;
                    })}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    position: "relative",
                    width: "800px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div className="drop-down-right">
                    <div className="drop-down">
                      <div className="mood">MOOD</div>
                      <img src={DownArrow} alt="arrow" className="arrow" />
                    </div>
                    {/* <div className="option-box">
              {options.map((option) => {
                return <div className="single-option">{option}</div>;
              })}
            </div> */}
                  </div>
                  <div className="drop-down-right">
                    <div className="drop-down">
                      <div className="mood">FRAGRANCE</div>
                      <img src={DownArrow} alt="arrow" className="arrow" />
                    </div>
                    <div className="option-box-right">
                      {options.map((option) => {
                        return (
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
                        );
                      })}
                    </div>
                  </div>
                  <div className="drop-down-right">
                    <div className="drop-down">
                      <div className="mood">PURPOSE</div>
                      <img src={DownArrow} alt="arrow" className="arrow" />
                    </div>
                    {/* <div className="option-box">
              {options.map((option) => {
                return <div className="single-option">{option}</div>;
              })}
            </div> */}
                  </div>
                  <div className="drop-down-right">
                    <div className="drop-down">
                      <div className="mood">TYPE</div>
                      <img src={DownArrow} alt="arrow" className="arrow" />
                    </div>
                    <div className="option-box-right2">
                      {options.map((option) => {
                        return (
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
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((_) => {
          return (
            <div className="body">
              <div className="cad">
                <div className="cad-head">
                  <div className="new">NEW!</div>
                  <a href="">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="cad-body">
                  <img src={ProductImg} alt="" />
                </div>
                <div className="cad-footer">
                  <small>FENDI</small>
                  <h6>PADLOCK WOOL BLAZER</h6>
                  <p>
                    <b>MRP</b> &nbsp; ₹87,950.00
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <img
          src={FooterImage}
          alt="image"
          className="footer"
          style={{ width: "98vw" }}
        />
      </div>
    </BrandProductWrapper>
  );
};

export default BrandProduct;
