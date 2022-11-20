import React, { useState } from "react";
import styled from "styled-components";
import Price from "../../../assets/images/service/gift-for-him/price.svg";
import { motion } from "framer-motion";

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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    width: 100%;
    gap: 50px;
    margin: 80px 0;
  }
`;

const Product = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <ProductWrapper>
      <motion.div className="products">
        {[1, 1, 1].map((_) => {
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
                height={250}
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
