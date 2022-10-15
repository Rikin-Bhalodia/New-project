import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FirstImage from "./assets/images/studio/fifteensecslider/first-image.svg";
import { Autoplay, Pagination, Navigation } from "swiper";
import aboutSlider from "./assets/images/img/about-slider.jpg";
import aboutlogo from "./assets/images/img/about-logo.png";

export default function Slider() {
  return (
    <Swiper
      slidesPerView={4}
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
      {[1, 2, 3, 4, 5, 6].map((_) => {
        return (
          <SwiperSlide>
            <img src={FirstImage} alt="image" height="100px" width="100px" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function ServiceSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={100}
      className="mySwiper"
      style={{ height: "300px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        reverseDirection: true,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {[1, 2, 3, 4, 5, 6].map((_) => {
        return (
          <SwiperSlide>
            <img
              src={FirstImage}
              alt="image"
              height="100px"
              width="100px"
              style={{ borderRadius: "40px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function RentSlider() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={100}
      className="mySwiper"
      style={{ height: "300px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {[1, 2, 3, 4, 5, 6].map((_) => {
        return (
          <SwiperSlide>
            <img
              src={FirstImage}
              alt="image"
              height="100px"
              width="100px"
              style={{ borderRadius: "40px" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function MainSlider() {
  return (
    <Swiper
      slidesPerView={1}
      className="mySwiper"
      style={{ height: "400px" }}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      loop={true}
      loopFillGroupWithBlank={true}
      //   speed={2500}
      modules={[Pagination, Navigation]}
    >
      {[1, 2, 3, 4, 5, 6].map((_) => {
        return (
          <SwiperSlide style={{ backgroundImage: `url(${aboutSlider})` }}>
            <div className="c-about-slider-in">
              <div className="c-about-slider-con">
                <span>
                  <img src={aboutlogo} alt="" className="wow fadeInDown" />
                </span>
                <h3 className="wow fadeInDown">
                  EXCEPTIONAL <span>READY-TO-WEAR</span>
                </h3>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
