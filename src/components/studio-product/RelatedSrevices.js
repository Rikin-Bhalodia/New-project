import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import Releted from "../../assets/images/studio-product/releted-product.svg";

const ReletedServicesWrapper = styled.div`
  padding: 0px 50px 100px;
  .head {
    padding: 50px 0;
  }
  .img-box {
    position: relative;
    height: 200px;
    background: #fefaf1;
    border-radius: 20px;
    img {
      border-radius: 20px;
    }
  }

  .para {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    top: 157px;
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #fcf9f2;
    border-radius: 0 0 20px 20px;
  }
  p {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: #a79586;
  }
`;

export default function ReletedServices() {
  return (
    <ReletedServicesWrapper>
      <div className="head">
        <img src={Releted} alt="" />
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        className="mySwiper"
        style={{ height: "" }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        speed={2500}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderImage.map((image) => {
          return (
            <SwiperSlide style={{ background: "#fefaf1" }}>
              <div className="slider-box">
                <div className="img-box">
                  <img src={image} alt="image" height="100px" width="100px" />
                  <div className="para">hair spa</div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Gravida tortor eu, et aliqu
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ReletedServicesWrapper>
  );
}
