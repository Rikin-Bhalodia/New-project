import React from "react";
import styled from "styled-components";
import smallProduct from "../../assets/images/studio-product/small-product.svg";
import bigProduct from "../../assets/images/studio-product/big-product.svg";
import productHead from "../../assets/images/studio-product/product-head.svg";
import SP from "../../assets/images/studio-product/s-p.svg";
import Polygon from "../../assets/images/polygon-right.svg";

const SimillerProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 150px 0;
  padding: 0 0 0 100px;
  position: relative;
  .polygon-right {
    position: absolute;
    height: 1000px;
    z-index: -1;
    right: 0;
  }
  .simillier-leftpart {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
    .simillier-img {
      position: relative;

      div {
        position: absolute;
        top: -57px;
        left: -36px;
      }
      p {
        font-size: 25px;
        font-weight: 600;
      }
    }
    .simillier-btn {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .btn-top {
        display: flex;
        align-items: center;
        gap: 20px;
        p {
          font-size: 18px;
          margin-bottom: 0;
          font-weight: 600;
        }
        .btn1 {
          background: #ffffff;
          border: 1px solid #a75b41;
          border-radius: 79px;
          padding: 1rem 3rem;
          text-transform: uppercase;
          font-weight: 700;
          color: #a75b41;
          text-align: center;
          transition: all 0.4s linear;
        }

        .btn1:hover {
          background: #a75b41;
          color: #fff;
        }

        .btn2 {
          background: #a75b41;
          border-radius: 46px;
          padding: 1rem 3rem;
          text-transform: uppercase;
          text-align: center;
          color: #ffffff;
          border: 1px solid #a75b41;
          transition: all 0.4s linear;
        }
        .btn2:hover {
          background: #fff;
          color: #a75b41;
        }
      }
      .btn-bottom {
        .btn3 {
          background: #665e2f;
          border-radius: 46px;
          padding: 1rem 3rem;
          text-transform: uppercase;
          text-align: center;
          color: #ffffff;
          border: 1px solid #665e2f;
          transition: all 0.4s linear;
        }

        .btn3:hover {
          background: #fff;
          color: #665e2f;
        }
      }
    }
  }
  .simillier-rightpart {
    .simillier-head {
    }
    .simillier-body {
      .product-box {
        display: flex;
        align-items: center;
        gap: 30px;
        .right-data {
          h5 {
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: #665e2f;
          }
          p {
            width: 60%;
            font-weight: 700;
            font-size: 13px;
            line-height: 15px;
            color: #a65a40;
            padding: 10px 0 40px;
          }
          h6 {
            font-weight: 400;
            font-size: 20px;
            line-height: 22px;
            color: #665e2f;
          }
        }
      }
    }
  }
`;

export default function SimillerProduct() {
  return (
    <SimillerProductWrapper>
      <img src={Polygon} alt="" className="polygon-right" />
      <div className="simillier-leftpart">
        <div className="simillier-img">
          <div>
            <img src={productHead} alt="" />
          </div>
          <img src={bigProduct} alt="" />
          <p>₹ 1890</p>
        </div>
        <div className="simillier-btn">
          <div className="btn-top">
            <a href="/" className="btn1">
              ADD TO CART
            </a>
            <p>or</p>
            <a href="" className="btn2">
              RENT IT
            </a>
          </div>
          <div className="btn-bottom">
            <a href="" className="btn3">
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
      <div className="simillier-rightpart">
        <div className="simillier-head">
          <img src={SP} alt="" />
        </div>
        <div className="simillier-body">
          {[1, 2, 3].map((_) => {
            return (
              <div className="product-box">
                <div className="right-img">
                  <img src={smallProduct} alt="" />
                </div>
                <div className="right-data">
                  <h5>product 1</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h6>Rs. 1890</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SimillerProductWrapper>
  );
}
