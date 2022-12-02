import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import PImg from "../../assets/images/studio-material/product-img.svg";
import { motion } from "framer-motion";

const SeasonMobileWrapper = styled.div`
  padding: 50px 0;
  .season_section {
    .season_head {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      h3 {
        font-family: "Coral Blush";
        font-style: normal;
        font-weight: 400;
        font-size: 57px;
        line-height: 68px;
        color: #000000;
      }
    }
    .season_body {
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
  }
`;

export default function SeasonMobile() {
  return (
    <SeasonMobileWrapper>
      <div className="season_section">
        <div className="season_head">
          <h3>
            <AnimatedTextWord text="SEASON’S PICKS" />
          </h3>
        </div>
        <div className="season_body">
          <Swiper
            breakpoints={{
              260: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              550: {
                slidesPerView: 3.5,
                spaceBetween: 15,
              },
            }}
            className="mySwiper"
            style={{ height: "100%" }}
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
                <SwiperSlide style={{ background: "inherit" }}>
                  <div className="slider-box">
                    <motion.div style={{ overflow: "hidden" }}>
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={PImg}
                        alt="PImg"
                        loading="lazy"
                      />
                      <h5>Furniture</h5>
                    </motion.div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            breakpoints={{
              260: {
                slidesPerView: 2.5,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              550: {
                slidesPerView: 3.5,
                spaceBetween: 15,
              },
            }}
            className="mySwiper"
            style={{ height: "100%" }}
            autoplay={{
              delay: 1000,
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
                <SwiperSlide style={{ background: "inherit" }}>
                  <div className="slider-box">
                    <motion.div style={{ overflow: "hidden" }}>
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={PImg}
                        alt="PImg"
                        loading="lazy"
                      />
                      <h5>Furniture</h5>
                    </motion.div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </SeasonMobileWrapper>
  );
}
