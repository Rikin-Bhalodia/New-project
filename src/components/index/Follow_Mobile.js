import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import follow6 from "./../../assets/images/img/follow6.png";
import follow5 from "./../../assets/images/img/follow5.png";
import follow4 from "./../../assets/images/img/follow4.png";
import follow1 from "./../../assets/images/img/follow1.png";
import follow2 from "./../../assets/images/img/follow2.png";

const FollowMobileWrapper = styled.div`
  .follow_section {
    height: 700px;
    padding: 70px 30px;
    .follow_grid {
      display: grid;
      grid-template-columns: repeat(11, 1fr);
      grid-template-rows: repeat(7, 1fr);
      gap: 30px 20px;
      width: -webkit-fill-available;
      height: -webkit-fill-available;
      position: relative;
      .grid_1 {
        grid-area: 1/1/4/8;
        h3 {
          font-family: "Coral Blush";
          font-style: normal;
          font-weight: 400;
          font-size: 90px;
          line-height: 100px;
          color: #a65a40;
          margin-left: 30px !important;
        }
      }
      .grid_2 {
        grid-area: 1/8/4/12;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .grid_3 {
        grid-area: 4/2/8/7;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .grid_4 {
        grid-area: 4/7/7/11;
        width: -webkit-fill-available;
        height: -webkit-fill-available;
        img {
          width: inherit;
          height: inherit;
        }
      }
      .img_ab_1 {
        position: absolute;
        top: 200px;
        img {
          width: 180px;
        }
      }
      .img_ab_2 {
        position: absolute;
        left: 280px;
        top: 100px;
        img {
          width: 280px;
        }
      }
    }
  }
`;

export default function FollowMobile() {
  return (
    <FollowMobileWrapper>
      <div className="follow_section">
        <div className="follow_grid">
          <div className="grid_1">
            <h3>
              <AnimatedTextWord text="FOLLOW" />
              <AnimatedTextWord text="US" />
            </h3>
          </div>
          <div className="grid_2">
            <img src={follow6} alt="" />
          </div>
          <div className="grid_3">
            <img src={follow5} alt="" />
          </div>
          <div className="grid_4">
            <img src={follow4} alt="" />
          </div>
          <div className="img_ab_1">
            <img src={follow1} alt="" />
          </div>
          <div className="img_ab_2">
            <img src={follow2} alt="" />
          </div>
        </div>
      </div>
    </FollowMobileWrapper>
  );
}
