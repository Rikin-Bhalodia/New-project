import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import CommonContent from "../../../commonComponents/studio/commonContent";
import { CelebrateWithUsSlider } from "../Grooming/ReviewSlider";

const CelebrateWithUsWrapper = styled.div`
  .celebrate {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    text-align: center;
    padding-bottom: 80px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 550px) {
    .celebrate {
      font-size: 40px;
    }
  }
  @media (max-width: 450px) {
    .celebrate {
      font-size: 35px;
      padding-bottom: 0;
    }
  }
`;

const CelebrateWithUs = () => {
  return (
    <CelebrateWithUsWrapper>
      <div className="celebrate">
        <AnimatedTextWord text="CELEBRATE WITH US!" />
      </div>
      <CommonContent />
    </CelebrateWithUsWrapper>
  );
};

export default CelebrateWithUs;
