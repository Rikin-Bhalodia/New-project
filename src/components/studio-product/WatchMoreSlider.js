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
  @media (max-width: 1000px) {
    .watch-more {
      width: 400px;
    }
  }
  @media (max-width: 800px) {
    .watch-more {
      width: 300px;
    }
  }
  @media (max-width: 670px) {
    padding: 0 20px;
    .watch-more {
      width: 250px;
    }
  }
  @media (max-width: 500px) {
    .watch-more {
      width: 210px;
    }
  }
`;

export default function WatchMoreSlider({ slideImage }) {
  const [isInView, setIsInView] = useState(false);

  return (
    <WatchMoreSliderWrapper>
      <div className="head">
        <img
          src={slideImage || WatchMore}
          alt="watch-head"
          loading="lazy"
          className="watch-more"
        />
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
          breakpoints={{
            260: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1075: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 4.5,
              spaceBetween: 30,
            },
          }}
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
