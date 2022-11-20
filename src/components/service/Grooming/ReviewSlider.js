import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { studio2Images } from "../../../utils";
import { useMediaQuery } from "react-responsive";

export function ReviewSlider({ color, background, des, border }) {
  const isResponsive = useMediaQuery({ query: "(max-width: 750px)" });

  return (
    <Swiper
      breakpoints={{
        260: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        455: {
          slidesPerView: 1.5,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1075: {
          slidesPerView: 2,
          spaceBetween: 140,
        },
      }}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        scale: 0.5,
        modifier: 1,
      }}
      className="mySwiper"
      style={{ padding: "0 20px" }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
    >
      {[1, 2, 4, 4, 5, 6, 7].map((_) => {
        return (
          <SwiperSlide
            style={{
              background: background,
              height: "300px",
              width: "900px",
              border: border || "",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: color,
                fontFamily: "Mulish",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: isResponsive ? "16px" : "20px",
                padding: "0 30px",
              }}
              className="change-style"
            >
              <div
                style={{
                  height: isResponsive ? "80px" : "100px",
                  width: isResponsive ? "80px" : "100px",
                  background: "#FCF9F2",
                  border: "3px solid #665E2F",
                  borderRadius: "50%",
                }}
              ></div>
              <div>Name</div>
              <div>Designation</div>
              <div style={{ padding: "15px 0 0px 0", color: des }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ipsum cursus interdum commodo, senectus dignissim.
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function BlankBackgroundSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      slidesPerView={2}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        scale: 0.5,
        modifier: 1,
      }}
      className="mySwiper"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
    >
      {[1, 2, 4, 4, 5, 6, 7].map((_) => {
        return (
          <SwiperSlide
            style={{
              background: "#D9D9D9",
              height: "300px",
              width: "900px",
              // border: border || "",
            }}
          ></SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export function CelebrateWithUsSlider() {
  return (
    <Swiper
      effect={"coverflow"}
      slidesPerView={4}
      spaceBetween={50}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        modifier: 1,
        scale: 0.5,
      }}
      className="mySwiper"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      loopFillGroupWithBlank={true}
      speed={2500}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {studio2Images.map(({ img, content, width }) => {
        return (
          <SwiperSlide
            style={{
              height: "300px",
              width: `${width}`,
              background: `url(${img})`,
              backgroundPosition: "center",
              borderRadius: "40px",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div>{content}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
