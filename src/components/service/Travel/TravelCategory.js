import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import TopTrandingCard from "../Common/TopTrandingCard";
import YellowBarContent from "../Common/YellowBarContent";
import CommonHeaderPart from "./CommonHeaderPart";

const ServiceTravelWrapper = styled.div`
  width: 100%;

  .title {
    padding-top: 100px;
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 76px;
    display: flex;
    justify-content: center;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px;
    margin: 40px 100px;
  }
`;

const ServiceTravelCategory = ({ name }) => {
  return (
    <ServiceTravelWrapper>
      <CommonHeaderPart />
      <div className="title">
        <AnimatedTextWord text={name} />
      </div>
      <div className="cards">
        {[1, 2, 3, 445, 6, 7, 7, 8, 8, 9, , 9, 0].map((_) => {
          return <TopTrandingCard />;
        })}
      </div>
      <YellowBarContent requiredPersonalAssistance={false} />
    </ServiceTravelWrapper>
  );
};

export default ServiceTravelCategory;
