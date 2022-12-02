import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import AnimatedTextWord from "../../../commonComponents/Animation/FlipAnimation";
import { EventNearAndTopThings, Feelings } from "../../../utils";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";

const EventNearWrapper = styled.div`
  .event-near {
    display: flex;
    flex-wrap: wrap;
    gap: 150px;
    justify-content: center;
  }
  .single-event {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-family: "Mulish";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
  .inspire-head {
    padding: 100px 0 50px 100px;
    font-family: "Coral Blush";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    text-transform: uppercase;
  }
  .background {
    width: 200px;
    height: 200px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .feeling {
    font-family: "Mulish";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    padding-top: 15px;
  }
  .feelings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 150px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  @media screen and (max-width: 700px) {
    .inspire-head {
      padding: 30px;
      font-size: 24px;
    }
    .single-event {
      font-size: 20px;
    }
    .concert-img {
      width: 150px;
      height: 150px;
    }
    .background {
      width: 180px;
      height: 180px;
    }
  }
  @media screen and (max-width: 450px) {
    .inspire-head {
      padding: 30px;
      font-size: 20px;
    }
    .background {
      width: 170px;
      height: 170px;
    }
    /* .feelings, .event-near {
      gap: 30px;
    }
    .feeling {
      font-size: 18px;
    }
    .background {
      width: 140px;
      height: 140px;
    }
    .concert-img {
      width: 150px;
      height: 150px;
    } */
  }
`;

const EventNear = ({ isRequiredTopThings }) => {
  const [isInView, setIsInView] = useState(false);
  const isResponsive = useMediaQuery({ query: "(max-width: 850px)" });

  return (
    <EventNearWrapper>
      {isRequiredTopThings && (
        <>
          <div className="inspire-head">
            <AnimatedTextWord text="top things to do" />
          </div>
          <motion.div
            whileInView={() => {
              setIsInView(true);
            }}
            initial={{ y: "40vh" }}
            animate={
              isInView && {
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }
            }
            className="feelings"
          >
            <Swiper
              breakpoints={{
                260: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                385: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
                1075: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
              className="mySwiper"
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              speed={2500}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {(isResponsive ? Feelings : Feelings.slice(0, 4)).map(
                (feeling) => {
                  return (
                    <SwiperSlide>
                      <div className="wrapper">
                        <div className="background"></div>
                        <div className="feeling">{feeling}</div>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </motion.div>
        </>
      )}
      <div className="inspire-head">
        <AnimatedTextWord text="Events near the date" />
      </div>
      <motion.div
        whileInView={() => {
          setIsInView(true);
        }}
        initial={{ y: "40vh" }}
        animate={
          isInView && {
            y: 0,
            transition: {
              duration: 0.5,
            },
          }
        }
        className="event-near"
      >
        <Swiper
          breakpoints={{
            260: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            385: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
            1075: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
          className="mySwiper"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          speed={2500}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {EventNearAndTopThings.map(({ img, name }) => {
            return (
              <SwiperSlide>
                <div className="single-event">
                  <motion.img
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    src={img}
                    alt="image123"
                    className="concert-img"
                    style={{ height: "90%", width: "70%" }}
                  />
                  <div>{name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </EventNearWrapper>
  );
};

export default EventNear;
