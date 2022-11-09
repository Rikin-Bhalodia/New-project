import React from "react";
import styled from "styled-components";
import LeftFilter from "../../assets/images/aboutpage/left-filter.svg";
import RightFilter from "../../assets/images/aboutpage/right-filter.svg";

const ServiceYellowBarWrapper = styled.div`
  background: #ffe600;
  height: 180px;
  margin-top: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .image {
    position: absolute;
    left: 0;
    top: 0;
  }
  .image2 {
    position: absolute;
    right: 0;
    top: 0;
    opacity: 1;
  }
  .content-head {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    text-transform: uppercase;
    position: relative;
    z-index: 9;
  }
  .note {
    position: absolute;
    bottom: 20px;
    right: 200px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    opacity: 2;
    text-transform: uppercase;
    z-index: 9;
  }
`;

const ServiceYellowBar = ({ content, note }) => {
  return (
    <ServiceYellowBarWrapper>
      <img
        src={LeftFilter}
        alt="left"
        className="image"
        width={600}
        height={180}
      />
      <div className="content-head">{content}</div>
      <div className="note">{note}</div>
      <img
        src={RightFilter}
        alt="right"
        className="image2"
        width={600}
        height={180}
      />
    </ServiceYellowBarWrapper>
  );
};

export default ServiceYellowBar;
