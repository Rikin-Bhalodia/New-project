import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FirstImage from "./assets/images/studio/fifteensecslider/first-image.svg";
import { Autoplay, Pagination, Navigation } from "swiper";

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
      speed={2000}
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
