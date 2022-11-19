import React from "react";
import styled from "styled-components";
import LeftFilter from "../../assets/images/aboutpage/left-filter.svg";
import RightFilter from "../../assets/images/aboutpage/right-filter.svg";
import AnimatedTextWord from "../Animation/FlipAnimation";

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
    color: #000;
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
  @media (max-width: 1200px) {
    .image {
      left: -10%;
    }
    .image2 {
      right: -10%;
    }
  }
  @media (max-width: 1000px) {
    .image {
      left: -25%;
    }
    .image2 {
      right: -25%;
    }
    .content-head {
      font-size: 48px;
    }
  }
  @media (max-width: 1000px) {
    .image {
      left: -30%;
      height: 160px;
    }
    .image2 {
      right: -30%;
      height: 160px;
    }
    .content-head {
      font-size: 42px;
    }
  }
  @media (max-width: 800px) {
    height: 150px;
    .image {
      left: -40%;
      height: 150px;
    }
    .image2 {
      right: -40%;
      height: 150px;
    }
    .content-head {
      font-size: 36px;
    }
    .note {
      font-size: 11px;
      right: 80px;
    }
  }
  @media (max-width: 600px) {
    height: 130px;
    .image {
      left: -65%;
      height: 130px;
    }
    .image2 {
      right: -65%;
      height: 130px;
    }
    .content-head {
      font-size: 30px;
    }
    .note {
      font-size: 10px;
      right: 50px;
    }
  }
  @media (max-width: 450px) {
    height: 110px;
    .image {
      left: -85%;
      height: 110px;
    }
    .image2 {
      right: -85%;
      height: 110px;
    }
    .content-head {
      font-size: 25px;
    }
    .note {
      font-size: 8px;
      right: 20px;
    }
  }
`;

const ServiceYellowBar = ({ content, note }) => {
  return (
    <ServiceYellowBarWrapper>
      <img
        loading="lazy"
        src={LeftFilter}
        alt="left"
        className="image"
        width={600}
        height={180}
      />
      <div className="content-head">
        <AnimatedTextWord text={content} />
      </div>
      <div className="note">
        <AnimatedTextWord text={note} />
      </div>
      <img
        loading="lazy"
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
