import React, { useState } from "react";
import Product1 from "../../assets/images/product/product1.svg";
import Product2 from "../../assets/images/product/product2.svg";
import Product3 from "../../assets/images/product/product3.svg";
import Product4 from "../../assets/images/product/product4.svg";
import Product5 from "../../assets/images/product/product5.svg";
import FooterImage from "../../assets/images/product/footer.svg";
import styled from "styled-components";
import Filters from "../../commonComponents/Filters";

const ProductPoPWrapper = styled.div`
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
  .image {
    position: absolute;
    left: 0;
  }
  .image2 {
    position: absolute;
    right: 0;
  }
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
  @media screen and (max-width: 1000px) {
    .heading {
      font-size: 60;
    }
  }
`;

const images = [
  {
    img: Product1,
    id: 1,
    height: 310,
    width: "25%",
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product2,
    id: 2,
    height: 450,
    width: "50%",
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 3,
    height: 310,
    width: "25%",
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 4,
    height: 310,
    class: "product-image",
    price: "₹1900",
    width: "25%",
  },
  {
    img: Product4,
    id: 5,
    height: 450,
    width: "50%",
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product5,
    id: 6,
    height: 310,

    class: "product-image",
    price: "₹1900",

    width: "25%",
  },
  {
    img: Product2,
    id: 7,
    height: 450,
    width: "50%",
    class: "product-image1",
    price: "₹1900",
  },
  {
    img: Product4,
    id: 8,
    height: 450,
    width: "50%",
    class: "product-image1",
    price: "₹1900",
  },
  {
    img: Product1,
    id: 9,
    height: 310,
    width: "33.33%",
    class: "product-image",
    price: "₹1900",
  },
  {
    img: Product3,
    id: 10,
    height: 310,

    class: "product-image",
    price: "₹1900",

    width: "33.33%",
  },
  {
    img: Product5,
    id: 11,
    height: 310,
    width: "33.33%",
    class: "product-image",
    price: "₹1900",
  },
];

const FiltersName = [
  { name: "MOOD", option: ["Dry Food", "Wet Food"] },
  { name: "FRAGRANCE", option: ["Veg", "Non-veg"] },
  {
    name: "PURPOSE",
    option: [
      "Acana",
      "Arden Grange",
      "BRUNO'S WILD Essentials",
      "Canine Creek",
      "Chappi",
      "Cesar",
      "Drools",
      "Farmina",
      "Fish4Dogs",
    ],
  },
  { name: "TYPE", option: ["Cat", "Dog", "Others"] },
];

const ProductPoP = () => {
  const [productId, setProductId] = useState("");

  const handleClick = (id) => {
    setProductId(id);
  };
  return (
    <ProductPoPWrapper>
      <Filters FiltersName={FiltersName} />
      <div className="product">
        {images.map((ele) => {
          return (
            <div
              style={{
                width: ele.width,
                height: "fit-content",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                loading="lazy"
                src={ele.img}
                alt="img"
                height={ele.height}
                className={ele.class}
                onClick={() => handleClick(ele.id)}
                style={
                  productId
                    ? productId === ele.id
                      ? {
                          opacity: 1,
                          width: "70%",
                          maxWidth: "350px",
                          height: "100%",
                        }
                      : {
                          opacity: 0.5,
                          width: "70%",
                          maxWidth: "350px",
                          height: "100%",
                        }
                    : {
                        opacity: 1,
                        width: "70%",
                        maxWidth: "350px",
                        height: "100%",
                      }
                }
              />
            </div>
          );
        })}
      </div>
      <div>
        <img
          loading="lazy"
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
