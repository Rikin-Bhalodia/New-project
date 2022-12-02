import React from "react";
import styled from "styled-components";
import ProductSelectionCommon from "../../../commonComponents/ProductSelectionCommon";
import YouMayLike from "../../../commonComponents/ProductSelectionCommon/YouMayLike";
import rentItText from "../../../assets/images/product-section/rent-it-text.svg";

import AboutProduct from "../../product-section/AboutProduct";
import ReletedServices from "../../studio-product/RelatedSrevices";

const NFTProductSelectionWrapper = styled.div`
  .last--text div {
    align-self: center;
    font-family: "Coral Blush";
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  @media (max-width: 800px) {
    .last--text {
      margin-top: 40px;
      padding: 0 20px;
      div {
        font-size: 30px;
      }
      img {
        width: 200px;
      }
    }
  }
  @media (max-width: 670px) {
    .last--text {
      div {
        font-size: 26px;
      }
      img {
        width: 170px;
      }
    }
  }
  @media (max-width: 600px) {
    .last--text {
      div {
        font-size: 22px;
      }
      img {
        width: 150px;
      }
    }
  }
  @media (max-width: 450px) {
    .last--text {
      margin-top: 20px;
      div {
        font-size: 16px;
      }
      img {
        width: 100px;
      }
    }
  }
`;

const NFTProductSelection = () => {
  return (
    <NFTProductSelectionWrapper>
      <ProductSelectionCommon />
      <AboutProduct />
      <YouMayLike />
      <ReletedServices />
      <div className="last--text d-flex justify-content-center">
        <div>thinking of buying for an occassion?</div>
        <img loading="lazy" src={rentItText} alt="" />
      </div>
    </NFTProductSelectionWrapper>
  );
};

export default NFTProductSelection;
