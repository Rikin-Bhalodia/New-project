import React from "react";
import styled from "styled-components";
import CommonContent from "../../../commonComponents/studio/commonContent";
import { CelebrateWithUsSlider } from "../Grooming/ReviewSlider";

const CelebrateWithUsWrapper = styled.div`
  .celebrate {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    padding-bottom: 90px;
  }
  @media (max-width: 450px) {
    .celebrate {
      font-size: 40px;
      padding-bottom: 0;
    }
  }
`;

const CelebrateWithUs = () => {
  return (
    <CelebrateWithUsWrapper>
      <div className="celebrate">CELEBRATE WITH US!</div>
      <CommonContent />
    </CelebrateWithUsWrapper>
  );
};

export default CelebrateWithUs;
