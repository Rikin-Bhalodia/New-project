import React from "react";
import styled from "styled-components";

const MiddlePartWrapper = styled.div`
  .right-middle {
    position: absolute;
    right: 0;
  }
  .middle-part {
    width: 100%;
    display: flex;
    text-align: center;
  }
  .new-head {
    width: 83%;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .line {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
`;
const MiddlePart = ({
  LeftMiddle,
  RightMiddle,
  first,
  second,
  third,
  Text,
}) => {
  return (
    <MiddlePartWrapper>
      <div className="middle-part">
        <img loading="lazy" src={LeftMiddle} alt="left-middle" height={450} />
        <div className="new-head">
          <span>{first}</span>
          <span>{second}</span>
          <span>{third}</span>
          <img loading="lazy" src={Text} alt="gift" height={200} />
        </div>
        <img
          loading="lazy"
          src={RightMiddle}
          alt="left-middle"
          height={450}
          className="right-middle"
        />
      </div>
      <div className="line">
        <div className="border-line"></div>
      </div>
    </MiddlePartWrapper>
  );
};

export default MiddlePart;
