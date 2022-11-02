import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import WatchMore from "../../assets/images/studio-product/watchmore.svg";
import { motion } from "framer-motion";

const WatchMoreSliderWrapper = styled.div`
  padding: 0px 50px;
  .head {
    padding: 50px 0;
  }
`;

export default function WatchMoreSlider() {
  const [isInView, setIsInView] = useState(false);

  return (
    <WatchMoreSliderWrapper>
      <div className="head">
        <img src={WatchMore} alt="watch-head" loading="lazy" />
      </div>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "20vh" }}
        animate={
          isInView && {
            y: 0,
            transition: {
              duration: 0.3,
            },
          }
        }
      >
        <Swiper
          slidesPerView={4.5}
          spaceBetween={30}
          className="mySwiper"
          style={{ height: "150px" }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={2500}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {sliderImage.map((image) => {
            return (
              <SwiperSlide style={{ overflow: "hidden" }}>
                <motion.img
                  src={image}
                  loading="lazy"
                  alt="image"
                  height="100px"
                  width="100px"
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </WatchMoreSliderWrapper>
  );
}
