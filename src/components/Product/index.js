import React, { useState } from "react";
import BackArrow from "../../assets/images/product/back-arrow.svg";
import styled from "styled-components";
import Menu from "../../commonComponents/Menu";
import ProductPoP from "./Product";
import WannaShop from "../../commonComponents/WannaShop";

const ProductWrapper = styled.div`
  margin-top: 100px;
  .goback {
    margin-left: 40px;
    display: flex;
  }
  @media (max-width: 850px) {
    margin-top: 70px;
  }
`;

const Product = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <ProductWrapper>
      <div className="goback">
        <img src={BackArrow} alt="back-arrow" />
        <div>Go Back</div>
      </div>
      <WannaShop />
      <ProductPoP />
      {/* <div className="product">
        {images.map((ele) => {
          return (
            <>
              <img
                src={ele.img}
                alt="img"
                className={ele.class}
                height={ele.height}
                width={ele.width}
                onClick={() => handleClick(ele.id)}
                style={
                  productId
                    ? productId === ele.id
                      ? { opacity: 1 }
                      : { opacity: 0.5 }
                    : { opacity: 1 }
                }
              />
            </>
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
      </div> */}
    </ProductWrapper>
  );
};

export default Product;
