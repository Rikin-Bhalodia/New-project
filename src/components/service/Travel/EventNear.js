import React from "react";
import styled from "styled-components";
import { EventNearAndTopThings, Feelings } from "../../../utils";

const EventNearWrapper = styled.div`
  .event-near {
    display: flex;
    flex-wrap: wrap;
    gap: 150px;
    justify-content: center;
  }
  .single-event {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 15px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
  .inspire-head {
    padding: 100px 0 50px 100px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
  }
  .background {
    width: 200px;
    height: 200px;
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
    gap: 150px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

const EventNear = () => {
  return (
    <EventNearWrapper>
      <div className="inspire-head">Events near the date</div>
      <div className="event-near">
        {EventNearAndTopThings.map(({ img, name }) => {
          return (
            <div className="single-event">
              <img src={img} alt="image123" height={200} />
              <div>{name}</div>
            </div>
          );
        })}
      </div>
      <div className="inspire-head">top things to do</div>
      <div className="feelings">
        {Feelings.slice(0, 4).map((feeling) => {
          return (
            <div className="wrapper">
              <div className="background"></div>
              <div className="feeling">{feeling}</div>
            </div>
          );
        })}
      </div>
    </EventNearWrapper>
  );
};

export default EventNear;
