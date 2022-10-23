import React from "react";
import styled from "styled-components";
import Topproduct from "../../assets/images/brand/top-product.svg";
import ProductImg from "../../assets/images/brand/productImg.svg";

const TopProductWrapper = styled.div`
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

const TopProduct = () => {
  return (
    <TopProductWrapper>
      <div className="head text-center">
        <img src={Topproduct} alt="" />
      </div>
      <div className="grid">
        {[1, 2, 3, 4, 5, 6].map((_) => {
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
    </TopProductWrapper>
  );
};

export default TopProduct;
