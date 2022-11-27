import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import PImg from "../../assets/images/studio-material/product-img.svg";
import StudioProduct from "../../assets/images/studio-product/similar-product.svg";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const ProductImgSliderWrapper = styled.div`
  padding: 0px 50px;
  .head {
    padding: 50px 0;
  }

  .slider-box {
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 220px;
      height: 220px;
    }
    .details {
      text-align: left;
      width: 40%;
      h4 {
        font-weight: 400;
        font-size: 22px;
        line-height: 22px;
        color: #665e2f;
      }
      p {
        font-weight: 700;
        font-size: 13px;
        line-height: 15px;
        color: #a65a40;
        padding: 15px 0 50px;
      }
    }
  }
  @media (max-width: 1000px) {
    padding: 0 50px;
    .slider-box {
      img {
        width: 180px;
        height: 180px;
      }
      .details {
        h4 {
          font-size: 18px;
        }
        p {
          font-size: 12px;
          padding: 15px 0 20px;
        }
      }
    }
    .watch-more {
      width: 400px;
    }
  }
  @media (max-width: 550px) {
    .slider-box {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }
  @media (max-width: 800px) {
    .watch-more {
      width: 300px;
    }
  }
  @media (max-width: 670px) {
    padding: 0 20px 50px;
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

export default function ProductImgSlider({ image }) {
  const [isInView, setIsInView] = useState(false);
  const location = useLocation();

  return (
    <ProductImgSliderWrapper>
      <div className="head">
        <img
          src={image || StudioProduct}
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
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1075: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 4,
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
          {sliderImage.map((image) => {
            return (
              <SwiperSlide style={{ background: "inherit" }}>
                <div className="slider-box">
                  <motion.div
                    style={{ overflow: "hidden", borderRadius: "50%" }}
                  >
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
                  </motion.div>
                  {location.pathname !== "/product-selection" && (
                    <div className="details">
                      <h4>Product 1</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <h4>Rs. 1890</h4>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </ProductImgSliderWrapper>
  );
}
