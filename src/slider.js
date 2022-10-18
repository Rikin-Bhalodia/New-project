import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import FirstImage from "./assets/images/studio/fifteensecslider/first-image.svg";
import { Autoplay, Pagination, Navigation } from "swiper";
import aboutSlider from "./assets/images/img/about-slider.jpg";
import aboutlogo from "./assets/images/img/about-logo.png";
import { studio2Images, sliderImage, avenues } from "./utils";

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
      {sliderImage.map((image) => {
        return (
          <SwiperSlide>
            <img src={image} alt="image" height="100px" width="100px" />
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
      {avenues.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img}
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
      {avenues.map((img) => {
        return (
          <SwiperSlide>
            <img
              src={img}
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
      style={{ height: "400px", borderRadius: "30px" }}
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
          <SwiperSlide
            style={{
              backgroundImage: `url(${aboutSlider})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
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

export function StudioS2() {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={50}
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
      onSlideChange={(s) => {
        console.log(s.activeIndex, "kkkk");
      }}
    >
      {studio2Images.map((data, i) => {
        const slideview1 = i === 0 && "col-md-2 level1 wow fadeInUp";
        const slideview2 = i === 1 && "col-md-2 level3 wow fadeInUp";
        const slideview3 = i === 2 && "col-md-2 level5 wow fadeInUp";
        const slideview4 = i === 3 && "col-md-2 level2 wow fadeInUp";
        const slideview5 = i === 4 && "col-md-2 level4 wow fadeInUp";
        console.log(i);
        return (
          <SwiperSlide
            className={
              slideview1 || slideview2 || slideview3 || slideview4 || slideview5
            }
          >
            <img src={data.img} alt="studiob-01" />
            <div>{data.content}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
