import React from "react";
import styled from "styled-components";
import Avenue from "../../avenue";
import Service from "../../service";
import { RentSlider, ServiceSlider } from "../../slider";
import ShopNow from "../../assets/images/homepage/dark-shownow.svg";
import ExploreNow from "../../assets/images/homepage/explorenow.svg";

const AvenuSliderWrapper = styled.div``;
export default function AvenuSlider() {
  return (
    <AvenuSliderWrapper>
      <section
        className="paddingSec minHeightSec d-flex align-items-center c-service-w pt-5 pb-3 "
        id="avenue"
      >
        <div className="container-fluid px-5">
          <div className="row">
            <div className="col-md-5">
              <div className="headerAvenueSec">
                <h2 className="brwonColor font-100 ParisienneFont wow text-center">
                  <span className="">
                    <Avenue />
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
          <div className="row mt-4">
            <div className="col-md-7">
              <ServiceSlider />
            </div>
            <div className="col-md-5 text-center">
              <span className="relative">
                <Service />
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
      </section>
    </AvenuSliderWrapper>
  );
}
