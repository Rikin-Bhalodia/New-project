import React from "react";
import styled from "styled-components";
import Luxury from "../../../assets/images/service/luxury.svg";
import Left from "../../../assets/images/service/left.svg";
import Right from "../../../assets/images/service/right.svg";
import {
  GiftsByClients,
  OccasionGifts,
  ServiceLuxuryGiftingPage,
} from "../../../utils";
import ServiceYellowBar from "../../../commonComponents/ServiceYellowBar";
import GoBackpart from "../Common/gobachpart";
import YellowBarContent from "../Common/YellowBarContent";

const ServiceLuxuryGiftingWrapper = styled.div`
  margin: 100px 150px 0px 150px;

  .gifting {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 110px;
    margin-left: 100px;
    position: absolute;
    bottom: -50px;
  }
  .luxury {
    position: relative;
    top: -20px;
  }
  .name {
    position: relative;
    height: fit-content;
    top: 40px;
    padding-left: 90px;
  }
  .images {
    display: flex;
    justify-content: flex-end;
    position: relative;
    align-items: center;
    padding-right: 100px;
  }
  .right {
  }
  .left {
    position: relative;
    left: 30px;
  }
  .icons {
    display: flex;
    column-gap: 15px;
    margin-top: 90px;
    opacity: 0.6;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    justify-content: center;
  }
  .icon {
    text-align: center;
  }
  .icon-name {
    padding-top: 10px;
    font-size: 40px;
  }
  .gifts-by-recipient {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    padding-top: 100px;
  }
  .gifts {
    display: flex;
    flex-wrap: wrap;
    column-gap: 250px;
    row-gap: 30px;
    justify-content: space-between;
    text-align: center;
    font-family: "Beatlys";
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: #665e2f;
    margin: 40px 100px 0 100px;
  }
  .que {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    padding-top: 70px;
  }
`;

const HalfWrapper = styled.div`
  overflow: hidden;
  .occasion {
    height: 66px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    margin-top: 40px;
  }
  .blank {
    width: 48%;
    border-bottom: 1px solid #000000;
  }
  .occ {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 58px;
    width: 48%;
  }
  .occation-gifts {
    margin: 50px 250px 0px 250px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 30px;
    column-gap: 250px;
    justify-content: space-between;
    text-align: center;
    font-family: "Beatlys";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #665e2f;
  }
`;

const ServiceLuxuryGifting = () => {
  return (
    <>
      <ServiceLuxuryGiftingWrapper>
        <GoBackpart />
        <div>
          <div className="name">
            <img src={Luxury} alt="luxury" height={260} className="luxury" />
            <div className="gifting">GIFTING</div>
          </div>
          <div className="images">
            <img src={Left} alt="left" height={300} className="left" />
            <img src={Right} alt="right" height={500} className="right" />
          </div>
        </div>
        <div className="icons">
          {ServiceLuxuryGiftingPage.map((value) => {
            return (
              <div className="icon">
                <img src={value.img} alt="img" height={40} width={60} />
                <div className="icon-name">{value.name}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="gifts-by-recipient">GIFTS BY RECIPIENT</div>
          <div className="gifts">
            {GiftsByClients.map((ele) => {
              return (
                <div
                  className=""
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    columnGap: "200px",
                  }}
                >
                  <img src={ele.img} alt="img" height={250} />
                  <div className="icon-name">{ele.name}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="que">Not sure what to gift? </div>
      </ServiceLuxuryGiftingWrapper>
      <HalfWrapper>
        <ServiceYellowBar
          content={"buy a gift card"}
          note={"and give them freedom to choose!"}
        />
        <div className="occasion">
          <div className="blank"> </div>
          <div className="occ">GIFTS BY OCCASION</div>
        </div>
        <div className="occation-gifts">
          {OccasionGifts.map((ele) => {
            return (
              <div className="">
                <img src={ele.img} alt="img" height={250} />
                <div className="icon-name">{ele.name}</div>
              </div>
            );
          })}
        </div>
        <div className="border-width">
          <div className="border"></div>
        </div>
        <YellowBarContent requiredPersonalAssistance={true} />
      </HalfWrapper>
    </>
  );
};

export default ServiceLuxuryGifting;
