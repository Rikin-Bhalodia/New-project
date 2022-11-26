import React from "react";
import styled from "styled-components";
import TopTranding from "../Common/TopTranding";
import CommonHeaderPart from "./CommonHeaderPart";
import RadioButton from "./RadioButton";
import LeftFilter from "../../../assets/images/aboutpage/left-filter.svg";
import RightFilter from "../../../assets/images/aboutpage/right-filter.svg";
import { Feelings } from "../../../utils";
import YellowBarContent from "../Common/YellowBarContent";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from "swiper";

const ServiceTravelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .manage-radio-btn {
    display: flex;
    justify-content: space-between;
    margin: 100px 400px 0 400px;
    gap: 200px;
  }
  .btn {
    background: #a75b41;
    height: 60px;
    width: 250px;
    margin: 10px 0 0 5px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    color: white;
  }
  .yellow-bar {
    background: #ffe600;
    height: 180px;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    flex-direction: column;
  }
  .image {
    position: absolute;
    left: 0;
    width: 500px;
    height: 150px;
  }
  .image2 {
    position: absolute;
    right: 0;
    opacity: 1;
    width: 500px;
    height: 150px;
  }
  .content-head {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    text-transform: uppercase;
  }
  .para {
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
  }
  .get-assistance {
    background: #ffffff;
    border-radius: 36px;
    width: fit-content;
    height: 40px;
    font-family: "Arial";
    text-transform: uppercase;
    font-weight: 400;
    font-size: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
  }
  .background {
    width: 250px;
    height: 250px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .feeling {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    padding-top: 15px;
  }
  .feelings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 100px;
    row-gap: 20px;
    margin: 100px 150px 0 150px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 1200px) {
    .name {
      padding: 0;
    }
    .content-head {
      font-size: 38px;
    }
    .para {
      font-size: 16px;
    }
    .get-assistance {
      font-size: 18px;
    }
    .image {
      left: -10%;
    }
    .image2 {
      right: -10%;
    }
    .background {
      width: 220px;
      height: 220px;
    }
    .feelings {
      margin: 70px 100px 0 100px;
    }
  }
  @media (max-width: 1100px) {
    .feelings {
      margin: 100px 70px 0 70px;
    }
  }
  @media (max-width: 1000px) {
    .image {
      width: 400px;
      left: -15%;
    }
    .image2 {
      width: 400px;
      right: -15%;
    }
    .content-head {
      font-size: 34px;
    }
    .para {
      font-size: 14px;
    }
    .get-assistance {
      font-size: 16px;
    }
    .background {
      width: 200px;
      height: 200px;
    }
    .btn {
      margin-top: 20px !important;
    }
  }
  @media (max-width: 800px) {
    .image {
      width: 350px;
      left: -20%;
    }
    .image2 {
      right: -20%;
      width: 350px;
    }
    .content-head {
      font-size: 30px;
    }
    .para {
      font-size: 13px;
    }
    .get-assistance {
      font-size: 14px;
    }
    .manage-radio-btn {
      gap: 150px;
    }
  }
  @media (max-width: 600px) {
    .image {
      width: 300px;
    }
    .image2 {
      width: 300px;
    }
    .content-head {
      font-size: 28px;
    }
    .get-assistance {
      font-size: 13px;
    }
    .manage-radio-btn {
      gap: 100px;
    }
  }
  @media (max-width: 450px) {
    .image {
      left: -35%;
    }
    .image2 {
      right: -35%;
    }
    .content-head {
      font-size: 26px;
    }
    .get-assistance {
      font-size: 12px;
    }
    .para {
      font-size: 12px;
    }
    .manage-radio-btn {
      gap: 70px;
    }
  }
  @media (max-width: 400px) {
    .image {
      left: -45%;
    }
    .image2 {
      right: -45%;
    }
    .content-head {
      font-size: 22px;
    }
    .get-assistance {
      font-size: 11px;
    }
    .para {
      font-size: 11px;
    }
    .manage-radio-btn {
      margin: 50px 0 0;
      gap: 15px;
    }
    .swiper {
      margin: 30px 0px 0px !important;
    }
  }
`;

const ServiceTravel = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      <ServiceTravelWrapper>
        <CommonHeaderPart />
        <div className="manage-radio-btn">
          <RadioButton key="domestic" name="DOMESTIC" />
          <RadioButton key="internatinal" name="INTERNATIONAL" />
        </div>
        <TopTranding name="trending places" isRequiredBackground={false} />
        <div className="yellow-bar">
          <img
            src={LeftFilter}
            alt="left"
            className="image"
            width={600}
            height={180}
          />
          <div className="content-head">WANT BESPOKE SERVICES?</div>
          <div className="para">talk to professionals</div>
          <div className="get-assistance">get personal assistance</div>
          <img
            src={RightFilter}
            alt="right"
            className="image2"
            width={600}
            height={180}
          />
        </div>
        <div className="manage-radio-btn">
          <RadioButton key="mood" name="MOOD" />
          <RadioButton key="activity" name="ACTIVITY" />
        </div>
        {isResponsive ? (
          <Swiper
            breakpoints={{
              400: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              550: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className="mySwiper"
            style={{ height: "300px", padding: "0 0 0 40px" }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            speed={2500}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {Feelings.map((feeling) => {
              return (
                <SwiperSlide style={{ background: "transparent" }}>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <div className="wrapper">
                      <div className="background"></div>
                      <div className="feeling">{feeling}</div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="feelings">
            {Feelings.map((feeling) => {
              return (
                <div className="wrapper">
                  <div className="background"></div>
                  <div className="feeling">{feeling}</div>
                </div>
              );
            })}
          </div>
        )}

        <button className="btn" style={{ marginTop: "70px" }}>
          ENQUIRE NOW
        </button>
        <TopTranding name="UNIQUE STAYS" isRequiredBackground={true} />
      </ServiceTravelWrapper>
      <YellowBarContent requiredPersonalAssistance={false} />
    </>
  );
};

export default ServiceTravel;
