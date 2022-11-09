import React from "react";
import styled from "styled-components";
import TopTranding from "../Common/TopTranding";
import CommonHeaderPart from "./CommonHeaderPart";
import RadioButton from "./RadioButton";
import LeftFilter from "../../../assets/images/aboutpage/left-filter.svg";
import RightFilter from "../../../assets/images/aboutpage/right-filter.svg";
import { Feelings } from "../../../utils";
import YellowBarContent from "../Common/YellowBarContent";

const ServiceTravelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .manage-radio-btn {
    display: flex;
    justify-content: space-between;
    margin: 100px 400px 0 400px;
    gap: 200px;
  }
  .btn {
    background: #a75b41;
    height: 60px;
    width: 250px;
    margin: 10px 0 0 5px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: white;
  }
  .yellow-bar {
    background: #ffe600;
    height: 180px;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 70px;
    flex-direction: column;
  }
  .image {
    position: absolute;
    left: 0;
    width: 500px;
    height: 150px;
  }
  .image2 {
    position: absolute;
    right: 0;
    opacity: 1;
    width: 500px;
    height: 150px;
  }
  .content-head {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    text-transform: uppercase;
  }
  .para {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
  }
  .get-assistance {
    background: #ffffff;
    border-radius: 36px;
    width: fit-content;
    height: 40px;
    font-family: "Arial";
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
  .background {
    width: 250px;
    height: 250px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .feeling {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    padding-top: 15px;
  }
  .feelings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 100px;
    row-gap: 20px;
    margin: 100px 150px 0 150px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const ServiceTravel = () => {
  return (
    <>
      <ServiceTravelWrapper>
        <CommonHeaderPart />
        <div className="manage-radio-btn">
          <RadioButton key="domestic" name="DOMESTIC" />
          <RadioButton key="internatinal" name="INTERNATIONAL" />
        </div>
        <TopTranding name="trending places" isRequiredBackground={false} />
        <button className="btn">KNOW MORE</button>
        <div className="yellow-bar">
          <img
            src={LeftFilter}
            alt="left"
            className="image"
            width={600}
            height={180}
          />
          <div className="content-head">WANT BESPOKE SERVICES?</div>
          <div className="para">talk to professionals</div>
          <div className="get-assistance">get personal assistance</div>
          <img
            src={RightFilter}
            alt="right"
            className="image2"
            width={600}
            height={180}
          />
        </div>
        <div className="manage-radio-btn">
          <RadioButton key="mood" name="MOOD" />
          <RadioButton key="activity" name="ACTIVITY" />
        </div>
        <div className="feelings">
          {Feelings.map((feeling) => {
            return (
              <div className="wrapper">
                <div className="background"></div>
                <div className="feeling">{feeling}</div>
              </div>
            );
          })}
        </div>
        <button className="btn" style={{ marginTop: "70px" }}>
          ENQUIRE NOW
        </button>
        <TopTranding name="UNIQUE STAYS" isRequiredBackground={true} />
      </ServiceTravelWrapper>
      <YellowBarContent requiredPersonalAssistance={false} />
    </>
  );
};

export default ServiceTravel;
