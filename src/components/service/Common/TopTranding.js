import React from "react";
import styled from "styled-components";
import { TopTrandingSlider } from "../../../slider";

const TopTrandingWrapper = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    text-align: center;
    text-transform: uppercase;
  }
`;
const TopTranding = ({ name, isRequiredBackground }) => {
  return (
    <TopTrandingWrapper
      style={
        isRequiredBackground
          ? {
              background: "#665e2f",
            }
          : {}
      }
    >
      <div
        className="top"
        style={isRequiredBackground ? { color: "#fff" } : { color: "#000" }}
      >
        {name}
      </div>
      <TopTrandingSlider />
      <button className="btn" style={{ marginBottom: "20px" }}>
        KNOW MORE
      </button>
    </TopTrandingWrapper>
  );
};

export default TopTranding;
