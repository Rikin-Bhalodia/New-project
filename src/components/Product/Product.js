import React, { useState } from "react";
import Product1 from "../../assets/images/product/product1.svg";
import Product2 from "../../assets/images/product/product2.svg";
import Product3 from "../../assets/images/product/product3.svg";
import Product4 from "../../assets/images/product/product4.svg";
import Product5 from "../../assets/images/product/product5.svg";
import FooterImage from "../../assets/images/product/footer.svg";
import DownArrow from "../../assets/images/product/down-arrow.svg";
import styled from "styled-components";

const ProductPoPWrapper = styled.div`
  margin-top: 100px;
  .goback {
    margin-left: 40px;
    display: flex;
  }
  .heading {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
  }
  .middle-part {
    display: flex;
    width: 100%;
    gap: 30px;
    align-items: center;
    justify-content: center;
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
  .search-input-brand {
    width: 340px;
    background: transparent;
    padding-bottom: 10px;
    border-bottom: 1px solid #a75b41 !important;
    font-style: italic;
    border: none;
    color: #a75b41;
    font-size: 33px !important;
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
  /* select {
    width: 210px;
    background: transparent;
    border-bottom: 1px solid #fff !important;
    margin-left: 10px;
    font-style: italic;
    border: none;
    font-size: 33px !important;
  } */
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
  .contents {
    margin-top: 20px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
  }
  .head {
    text-transform: uppercase;
    align-self: flex-start;
    font-size: 16px;
  }
  .search-part {
    position: relative;
    top: -80px;
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
  input:focus {
    outline-offset: 0px;
    outline: none;
  }
  .close {
    position: relative;
    right: 15px;
    top: 35px;
    color: #a75b41;
    font-weight: 800;
    font-size: 18px;
    cursor: pointer;
  }
  .close-color {
    color: "white";
  }
  .search-logo {
    display: flex;
    margin-right: 20px;
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
  .maintain-width {
    width: 210px;
  }
  .filter-part {
    display: flex;
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
`;

const images = [
  {
    img: Product1,
    id: 1,
    height: 280,
    width: 200,
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product2,
    id: 2,
    height: 450,
    width: 300,
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 3,
    height: 280,
    width: 200,
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 4,
    height: 280,
    class: "product-image",
    price: "₹1900",
    width: 200,
  },
  {
    img: Product4,
    id: 5,
    height: 450,
    width: 300,
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product5,
    id: 6,
    height: 280,

    class: "product-image",
    price: "₹1900",

    width: 200,
  },
  {
    img: Product2,
    id: 7,
    height: 450,
    width: 300,
    class: "product-image1",
    price: "₹1900",
  },
  {
    img: Product4,
    id: 8,
    height: 450,
    width: 300,
    class: "product-image1",
    price: "₹1900",
  },
  {
    img: Product1,
    id: 9,
    height: 280,
    width: 200,
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 10,
    height: 280,

    class: "product-image",
    price: "₹1900",

    width: 200,
  },
  {
    img: Product5,
    id: 11,
    height: 280,
    width: 200,
    class: "product-image",
    price: "₹1900",
  },
];

// const data = ["halter dress", "strapless dress", "versace dress"];
const options = [
  "Featured",
  "Bestsellers",
  "Price : Low to High",
  "Price : High to Low",
];

const ProductPoP = () => {
  const [productId, setProductId] = useState("");

  const handleClick = (id) => {
    setProductId(id);
  };
  return (
    <ProductPoPWrapper>
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
      <div className="product">
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
      </div>
    </ProductPoPWrapper>
  );
};

export default ProductPoP;
