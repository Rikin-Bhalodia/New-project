import React from "react";
import styled from "styled-components";
import youMayLike from "../../assets/images/product-section/you-may-like.svg";
import likeProduct1 from "../../assets/images/product-section/like-product-sample1.svg";

const YouMayLikeWrapper = styled.div`
  .you-also-like--container {
    margin: 106px 81px 67px;
  }
  .you-also-like--container .like-text {
    padding-bottom: 62px;
  }
`;

const YouMayLike = () => {
  return (
    <YouMayLikeWrapper>
      {" "}
      <section className="you-also-like--container">
        <div className="like-text">
          <img src={youMayLike} alt="" />
        </div>
        <div className="d-flex justify-content-between">
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
          <img src={likeProduct1} alt="" />
        </div>
      </section>
    </YouMayLikeWrapper>
  );
};

export default YouMayLike;
