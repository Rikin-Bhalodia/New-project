import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export function ReviewSlider({ color, background, des, border }) {
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
                fontSize: "20px",
                padding: "0 150px",
              }}
            >
              <div
                style={{
                  height: "100px",
                  width: "100px",
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
