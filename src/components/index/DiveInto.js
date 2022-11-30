import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import withus from "../../assets/images/homepage/with_us.svg";
import leave from "../../assets/images/homepage/leave.svg";
import { MainSlider } from "../../slider";

const DiveIntoWrapper = styled.div`
  background: #665e2f;
  position: relative;
  height: 80vh;
  padding: 50px 30px;
  .leave {
    position: absolute;
    top: 0;
    width: 80%;
  }
  .dive_section {
    .dive_head {
      position: relative;
      margin-bottom: 20px;
      p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        letter-spacing: 5px;
      }
      .flip_text {
        font-size: 50px;
        font-weight: 400;
        color: white;
        line-height: 70px;
        letter-spacing: 1.5px;
        font-family: "coralSerif", sans-serif;
      }
      img {
        position: absolute;
        bottom: 0px;
        left: 45%;
        width: 140px;
      }
    }
  }
  @media (max-width: 600px) {
  }
`;

export default function DiveInto() {
  return (
    <DiveIntoWrapper>
      <div className="dive_section">
        <div className="dive_head">
          <p>STUDIO</p>
          <div className="flip_text">
            <AnimatedTextWord text="DIVE INTO" />
            <AnimatedTextWord text="LUXURY" />
          </div>
          <img src={withus} alt="" />
        </div>
        <div className="dive_body">
          <MainSlider />
        </div>
      </div>
      <img src={leave} alt="" className="leave" />
    </DiveIntoWrapper>
  );
}
