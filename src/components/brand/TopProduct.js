import React, { useState } from "react";
import styled from "styled-components";
import ProductImg from "../../assets/images/brand/productImg.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
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
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  @media (max-width: 1100px) {
    margin: 30px 30px;
    .product-image {
      height: 200px;
    }
    .grid {
      display: flex;
      justify-content: center;
      .body .cad {
        gap: 0;
        .cad-head .new {
          padding: 5px 15px;
          font-size: 16px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    .product-image {
      height: 150px;
    }
    .grid {
      margin: 50px 50px;
      justify-content: space-between;
      .body .cad {
        gap: 0;
        .cad-head .new {
          padding: 5px 10px;
          font-size: 14px;
        }
        .cad-footer h6 {
          font-size: 12px;
          padding: 5px 15px;
        }
      }
    }
  }
  @media (max-width: 650px) {
    .product-image {
      height: 120px;
      width: 150px;
    }
    .grid {
      margin: 30px 0;
      .body .cad {
        padding: 10px 30px;
        .cad-head .new {
          padding: 5px 6px;
          font-size: 12px;
        }
        .cad-footer h6 {
          font-size: 12px;
          padding: 5px 15px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .product-image {
      height: 100px;
      width: 120px;
    }
    .grid {
      margin: 20px 0;
      .body .cad {
        padding: 10px 30px;
        .cad-head .new {
          font-size: 10px;
        }
        .cad-footer h6 {
          font-size: 10px;
        }
      }
    }
  }
  @media (max-width: 450px) {
    .product-image {
      height: 90px;
      width: 100px;
    }
    .grid {
      .body .cad {
        padding: 10px 30px;
      }
    }
  }
  @media (max-width: 400px) {
    .product-image {
      height: 80px;
      width: 80px;
    }
    .grid {
      .body .cad {
        padding: 10px 10px;
        .cad-head {
          .new {
            left: -10px;
          }
        }
        .cad-footer h6 {
          font-size: 9px;
        }
      }
    }
  }
`;

const TopProduct = () => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <TopProductWrapper>
      <motion.div className="grid">
        {(isResponsive ? [1, 2] : [1, 2, 3]).map((_) => {
          return (
            <div className="body">
              <motion.div
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "90deg" }}
                animate={
                  isInView && {
                    y: 0,
                    rotateY: "0deg",
                    transition: {
                      duration: 1,
                    },
                  }
                }
                className="cad"
              >
                <div className="cad-head">
                  <div className="new">NEW!</div>
                  <a href="">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="cad-body">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    loading="lazy"
                    src={ProductImg}
                    alt=""
                    className="product-image"
                  />
                </div>
                <div className="cad-footer">
                  <small>FENDI</small>
                  <h6>PADLOCK WOOL BLAZER</h6>
                  <p>
                    <b>MRP</b> &nbsp; ₹87,950.00
                  </p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </TopProductWrapper>
  );
};

export default TopProduct;
