import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import WatchMore from "../../assets/images/studio-product/watchmore.svg";

const WatchMoreSliderWrapper = styled.div`
  padding: 0px 50px;
  .head {
    padding: 50px 0;
  }
`;

export default function WatchMoreSlider() {
  return (
    <WatchMoreSliderWrapper>
      <div className="head">
        <img src={WatchMore} alt="" />
      </div>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        className="mySwiper"
        style={{ height: "150px" }}
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
            <SwiperSlide>
              <img src={image} alt="image" height="100px" width="100px" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </WatchMoreSliderWrapper>
  );
}
