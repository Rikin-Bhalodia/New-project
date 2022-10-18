import React from "react";
import styled from "styled-components";
import StudioProductMaterial from "../studio-material";
import DummyVideoImage from "../../assets/images/studio-material/dummy-video.svg";

const SecVideoWrapper = styled.div`
  padding: 30px;
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 170px;
  }
  .card {
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 400px;
    border: none;
    font-family: "Arial";
    gap: 13px;
  }
  .title {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
  }
  .sub-title {
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
  }
  .des {
    font-style: italic;
    font-weight: 500;
    font-size: 12px;
  }
  .video-type {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    font-size: 90px;
  }
  .date {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    padding: 30px 0px;
  }
  .name {
    font-family: "Coral Blush";
    text-transform: uppercase;
    font-style: normal;
    font-weight: 400;
    font-size: 45px;
    padding-bottom: 50px;
  }
`;

const StudioSecVideo = () => {
  return (
    <SecVideoWrapper>
      <div className="video-type">15 Second videos</div>
      <StudioProductMaterial />
      <div className="date">June 02, 2022 /</div>
      <div className="name">Rolex — Lady-Date/just</div>
      <div className="cards">
        {[1, 2, 3, 45, 6, 67, , 7889, 9, 9, 9, 0, , 0].map((_) => {
          return (
            <div className="card">
              <img src={DummyVideoImage} alt="dummy-image" />
              <div className="title">Charles Jeffrey Loverboy</div>
              <div className="sub-title">SPRING 2023 READY-TO-WEAR</div>
              <div className="des">
                Jeffrey swerved, showing on the official schedule and as a now
                established household name. the designer chose to present the
                project in the form of a music video, a number of talented
                artists are involved. A new, authetic vibe of pop culture.
              </div>
            </div>
          );
        })}
      </div>
    </SecVideoWrapper>
  );
};

export default StudioSecVideo;
