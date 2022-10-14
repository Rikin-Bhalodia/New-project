import React from "react";
import styled from "styled-components";
import BannerImage from "./assets/images/studio/banner.svg";

const BannerWrapper = styled.div`
  .banner-image {
    mix-blend-mode: normal;
    opacity: 0.9;
    width: 100%;
    height: 1000px;
  }
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={BannerImage} alt="banner" className="banner-image" />
    </BannerWrapper>
  );
};

export default Banner;
