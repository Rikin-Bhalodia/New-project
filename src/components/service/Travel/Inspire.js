import React from "react";
import styled from "styled-components";
import { Cards } from "../../../utils";
import InspireImage from "../../../assets/images/service/travel/inspire.svg";

const InspireWrapper = styled.div`
  background: #665e2f;
  z-index: 99;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cards {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    position: relative;
  }
  .single-card {
    position: relative;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    display: flex;
    color: white;
  }
  .content {
    position: absolute;
    z-index: 99;
    bottom: 8px;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 17px 17px;
    height: 80px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .time {
    position: absolute;
    z-index: 99;
    right: 5px;
    font-size: 8px;
    bottom: 90px;
  }
  .insipre {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: white;
    text-align: center;
    padding: 40px 0px;
  }
  .articles {
    background: #ffffff;
    border: 2px solid #665e2f;
    border-radius: 61px;
    color: #665e2f;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    padding: 0 20px;
    height: 50px;
    margin: 50px 0px;
    width: fit-content;
  }
  .inspire {
    position: absolute;
    height: 150%;
    top: 0;
  }
`;

const Inspire = () => {
  return (
    <InspireWrapper>
      <div className="insipre">INSPIRE</div>
      <div className="cards">
        {Cards.map(({ img, content, time }) => {
          return (
            <div className="single-card">
              <img src={img} alt="img" height={250} width={250} />
              <div className="time">{time}</div>
              <div className="content">{content}</div>
            </div>
          );
        })}
      </div>
      <img src={InspireImage} alt="inspire" className="inspire" />
      <button className="articles">READ MORE ARTICLES</button>
    </InspireWrapper>
  );
};

export default Inspire;
