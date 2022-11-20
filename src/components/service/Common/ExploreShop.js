import React from "react";
import styled from "styled-components";
import Photo from "../../../assets/images/service/pets/photo.svg";
import PhotoBack from "../../../assets/images/service/pets/photo-back.svg";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import { useState } from "react";

const ExploreShopWrapper = styled.div`
  background: #a75b41;
  margin-top: 80px;
  height: 600px;
  position: relative;
  .back {
    position: absolute;
    height: 700px;
    width: 100%;
    z-index: 1;
  }
  .explore-shop {
    text-align: center;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    color: white;
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
  .card-label {
    color: white;
    border: 1px solid white;
    display: flex;
    height: 100px;
    width: 200px;
    justify-content: space-between;
    img {
      width: 100px;
      object-fit: cover;
    }
  }
  .label-name {
    padding-top: 10px;
    padding-left: 10px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    padding: 70px;
    justify-content: center;
    z-index: 10;
  }
  @media (max-width: 1300px) {
    .cards {
      padding: 50px;
      gap: 50px;
    }
  }
  @media (max-width: 1050px) {
    height: 650px;
  }
  @media (max-width: 800px) {
    height: 450px;
    .back {
      height: 500px;
    }
    .cards {
      display: none;
    }
    .card-label {
      font-size: 18px;
      img {
        width: 80px;
      }
    }
  }
  @media (max-width: 500px) {
    height: 400px;
    .back {
      height: 450px;
    }
    .card-label {
      font-size: 16px;
    }
  }
`;

const ExploreShop = () => {
  const isResponsive = useMediaQuery({ query: "(max-width: 800px)" });
  const [isInView, setIsInView] = useState(false);

  return (
    <ExploreShopWrapper>
      <img src={PhotoBack} alt="photo" className="back" />
      <div className="explore-shop">
        <AnimatedTextWord text="EXPLORE SHOP" />
      </div>

      {isResponsive ? (
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            550: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          className="mySwiper"
          style={{ height: "300px", padding: "0 0 0 40px" }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={2500}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => {
            return (
              <SwiperSlide style={{ background: "transparent" }}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <div className="card-label">
                    <div className="label-name">FOOD</div>
                    <img src={Photo} alt="photo" loading="lazy" />
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div className="cards">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => {
            return (
              <div className="card-label">
                <div className="label-name">FOOD</div>
                <img src={Photo} alt="photo" loading="lazy" />
              </div>
            );
          })}
        </div>
      )}
    </ExploreShopWrapper>
  );
};

export default ExploreShop;
