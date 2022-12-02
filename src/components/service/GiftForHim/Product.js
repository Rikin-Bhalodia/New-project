import React, { useState } from "react";
import styled from "styled-components";
import Price from "../../../assets/images/service/gift-for-him/price.svg";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ProductWrapper = styled.div`
  button {
    background: #ffffff;
    border: 1px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
    color: #a75b41;
    width: 220px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    height: 45px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    width: 100%;
    gap: 50px;
    margin: 60px 0;
  }
  .product-image {
    height: 220px;
  }
  @media (max-width: 1100px) {
    button {
      width: 200px;
      height: 45px;
      font-size: 18px;
    }
  }
  @media (max-width: 1000px) {
    .product-image {
      height: 210px;
    }
    button {
      width: 180px;
      height: 42px;
      font-size: 17px;
    }
  }
  @media (max-width: 750px) {
    margin: 0 50px;
    .product-image {
      height: 190px;
    }
    button {
      width: 160px;
      height: 38px;
      font-size: 16px;
    }
    .products {
      gap: 30px;
      margin: 60px 0;
    }
  }
  @media (max-width: 650px) {
    margin: 0 50px;
    .product-image {
      height: 160px;
    }
    button {
      width: 140px;
      height: 36px;
      font-size: 15px;
    }
    .products {
      gap: 25px;
      margin: 40px 0;
      font-size: 18px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 550px) {
    margin: 0 50px;
    .product-image {
      height: 120px;
    }
    button {
      width: 110px;
      height: 30px;
      font-size: 13px;
    }
    .products {
      column-gap: 40px;
      margin: 30px 0;
      font-size: 16px;
    }
    .price {
      font-size: 15px;
    }
    .product {
      row-gap: 10px;
    }
  }
`;

const Product = () => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 650px)" });

  return (
    <ProductWrapper>
      <motion.div className="products">
        {(isResponsive ? [1, 1] : [1, 1, 1]).map((_) => {
          return (
            <div className="product">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateX: "90deg" }}
                animate={
                  isInView && {
                    rotateX: 0,
                    transition: {
                      duration: 0.5,
                    },
                  }
                }
                src={Price}
                alt="price"
                className="product-image"
              />
              <div className="price">Price</div>
              <motion.button
                whileInView={() => {
                  setIsInView(true);
                }}
                initial={{ rotateY: "-90deg" }}
                animate={
                  isInView && {
                    rotateY: 0,
                    transition: {
                      duration: 1,
                    },
                  }
                }
              >
                ADD TO CART
              </motion.button>
            </div>
          );
        })}
      </motion.div>
    </ProductWrapper>
  );
};

export default Product;
