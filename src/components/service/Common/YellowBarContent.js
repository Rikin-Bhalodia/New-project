import React from "react";
import styled from "styled-components";
import ServiceYellowBar from "../../../commonComponents/ServiceYellowBar";
import { PersonalAssitance } from "../../../utils";

const YellowBarContentWrapper = styled.div`
  margin-top: 100px;
  .border-width {
    display: flex;
    justify-content: center;
  }
  .border {
    border-bottom: 2px solid rgba(0, 0, 0, 0.27);
    width: 90%;
    margin: 70px 0px;
  }
  .icons {
    display: flex;
    column-gap: 15px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin: 50px 0px;
    justify-content: center;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 5px;
  }
  .line {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
`;

const YellowBarContent = ({ requiredPersonalAssistance }) => {
  return (
    <YellowBarContentWrapper>
      {requiredPersonalAssistance && (
        <ServiceYellowBar
          content={"GET PERSONAL ASSISTANCE"}
          note={"FIND THE RIGHT GIFT FOR THEM!"}
        />
      )}
      <div className="line">
        <div className="border-line"></div>
      </div>
      <div className="icons">
        {PersonalAssitance.map((value) => {
          return (
            <div className="icon">
              <img
                src={value.img}
                alt="img"
                height={40}
                width={60}
                loading="lazy"
              />
              <div className="icon-name">{value.name}</div>
            </div>
          );
        })}
      </div>
      <ServiceYellowBar
        content={"REQUEST ANY SERVICES!"}
        note={"PROVIDE THE BEST FOR THEM!"}
      />
      <div className="line">
        <div className="border-line"></div>
      </div>
    </YellowBarContentWrapper>
  );
};

export default YellowBarContent;
