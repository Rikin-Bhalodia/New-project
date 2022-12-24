import React from "react";
import styled from "styled-components";
import RequestNow from "../../../assets/images/img/RequestNow.png";
import { PersonalAssitance } from "../../../utils";
const ServiceYellowBar = React.lazy(() =>
  import("../../../commonComponents/ServiceYellowBar")
);

const YellowBarContentWrapper = styled.div`
  margin-top: 60px;
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
  .lines {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  .border-lines {
    width: 90% !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27) !important;
  }
  .btn_area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .request_now {
      background: #fcf9f2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      height: 100px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .green_circle {
        background: #665e2f;
        border-radius: 50%;
        height: 90px;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 70px;
          width: 70px;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .icons {
      margin: 30px 0;
      word-break: break-word;
    }
    .explore-mores {
      font-size: 60px;
    }
  }
  @media (max-width: 800px) {
    .icons {
      column-gap: 10px;
      flex-wrap: wrap;
      row-gap: 15px;
    }
    .pets-icon {
      height: 35px;
      width: 50px;
    }
    .icon-name {
      font-size: 12px;
    }
    .btn_area {
      margin: 10px;
      .request_now {
        height: 80px;
        width: 80px;
        .green_circle {
          height: 70px;
          width: 70px;
          img {
            height: 50px;
            width: 50px;
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    .pets-icon {
      height: 35px;
      width: 40px;
    }
    .icon-name {
      font-size: 10px;
    }
  }
  @media (max-width: 600px) {
    .pets-icon {
      height: 30px;
      width: 30px;
    }
  }
  @media (max-width: 500px) {
    margin-top: 40px;
    .pets-icon {
      height: 22px;
      width: 22px;
    }
    .lines {
      margin-top: 0 !important;
    }
    .icon-name {
      font-size: 9px;
    }
  }
  @media (max-width: 400px) {
    .icons {
      padding: 0 10px;
      row-gap: 10px;
      column-gap: 6px;
      margin-top: 20px;
    }
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
      <div className="lines">
        <div className="border-lines"></div>
      </div>
      <div className="icons">
        {PersonalAssitance.map((value) => {
          return (
            <div className="icon">
              {value.img}
              <div className="icon-name">{value.name}</div>
            </div>
          );
        })}
      </div>
      <ServiceYellowBar
        content={"REQUEST ANY SERVICES!"}
        note={"PROVIDE THE BEST FOR THEM!"}
      />
      <div className="btn_area">
        <div className="request_now">
          <div className="green_circle">
            <img src={RequestNow} alt="RequestNow" />
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="border-lines"></div>
      </div>
    </YellowBarContentWrapper>
  );
};

export default YellowBarContent;
