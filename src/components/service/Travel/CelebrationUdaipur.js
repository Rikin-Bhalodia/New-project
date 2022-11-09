import React from "react";
import styled from "styled-components";
import TopTrandingDiffBackground from "../Common/TopTrandingDiffBackground";
import YellowBarContent from "../Common/YellowBarContent";
import CommonHeaderPart from "./CommonHeaderPart";
import EventNear from "./EventNear";

const CelebrationUdaipurWrapper = styled.div`
  .top-tranding {
    margin-top: 50px;
  }
`;

const CelebrationUdaipur = () => {
  return (
    <CelebrationUdaipurWrapper>
      <CommonHeaderPart />
      <EventNear />
      <div className="top-tranding">
        <TopTrandingDiffBackground name="Top booked Hotel options" />
      </div>
      <YellowBarContent requiredPersonalAssistance={false} />
    </CelebrationUdaipurWrapper>
  );
};

export default CelebrationUdaipur;
