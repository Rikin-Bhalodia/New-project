import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import Releted from "../../assets/images/studio-product/releted-product.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const ReletedServicesWrapper = styled.div`
  padding: 0px 50px 100px;
  .head {
    padding: 50px 0;
  }
  .img-box {
    position: relative;
    height: 200px;
    width: 100%;
    background: #fefaf1;
    border-radius: 20px;
    object-fit: cover;
    overflow: hidden;
    img {
      border-radius: 20px;
      width: 100%;
      object-fit: fill;
    }
  }

  .para {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    top: 157px;
    padding: 10px 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    text-transform: uppercase;
    color: #fcf9f2;
    border-radius: 0 0 20px 20px;
  }
  p {
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: #a79586;
  }
  @media (max-width: 1000px) {
    .related-service {
      width: 550px;
    }
  }
  @media (max-width: 800px) {
    padding: 0px 50px 0px;

    .related-service {
      width: 450px;
    }
    .para {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 670px) {
    .related-service {
      width: 350px;
    }
  }
  @media (max-width: 500px) {
    .related-service {
      width: 310px;
    }
    .para {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

export default function ReletedServices() {
  const [isInView, setIsInView] = useState(false);

  return (
    <ReletedServicesWrapper>
      <div className="head">
        <img
          src={Releted}
          alt="releted-head"
          loading="lazy"
          className="related-service"
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
          style={{ height: "" }}
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
              <SwiperSlide style={{ background: "#fefaf1" }}>
                <div className="slider-box">
                  <div className="img-box">
                    <motion.img
                      src={image}
                      alt="image"
                      loading="lazy"
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                    <div className="para">hair spa</div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Gravida tortor eu, et aliqu
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </ReletedServicesWrapper>
  );
}
