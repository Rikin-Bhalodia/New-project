import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { sliderImage } from "../../utils";
import PImg from "../../assets/images/studio-material/product-img.svg";

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
`;

export default function ProductImgSlider() {
  return (
    <ProductImgSliderWrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
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
                <img src={PImg} alt="" />
                <div className="details">
                  <h4>Product 1</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h4>Rs. 1890</h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProductImgSliderWrapper>
  );
}
