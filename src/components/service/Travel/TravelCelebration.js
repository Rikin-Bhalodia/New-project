import React from "react";
import styled from "styled-components";
import WannaShop from "../../../commonComponents/WannaShop";
import { Places } from "../../../utils";
import TopTranding from "../Common/TopTranding";
import YellowBarContent from "../Common/YellowBarContent";
import CommonHeaderPart from "./CommonHeaderPart";
import Inspire from "./Inspire";
import RadioButton from "./RadioButton";

const TravelCelebrationWrapper = styled.div`
  .manage-radio-btn {
    display: flex;
    justify-content: space-between;
    margin: 100px 400px 0 400px;
    gap: 200px;
  }
  .places {
    display: flex;
    flex-wrap: wrap;
    margin: 70px 0px;
  }
  .place {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    color: #ffffff;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center right;
  }
  @media (max-width: 800px) {
    .manage-radio-btn {
      margin: 20px 0 0;
      gap: 150px;
    }
  }
  @media (max-width: 600px) {
    .manage-radio-btn {
      gap: 100px;
    }
  }
  @media (max-width: 450px) {
    .manage-radio-btn {
      gap: 25px;
      margin-top: 20px;
      justify-content: center;
    }
    .place {
      font-size: 20px;
    }
  }
`;
const TravelCelebration = () => {
  return (
    <TravelCelebrationWrapper>
      <CommonHeaderPart />
      <div className="manage-radio-btn">
        <RadioButton key="domestic" name="DOMESTIC" />
        <RadioButton key="internatinal" name="INTERNATIONAL" />
      </div>
      <TopTranding name="trending places" isRequiredBackground={false} />
      <WannaShop />
      <div className="places">
        {Places.map(({ img, name, width }) => {
          return (
            <div
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),url(${img})`,
                height: "400px",
                width: width,
              }}
              className="place"
            >
              {name}
            </div>
          );
        })}
      </div>
      <Inspire />
      <YellowBarContent requiredPersonalAssistance={false} />
    </TravelCelebrationWrapper>
  );
};

export default TravelCelebration;
