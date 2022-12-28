import React from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../commonComponents/Animation/FlipAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import season1 from "../../assets/images/homepage/season1.png";
import season2 from "../../assets/images/homepage/season2.png";
import season3 from "../../assets/images/homepage/season3.png";
import season4 from "../../assets/images/homepage/season4.png";
import season5 from "../../assets/images/homepage/season5.png";
import season6 from "../../assets/images/homepage/season6.png";
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
      .slider-box {
        h5 {
          font-size: 20px;
        }
      }
    }
    .image_parent {
      overflow: hidden;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      margin-bottom: 10px;
      width: 220px;
      height: 220px;
      img {
        padding: 40px;
      }
    }
  }
  @media (max-width: 650px) {
    .season_section {
      .season_head {
        h3 {
          font-size: 45px;
          line-height: 55px;
        }
      }
      .season_body {
        .slider-box {
          h5 {
            font-size: 18px;
          }
        }
      }
      .image_parent {
        width: 170px;
        height: 170px;
        img {
          padding: 30px;
        }
      }
    }
  }
  @media (max-width: 500px) {
    .season_section {
      .season_head {
        h3 {
          font-size: 35px;
          line-height: 45px;
        }
      }
      .season_body {
        .slider-box {
          h5 {
            font-size: 15px;
          }
        }
      }
      .image_parent {
        width: 130px;
        height: 130px;
        img {
          padding: 20px;
        }
      }
    }
  }
`;
const image = [
  {
    src: season1,
  },
  {
    src: season2,
  },
  {
    src: season3,
  },
  {
    src: season4,
  },
  {
    src: season5,
  },
  {
    src: season6,
  },
];
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
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              550: {
                slidesPerView: 3,
                spaceBetween: 30,
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
            {image.map((img) => {
              return (
                <SwiperSlide style={{ background: "inherit" }}>
                  <div className="slider-box">
                    <motion.div className="image_parent">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={img.src}
                        alt="PImg"
                        loading="lazy"
                      />
                    </motion.div>
                    <h5>Furniture</h5>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <Swiper
            breakpoints={{
              260: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              550: {
                slidesPerView: 3,
                spaceBetween: 30,
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
            {image.map((img) => {
              return (
                <SwiperSlide style={{ background: "inherit" }}>
                  <div className="slider-box">
                    <motion.div className="image_parent">
                      <motion.img
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={img.src}
                        alt="PImg"
                        loading="lazy"
                      />
                    </motion.div>
                    <h5>Furniture</h5>
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
