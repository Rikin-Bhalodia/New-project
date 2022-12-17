import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../assets/images/studio/menu.svg";
import BackArrow from "../../../assets/images/product/back-arrow.svg";
import BannerImage from "../../../assets/images/nfts/celebration.png";
import Plan from "../../../assets/images/nfts/plan.svg";
import RightBack from "../../../assets/images/nfts/right-back.svg";

import Menu from "../../../commonComponents/Menu";
import { ExploreMoreSlider } from "../../../slider";
import YellowBarContent from "../Common/YellowBarContent";
const CelebrateWithUs = React.lazy(() => import("./CelebrateWithUs"));

const CelebrationWrapper = styled.div`
  width: 100%;
  .heading-part {
    font-family: "Coral Blush";
    font-style: normal;
    width: 100vw;
    font-weight: 400;
    font-size: 110px;
    display: flex;
    object-fit: cover;
    color: white;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.43)),
      url(${BannerImage});
  }
  .goback {
    margin-left: 40px;
    display: flex;
    font-size: 20px;
    position: absolute;
    left: 0;
    top: 100px;
  }
  .line {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .border-line {
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.27);
  }
  .explore-more-celebration {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    padding: 50px 0 0 50px;
  }
  .plan-back {
    width: 130px;
    height: 100px;
    background: #c4c4c4;
  }
  .content-plan {
    display: flex;
    width: 100%;
  }
  .right-back {
    position: absolute;
    right: 0;
    height: 500px;
  }
  .plan {
    text-align: right;
    width: 55%;
  }
  .box-content {
    column-gap: 20px;
    margin-left: 50px;
    width: 40%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin: 0 100px;
    justify-content: end;
  }
  @media (max-width: 450px) {
    .heading-part {
      font-size: 50px;
    }
    .explore-more-celebration {
      font-size: 40px;
      padding: 30px 0 0 30px;
    }
    .box-content {
      margin: 0 20px;
    }
  }
  @media (max-width: 550px) {
    .heading-part {
      font-size: 70px;
      text-align: center;
    }
  }
`;

const Celebration = () => {
  const [menuOpenModal, setMenuOpenModal] = useState(false);

  return (
    <CelebrationWrapper>
      <div className="heading-part">
        <div className="goback">
          <img src={BackArrow} alt="back-arrow" />
          <div>Go Back</div>
        </div>
        <div>CELEBRATIONS</div>
      </div>
      <div
        className="menu-icon"
        onClick={() => setMenuOpenModal(!menuOpenModal)}
      >
        <Menu
          menuOpenModal={menuOpenModal}
          onClick={(e) => e.stopPropagation()}
        />
        {menuOpenModal ? (
          <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
        ) : (
          <img loading="lazy" src={MenuIcon} alt="menu" height={45} />
        )}
      </div>
      <CelebrateWithUs />
      <div className="line">
        <div className="border-line"></div>
      </div>
      <div className="explore-more-celebration">EXPLORE MORE</div>
      <ExploreMoreSlider />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
          marginTop: "50px",
        }}
      >
        <img src={Plan} alt="plan" className="plan" />
      </div>
      <div className="content-plan">
        <div className="box-content">
          {[1, 2, 3].map((_) => {
            return (
              <div
                style={{
                  display: "flex",
                  columnGap: "25px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="plan-back"></div>
                <div style={{ width: "100%" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum ipsum cursus interdum commodo, senectus dignissim.
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img src={RightBack} alt="RightBack" className="right-back" />
        </div>
      </div>
      <YellowBarContent requiredPersonalAssistance={true} />
    </CelebrationWrapper>
  );
};

export default Celebration;
