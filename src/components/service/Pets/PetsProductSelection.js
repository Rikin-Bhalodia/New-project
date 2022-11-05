import React, { Suspense } from "react";
import styled from "styled-components";
import AboutProduct from "../../product-section/AboutProduct";
import { ReviewSlider } from "../Grooming/ReviewSlider";
import Text from "../../../assets/images/service/pets-product-selection/text.svg";
import Image1 from "../../../assets/images/service/pets-product-selection/image1.svg";
import Image2 from "../../../assets/images/service/pets-product-selection/image2.svg";

const ProductSelectionCommon = React.lazy(() =>
  import("../../../commonComponents/ProductSelectionCommon")
);
const ReletedServices = React.lazy(() =>
  import("../../studio-product/RelatedSrevices")
);
const YellowBarContent = React.lazy(() => import("../Common/YellowBarContent"));

const PetsProductSelectionWrapper = styled.div`
  .review {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    color: #665e2f;
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .text-img {
    margin-top: 50px;
    width: 40%;
    margin-left: 40px;
  }
  .images {
    border-radius: 70%;
  }
  .products {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin-left: 40px;
    align-items: center;
  }
  .plus-icon {
    font-weight: 400;
    font-size: 96px;
  }
  .prices {
    font-family: "Arial";
    font-style: normal;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  .btn {
    width: 180px;
    height: 50px;
    background: #ffffff;
    border: 2px solid #a75b41;
    border-radius: 0px 79px 79px 0px;
    margin-top: 15px;
    font-weight: 700;
    font-size: 18px;
    color: #a75b41;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .total {
    display: flex;
    gap: 10px;
  }
  .total-price {
    font-size: 13px;
    font-weight: 700;
  }
  .mrp {
    text-decoration-line: line-through;
    color: #cfc9c9;
    font-weight: 700;
    font-size: 14px;
  }
  .discount-mrp {
    color: #a75b41;
    font-weight: 700;
    font-size: 13px;
  }
  .input-checkbox {
    margin-left: 40px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  .checkbox {
    height: 18px;
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  .discount {
    font-weight: 700;
    font-size: 16px;
    margin-left: 10px;
  }
`;

const PetsProductSelection = () => {
  return (
    <PetsProductSelectionWrapper>
      <Suspense fallback="Loading...">
        <ProductSelectionCommon />
        <img src={Text} alt="text" loading="lazy" className="text-img" />
        <div className="products">
          <img
            src={Image1}
            alt="cart-product"
            loading="lazy"
            className="images"
          />
          <div className="plus-icon">+</div>
          <img
            src={Image2}
            alt="cart-product"
            loading="lazy"
            className="images"
          />
          <div className="prices">
            <div className="total">
              <div className="total-price">TOTAL PRICE:</div>
              <div className="mrp">₹1,725.00</div>
              <div className="discount-mrp">₹1,638.75</div>
            </div>
            <div className="btn">ADD TO CART</div>
          </div>
        </div>
        <div className="input-checkbox">
          <div>
            <input
              type="checkbox"
              id="fruit"
              name="fruit"
              value="fruit"
              className="checkbox"
            />
            <label
              for="fruit"
              style={{
                cursor: "pointer",
              }}
            >
              This item: Versele Laga Food for Parrots - Exotic Fruit{" "}
              <span className="mrp">₹990.00</span>
              <span className="discount">₹940.50</span>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="food"
              name="food"
              value="food"
              className="checkbox"
            />
            <label
              for="food"
              style={{
                cursor: "pointer",
              }}
            >
              Versele Laga Food for Parrots - Prestige
              <span className="mrp">₹735.00</span>
              <span className="discount">₹698.25</span>
            </label>
          </div>
        </div>
        <AboutProduct />
        <div className="review">REVIEWS</div>
        <ReviewSlider
          background="transparent"
          color="#00000"
          des="#A75A40"
          border="1px solid #665E2F"
        />
        <ReletedServices />
        <YellowBarContent requiredPersonalAssistance={true} />
      </Suspense>
    </PetsProductSelectionWrapper>
  );
};

export default PetsProductSelection;
