import React from "react";
import styled from "styled-components";
import TopTrandingDiffBackground from "../Common/TopTrandingDiffBackground";
import YellowBarContent from "../Common/YellowBarContent";
import CommonHeaderPart from "./CommonHeaderPart";
import EventNear from "./EventNear";
import Inspire from "./Inspire";

const TravelDestinationWrapper = styled.div``;

const TravelDestination = () => {
  return (
    <TravelDestinationWrapper>
      <CommonHeaderPart />
      <TopTrandingDiffBackground name="Top booked Hotel options" />
      <Inspire />
      <EventNear isRequiredTopThings={true} />
      <YellowBarContent requiredPersonalAssistance={false} />
    </TravelDestinationWrapper>
  );
};

export default TravelDestination;
