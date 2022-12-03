import React from "react";
import styled from "styled-components";
// import Avenue from "../../avenue";
// import Service from "../../service";
import Avenue from "../../assets/images/homepage/avenue.svg";
import Service from "../../assets/images/homepage/services.svg";
import { RentSlider, ServiceSlider } from "../../slider";
import ShopNow from "../../assets/images/homepage/dark-shownow.svg";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";

const AvenuSliderWrapper = styled.div`
  position: relative;
  /* top: -100px; */
  .swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-backface-hidden.mySwiper {
    height: 250px;
  }
  .avenue_service {
    width: 250px;
  }
  .headerAvenueSec {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 20px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 767px) {
    .center {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .right {
      justify-content: flex-end !important;
    }
    .flx-col-rev {
      flex-direction: column-reverse;
    }
    .swiper-slide img {
      border-radius: 50%;
    }
    .roundBtn {
      display: none;
    }
    .round {
      height: 200px !important;
    }
    .round img.radius {
      border-radius: 50% !important;
    }
    .avenue_service {
      width: 170px;
    }
    .swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-backface-hidden.mySwiper {
      height: 200px;
    }
  }
  @media (max-width: 767px) {
    .swiper-slide img {
      width: 90%;
      height: 80%;
    }
  }
  @media (max-width: 550px) {
    .swiper-slide img {
      border-radius: 50%;
    }
    .roundBtn {
      display: none;
    }
    .round {
      height: 200px !important;
    }
    .round img.radius {
      border-radius: 50% !important;
    }
    .avenue_service {
      width: 140px;
    }
    .swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events.swiper-backface-hidden.mySwiper {
      height: 150px;
    }
    .paddingSec {
      padding: 0px;
    }
  }
`;
export default function AvenuSlider() {
  return (
    <AvenuSliderWrapper>
      <section
        className="paddingSec minHeightSec d-flex align-items-center c-service-w"
        id="avenue"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 center">
              <div className="headerAvenueSec">
                <h2 className="brwonColor font-100 ParisienneFont wow text-center">
                  <span className="">
                    {/* <Avenue /> */}
                    <img src={Avenue} alt="" className="avenue_service" />
                  </span>
                </h2>
                <div className="roundBtn">
                  <span
                    id="roundText8"
                    className="btnText strong colorYellow font-13 letterSpacingmedium"
                  >
                    <img
                      src={ExploreNow}
                      alt="explore-now"
                      className="rent-now"
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <RentSlider />
            </div>
          </div>
          <div className="row mt-4 flx-col-rev">
            <div className="col-md-7">
              <ServiceSlider />
            </div>
            <div className="col-md-5 center right">
              <div className="headerAvenueSec">
                <span className="relative">
                  {/* <Service /> */}
                  <img src={Service} alt="" className="avenue_service" />
                </span>
                <div className="roundBtn rightDestinationbtn text-right">
                  <span
                    id="roundText8"
                    className="btnText strong colorYellow font-13 letterSpacingmedium"
                  >
                    <img
                      src={ShopNow}
                      alt="explore-now"
                      className="rent-now"
                      loading="lazy"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AvenuSliderWrapper>
  );
}
