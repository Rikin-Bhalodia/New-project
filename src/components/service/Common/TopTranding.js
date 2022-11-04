import React from "react";
import styled from "styled-components";
import { TopTrandingSlider } from "../../../slider";

const TopTrandingWrapper = styled.div`
  background: #665e2f;
  width: 100%;
  height: 800px;
  margin-top: 70px;
  .top {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
const TopTranding = () => {
  return (
    <TopTrandingWrapper>
      <div className="top">top trending</div>
      <TopTrandingSlider />
    </TopTrandingWrapper>
  );
};

export default TopTranding;
